// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'


/*
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {

    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }

  }
`
 */

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {

      _id
      number
      message

    }

  }
`


export default function GraphqlMutationProduct() {
  /* 
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")
 */


  const [createProduct] = useMutation(CREATE_PRODUCT)


  const [createSeller, setCreateSeller] = useState("")
  const [createName, setCreateName] = useState("")
  const [createDetail, setCreateDetail] = useState("")
  const [createPrice, setCreatePrice] = useState("")

  
  const onClickSubmit = async () => {

    // const result = 
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

/* 
  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value)
  }
  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value)
  }
  const onChangeMyContents = (event) => {
    setMyContents(event.target.value)
  }
 */
  return (
    <> {/* Fragment */}
      ํ๋งค์: <input type="text" onChange={onChangeCreateSeller} /><br />
      ์ํ๋ช: <input type="text" onChange={onChangeCreateName} /><br />
      ์ํ๋ด์ฉ: <input type="text" onChange={onChangeCreateDetail} /><br />
      ์ํ๊ฐ๊ฒฉ: <input type="text" onChange={onChangeCreatePrice} /><br />
      <input type="number" />
      <button onClick={onClickSubmit}>์ํ ๋ฑ๋กํ๊ธฐ</button>
    </>
  )

}