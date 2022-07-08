import styled from '@emotion/styled'
import { LoginOutlined } from '@mui/icons-material'
import { breakPoints } from '../../../../commons/styles/media'

export const HeaderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2vw 0;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`
export const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & div {
    margin: auto 0;
    text-align: center;
  }
  img {
    width: 20vmin;
    cursor: pointer;
  }

  @media ${breakPoints.mobile} {
    img {
      width: 120px;
    }
  }
`
export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  margin: auto;
  span {
    :hover {
      cursor: pointer;
      color: #ffb833;
      transition: linear 0.2s;
    }
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`
export const LoginIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: auto 0;
  > span {
    font-size: 1.2rem;
    cursor: pointer;
    :last-of-type {
      margin-left: 20px;
    }
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`
export const MobileMenu = styled.div`
  display: none;
  right: 0;
  @media ${breakPoints.mobile} {
    display: block;
  }
  .css-n6v7qi-MuiPaper-root-MuiDrawer-paper {
    right: 0;
  }
  .MuiButton-text {
    color: black;
  }
`
export const LoginButton = styled(LoginOutlined)`
  font-size: 1.2rem;
`
