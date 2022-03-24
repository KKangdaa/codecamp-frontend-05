import { getMyDateTime } from '../../../../commons/libraries/utils'
import Pagination from '../../../commons/pagination/pagination'
import * as A from './BoardList.styles'
import { IBoardListUIProps } from './BoardList.types'
import { v4 as uuidv4 } from 'uuid'

export default function BoardListUI(props: IBoardListUIProps) {
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
          <div>
            <input
              type="text"
              onChange={props.onChangeSearch}
              placeholder="검색"
            />
            {/* <button onClick={props.onClickSearch}>검색</button> */}
          </div>
          <A.Board>
            <A.BoardTitle>
              <A.TitleIcon>NO</A.TitleIcon>
              <A.TitleName>제목</A.TitleName>
              <A.TitleWriter>작성자</A.TitleWriter>
              <A.TitleCreateDate>작성일</A.TitleCreateDate>
              <A.TitleIcon style={{ color: '#731736' }}>
                <A.Icon className="fas fa-heart"></A.Icon>
              </A.TitleIcon>
            </A.BoardTitle>

            {props.data?.fetchBoards.map((el, index) => (
              // number는 el, index로 추가하여

              <A.BoardList key={uuidv4()}>
                <A.Number>
                  {props.dataBoardCount?.fetchBoardsCount -
                    (index + (props.clickPage - 1) * 10)}
                </A.Number>
                <A.Name id={el._id} onClick={props.onClickMoveToDetail}>
                  {el.title
                    .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                    .split('@#$%')
                    .map((el) => (
                      <span
                        key={uuidv4()}
                        style={
                          el === props.keyword
                            ? { color: 'red' }
                            : { color: 'black' }
                        }
                      >
                        {el}
                      </span>
                    ))}
                </A.Name>
                <A.Writer>{el.writer.slice(0, 10)}</A.Writer>
                <A.CreateDate>{getMyDateTime(el.createdAt)}</A.CreateDate>
                <A.Like>{el.likeCount}</A.Like>
              </A.BoardList>
            ))}
          </A.Board>

          <Pagination
            clickPage={props.clickPage}
            setClickPage={props.setClickPage}
            refetch={props.refetch}
            dataBoardCount={props.dataBoardCount}
            keyword={props.keyword}
            countRefetch={props.countRefetch}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
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
