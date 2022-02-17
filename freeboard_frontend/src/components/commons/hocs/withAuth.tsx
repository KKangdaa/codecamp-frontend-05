import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const withAuth = (Component) => (props) => {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      Modal.error({
        content: '로그인 후 확인 가능합니다.',
      })
      router.push('/login')
    }
  }, [])

  return <Component {...props} />
}
