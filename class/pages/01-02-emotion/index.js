// import {} from '../../styles/emotion'

import * as re from '../../styles/emotion'



export default function EmotionPage () {
  
  return (
    <re.Wrapper>
      <re.MyTitle>로그인</re.MyTitle>
      <re.Form>아이디</re.Form>
      <re.Putter type="text" />
      <re.Form>비밀번호</re.Form>
      <re.Putter type="password" />
    </re.Wrapper>
  )
}