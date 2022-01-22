import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

/*
_app.js
uri: 'http://example.codebootcamp.co.kr/graphql'
*/

const CREATE_PRODUCT = gql `
  mutation createProduct ($seller: String, $createProductInput: CreateProductInput!) {
    createProduct (seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function GrapgqlMutationProduct() {
  
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const [createSeller, setCreateSeller] = useState("")
  const [createName, setCreateName] = useState("")
  const [createDetail, setCreateDetail] = useState("")
  const [createPrice, setCreatePrice] = useState("")

  const onClick = async () => {
    await createProduct({
      variables: {
        seller: createSeller,
        createProductInput: {
          name: createName,
          detail: createDetail,
          price: Number(createPrice)
        }
      }
    })
  }

  const onChangeCreateSeller = (event) => {
    setCreateSeller(event.target.value)
  }
  const onChangeCreateName = (event) => {
    setCreateName(event.target.value)
  }
  const onChangeCreateDetail = (event) => {
    setCreateDetail(event.target.value)
  }
  const onChangeCreatePrice = (event) => {
    setCreatePrice(event.target.value)
  }


  return (
    <>
      판매자 : <input type="text" onChange={onChangeCreateSeller} /><br />
      상품명 : <input type="text" onChange={onChangeCreateName} /><br />
      상품소개 : <input type="text" onChange={onChangeCreateDetail} /><br />
      가격 : <input type="text" onChange={onChangeCreatePrice} /><br />
      <button onClick={onClick}>상품등록</button>
    </>
  )
}