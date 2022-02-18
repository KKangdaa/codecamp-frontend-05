import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import ProductDetailUI from './ProductDetail.presenter'
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from './ProductDetail.queries'

export default function ProductDetail() {
  const router = useRouter()

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productidpage },
  })
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productidpage },
      })
      alert('성공')
      router.push('/product')
    } catch (error) {
      console.log(error.message)
    }
  }

  const onClickMoveToEdit = () => {
    router.push(`/product/${router.query.productidpage}/edit`)
  }
  const onClickMoveToList = () => {
    router.push('/product')
  }

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
    />
  )
}
