import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`

export default function BoardEdit() {
  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.idpage }
  })

  return(
    <BoardWrite isEdit={true} data={data} />
  )
}