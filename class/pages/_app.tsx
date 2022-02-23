// import '../styles/globals.css'
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global /* , css */ } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// import Head from "next/head";
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
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}

interface IGlobalContext {
  accessToken?: String;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}
// Initialize Firebase
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  // ①
  /* if (process.browser) {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
  } */

  // ②
  /* if (typeof window !== "undefined") {
    // window => browser
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
  } */

  // ③
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
  }, []);

  // 셋 중 하나를 사용하면 되지만 useEffect가 가장 좋은 방법
  // 왜? 놓침.. 나중에 강의 다시보기...

  /* if (localStorage.getItem("accessToken")) {
    setAccessToken(localStorage.getItem("accessToken") || "");
  } */

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임 */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
