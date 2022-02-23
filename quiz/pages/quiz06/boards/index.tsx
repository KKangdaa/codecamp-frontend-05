import { gql, useQuery } from "@apollo/client";
import UnLoginBasketContainer from "./container";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function UnLoginBasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <UnLoginBasketContainer key={el._id} el={el} data={data} />
      ))}
    </div>
  );
}
