import * as AAA from './BoardWrite.styles'


export default function BoardWriteUI(props) {

  return(
    <>
      <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
      작성자: <AAA.MyInput type="text" onChange={props.ddd} /><br />
      제목: <AAA.MyInput type="text" onChange={props.eee} /><br />
      내용: <AAA.MyInput type="text" onChange={props.fff} /><br />
      <AAA.MyButton
        onClick={props.isEdit ? props.xxx : props.zzz}
        ggg={props.isActive}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </AAA.MyButton>

      {/* 
      {props.isEdit ? (
        <AAA.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</AAA.MyButton>
      ) : (
        <AAA.MyButton onClick={props.zzz} ggg={props.isActive}>등록하기</AAA.MyButton>
      )}
      {/* 삼항 연산자 사용은 2-3줄 정도가 적당함 

      {props.isEdit && <AAA.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</AAA.MyButton>}
      {!props.isEdit && <AAA.MyButton onClick={props.zzz} ggg={props.isActive}>등록하기</AAA.MyButton>}
      {/* 4줄 이상은 위의 방법이 더 좋음.. 
      */}

      <div>{props.aaa}</div>
    </>
    
  )
}