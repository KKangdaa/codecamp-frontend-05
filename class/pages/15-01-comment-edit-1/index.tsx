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

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // 댓글을 수정하려면 state가 10개가 있어야함 (10개의 댓글을 수정하기 위해)

  const onClickIsEdit = (event) => {
    console.log(event.target.id);
    // setIsEdits(true);

    const qqq = isEdits;
    qqq[event.target.id] = true;
    setIsEdits([...qqq]);
  };

  return (
    <div>
      <h1>댓글 수정 연습</h1>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {isEdits[index] === false && (
            <div>
              <span>
                {el.title} {el.writer}
              </span>
              <button
                id={index}
                style={{
                  background: "none",
                  border: "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={onClickIsEdit}
              >
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] === true && (
            <div>
              <div>=========================</div>
              <div>이것은 수정하기 화면입니다.</div>
              <div>=========================</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* import { gql, useQuery } from "@apollo/client";
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

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  console.log(data);
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(isEdits[2]);

  const onClickEdit = (event) => {
    const aaa = isEdits;
    aaa[event.target.id] = true;
    setIsEdits(aaa);
  };

  return (
    <div>
      <h1>댓글 수정 연습</h1>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          <div>{el._id}</div>
          {isEdits[index] === false && (
            <div>
              <span>
                {el.title} {el.writer}
              </span>
              <button id={index} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] === true && (
            <div>
              <div>===============</div>
              <div>수정하기 화면</div>
              <div>===============</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} */
// click state가 true이면 수정화면 띄우기
// false이면 안띄우기(기본)
// 이거 이상해요 아무것도 안했는데 고쳐짐;
