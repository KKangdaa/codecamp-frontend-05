import { getMyDateTime } from '../../../../commons/libraries/utils'
import Pagination from '../../../commons/pagination/pagination'
import * as A from './BoardList.styles'
import { IBoardListUIProps } from './BoardList.types'
import { v4 as uuidv4 } from 'uuid'

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <A.Wrapper>
      {/* <A.BoardWrapper> */}
      <A.BoardListTitle>질문게시판</A.BoardListTitle>
      <input type="text" onChange={props.onChangeSearch} placeholder="검색" />
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

      <A.EditButton>
        <button onClick={props.EditFreeboard}>
          NEW
          <A.Icon className="fas fa-edit" style={{ marginLeft: '10px' }} />
        </button>
      </A.EditButton>
      {/* </A.BoardWrapper> */}
    </A.Wrapper>
  )
}
