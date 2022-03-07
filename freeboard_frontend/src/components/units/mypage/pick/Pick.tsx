import { useMutation, useQuery } from '@apollo/client'
import * as A from './Pick.styled'
import { FETCH_USED_ITEM_I_PICK, TOGGLE_USED_ITEM_PICK } from './Pick.queries'
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from 'next/router'
import { FaGratipay } from 'react-icons/fa'

export default function Pick() {
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEM_I_PICK, {
    variables: { search: '', page: 1 },
  })
  const onLoadMore = () => {
    if (!data) return
    fetchMore({
      variables: {
        search: '',
        page: Math.ceil(data?.fetchUseditemsIPicked.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsIPicked)
          return { fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked] }
        return {
          fetchUseditemsIPicked: [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ],
        }
      },
    })
  }

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK)

  const onClickPick = async (event) => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: event.target.id },
      })
      refetch()
    } catch (error) {
      console.log(error.message)
    }
  }

  const router = useRouter()

  const onClickToDetail = (e) => {
    router.push(`/product/${e.target.id}`)
  }

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemsIPicked.map((el) => (
          <A.PickContainer key={el._id}>
            <div id={el._id} onClick={onClickToDetail}>
              <A.PickImg>
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={(e) => {
                    e.currentTarget.src = '/images/product-icon.png'
                  }}
                />
              </A.PickImg>
              <div>
                <div>{el.name}</div>
                <div>{el.remarks}</div>
                <div>{el.price}</div>

                <A.PickCount>
                  <FaGratipay style={{ color: 'red', margin: '1px 5px' }} />
                  {el.pickedCount}
                </A.PickCount>
                {el.soldAt ? <div>품절</div> : ''}
              </div>
            </div>
            <button id={el._id} onClick={onClickPick}>
              삭제
            </button>
          </A.PickContainer>
        ))}
      </InfiniteScroll>
    </>
  )
}
