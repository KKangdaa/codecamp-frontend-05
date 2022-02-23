import ProductNewUI from './ProductWrite.presenter'
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './ProductWrite.queries'
import { useMutation } from '@apollo/client'
import { IData, IEditProps } from './ProductWrite.types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const schema = yup.object().shape({
  name: yup.string().max(100).required('필수입력'),
  price: yup.number().min(1000).required('필수입력'),
  contents: yup.string().max(1000).required('필수입력'),
  // remarks: yup.string().max(1000).required('필수입력'),
})

export default function ProductNew(props: IEditProps) {
  const router = useRouter()

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)

  const { register, handleSubmit, formState, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    setValue('name', props.data?.fetchUseditem.name)
    setValue('remarks', props.data?.fetchUseditem.remarks)
    setValue('contents', props.data?.fetchUseditem.contents)
    setValue('price', props.data?.fetchUseditem.price)
    // setValue('images', props.data?.fetchUseditem.images)
  }, [props.data])

  const onClickSubmit = async (data: IData) => {
    const { name, contents, remarks, price } = data
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            contents,
            remarks,
            price: Number(price),
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
    />
  )
}
