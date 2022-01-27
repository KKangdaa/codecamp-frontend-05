import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import * as A from "./styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  const [showPage, setShowPage] = useState(1);

  const onClickPage = (event) => {
    setShowPage(Number(event.target.id));
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
    setShowPage(startPage - 10);
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
    setShowPage(startPage + 10);
  };

  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <A.Flex key={el._id}>
          <A.Title>{el.title}</A.Title>
          <A.Writer>{el.writer}</A.Writer>
          {/* <div>{el.contents}</div> */}
        </A.Flex>
      ))}
      <A.PageNumber>
        {startPage !== 1 && <A.PrevButton onClick={onClickPrev}></A.PrevButton>}

        {new Array(10).fill(2).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <A.Numbers
                key={index + startPage}
                onClick={onClickPage}
                id={String(index + startPage)}
                showPage={showPage}
                index={index}
                startPage={startPage}
              >
                {`${index + startPage}`}
              </A.Numbers>
            )
        )}
        {startPage + 10 < lastPage && (
          <A.NextButton onClick={onClickNext}></A.NextButton>
        )}
      </A.PageNumber>
    </div>
  );
}
