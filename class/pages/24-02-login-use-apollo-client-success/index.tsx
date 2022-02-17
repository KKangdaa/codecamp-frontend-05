import { useContext } from "react";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

/* const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`; */ // 24-01-login-use-apollo-client 로 이동

const LoginSuccessPage = () => {
  const { userInfo } = useContext(GlobalContext);
  /* const router = useRouter(); */

  /* const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN); */

  /* useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      router.push("/23-04-login-check");
    }
  }, []); */
  // 로그인이 안된 사람은 유지가 안되게끔 처리함

  return <div>{userInfo?.name}님 환영합니다.</div>;
};

export default withAuth(LoginSuccessPage);
// withAuth(hoc임) 실행 후 LoginSuccessPage 실행됨
