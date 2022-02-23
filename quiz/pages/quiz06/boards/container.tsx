import { useEffect, useState } from "react";

export default function UnLoginBasketContainer(props) {
  const [changeWord, setChangeWord] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    console.log(items);
    const itemsFilter = items.filter((el) => el._id === props.el._id);
    if (itemsFilter.length > 0) {
      setChangeWord(true);
    }
  }, [props.el._id]);

  console.log(props, "111");
  const onClickBasket = (el) => () => {
    // getItem은 문자열이기 때문에 JSON.parse(문자열을 객체로 바꿔줌)를 사용
    //  || [] 비어있을 수 있기 때문에 빈 배열로 바꿔주게끔 함
    const baskets = JSON.parse(localStorage.getItem("items") || "[]");

    const temp = baskets.filter((filterEl) => filterEl._id === el._id);
    if (temp.length === 1) {
      return;
      // return baskets.filter((element) => element !== temp);
    }

    // localStorage.setItem("items", el);
    // 위의 상태로 사용하게 되면 객체라는 문자열이 담기게 됨 // [object, Object]
    // 그래서 JSON.stringify(객체를 문자열로 바꿔줌)를 사용

    const { __typename, ...plus } = el;
    // 문자열로 바꿔 localStorage에 담아주기 전 __typename은 그닥 필요없어서 rest를 사용하여 제외 후 plus에 담아줌
    baskets.push(plus);
    localStorage.setItem("items", JSON.stringify(baskets));

    setChangeWord(true);
  };

  const onClickDelete = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("items") || "[]");

    const temp = baskets.filter((filterEl) => filterEl._id !== el._id);

    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(temp));

    setChangeWord(false);
  };
  return (
    // <div>
    <div style={{ margin: "10px" }}>
      <span>{props.el.title}</span> / <span>{props.el.contents}</span> /{" "}
      <span>{props.el.writer}</span>{" "}
      <button
        onClick={changeWord ? onClickDelete(props.el) : onClickBasket(props.el)}
      >
        {changeWord ? "취소" : "담기"}
      </button>
    </div>
    // </div>
  );
}
