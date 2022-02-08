import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 2em 5vw;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  /* grid-template-rows: ; */
  background: #e6decf;
`
const Logo = styled.div`
  img {
    width: 20vmin;
  }
`
const Menu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr 5fr;
  font-weight: 700;
  & div {
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
  & i {
    font-size: 1.2rem;
    margin-left: 20px;
  }
  &:nth-child(1) {
    margin-left: 0px;
  }
`

export default function LayoutHeader() {
  const router = useRouter()

  const onClickHome = () => {
    router.push('/')
  }
  const onClickBoard = () => {
    router.push('/boards')
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
          <img src="/images/logo.png" alt="로고" />
        </Logo>
        <Menu>
          <div>
            <span onClick={onClickHome}>HOME</span>
          </div>
          <div>
            <span onClick={onClickBoard}>BOARD</span>
          </div>
          <div>
            <span>SHOP</span>
          </div>
        </Menu>
        <LoginIcon>
          <i className="far fa-user-alt"></i>
          <i style={{ marginLeft: '20px' }} className="fas fa-search"></i>
        </LoginIcon>
      </HeaderWrapper>
    </>
  )
}
