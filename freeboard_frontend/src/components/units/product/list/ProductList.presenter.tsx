import * as A from './ProductList.styles'
import { IProductListUIProps } from './ProductList.types'
import InfiniteScroll from 'react-infinite-scroller'
import { getMyDate, getPrice } from '../../../../commons/libraries/utils'

export default function ProductListUI(props: IProductListUIProps) {
  console.log(props.data?.fetchUseditems)

  return (
    <A.ListWrapper>
      {props.userInfo && <button onClick={props.onClickNew}>등록</button>}
      <InfiniteScroll pageStart={0} hasMore={true} loadMore={props.onLoadMore}>
        <A.List>
          {props.data?.fetchUseditems.map((el) => (
            <A.ListItems
              key={el._id}
              onClick={props.onClickMoveToDetail(el)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={(e) => {
                    e.currentTarget.src = '/images/product-icon.png'
                  }}
                />
              </div>
              <div>
                <A.ProductName>{el.name}</A.ProductName>
                <A.ProductPrice>{getPrice(el.price)}원</A.ProductPrice>
                <small>{getMyDate(el.createdAt)}</small>
              </div>
            </A.ListItems>
          ))}
        </A.List>
      </InfiniteScroll>
    </A.ListWrapper>
  )
}
