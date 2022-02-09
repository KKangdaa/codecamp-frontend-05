import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import _ from "lodash";
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
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ page: 1, search: data });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id), search: keyword });
  };

  return (
    <>
      <input type="text" placeholder="검색" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div style={{ width: "300px", display: "inline-block" }}>
            {el.title
              .replaceAll(keyword, `%^&*${keyword}%^&*`)
              .split("%^&*")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={el === keyword ? { color: "red" } : { color: "black" }}
                >
                  {el}
                </span>
              ))}
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
