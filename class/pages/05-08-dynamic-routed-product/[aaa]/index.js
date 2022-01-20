import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`

export default function DynamicRoutedPage() {

  const router = useRouter()

  // data는 변경불가
  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.aaa
    }
  })

  console.log(router.query)

  return(
    <div>
      {/* <div>{router.query.aaa}번 페이지 이동완료!!!</div> */}
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>물품명: {data?.fetchProduct?.name}</div>
      <div>내용: {data?.fetchProduct?.detail}</div>
      <div>가격: {data?.fetchProduct?.price}</div>
      {/* 
      data && data === data? 
      ? = 결과값이 있으면 표시.
      */}
    </div>
  )
}