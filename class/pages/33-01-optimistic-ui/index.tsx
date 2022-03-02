import { gql, useMutation, useQuery } from "@apollo/client";
import { update } from "lodash";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "621ecb60155b2d0029674405" } }
  );

  const onClickOptimisticUI = async () => {
    await likeBoard({
      variables: {
        boardId: "621ecb60155b2d0029674405",
      },
      /* refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: "621ecb60155b2d0029674405" },
        },
      ], */ // refetchQueries 는 성능이 느려 잘 사용하지 않는다고 함

      // 직접 캐시를 수정하는 방법 (refetch를 하지 않음, 효율적이지만 느림)
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "621ecb60155b2d0029674405" },
          data: {
            fetchBoard: {
              _id: "621ecb60155b2d0029674405",
              __typename: "Board",
              likeCount: data?.likeBoard,
              // ↑ backend05에서 docs를 봤을 때 likeBoard 뒤에 Int!로 되어 있기 때문에
              // likeCount를 data?.likeBoard로 받는 것
            },
          },
        });
      }, // update의 경우 throttling 속도를 slow 또는 fast로 변경하여도 빠르게 data를 업데이트함
    });

    // refetch();
  };

  return (
    <div>
      <div>옵티미스틱UI</div>
      <div>현재카운트(현재 좋아요 갯수): {data?.fetchBoard?.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
