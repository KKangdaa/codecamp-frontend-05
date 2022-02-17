import { useMutation } from '@apollo/client'
import { CREATE_USED_ITEM } from './ProductWrite.queries'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ProductNewUI from './ProductWrite.presenter'
import { IData } from './ProductWrite.types'

const schema = yup.object().shape({
  name: yup.string().max(100).required('필수입력'),
  price: yup.number().min(1000).required('필수입력'),
  /* seller: yup
    .string()
    .max(5, '작성자는 5글자 이내 문자열입니다.')
    .required('필수입력'), */
  contents: yup.string().max(1000).required('필수입력'),
  remarks: yup.string().max(1000).required('필수입력'),
})

export default function ProductNew() {
  const [createUseditem] = useMutation(CREATE_USED_ITEM)

  /* const [name, setName] = useState('')
  const [contents, setContents] = useState('')
  const [price, setPrice] = useState('') */
  // const [seller, setSeller] = useState('')

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  })

  const onClickSubmit = async (data: IData) => {
    console.log(data)
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            remarks: data.remarks,
            price: Number(data.price),
          },
        },
      })
      console.log(result.data?.createUseditem._id)
      alert('성공')
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <ProductNewUI
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      formState={formState}
      register={register}
    />
  )
}
