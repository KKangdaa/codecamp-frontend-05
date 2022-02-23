import * as A from './ProductList.styled'
import { IProductListUIProps } from './ProductList.types'
import InfiniteScroll from 'react-infinite-scroller'
import { getPrice } from '../../../../commons/libraries/utils'

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <A.ListWrapper>
      <button onClick={props.onClickNew}>등록</button>
      <InfiniteScroll
        pageStart={0}
        hasMore={true}
        // useWindow={false}
        loadMore={props.onLoadMore}
        loader={
          <div className="loader" key={0} /* onClick={props.onLoadMore} */>
            더보기
          </div>
        }
      >
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
                <A.ProductPrice>{getPrice(el.price)}</A.ProductPrice>
              </div>
            </A.ListItems>
          ))}
        </A.List>
      </InfiniteScroll>
    </A.ListWrapper>
  )
}
