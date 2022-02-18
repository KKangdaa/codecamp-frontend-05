import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
      writer
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (boardId: string) => async () => {
    console.log(boardId);
    // 삭제하기 로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deleteId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev 안에 기존 30개 데이터가 존재 => 29개로 변경해야 함
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deleteId
              ); // el._id가 안되므로 readField 사용 // el에서 id를 뽑을 때의 '식'임.
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기 로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "콩",
          password: "kong",
          title: "개",
          contents: "장모치와와",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // [{writer:'콩', password:'kong'}]
              // 가장 나중에 생성된 데이터가 맨 위로 올라오게 ...prev앞에 data.createBoard를 삽입
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록</button>
    </div>
  );
}
