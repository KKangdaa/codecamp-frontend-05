import { IProductDetailUIProps } from './ProductDetail.types'
import * as A from './ProductDetail.styled'
import ProductCommentWrite from '../../productcomment/write/ProductCommentWrite.container'
import ProductCommentList from '../../productcomment/list/ProductCommentList.container'

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <A.DetailWrapper>
      {console.log(props.data)}
      {console.log()}
      {props.data?.fetchUseditem?.images.map((el, index) => (
        <div key={el}>
          <img src={`https://storage.googleapis.com/${el}`} />
        </div>
      ))}
      <div>{props.data?.fetchUseditem?.name}</div>
      <div>{props.data?.fetchUseditem?.remarks}</div>
      <div>{props.data?.fetchUseditem?.contents}</div>
      <div>{props.data?.fetchUseditem?.price}</div>
      <button onClick={props.onClickDelete}>삭제</button>
      <button onClick={props.onClickMoveToEdit}>수정</button>
      <button onClick={props.onClickMoveToList}>목록</button>
      <ProductCommentWrite />
      <ProductCommentList />
    </A.DetailWrapper>
  )
}
