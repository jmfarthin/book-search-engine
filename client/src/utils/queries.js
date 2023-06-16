import { gql } from '@apollo/client';

export const QUERY_LOGGED_IN_USER = gql`
# create a GraphQL query to be executed by Apollo Client
query me {
  me {
    _id
username
email
books{
    authors
    description
    bookId
    image
    link
    title
}
  }
}
`;
