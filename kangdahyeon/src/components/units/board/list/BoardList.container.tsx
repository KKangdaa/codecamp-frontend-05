import BoardListPresenter from "./BoardList.presenter";
import { DELETE_BOARD, FETCH_BOARDS } from "./BoardList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchInputPage from "./search";

export default function BoardListContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [toggle, setToggle] = useState(false);

  const onClickItem = (event) => {
    setToggle((toggle) => !toggle);
  };

  const onClickMoveToEdit = (event) => {
    router.push(`/boards/${event.target.id}/edit`);
  };

  const toggleDelete = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onClickDelete = (event) => {
    // setIsModalVisible((prev) => !prev);
    deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  console.log(router);

  const onLoadMore = () => {
    if (!data) return;
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
    <>
      <BoardListPresenter
        data={data}
        toggle={toggle}
        onClickItem={onClickItem}
        isModalVisible={isModalVisible}
        toggleDelete={toggleDelete}
        onClickDelete={onClickDelete}
        onLoadMore={onLoadMore}
        onClickMoveToEdit={onClickMoveToEdit}
      />
      <SearchInputPage />
    </>
  );
}
