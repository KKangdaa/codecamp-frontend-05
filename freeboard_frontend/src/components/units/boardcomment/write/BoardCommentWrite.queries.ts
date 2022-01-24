import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`

export const FETCH_COMMENT = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`
