import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
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

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`
