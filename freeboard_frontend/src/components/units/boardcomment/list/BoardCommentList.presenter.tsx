import { getMyDate } from '../../../../commons/libraries/utils-time'
import * as A from './BoardCommentList.styled'
import { IBoardCommentListUIProps } from './BoardCommentList.types'
import InfiniteScroll from 'react-infinite-scroller'
import { Rate, Modal } from 'antd'

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
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

      <A.WrapperScroll>
        <InfiniteScroll
          pageStart={0}
          hasMore={true}
          // useWindow={false}
          loader={
            <A.ClickLoader
              className="loader"
              key={0}
              onClick={props.onLoadMore}
            >
              더보기
            </A.ClickLoader>
          }
        >
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
            </A.CommentFetchBoard>
          ))}
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
        </InfiniteScroll>
      </A.WrapperScroll>
    </>
  )
}
