import * as A from "./BoardList.styled";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListPresenter(props: IBoardListUIProps) {
  return (
    <A.ListWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {props.data?.fetchBoards.map((el) => (
          <A.ListItem key={el._id} onClick={props.onClickItem}>
            <A.ItemWrap>
              {/* <A.ItemArrow></A.ItemArrow> */}
              <A.ItemTitle>{el.title}</A.ItemTitle>
              <A.ItemDate>{el.createdAt.slice(0, 10)}</A.ItemDate>
            </A.ItemWrap>

            <A.ItemCB
              style={props.toggle ? { display: "block" } : { display: "none" }}
            >
              <A.ItemContents>{el.contents}</A.ItemContents>
              <A.CBWrap>
                {el.images[0] && (
                  <img src={`https://storage.googleapis.com/${el.images}`} />
                )}
                <A.ItemButton>
                  <span onClick={props.onClickMoveToEdit} id={el._id}>
                    수정
                  </span>
                  <span onClick={props.onClickDelete} id={el._id}>
                    삭제
                  </span>
                </A.ItemButton>
              </A.CBWrap>
            </A.ItemCB>
          </A.ListItem>
        ))}
      </InfiniteScroll>
    </A.ListWrapper>
  );
}
