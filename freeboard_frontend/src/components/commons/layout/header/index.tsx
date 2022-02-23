import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

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
  margin: auto 0;
  & i {
    font-size: 1.2rem;
    margin-left: 20px;
    cursor: pointer;
  }
  & i:nth-of-type(1) {
    margin-left: 0px;
  }
`

export default function LayoutHeader() {
  const router = useRouter()

  const onClickHome = () => {
    router.push('/')
  }
  const onClickFirebaseBoard = () => {
    router.push('/firebase-board')
  }
  const onClickBoard = () => {
    router.push('/boards')
  }
  const onClickLogin = () => {
    localStorage.removeItem('accessToken')

    router.push('/login')
  }
  const onClickProduct = () => {
    router.push('/product')
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
          <i className="far fa-user-alt" onClick={onClickLogin}></i>
          <i style={{ marginLeft: '20px' }} className="fas fa-search"></i>
        </LoginIcon>
      </HeaderWrapper>
    </>
  )
}
