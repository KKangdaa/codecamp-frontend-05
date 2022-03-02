import axios from "axios";

export default function GraphqlRestPage() {
  const onClickGraphql = () => {
    axios.post("http://backend05.codebootcamp.co.kr/graphql", {
      query: `mutation createBoard {
        createBoard(
          createBoardInput: { 
          writer: "콩", 
          password: "1234", 
          title: "강낭콩", 
          contents: "갱얼쥐"
        })
      {
        _id, 
        writer
        }
      }`,
    });
  };

  return <button onClick={onClickGraphql}>그래프큐엘 Axios 테스트</button>;
}
// 똑똑한 사람들이 효율적으로 사용해 보기 위해 만든 REST-API임 (POST)
