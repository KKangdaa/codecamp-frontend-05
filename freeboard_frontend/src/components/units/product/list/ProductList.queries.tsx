import { gql } from '@apollo/client'

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
    }
  }
`
export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`
