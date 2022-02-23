import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm();

  const { setAccessToken } = useContext(GlobalContext);

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      if (setAccessToken) {
        setAccessToken(accessToken || "");
        localStorage.setItem("accessToken", accessToken || "");
        localStorage.getItem("accessToken");
      }
      alert("성공");

      const items = localStorage.getItem("items");
      if (items) {
        alert(
          "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
        );
        router.push("/quiz06/basket");
      }
      router.push("/quiz06/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      작성자 : <input type="text" {...register("email")} />
      비밀번호 : <input type="text" {...register("password")} />
      <button>클릭</button>
    </form>
  );
}
