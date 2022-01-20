
export default function DynamicRoutingUI(props) {

  return(
    
    <>
      {/* <button onClick={onClickMove}>페이지 이동하기</button> */}
      <button onClick={props.onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={props.onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={props.onClickMove3}>3번 게시글로 이동하기</button>
      <button onClick={props.onClickMove100}>100번 게시글로 이동하기</button>
    </>

  )
}