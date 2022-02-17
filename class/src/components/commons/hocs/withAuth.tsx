import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore (타입스크립트 무시)
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      router.push("/23-04-login-check");
    }
  }, []);

  return <Component {...props} />;
};
