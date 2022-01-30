import { getMyDate } from '../../../../commons/libraries/utils'
import Pagination from '../../../commons/pagination/pagination'
import * as A from './BoardList.styled'
import { IBoardListUIProps } from './BoardList.types'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_BOARDS_COUNT } from './BoardList.queries'

export default function BoardListUI(props: IBoardListUIProps) {
  const [clickPage, setClickPage] = useState(1)
  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT)

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
      <A.Wrapper>
        <A.BoardWrapper>
          <A.BoardListTitle>게시판</A.BoardListTitle>
          <A.Board>
            <A.BoardTitle>
              {/* <A.ListInput type="checkbox"></A.ListInput> */}
              <A.TitleIcon>NO</A.TitleIcon>

              <A.TitleName>제목</A.TitleName>
              <A.TitleWriter>작성자</A.TitleWriter>
              <A.TitleCreateDate>작성일</A.TitleCreateDate>

              <A.TitleIcon>조회</A.TitleIcon>
              <A.TitleIcon style={{ color: '#731736' }}>
                <A.Icon className="fas fa-heart"></A.Icon>
              </A.TitleIcon>
            </A.BoardTitle>

            {props.data?.fetchBoards.map((el, index) => (
              // number는 el, index로 추가하여

              <A.BoardList key={el.number}>
                <A.Number>
                  {dataBoardCount?.fetchBoardsCount -
                    (index + (clickPage - 1) * 10)}
                </A.Number>
                <A.Name id={el._id} onClick={props.onClickMoveToDetail}>
                  {el.title}
                </A.Name>
                <A.Writer>{el.writer.slice(0, 10)}</A.Writer>
                <A.CreateDate>{getMyDate(el.createdAt)}</A.CreateDate>
                <A.Watch>{Number()}</A.Watch>
                <A.Like>{el.likeCount}</A.Like>
              </A.BoardList>
            ))}
          </A.Board>

          <Pagination
            clickPage={clickPage}
            setClickPage={setClickPage}
            refetch={props.refetch}
            dataBoardCount={dataBoardCount}
          />

          <A.EditButton onClick={props.EditFreeboard}>
            Edit
            <A.Icon className="fas fa-edit" style={{ marginLeft: '10px' }} />
          </A.EditButton>
        </A.BoardWrapper>
      </A.Wrapper>
    </>
  )
}
