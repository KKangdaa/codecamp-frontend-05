import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      likeCount
      createdAt
      youtubeUrl
    }
  }
`

/* const DELETE_BOARD = gql`
  query deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) {
    }
  }
` */
