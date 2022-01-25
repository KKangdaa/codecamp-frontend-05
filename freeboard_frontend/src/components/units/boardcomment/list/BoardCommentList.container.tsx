import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_COMMENT, DELETE_COMMENT } from "./BoardCommentList.queries";
import { Modal } from "antd";
import { /* ChangeEvent, */ useState } from "react";

export default function BoardCommentList() {
  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { data: fetchCommentData } = useQuery(FETCH_COMMENT, {
    variables: { boardId: router.query.idpage },
  });

  const [passwordText, setPasswordText] = useState("");
  const [idText, setIdText] = useState("");

  const passwordTextBox = (event) => {
    setPasswordText(event.target.value);
    // return event.currentTarget.value;
  };
  /* const idTextBox = (event) => {
    // return event.currentTarget.value;
  }; */

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const showModal = (event) => {
    setIdText(event.currentTarget.id);
    setIsModalVisible(true);
  };

  /* const handleCancel = () => {
    setIsModalVisible(false);
  }; */
  const onClickDeleteComment = async () => {
    // setIsModalVisible(false);
    onToggleModal();
    // const commentPassword = passwordTextBox(event.target.id);
    try {
      await deleteBoardComment({
        variables: {
          password: passwordText,
          boardCommentId: idText,
        },
        refetchQueries: [
          { query: FETCH_COMMENT, variables: { boardId: router.query.idpage } },
        ],
      });

      Modal.success({
        content: "게시물이 삭제되었습니다.",
      });
    } catch (error) {
      // console.log(error.message);
      Modal.error({
        content: error.message,
      });
      // alert("비밀번호가 일치하지 않습니다");
    }
  };
  // console.log(fetchCommentData)

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <BoardCommentListUI
      Head={Head}
      fetchCommentData={fetchCommentData}
      onClickDeleteComment={onClickDeleteComment}
      isModalVisible={isModalVisible}
      showModal={showModal}
      passwordTextBox={passwordTextBox}
      onToggleModal={onToggleModal}
    />
  );
}
