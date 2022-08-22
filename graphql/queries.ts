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

export const GET_GITHUB_DATA = gql`
  {
    user(login: "Leykwan132") {
      login
      name
      repositories(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            createdAt
            name
            url
            description
            primaryLanguage {
              name
              color
            }
            isFork
            pushedAt
            stargazerCount
          }
        }
      }
    }
  }
`;
