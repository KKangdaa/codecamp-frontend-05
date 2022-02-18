import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container'

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      createdAt
      youtubeUrl
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`

export default function BoardEdit() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardidpage },
  })

  return <BoardWrite isEdit={true} data={data} />
}
