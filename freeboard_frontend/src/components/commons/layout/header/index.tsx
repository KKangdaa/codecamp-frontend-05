import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import {
  LoginOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { gql, useQuery } from '@apollo/client'

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 2em 5vw;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  background: #fffaf1;
`
const Logo = styled.div`
  img {
    width: 20vmin;
    cursor: pointer;
  }
`
const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr 5fr;
  font-weight: 700;
  margin: auto;
  & div {
    margin: auto 0;
    text-align: center;
  }
  & span:hover {
    cursor: pointer;
    color: #ffb833;
    transition: linear 0.3s;
    font-size: 1rem;
  }
`

const LoginIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: auto 0;
  & > * {
    font-size: 1.2rem;
    margin-left: 20px;
    cursor: pointer;
  }
`

const Panda = styled.svg`
  width: 25px;
`

const LoginButton = styled(LoginOutlined)`
  font-size: 1.2rem;
`

export default function LayoutHeader() {
  const router = useRouter()
  const { data } = useQuery(FETCH_USER_LOGGED_IN)

  const onClickHome = () => {
    router.push('/')
  }
  const onClickFirebaseBoard = () => {
    router.push('/firebase-board')
  }
  const onClickBoard = () => {
    router.push('/boards')
  }
  const onClickLogOut = () => {
    localStorage.removeItem('accessToken')
    window.location.reload()
  }
  const onClickLogin = () => {
    router.push('/login')
  }
  const onClickProduct = () => {
    router.push('/product')
  }
  const onClickMypage = () => {
    router.push('/login/mypage')
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <HeaderWrapper>
        <Logo>
          <img src="/images/logo.png" alt="로고" onClick={onClickHome} />
        </Logo>
        <Menu>
          <div>
            <span onClick={onClickFirebaseBoard}>FIREBASE-BOARD</span>
          </div>
          <div>
            <span onClick={onClickBoard}>BOARD</span>
          </div>
          <div>
            <span onClick={onClickProduct}>SHOP</span>
          </div>
        </Menu>
        <LoginIcon>
          {data?.fetchUserLoggedIn ? (
            <LogoutOutlined onClick={onClickLogOut} />
          ) : (
            <LoginButton onClick={onClickLogin} />
          )}
          <ShoppingCartOutlined />
          <Panda
            viewBox="0 0 1024 1024"
            fill="currentColor"
            onClick={onClickMypage}
          >
            <path
              d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
              fill="#6B676E"
              p-id="1143"
            />
            <path
              d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
              fill="#FFEBD2"
              p-id="1144"
            />
            <path
              d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
              fill="#E9D7C3"
              p-id="1145"
            />
            <path
              d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
              fill="#FFFFFF"
              p-id="1146"
            />
            <path
              d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
              fill="#6B676E"
              p-id="1147"
            />
            <path
              d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
              fill="#464655"
              p-id="1148"
            />
            <path
              d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
              fill="#464655"
              p-id="1149"
            />
            <path
              d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
              fill="#464655"
              p-id="1150"
            />
          </Panda>
        </LoginIcon>
      </HeaderWrapper>
    </>
  )
}
