import { IProductDetailUIProps } from './ProductDetail.types'

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <>
      <div>{props.data?.fetchUseditem?.name}</div>
      <div>{props.data?.fetchUseditem?.remarks}</div>
      <div>{props.data?.fetchUseditem?.contents}</div>
      <div>{props.data?.fetchUseditem?.price}</div>
      <button onClick={props.onClickDelete}>삭제</button>
      <button onClick={props.onClickMoveToEdit}>수정</button>
    </>
  )
}
