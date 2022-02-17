import { gql, useQuery } from "@apollo/client";
/* import { useRouter } from "next/router"; */
/* import { useEffect } from "react"; */
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
const LoginSuccessPage = () => {
  /* const router = useRouter(); */

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  /* useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      router.push("/23-04-login-check");
    }
  }, []); */
  // 로그인이 안된 사람은 유지가 안되게끔 처리함

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
};

export default withAuth(LoginSuccessPage);
// withAuth(hoc임) 실행 후 LoginSuccessPage 실행됨
