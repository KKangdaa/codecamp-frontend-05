import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function InputSearch() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    refetch({ page: 1, search: search });
    setKeyword(search);
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id), search: keyword });
  };

  return (
    <>
      <input type="text" placeholder="검색" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div style={{ width: "300px", display: "inline-block" }}>
            {el.title}
          </div>
          <span>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={uuidv4()}
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
