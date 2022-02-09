import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search:$search)
  }
`
