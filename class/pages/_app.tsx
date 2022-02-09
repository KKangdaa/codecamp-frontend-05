// import '../styles/globals.css'
import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global /* , css */ } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from 'apollo-upload-client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7A8VOwGfD37gc0p7tljhmB6ZZGL7W3Fg",
  authDomain: "kkang-s.firebaseapp.com",
  projectId: "kkang-s",
  storageBucket: "kkang-s.appspot.com",
  messagingSenderId: "610604769229",
  appId: "1:610604769229:web:2665ff2937e481f7132e84",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
