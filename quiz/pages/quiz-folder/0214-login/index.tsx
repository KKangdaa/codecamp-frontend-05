import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../_app";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);

  const { setAccessToken } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickButton = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result.data?.loginUser?.accessToken);

      if (setAccessToken) {
        setAccessToken(result.data?.loginUser.accessToken || "");
      }
      // if (setAccessToken) setAccessToken(result.data?.loginUser.accessToken || "");

      router.push("/quiz-folder/0214-login-success");
    } catch (error) {
      alert("로그인을 먼저 해주세요");
      console.log(error.message);
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeEmail} />
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickButton}>로그인</button>
    </>
  );
}
