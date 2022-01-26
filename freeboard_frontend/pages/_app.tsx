import 'antd/dist/antd.css'
// import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Layout from '../src/components/commons/layout'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend05.codebootcamp.co.kr/graphql',
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
