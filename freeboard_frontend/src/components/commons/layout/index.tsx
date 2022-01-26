import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { ReactChild } from 'react'
import LayoutBanner from './banner'
import LayoutFooter from './footer'
import LayoutHeader from './header'
import LayoutNavigation from './navigation'

const Body = styled.div`
  width: 100%;
  height: 100%;
`

const LayoutBody = styled.div`
  width: 100%;
  height: 100%;
`

const HIDDEN_HEADER = ['']

interface IProps {
  children: ReactChild
}

export default function Layout(props: IProps) {
  const router = useRouter()

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)

  return (
    <Body>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </Body>
  )
}
