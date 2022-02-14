import { gql, useMutation } from "@apollo/client";
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

export default function LoginPage() {
  const router = useRouter();

  const { setAccessToken } = useContext(GlobalContext);

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
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      if (setAccessToken)
        setAccessToken(result.data?.loginUser.accessToken || "");

      // 로그인 성공 페이지로 이동하기
      router.push("/22-02-login-success");
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
