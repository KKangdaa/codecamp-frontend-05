import * as A from './Login.styles'
import { ILoginUIProps } from './Login.types'
import { Switch } from 'antd'

export default function LoginUI(props: ILoginUIProps) {
  function onChange(checked) {
    console.log(`switch to ${checked}`)
  }
  return (
    <>
      <A.LoginBackground>
        {/* <img src="/images/login.png" /> */}
        <A.LoginWrapper>
          <img src="/images/login.png" />
          <img src="/images/logo2.png" onClick={props.onClickMoveToHome} />
          <A.LoginId
            type="text"
            placeholder="이메일"
            onChange={props.onChangeUserEmail}
          />
          <span>{props.errorEmail}</span>
          <A.LoginPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeUserPassword}
          />
          <span>{props.errorPassword}</span>
          <A.LoginCheck>
            <Switch onChange={onChange} />
            <span>로그인 상태 유지</span>
          </A.LoginCheck>
          <A.LoginButton
            onClick={props.onClickLogin}
            style={
              props.isActive
                ? { cursor: 'pointer', background: '#ffa91f', color: 'white' }
                : { cursor: 'auto', background: 'white', color: '#583700' }
            }
          >
            로그인하기
          </A.LoginButton>
          <A.LoginBottom>
            <span>이메일 찾기</span>
            <span>비밀번호 찾기</span>
            <span onClick={props.onclickSignUp}>회원가입</span>
          </A.LoginBottom>
        </A.LoginWrapper>
      </A.LoginBackground>
    </>
  )
}
