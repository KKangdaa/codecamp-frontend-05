import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import ProductNew from '../../../../src/components/units/product/write/ProductWrite.container'

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`

export default function ProductEditPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productidpage },
  })

  return <ProductNew isEdit={true} data={data} />
}
