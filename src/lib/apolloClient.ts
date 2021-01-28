/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from
  '@apollo/client'

let apolloClient

export const createApolloClient = () : ApolloClient<NormalizedCacheObject> => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  }),
  cache: new InMemoryCache()
})

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
