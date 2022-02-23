import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getMyDate } from "../../../src/commons/libraries/utils";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function TodayListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [item, setItem] = useState([]);
  const todayDate = getMyDate(new Date());

  const onClickList = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]");
    const temp = baskets.filter((filterEl) => filterEl._id === el._id);
    if (temp.length === 1) {
      return;
    }

    const { __typename, ...plus } = el;
    baskets.push(plus);
    localStorage.setItem(todayDate, JSON.stringify(baskets));

    setItem(baskets);
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]");
    if (baskets) {
      setItem(baskets);
    }
  }, []);

  return (
    <>
      <span style={{ width: "50%", display: "inline-block" }}>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} onClick={onClickList(el)}>
            <span>{el.title}</span>
            <span>{el.contents}</span>
            <span>{el.writer}</span>
          </div>
        ))}
      </span>
      <span style={{ width: "50%", display: "inline-block" }}>
        {item.map((el, index) => (
          <div key={el._id} style={{ borderBottom: "1px solid black" }}>
            <span>{[index + 1]}</span> - <span>제목 : {el.title}</span> -{" "}
            <span>내용 : {el.contents}</span> -{" "}
            <span>작성자 : {el.writer}</span>
          </div>
        ))}
      </span>
    </>
  );
}
