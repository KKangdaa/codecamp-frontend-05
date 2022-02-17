import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line react/display-name
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      router.push("/example/hocs/login");
    }
  }, []);

  return <Component {...props} />;
};
