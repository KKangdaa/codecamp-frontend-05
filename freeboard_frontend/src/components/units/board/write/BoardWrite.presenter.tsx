import * as A from './BoardWrite.styled'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI (props:IBoardWriteUIProps) {
  // console.log(props.data)

  return (
    <A.Wrapper>
      <A.Main>
        <A.Title>{props.isEdit ? '게시글 수정' : '게시글 등록'}</A.Title>

        <A.MainTitleBox
          type='text'
          placeholder='제목'
          style={{ border: props.titleError }}
          onChange={props.titleText}
          defaultValue={props.data?.fetchBoard?.title}
        />
        <A.Line></A.Line>
        <A.MainTextBox
          placeholder='내용을 작성해주세요'
          style={{ border: props.contentsError }}
          onChange={props.contentsText}
          defaultValue={props.data?.fetchBoard?.contents}
        />

        <A.MainAddImg>
          <A.MainInnerTitle>사진첨부</A.MainInnerTitle>
          <A.AddImgImgs>
            <A.ImgsUp>+<br />Upload</A.ImgsUp>
            <A.ImgsUp>+<br />Upload</A.ImgsUp>
            <A.ImgsUp>+<br />Upload</A.ImgsUp>
          </A.AddImgImgs>
        </A.MainAddImg>

        <A.MainWriter>
          <A.MainInnerTitle>작성자</A.MainInnerTitle>
          <A.MainInnerBox>
            <A.InnerBoxInput
              type='text'
              placeholder='이름을 입력해주십시오'
              onChange={props.writerText}
              defaultValue={props.data?.fetchBoard?.writer}
              readOnly={props.data?.fetchBoard?.writer}
            />
            <A.ErrorRed>{props.writerError}</A.ErrorRed>
          </A.MainInnerBox>
        </A.MainWriter>

        <A.MainPasssword>
          <A.MainInnerTitle>비밀번호</A.MainInnerTitle>
          <A.MainInnerBox>
            <A.InnerBoxInput
              type='password'
              placeholder='비밀번호를 입력해주십시오'
              onChange={props.passwordText}
            />
            <A.ErrorRed>{props.passwordError}</A.ErrorRed>
          </A.MainInnerBox>
        </A.MainPasssword>

        <A.MainAddress>
          <A.MainInnerTitle>주소</A.MainInnerTitle>
          <A.Gruop>
            <A.AddressText>
              <A.TextNum type='text' placeholder='07250' />
              <A.TextButton>우편번호 검색</A.TextButton>
            </A.AddressText>
            <A.AddressInputBox>
              <A.BoxText type='text' />
              <A.BoxText type='text' />
            </A.AddressInputBox>
          </A.Gruop>
        </A.MainAddress>

        <A.MainURL>
          <A.MainInnerTitle>유튜브</A.MainInnerTitle>
          <A.InnerBoxInput
            type='url'
            placeholder='링크를 복사해주세요'
            onChange={props.youtubeUrlText}
            defaultValue={props.data?.fetchBoard?.youtubeUrl}
          />
        </A.MainURL>

        <A.MainType>
          <A.MainInnerTitle>메인 설정</A.MainInnerTitle>
          <A.TypeInput>
            <A.InputRadio type='radio' name='setting' checked/>
            <A.InputText>유튜브</A.InputText>
            <A.InputRadio type='radio' name='setting' />
            <A.InputText>사진</A.InputText>
          </A.TypeInput>
        </A.MainType>

        <A.RegisBtn
          onClick={props.isEdit ? props.UpdateButton : props.CreateButton}
          buttonActive={props.isEdit ? true : props.buttonActive}
        >
          {props.isEdit ? '수정' : '등록'}
        </A.RegisBtn>
      </A.Main>
    </A.Wrapper>
  )
}
