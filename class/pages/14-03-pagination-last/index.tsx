import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationLastPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    // 여기서의 중괄호는 variables를 의미
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    // refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    // refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <h1>페이지네이션 연습</h1>
      {data?.fetchBoards?.map((el) => (
        <div key={el.id}>
          {el.title} {el.writer}
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` ${index + startPage} `}
            </span>
          )
      )}

      <span onClick={onClickNextPage}>다음페이지</span>

      {/* 
      <span onClick={onClickPage} id="1">1</span>
      <span onClick={onClickPage} id="2">2</span>
      <span onClick={onClickPage} id="3">3</span>
       */}
    </div>
  );
}
