import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const Button = styled.button`
  background: ${(props) => props.activeButton === true ? "red" : "none"};

`

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function DynamicRoutingProduct(){

  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const [activeButton, setActiveButton] = useState(false)

  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const Submit = async () => {

  try {
      const result = await createProduct ({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price)
          }
        }
      })
      
      router.push(`/1week-project/dynamic-routing-submit/${result.data.createProduct._id}`)
      console.log(result)

    } catch(error) {
      console.log(error.message)
    }
  }


  const onChangeSeller = (event) => {
    setSeller(event.target.value)
    if(event.target.value && name && detail && price) {
      setActiveButton(true)
    }
  }
  const onChangeName = (event) => {
    setName(event.target.value)
    if(seller && event.target.value && detail && price) {
      setActiveButton(true)
    }
  }
  const onChangeDetail = (event) => {
    setDetail(event.target.value)
    if(seller && name && event.target.value && price) {
      setActiveButton(true)
    }
  }
  const onChangePrice = (event) => {
    setPrice(event.target.value)
    if(seller && name && detail && event.target.value) {
      setActiveButton(true)
    }
  }

  return(
    <div>
      판매자: <input type="text" onChange={onChangeSeller} /> <br />
      상품명: <input type="text" onChange={onChangeName} /> <br />
      상품설명: <input type="text" onChange={onChangeDetail} /> <br />
      가격: <input type="text" onChange={onChangePrice} /> <br />
      <Button onClick={Submit} activeButton={activeButton}>상품 등록</Button>
    </div>
  )
}