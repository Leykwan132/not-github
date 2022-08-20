// ./apollo-client.js

import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const endpoint2 = new HttpLink({
  uri: "http://localhost:3000/api/graphql",
});

const endpoint1 = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "localGraphQL",
    endpoint2, //if above
    authLink.concat(endpoint1)
  ),
  cache: new InMemoryCache(),
});

export default client;
