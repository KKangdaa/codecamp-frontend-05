import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function StateLifeCycle() {
  const router = useRouter();

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    console.log("Changed!!");
  }, [isChange]);

  useEffect(() => {
    console.log("Rendered!");

    return () => {
      console.log("Bye!!");
    };
  }, []);

  const onClickChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
