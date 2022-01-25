import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClikcCountUp = () => {
    // setCount(count + 1)
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // prev : 기존 카운트 값
    // 기존에 저장되어 있는 값이 있다면 그 값을 불러와서 사용 (setCount + setCount + setCount ...)
    /* 
    const a =(num)=>{
      num+=1
    }
     */
  };
  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClikcCountUp}>카운트 올리기!!</button>
    </>
  );
}
