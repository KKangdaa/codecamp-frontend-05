import { useRouter } from 'next/router'
import { useState } from 'react'
import LoginUI from './Login.presenter'

export default function Login() {
  const router = useRouter()

  const [userEmail, setUserEmail] = useState('')
  const [errorUserEmail, setErrorUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errorUserPassword, setErrorUserPassword] = useState('')

  const [isActive, setIsActive] = useState(false)

  const onChangeUserEmail = (event) => {
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

  const onChangeUserPassword = (event) => {
    setUserPassword(event.target.value)

    if (event.target.value !== '') {
      setErrorUserPassword('')
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/
    if (!CheckPassword.test(event.target.value)) {
      setErrorUserPassword('6~10자 영문, 숫자로 입력하세요')
    }

    if (userEmail && CheckPassword.test(event.target.value)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClickLogin = () => {
    router.push('/')
  }

  return (
    <LoginUI
      isActive={isActive}
      errorUserEmail={errorUserEmail}
      errorUserPassword={errorUserPassword}
      onChangeUserEmail={onChangeUserEmail}
      onChangeUserPassword={onChangeUserPassword}
      onClickLogin={onClickLogin}
    />
  )
}
