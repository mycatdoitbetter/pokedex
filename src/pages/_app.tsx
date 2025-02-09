import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>(null)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [darkMode, toggleDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? theme.colorsDark : theme.colorsLight}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
