import * as A from './BoardWrite.styled'


export default function BoardWriteUI(props) {


  return (
    <A.Wrapper>
      <A.Main>
        <A.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</A.Title>

        <A.Main__TitleBox type="text" placeholder='제목' style={{ border : props.titleError }} onChange={props.titleText} />
        <A.Line></A.Line>
        <A.Main__TextBox type="text" placeholder='내용을 작성해주세요'  style={{ border : props.contentsError }} onChange={props.contentsText} />

        <A.Main__AddImg>
          <A.Main__Inner__Title>사진첨부</A.Main__Inner__Title>
          <A.AddImg__Imgs>
            <A.Imgs__Up>+<br />Upload</A.Imgs__Up>
            <A.Imgs__Up>+<br />Upload</A.Imgs__Up>
            <A.Imgs__Up>+<br />Upload</A.Imgs__Up>
          </A.AddImg__Imgs>
        </A.Main__AddImg>
        
        <A.Main__Writer>
          <A.Main__Inner__Title>작성자</A.Main__Inner__Title>
          <A.Main__Inner__Box>
            <A.Inner__Box__Input type="text" placeholder='이름을 입력해주십시오' onChange={props.writerText} />
            <A.Error__Red>{props.writerError}</A.Error__Red>
          </A.Main__Inner__Box>
        </A.Main__Writer>

        <A.Main__Passsword>
          <A.Main__Inner__Title>비밀번호</A.Main__Inner__Title>
          <A.Main__Inner__Box>
            <A.Inner__Box__Input type="password" placeholder='비밀번호를 입력해주십시오' onChange={props.passwordText} />
            <A.Error__Red>{props.passwordError}</A.Error__Red>
          </A.Main__Inner__Box>
        </A.Main__Passsword>

        <A.Main__Address>
          <A.Main__Inner__Title>주소</A.Main__Inner__Title>
          <A.Gruop>
            <A.Address__Text>
              <A.TextNum type="text" placeholder='07250' />
              <A.TextButton>우편번호 검색</A.TextButton>
            </A.Address__Text>
            <A.Address__Input_Box>
              <A.Box__Text type="text" />
              <A.Box__Text type="text" />
            </A.Address__Input_Box>
          </A.Gruop>
        </A.Main__Address>

        <A.Main__URL>
          <A.Main__Inner__Title>유튜브</A.Main__Inner__Title>
          <A.Inner__Box__Input type="url" placeholder='링크를 복사해주세요' />
        </A.Main__URL>

        <A.Main__Gender>
          <A.Main__Inner__Title>메인 설정</A.Main__Inner__Title>
          <A.Gender__Input>
            <A.Input__Radio type="radio" name="setting" checked/>
            <A.Input__Text>유튜브</A.Input__Text>
            <A.Input__Radio type="radio" name="setting" />
            <A.Input__Text>사진</A.Input__Text>
          </A.Gender__Input>
        </A.Main__Gender>

        <A.RegisBtn onClick={props.isEdit ? props.UpdateButton : props.CreateButton} ttt={props.turnGreen}>
          {props.isEdit ? "수정" : "등록"}
        </A.RegisBtn>
      </A.Main>
    </A.Wrapper>
  )
}