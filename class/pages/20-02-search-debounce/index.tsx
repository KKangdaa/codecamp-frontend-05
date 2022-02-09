import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    // getDebounce(event.target.value)을 넣어 (data)있는 자리에 담기게 된다.
    // data라는 곳에 담아 아래 search에 넣어준다.
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200); // 마지막 입력 후 0.2초가 지나면 작동하게끔

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  /* 
  const onClickSearch = () => {
    refetch({ search: search, page: 1 });
    // 검색한 결과가 1페이지부터 보여질 수 있도록 page에 1을 삽입해줘야함.
    setKeyword(search);
    // input에 있는 값을 keyword에 담아줌
  };
  */

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event?.target.id) });
    // search값을 keyword에 담아줬기 때문에 검색 버튼을 눌렀을 때 값이 담겨 input에 다른 검색어를 입력하고 검색 버튼을 누르지 않고 페이지 버튼을 눌렀을 때 keyword 값이 그대로 남아 있어 값이 변경 되지 않는다.
  };

  return (
    <>
      <h1>검색 페이지</h1>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div style={{ width: "250px", display: "inline-block" }}>
            {el.writer}
          </div>
          <span> {el.title}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + 1}
          onClick={onClickPage}
          id={String(index + 1)}
          style={{ cursor: "pointer" }}
        >
          {` ${index + 1} `}
        </span>
      ))}
    </>
  );
}
