// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "apollo-server-micro";

// Describe what data cna be queried.
// Object we can fetch from our service.
// ! means it is non-nullable. (graphQL must always return a value when query this field.)
// [User] - represent an array of user
export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
  }
`;
