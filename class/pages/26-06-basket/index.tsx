import { gql, useQuery } from "@apollo/client";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    // getItem 문자열이라서 JSON.parse 해줘야함
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }

    // delete el.__typename; // 좋은 방법이 아님
    // ↓
    const { __typename, ...newEl } = el; // localStorage에 el의 데이터 __typename를 제외하고 뿌려줌
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets));
  };
  return (
    <>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니로</button>
        </div>
      ))}
    </>
  );
}
