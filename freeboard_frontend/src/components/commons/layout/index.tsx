import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { ReactChild } from 'react'
import LayoutBanner from './banner'
import LayoutFooter from './footer'
import LayoutHeader from './header'
import LayoutSidebar from './sidebar'
// import LayoutNavigation from './navigation'

const LayoutBody = styled.div`
  width: 100%;
  height: 100%;
  background: #fffaf1;
`

interface IProps {
  children: ReactChild
}

export default function Layout(props: IProps) {
  const router = useRouter()

  const HIDDEN_HEADER = ['/login', '/login/sign-up']
  const HIDDEN_BANNER = [
    '/',
    '/#',
    '/login',
    '/login/sign-up',
    '/login/mypage',
    `/product/${router.query.productid}`,
    '/firebase-board',
  ]
  // const HIDDEN_NAVIGATION = ['/', '/login', '/login/sign-up', '/firebase-board']
  const HIDDEN_FOOTER = ['/login', '/login/sign-up']
  const HIDDEN_SIDEBER = [
    '/',
    '/#',
    '/boards',
    '/login',
    `/boards/${router.query.boardid}`,
    '/login/sign-up',
    '/login/mypage',
    '/firebase-board',
  ]

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
  const isHiddenSidebar = HIDDEN_SIDEBER.includes(router.asPath)
  // const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath)
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath)

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}

      {/* {!isHiddenNavigation && <LayoutNavigation />} */}
      <LayoutBody>
        {!isHiddenSidebar && <LayoutSidebar />}
        {props.children}
      </LayoutBody>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  )
}
