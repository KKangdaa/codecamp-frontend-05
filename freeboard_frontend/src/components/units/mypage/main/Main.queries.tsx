import { gql } from '@apollo/client'

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
    }
  }
`

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      amount
      balance
    }
  }
`
