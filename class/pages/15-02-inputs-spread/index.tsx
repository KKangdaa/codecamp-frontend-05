import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
// import BoardWriteUI from "./BoardWrite.presenter";
// import { CREATE_BOARD } from "./BoardWrite.queries";

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function BoardWrite() {
  /* const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState(""); */
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    await qqq({
      variables: { ...inputs },
    });
  };

  const onChangeInputs = (event) => {
    // setMyWriter(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    // event.target.id  // writer
  };

  /* 
  const onChangeMyWriter = (event) => {
    // setMyWriter(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    // event.target.id  // writer
  };

  const onChangeMyTitle = (event) => {
    // setMyTitle(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value
    })

    // event.target.id  // title
  };

  const onChangeMyContents = (event) => {
    // setMyContents(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value
    })

    // event.target.id  // contents
  };

  // 동일 값이 여러개를 한개로 축약
 */
  return (
    <div>
      <div>스프레드 연산자 연습</div>
      <input type="text" id="writer" onChange={onChangeInputs} />
      <input type="text" id="title" onChange={onChangeInputs} />
      <input type="text" id="contents" onChange={onChangeInputs} />
    </div>
  );
}
