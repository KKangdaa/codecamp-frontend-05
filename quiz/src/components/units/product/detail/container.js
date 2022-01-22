import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import ProductUI from "./presenter"
import { FETCH_PRODUCT } from "./queries"

export default function ProductPage() {

  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.idpage
    }
  })

  const onClickEditPage = () => {
    router.push(`/product/${router.query.idpage}/edit`)
  }

  return(
    <ProductUI
      data={data}
      onClickEditPage={onClickEditPage}
    />
  )
}