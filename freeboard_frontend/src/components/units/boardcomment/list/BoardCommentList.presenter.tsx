import * as A from './BoardCommentList.styled'
// import * as S from '../write/BoardCommentWrite.styled'
import { IBoardCommentListUIProps } from './BoardCommentList.types'
import InfiniteScroll from 'react-infinite-scroller'
import { Modal } from 'antd'
import BoardCommentListItemUI from './BoardCommentListItem'

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
          {props.fetchCommentData?.fetchBoardComments.map((el, index) => (
            <A.CommentFetchBoard key={el._id}>
              <BoardCommentListItemUI
                el={el}
                index={index}
                onChangePassword={props.onChangePassword}
                passwordText={props.passwordText}
                onChangeContents={props.onChangeContents}
                onChangeWriter={props.onChangeWriter}
                contentsText={props.contentsText}
              />
            </A.CommentFetchBoard>
          ))}
          {props.isModalVisible && (
            <Modal
              visible={props.isModalVisible}
              onOk={props.onClickDeleteComment}
              onCancel={props.onToggleModal}
              title={'비밀번호를 입력하여 주세요'}
            >
              <input type="password" onChange={props.onChangePassword} />
            </Modal>
          )}
        </InfiniteScroll>
      </A.WrapperScroll>
    </>
  )
}
