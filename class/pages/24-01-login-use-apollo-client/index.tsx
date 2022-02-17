import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);

  const router = useRouter();
  const client = useApolloClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, // Pick 말고 Omit 사용시 => 특정 데이터 빼고 나머지 다 가져옴 // Partial => ? 붙여서 가져오기
    IMutationLoginUserArgs
  >(LOGIN_USER);
  // IMutationLoginUserArgs가 입력되면 variables에 값이 없을 경우 밑줄이 그어짐

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      // 로그인하기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";
      // console.log(accessToken);

      // 유저정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      // 글로벌스테이트에 저장하기
      if (setAccessToken) setAccessToken(accessToken);
      if (setUserInfo) setUserInfo(userInfo);

      // refreshToken 배우기 전까지 임시로 저장해놓기 (localStorage Item저장)
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // 잘 들어가 있는지 확인하기 (localStorage Item조회)
      console.log("=================================");
      console.log(localStorage.getItem("accessToken"));
      console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      console.log("=================================");

      // 로그인 성공 페이지로 이동하기
      router.push("/24-02-login-use-apollo-client-success");
    } catch (error) {
      if (error instanceof Error)
        // 타입스크립트 버전에 따라 밑줄이 그어질 수 있어서 이 문장을 작성하여 준다.
        Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
}
