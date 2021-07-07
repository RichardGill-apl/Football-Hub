import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://dev.footballapl.com/graphql',
  cache: new InMemoryCache()
});