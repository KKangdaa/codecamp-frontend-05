
export default function DynamicRoutedUI(props) {

  return(
    <div>
      <div>{props.router.query.aaa}번 페이지 이동완료!!!</div>
      <div>작성자: {props.data?.fetchBoard?.writer}</div>
      <div>제목: {props.data?.fetchBoard?.title}</div>
      <div>내용: {props.data?.fetchBoard?.contents}</div>
    </div>

  )
}