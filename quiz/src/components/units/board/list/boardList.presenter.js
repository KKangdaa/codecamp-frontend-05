import { getMyDate } from '../../../../commons/libraries/utils';
import * as A from './boardList.styled';


export default function BoardListUI(props) {



  return (
    <>
      <props.Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </props.Head>
      
      <A.Wrapper>
        <A.Board__Wrapper>
          <A.Board>
            <A.Board__Title>
              {/* <A.List__Input type="checkbox"></A.List__Input> */}
              <A.Title__Icon>NO</A.Title__Icon>

              <A.Title__Name>제목</A.Title__Name>
              <A.Title__Writer>작성자</A.Title__Writer>
              <A.Title__CreateDate>날짜</A.Title__CreateDate>

              <A.Title__Icon>조회</A.Title__Icon>
              <A.Title__Icon style={{color : "#731736"}}>
                <A.Icon className="fas fa-heart"></A.Icon>
              </A.Title__Icon>
              
            </A.Board__Title>
            
            {props.data?.fetchBoards.map((el, index) => (
              // number는 el, index로 추가하여

              <A.Board__List key={el.number}>
                {/* <A.List__Input type="checkbox"></A.List__Input> */}
                <A.Number>{index + 1}</A.Number>
                <A.Name id={el._id} onClick={props.onClickMoveToDetail}>{el.title}</A.Name>
                <A.Writer>{el.writer.slice(0,10)}</A.Writer>
                <A.CreateDate>{getMyDate(el.createdAt)}</A.CreateDate>
                <A.Watch>{Number()}</A.Watch>
                <A.Like>{el.likeCount}</A.Like>
              </A.Board__List>
            ))}

          </A.Board>
            <A.EditButton onClick={props.EditFreeboard}>Edit<A.Icon className="fas fa-edit" style={{marginLeft : "10px"}} /></A.EditButton>
        </A.Board__Wrapper>
      </A.Wrapper>
    </>
  )
}