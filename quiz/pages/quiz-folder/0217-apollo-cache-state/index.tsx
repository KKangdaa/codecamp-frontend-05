import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const ListWrapper = styled.div`
  width: 100%;
  padding: 50px;
`;
const List = styled.div`
  width: 30%;
  display: inline-block;
  border: 1px solid black;
  padding: 3px;
  text-align: center;
`;
const WriteWrapper = styled.div`
  width: 100%;
  padding: 50px;
  span {
    display: inline-block;
    width: 80px;
    text-align: right;
    padding-right: 5px;
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
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

interface IDataValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function ApolloCacheState() {
  const { register, handleSubmit } = useForm();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickSubmit = async (data: IDataValue) => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
        // refetchQueries: [{ query: FETCH_BOARDS }],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data.createBoard, ...prev];
              },
            },
          });
        },
      });
      console.log(data);
      // alert("성공");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDelete = (boardId) => async () => {
    await deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS, variables: { boardId } }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filterPrev = prev.filter(
                (el) => readField("_id", el) !== data.deleteBoard
              );
              return [...filterPrev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <ListWrapper>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <List>{el.writer}</List>
            <List>{el.title}</List>
            <List>{el.contents}</List>
            <button onClick={onClickDelete(el._id)}>x</button>
          </div>
        ))}
      </ListWrapper>
      <WriteWrapper>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <span>작성자 : </span>
          <input type="text" {...register("writer")} /> <br />
          <span>비밀번호 : </span>
          <input type="password" {...register("password")} /> <br />
          <span>제목 : </span>
          <input type="text" {...register("title")} /> <br />
          <span>내용 : </span>
          <input type="text" {...register("contents")} /> <br />
          <button>등록</button>
        </form>
      </WriteWrapper>
    </>
  );
}
