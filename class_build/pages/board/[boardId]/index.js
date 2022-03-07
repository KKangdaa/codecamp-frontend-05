import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardDetailPage(props) {
  const router = useRouter();
  // const {data} = useQuery(FETCH_BOARD)

  return (
    <div>
      <Head>
        {/* <meta property="og:title" content="나의 게시판 입니다" />
        <meta
          property="og:description"
          content="저의 게시판에 오신것을 환영합니다."
        />
        <meta property="og:image" content="/images/login-background.png" /> */}
        {/* <meta
          property="og:image"
          content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0"
        /> */}
        <meta property="og:title" content={props.myboardData?.title} />
        <meta property="og:description" content={props.myboardData?.content} />
        <meta property="og:image" content={props.myboardData?.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세페이지 입니다. 게시글ID는 {router.query.boardId}
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이 페이지는 서버사이드 렌더링 한다 (첫번째로 실행 되고 위의 내용이 2번째로 실행 됨)
export const getServerSideProps = async (context) => {
  // 페이지에서만 요청이 가능함 (getServerSideProps 정해진 이름이라고 함)
  // 데이터를 요청할 것
  // graphQL의 데이터를 여기서 요청하여 위쪽에서 props로 받아서 data를 사용하면 된다
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graghql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    // 여기서의 return은 BoardDetailPage의 매개변수(props)로 들어가게 됨
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        content: result.fetchBoard.content,
        images: result.fetchBoard.images,
      },
    },
  };
};
