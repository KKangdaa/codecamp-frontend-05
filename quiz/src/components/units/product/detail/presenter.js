export default function ProductUI(props) {

  return(
    <>
      판매자: <div>{props.data?.fetchProduct?.seller}</div>
      상품명: <div>{props.data?.fetchProduct?.name}</div>
      내용: <div>{props.data?.fetchProduct?.detail}</div>
      가격: <div>{props.data?.fetchProduct?.price}</div>
      <button onClick={props.onClickEditPage}>수정</button>
    </>
  )
}