import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import ProductUI from "./presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './queries'

export default function ProductWrite(props) {

  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const createButton = async () => {
    const result = await createProduct({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price: Number(price)
        }
      }
    })
    router.push(`/product/${result.data.createProduct._id}`)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeDetail = (event) => {
    setDetail(event.target.value)
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }
  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const updateButton = async () => {
    const result = await updateProduct({
      variables: {
        seller,
        updateProductInput: {
          name,
          detail,
          price: Number(price)
        }
      }
    })
    router.push(`/product/${router.query.idpage}`)
  }


  return (
    <ProductUI
      isEdit={props.isEdit}

      createButton={createButton}
      updateButton={updateButton}

      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
    />
  )
}