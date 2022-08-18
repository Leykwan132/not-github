import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query MyQuery {
    getUsers {
      id
      login
      avatar_url
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query MyQuery($name: String!) {
    getUser(name: $name) {
      id
      login
      avatar_url
    }
  }
`;
