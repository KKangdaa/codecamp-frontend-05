import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../_app";

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

  const onClickMoveToMain = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (setAccessToken) {
        setAccessToken(accessToken || "");
        localStorage.setItem("accessToken", accessToken || "");
        localStorage.getItem("accessToken");
      }
      router.push("/example/hocs/main");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeEmail} />
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickMoveToMain}>이동</button>
    </>
  );
}
