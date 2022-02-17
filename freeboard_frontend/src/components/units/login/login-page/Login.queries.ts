import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation loginUser($userPassword: String!, $userEmail: String!) {
    loginUser(password: $userPassword, email: $userEmail) {
      accessToken
    }
  }
`
