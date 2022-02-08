import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionLifeCycleRefPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(0);

  // componentDidMount와 동일
  useEffect(() => {
    console.log("마운트 됨");
    inputRef.current?.focus(); // input에 커서가 깜빡거림

    // componentWillUnmount 동일 // useEffect(() => {} 안에 작성해야함(종료)
    return () => {
      console.log("여기서 나갈래요");
    };
  }, []); // []는 의존성 배열이라 함

  // componentDidUpdate와 비슷(동일하지 않음. 1%가 다름)
  useEffect(() => {
    console.log("수정되고 다시 그려짐");
    // 카운트 올리기 버튼을 누르면 reFresh됨
    // 렌더 될때도 실행됨
  });
  // [의존성 배열] 이 없는 경우는 componentDidUpdate와 비슷
  // 하나라도 바뀌면 실행됨

  /* 
  useEffect(() => {
    console.log("수정되고 다시 그려짐");
  }, [count]); // count가 바뀌었을 때 reRender가 됨
  // useEffect안에 setState를 사용하지 않으면 좋겠다...
  */

  const onClickCounter = () => {
    console.log(count);
    setCount((prev) => prev + 1);
    console.log("카운터를 클릭하셨습니다.");
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되냐"); // componentDidMount, useEffect와 비교하기

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
