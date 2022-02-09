import 'antd/dist/antd.css'
// import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client'
import { AppProps } from 'next/app'
import Layout from '../src/components/commons/layout'
import { Global } from '@emotion/react'
import { createUploadLink } from 'apollo-upload-client'
import { globalStyles } from '../src/commons/styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: 'http://backend05.codebootcamp.co.kr/graphql',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  })

  return (
    <div>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
