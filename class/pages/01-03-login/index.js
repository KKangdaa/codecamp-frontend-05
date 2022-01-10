import {MyTitle, wrapper, form, putter} from '../../styles/emotion'



export default function EmotionPage () {
  
  return (
    <div>
      <MyTitle>로그인</MyTitle>
      <p>아이디</p>
      <input type="text" />
      <p>비밀번호</p>
      <input type="password" />
    </div>
  )
}