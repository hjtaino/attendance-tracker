import { setContext } from '@apollo/client/link/context'
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    from,
  } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  
export const client = new ApolloClient({
link: authLink.concat(httpLink),
cache: new InMemoryCache()
});