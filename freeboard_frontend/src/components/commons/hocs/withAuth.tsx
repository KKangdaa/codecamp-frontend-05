import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import { getAccessToken } from '../../../commons/libraries/getAccessToken'

export const withAuth = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext)

  const router = useRouter()
  useEffect(() => {
    async function aaa() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken()
        if (!newAccessToken) {
          Modal.error({ content: '로그인이 필요합니다.' })
          router.push('/login')
        }
      }
    }
    aaa()
  }, [])

  return <Component {...props} />
}
