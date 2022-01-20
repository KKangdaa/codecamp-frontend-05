import * as AAA from './BoardWrite.styles'


export default function BoardWriteUI(props) {

  return(
    <>
      작성자: <AAA.MyInput type="text" onChange={props.ddd} /><br />
      제목: <AAA.MyInput type="text" onChange={props.eee} /><br />
      내용: <AAA.MyInput type="text" onChange={props.fff} /><br />
      <AAA.MyButton onClick={props.ccc} ggg={props.isActive}>GRAPHQL-API 요청하기!!</AAA.MyButton>
      <div>{props.bbb}</div>
    </>
    
  )
}