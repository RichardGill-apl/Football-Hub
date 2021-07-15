import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const GRAPHQL_API_URL = 'https://apl-1.go-vip.net/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache()
});