import Head from 'next/head'
import { useRouter } from 'next/router'
import { LogoutOutlined, LoginOutlined, HomeOutlined } from '@ant-design/icons'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import {
  HeaderWrapper,
  Logo,
  LoginIcon,
  MobileMenu,
  Menu,
} from './index.styles'
import { GlobalContext } from '../../../../../pages/_app'

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
    }
  }
`

export default function LayoutHeader() {
  const { userInfo, setUserInfo } = useContext(GlobalContext)
  const { data } = useQuery(FETCH_USER_LOGGED_IN)

  const router = useRouter()
  const [logoutUser] = useMutation(LOGOUT_USER)

  const onClickHome = () => {
    router.push('/')
  }
  const onClickBoard = () => {
    router.push('/boards')
  }
  const onClickLogOut = async () => {
    try {
      await logoutUser()
      alert('로그아웃이 됐습니다.')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const onClickLogin = () => {
    router.push('/login')
  }
  const onClickProduct = () => {
    router.push('/product')
  }
  const onClickMypage = () => {
    router.push('/mypage')
  }

  useEffect(() => {
    if (!userInfo) setUserInfo(data?.fetchUserLoggedIn)
  }, [data])

  // =============

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {userInfo ? (
          <ListItem button key={'LOGOUT'} onClick={onClickLogOut}>
            <ListItemIcon>
              <LogoutOutlined style={{ fontSize: '1.3rem' }} />
            </ListItemIcon>
            <ListItemText primary={'LOGOUT'} style={{ fontSize: '0.8rem' }} />
          </ListItem>
        ) : (
          <ListItem button key={'LOGIN'} onClick={onClickLogin}>
            <ListItemIcon>
              <LoginOutlined style={{ fontSize: '1.3rem' }} />
            </ListItemIcon>
            <ListItemText primary={'LOGIN'} style={{ fontSize: '0.8rem' }} />
          </ListItem>
        )}
        <ListItem button key={'MY PAGE'} onClick={onClickMypage}>
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary={'MY PAGE'} style={{ fontSize: '0.8rem' }} />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List>
        {['BOARD', 'SHOP'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

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
          <div>
            <img src="/images/logo.png" alt="로고" onClick={onClickHome} />
          </div>
        </Logo>
        <Menu>
          <span onClick={onClickHome}>HOME</span>
          <span onClick={onClickBoard}>COMMUNITY</span>
          <span onClick={onClickProduct}>SHOP</span>
        </Menu>
        <LoginIcon>
          {data?.fetchUserLoggedIn ? (
            <LogoutOutlined onClick={onClickLogOut} />
          ) : (
            <LoginOutlined onClick={onClickLogin} />
          )}
          <HomeOutlined onClick={onClickMypage} />
        </LoginIcon>

        <MobileMenu>
          {['MENU'].map((anchor) => (
            <div key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <SwipeableDrawer
                // anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </div>
          ))}
        </MobileMenu>
      </HeaderWrapper>
    </>
  )
}
