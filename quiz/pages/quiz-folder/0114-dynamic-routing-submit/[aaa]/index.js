import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client"

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

  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.aaa
    }
  })

  console.log(router.query)

  return (
    <div>
      <div>판매자: {data? data?.fetchProduct.seller : 'loading' }</div>
      <div>상품명: {data? data?.fetchProduct.name : 'loading'}</div>
      <div>상품설명: {data? data?.fetchProduct.detail : 'loading'}</div>
      <div>가격: {data? data?.fetchProduct.price : 'loading'}</div>
    </div>
  )

}
//  조건 ? (참) : (거짓)