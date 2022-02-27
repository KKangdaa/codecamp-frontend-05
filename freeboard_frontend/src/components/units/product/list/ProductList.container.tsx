import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { getMyDate2 } from '../../../../commons/libraries/utils'
import ProductListUI from './ProductList.presenter'
import { FETCH_USED_ITEMS } from './ProductList.queries'

export default function ProductList() {
  const { setItem } = useContext(GlobalContext)

  const router = useRouter()

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  })

  const todayDate = getMyDate2(new Date())

  const onClickMoveToDetail = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || '[]')
    const temp = baskets.filter((filterEl) => filterEl._id !== el._id)

    const { __typename, ...plus } = el
    temp.unshift(plus)
    localStorage.setItem(todayDate, JSON.stringify(temp))
    setItem(temp)
    router.push(`/product/${el._id}`)
  }

  const onClickNew = () => {
    router.push('/product/new')
  }

  const onLoadMore = () => {
    if (!data) return
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        }
      },
    })
  }

  return (
    <ProductListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickNew={onClickNew}
      onLoadMore={onLoadMore}
    />
  )
}
