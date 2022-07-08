import 'antd/dist/antd.css'
// import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { onError } from '@apollo/client/link/error'
import Layout from '../src/components/commons/layout'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { createUploadLink } from 'apollo-upload-client'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { getAccessToken } from '../src/commons/libraries/getAccessToken'

interface IUserInfo {
  _id: string
  email: string
  name: string
  picture: string
  userPoint: {
    _id: string
    amount: number
  }
}
interface IGlobalContext {
  accessToken?: String
  setAccessToken?: Dispatch<SetStateAction<string>>
  userInfo?: IUserInfo
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>
  item?: any
  setItem?: any
  baskets?: any
  setBaskets?: any
}

export const GlobalContext = createContext<IGlobalContext>({})
// createContext({}) 사용시 객체안에 속성이 없기 때문에 typescript 정의해줘야함

function MyApp({ Component, pageProps }: AppProps) {
  const [item, setItem] = useState([])
  const [baskets, setBaskets] = useState([])
  const [accessToken, setAccessToken] = useState('')
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  const value = {
    // key와 value가 같기 때문에 shorthand property로 사용
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
    item,
    setItem,
    baskets,
    setBaskets,
  }

  useEffect(() => {
    /* if (localStorage.getItem('accessToken')) {
      setAccessToken(localStorage.getItem('accessToken') || '')
    } */
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2. 해당 에러가 토큰만료 에러인지 체크 (Unauthenticated)
        if (err.extensions.code === 'UNAUTHENTICATED') {
          // 3. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken)

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }) // 설정 변경(accessToken만 바꿔치기)
            return forward(operation) // 변경된 operation 재요청하기
          })
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: 'https://backend05.codebootcamp.co.kr/graphql',
    // accessToken 사용시 HTTP HEADER에 작성해야 Mutation에서 생성이 가능함
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
    // Authorization = 인가, Bearer = 관례상 사용함
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  })

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
