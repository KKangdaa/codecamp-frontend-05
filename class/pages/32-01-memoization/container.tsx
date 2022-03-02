import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다."); // 리렌더링 됨

  let countLet = useMemo(() => 0, []); // 리렌더링 되지 않음
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []); // 리렌더링 되지 않음
  console.log(aaa); // 리렌더링 됨

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1;
  }, []); // 리렌더링 되지 않음

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
    // useCallback 안에서 state 사용할 경우 주의해야함 (리렌더링 되지 않음)
  }, []); // 리렌더링 되지 않음 (countState가 바뀔 때 렌더링 됨)

  // useMemo로 useCallback 만들어보기
  /* const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []); // [] 디펜던시 어레이 */

  // 다시 원래 함수
  /* const onClickCountState = () => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }; */

  return (
    <div>
      <div>====================</div>
      <h1>이것은 컨테이너 입니다</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      <div>====================</div>

      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
