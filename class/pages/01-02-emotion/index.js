import {MyTitle, Wrapper, Form, Putter} from '../../styles/emotion'



export default function EmotionPage () {
  
  return (
    <Wrapper>
      <MyTitle>로그인</MyTitle>
      <Form>아이디</Form>
      <Putter type="text" />
      <Form>비밀번호</Form>
      <Putter type="password" />
    </Wrapper>
  )
}