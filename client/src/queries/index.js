import { gql } from '@apollo/client'

export const MUTATION_LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      statusCode
      message
      error
      data {
        id
        username
        access_token
      }
    }
  }
`
export const SALES_QUERY = gql`
  query {
    Sales {
      data {
        _id
        revenue
        month
      }
    }
  }
`
