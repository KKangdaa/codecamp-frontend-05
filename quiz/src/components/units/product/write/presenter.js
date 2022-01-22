export default function ProductUI(props) {

  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      판매자: <input type="text" onChange={props.onChangeSeller} /><br />
      상품명: <input type="text" onChange={props.onChangeName} /><br />
      내용: <input type="text" onChange={props.onChangeDetail} /><br />
      가격: <input type="text" onChange={props.onChangePrice} /><br />
      <button onClick={props.isEdit ? props.updateButton : props.createButton }>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  )
}