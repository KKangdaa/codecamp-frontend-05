/* eslint-disable react/react-in-jsx-scope */
import { getMyDate } from "../../../../commons/libraries/utils-time";
import * as A from "./BoardCommentList.styled";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Rate } from "antd";
import { Modal } from "antd";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  // console.log(props.passwordTextBox);
  return (
    <>
      <props.Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </props.Head>
      {props.fetchCommentData?.fetchBoardComments.map((el: any) => (
        <A.CommentFetchBoard key={el._id}>
          <A.CommentWriter>
            <A.CommentProfileImg src="/profile.jpg" />
            <A.span>{el.writer}</A.span>
            <Rate allowHalf value={el.rating} disabled />
          </A.CommentWriter>
          <A.CommentContents>{el.contents}</A.CommentContents>
          <A.CommentDate>{getMyDate(el.createdAt)}</A.CommentDate>
          <A.CommentEditButton className="far fa-edit"></A.CommentEditButton>
          <A.CommentDeleteButton id={el._id} onClick={props.showModal}>
            <i className="fas fa-times"></i>
          </A.CommentDeleteButton>
          {props.isModalVisible && (
            <Modal
              visible={props.isModalVisible}
              onOk={props.onClickDeleteComment}
              onCancel={props.onToggleModal}
            >
              비밀번호:
              <input type="password" onChange={props.passwordTextBox} />
            </Modal>
          )}
          {/* `${console.log(props.passwordTextBox)}` */}
        </A.CommentFetchBoard>
      ))}
    </>
  );
}
