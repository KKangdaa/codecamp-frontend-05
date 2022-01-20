import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {

      _id
      number
      message

    }

  }
`


export default function DynamicRoutingProduct() {

  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const [createSeller, setCreateSeller] = useState("")
  const [createName, setCreateName] = useState("")
  const [createDetail, setCreateDetail] = useState("")
  const [createPrice, setCreatePrice] = useState("")

  
  const onClickSubmit = async () => {

    try {
      const result = await createProduct({
        variables: {
          seller: createSeller,
          createProductInput: {
            name: createName,
            detail: createDetail,
            price: Number(createPrice)
          }
        }
      })
      router.push(`/05-08-dynamic-routed-product/ ${result.data.createProduct._id}`)

    } catch(error){
      console.log(error.message)
    } 
    /*
    try : {} 안에서 실패하더라도 마지막에 남은 것은 실행하지 않고 catch 에러 안에서 확인 가능함
    */
    

    /* 
    예제)
    const apple = 3
    const banana = 10
    console.log("철수는 사과를 " + apple + "개 가지고 있고, 바나나는" + banana + "개 가지고 있어요")
    console.log(`철수는 사과를 ${apple}개 가지고 있고, 바나나는 ${banana}개 가지고 있어요`) // 템플릿 리터럴
    */


    // console.log(result.data.createProduct._id)
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
    <div>
      판매자: <input type="text" onChange={onChangeCreateSeller} /><br />
      상품명: <input type="text" onChange={onChangeCreateName} /><br />
      상품내용: <input type="text" onChange={onChangeCreateDetail} /><br />
      상품가격: <input type="text" onChange={onChangeCreatePrice} /><br />
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </div>
  )

}