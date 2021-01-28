import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
