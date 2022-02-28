import ProductNewUI from './ProductWrite.presenter'
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './ProductWrite.queries'
import { useMutation } from '@apollo/client'
import { IData, IEditProps } from './ProductWrite.types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { convertToRaw, EditorState, getCurrentContent } from 'draft-js'
import domPurify from 'dompurify'

const schema = yup.object().shape({
  name: yup.string().max(100).required('필수입력'),
  price: yup.number().min(1).required('필수입력'),
  // contents: yup.string().max(1000).required('필수입력'),
  // remarks: yup.string().max(1000).required('필수입력'),
})

export interface IFormValues {
  name?: string
  remarks?: string
  price?: number
  contents?: string
  title?: string
  images?: string[]
}

export default function ProductNew(props: IEditProps) {
  const router = useRouter()

  const [images, setImages] = useState(['', '', ''])

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const { register, handleSubmit, formState, setValue } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...images]
    newFileUrls[index] = fileUrl
    setImages(newFileUrls)
  }

  useEffect(() => {
    if (props.isEdit) {
      setImages(props.data?.fetchUseditems?.images)
      setValue('name', props.data?.fetchUseditem.name)

      setValue('remarks', props.data?.fetchUseditem.remarks)
      // setValue('contents', props.data?.fetchUseditem.contents)
      setValue('price', props.data?.fetchUseditem.price)
    }
  }, [props.data])

  const onClickSubmit = async (data: IData) => {
    const convertContent =
      editorState instanceof EditorState
        ? convertToRaw(editorState.getCurrentContent())
        : editorState
    // const { name, contents, remarks, price } = data
    console.log('test :', typeof convertContent)
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: JSON.stringify(convertContent),
            remarks: data.remarks,
            price: Number(data.price),
            images: data.images,
          },
        },
      })

      // console.log(result.data?.createUseditem._id)
      router.push(`/product/${result.data?.createUseditem._id}`)
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickEditSubmit = async (data: IData) => {
    const { name, contents, remarks, price } = data
    try {
      await updateUseditem({
        variables: {
          useditemId: props.data?.fetchUseditem._id,
          updateUseditemInput: {
            name,
            remarks,
            contents,
            price: Number(price),
          },
        },
      })
      router.push(`/product/${router.query.productid}`)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ProductNewUI
      data={props.data}
      isEdit={props.isEdit}
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickEditSubmit={onClickEditSubmit}
      images={images}
      onChangeFileUrls={onChangeFileUrls}
      // onChangeContents={onChangeContents}
      // contents={contents}
      // setContents={setContents}
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
    />
  )
}
