import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  // const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
  // ↑ localStorage is not defined 라고 뜸

  // if(typeof window !== 'undefined')
  // 또는 if(process.browser)
  // 또는 useEffect 는 브라우저에서 실행되는것

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    // getItem은 문자열이기 때문에 객체로 변환하는 JSON.parse를 사용해야함
    setBasketItems(baskets);
  }, []);
  return (
    <>
      <h1>나만의 장바구니(비회원전용)</h1>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
