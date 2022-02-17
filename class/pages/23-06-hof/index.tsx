import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChild = (el: string) => (e: MouseEvent<HTMLInputElement>) => {
    console.log(el);
    // id를 사용하지 않으니 안전한 코딩을 할수 있다네요'^'
    // hof를 사용할 때 화살표 함수를 사용하면 편함(순서대로 실행 될 것들이 보임)
  };

  return (
    <div>
      <h1>HOF 연습 페이지 입니다</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
