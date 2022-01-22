import * as A from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'


export default function BoardWriteUI(props: IBoardWriteUIProps) {
  console.log(props.data)
  return(
    <>
      <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
      작성자: <A.MyInput type="text" onChange={props.onChangeMyWriter} defaultValue={props. isEdit ? props.data?.fetchBoard?.writer : ""} /><br />
      제목: <A.MyInput type="text" onChange={props.onChangeMyTitle} defaultValue={props. isEdit ? props.data?.fetchBoard?.title : ""} /><br />
      내용: <A.MyInput type="text" onChange={props.onChangeMyContents} defaultValue={props. isEdit ? props.data?.fetchBoard?.contents : ""} /><br />
      <A.MyButton
        onClick={props.isEdit ? props.xxx : props.zzz}
        ggg={props.isActive}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </A.MyButton>

      {/* 
      {props.isEdit ? (
        <A.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</A.MyButton>
      ) : (
        <A.MyButton onClick={props.zzz} ggg={props.isActive}>등록하기</A.MyButton>
      )}
      {/* 삼항 연산자 사용은 2-3줄 정도가 적당함 

      {props.isEdit && <A.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</A.MyButton>}
      {!props.isEdit && <A.MyButton onClick={props.zzz} ggg={props.isActive}>등록하기</A.MyButton>}
      {/* 4줄 이상은 위의 방법이 더 좋음.. 
      */}

      <div>{props.aaa}</div>
    </>
    
  )
}