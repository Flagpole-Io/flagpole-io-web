import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/api',
  // TODO: Breaks mutations right now, need to fix because cannot cache properly without it
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
