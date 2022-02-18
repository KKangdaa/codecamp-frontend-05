import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { DELETE_USED_ITEM, FETCH_USED_ITEMS } from './ProductList.queries'

export default function ProductList() {
  const router = useRouter()

  const { data } = useQuery(FETCH_USED_ITEMS)
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM)

  const onClickMoveToEdit = (productId: string) => () => {
    router.push(`/product/${productId}/edit`)
  }

  const onClickDelete = (useditemId) => async () => {
    await deleteUseditem({
      variables: { useditemId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditems: (prev, { readField }) => {
              const filterPrev = prev.filter(
                (el) => readField('_id', el) !== data.deleteUseditem
              )
              return [...filterPrev]
            },
          },
        })
      },
    })
  }

  const onClickMoveToDetail = (id: string) => () => {
    router.push(`/product/${id}`)
  }

  const onClickNew = () => {
    router.push('/product/new')
  }

  return (
    <>
      {data?.fetchUseditems.map((el) => (
        <div
          key={el._id}
          onClick={onClickMoveToDetail(el._id)}
          style={{ cursor: 'pointer' }}
        >
          <span>{el.name}</span>
          <span>{el.remarks}</span>
          <span>{el.contents}</span>
          <span>{el.price}</span>
          <button onClick={onClickMoveToEdit(el._id)}>수정</button>
          <button onClick={onClickDelete(el._id)}>삭제</button>
        </div>
      ))}
      <button onClick={onClickNew}>등록</button>
    </>
  )
}
