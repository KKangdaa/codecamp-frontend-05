import * as A from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWritePresenter(props: IBoardWriteUIProps) {
  return (
    <A.WriteWrapper>
      <A.ItemHeader>
        <A.HeaderWrap>
          <A.Title>작성자</A.Title>
          <A.TitleInput
            type="text"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard?.writer}
            readOnly={!!props.data?.fetchBoard?.writer}
          />
        </A.HeaderWrap>
        <A.HeaderWrap>
          <A.Title>비밀번호</A.Title>
          <A.TitleInput type="password" onChange={props.onChangePassword} />
        </A.HeaderWrap>
      </A.ItemHeader>
      <A.ItemContents>
        <A.Title>제목</A.Title>
        <A.TitleInput
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard?.title}
        />
        {console.log(props.data)}
      </A.ItemContents>
      <A.ItemContents>
        <A.Title>내용</A.Title>
        <A.ContentsBox
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard?.contents}
        ></A.ContentsBox>
      </A.ItemContents>
      <A.ItemImg>
        <A.Title>이미지</A.Title>
        <input
          type="file"
          onChange={props.onChangeImages}
          // ref={props.imageRef}
        />
        {props.images && (
          <img src={`https://storage.googleapis.com/${props.images}`} />
        )}
        {/* <img src="" />
          <img src="" /> */}
      </A.ItemImg>
      <A.CreateButton
        onClick={props.isEdit ? props.updateButton : props.createBoardButton}
      >
        작성
      </A.CreateButton>
    </A.WriteWrapper>
  );
}
