import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
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

export default function BoardList() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  // const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  /* 
  const onClickPage = (event) => {
    setShowPage(Number(event.target.id));
    refetch({ page: Number(event.target.id) });
  };
 */

  const onLoadMore = () => {
    if (!data) return;
    // fetchBoard의 데이터가 없으면 더 이상 보여주는게 없음

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <A.Scroll>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore} // 스크롤 내릴 시 실행되는 함수
        hasMore={true || false}
        loader={
          <div className="loader" key={0} onClick={onLoadMore}>
            Loading ...
          </div>
        }
      >
        {data?.fetchBoards?.map((el) => (
          <A.Flex key={el._id}>
            <A.Title>{el.title}</A.Title>
            <A.Writer>{el.writer}</A.Writer>
            {/* <div>{el.contents}</div> */}
          </A.Flex>
        ))}
      </InfiniteScroll>
    </A.Scroll>
  );
}
