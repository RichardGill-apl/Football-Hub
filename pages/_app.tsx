import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import { client } from '../lib/graphql'

function FootballHubApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default FootballHubApp
