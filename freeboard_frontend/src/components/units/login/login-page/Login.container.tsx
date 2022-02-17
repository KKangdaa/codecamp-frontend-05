import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import LoginUI from './Login.presenter'
import { LOGIN_USER } from './Login.queries'

export default function Login() {
  const router = useRouter()

  const { setAccessToken } = useContext(GlobalContext)

  const [loginUser] = useMutation(LOGIN_USER)

  const [userEmail, setUserEmail] = useState('')
  const [errorUserEmail, setErrorUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errorUserPassword, setErrorUserPassword] = useState('')

  const [isActive, setIsActive] = useState(false)

  const onChangeUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value)

    if (event.target.value !== '') {
      setErrorUserEmail('')
    }

    const CheckEmail = /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/
    if (!CheckEmail.test(event.target.value)) {
      setErrorUserEmail('이메일 형식에 올바르지 않습니다')
    }

    if (CheckEmail.test(event.target.value) && userPassword) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value)

    if (event.target.value !== '') {
      setErrorUserPassword('')
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/
    if (!CheckPassword.test(event.target.value)) {
      setErrorUserPassword('4~10자 영문, 숫자로 입력하세요')
    }

    if (userEmail && CheckPassword.test(event.target.value)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClickLogin = async () => {
    if (userEmail && userPassword) {
      try {
        const result = await loginUser({
          variables: {
            userEmail,
            userPassword,
          },
        })

        const accessToken = result.data?.loginUser.accessToken
        if (setAccessToken) setAccessToken(accessToken || '')
        localStorage.setItem('accessToken', accessToken || '')

        router.push('/')
      } catch (error) {
        Modal.error({
          content: error.message,
        })
      }
    } else {
      Modal.error({
        content: '이메일과 비밀번호를 올바르게 입력해주세요',
      })
    }
  }

  const onclickSignUp = () => {
    router.push('/login/sign-up')
  }

  return (
    <LoginUI
      isActive={isActive}
      errorUserEmail={errorUserEmail}
      errorUserPassword={errorUserPassword}
      onChangeUserEmail={onChangeUserEmail}
      onChangeUserPassword={onChangeUserPassword}
      onClickLogin={onClickLogin}
      onclickSignUp={onclickSignUp}
    />
  )
}
