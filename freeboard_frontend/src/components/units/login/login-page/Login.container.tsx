import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import {
  IMutation,
  IMutationLoginUserArgs,
} from '../../../../commons/types/generated/types'
import LoginUI from './Login.presenter'
import { LOGIN_USER } from './Login.queries'

export default function Login() {
  const router = useRouter()

  const { setAccessToken } = useContext(GlobalContext)

  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER)

  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const [isActive, setIsActive] = useState(false)

  const onChangeUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)

    if (event.target.value !== '') {
      setErrorEmail('')
    }

    const CheckEmail = /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/
    if (!CheckEmail.test(event.target.value)) {
      setErrorEmail('이메일 형식에 올바르지 않습니다')
    }

    if (CheckEmail.test(event.target.value) && password) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)

    if (event.target.value !== '') {
      setErrorPassword('')
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/
    if (!CheckPassword.test(event.target.value)) {
      setErrorPassword('4~10자 영문, 숫자로 입력하세요')
    }

    if (email && CheckPassword.test(event.target.value)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClickLogin = async () => {
    if (email && password) {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        })

        const accessToken = result.data?.loginUser.accessToken || ''
        if (setAccessToken) setAccessToken(accessToken)
        // localStorage.setItem('accessToken', accessToken)

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

  const onClickMoveToHome = () => {
    router.push('/')
  }

  const onclickSignUp = () => {
    router.push('/login/sign-up')
  }

  return (
    <LoginUI
      isActive={isActive}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      onChangeUserEmail={onChangeUserEmail}
      onChangeUserPassword={onChangeUserPassword}
      onClickLogin={onClickLogin}
      onclickSignUp={onclickSignUp}
      onClickMoveToHome={onClickMoveToHome}
    />
  )
}
