import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export type ThemeContextType = {
  darkMode: boolean;
  toogleDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>(null)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [darkMode, toogleDarkMode] = useState(false)

  // const toggleTheme = () : void => toogleDarkMode(!darkMode)

  return (
    <ThemeProvider theme={darkMode ? theme.colorsDark : theme.colorsLight}>
      <ThemeContext.Provider value={{ darkMode, toogleDarkMode }}>
        {/* <ThemeProvider theme={darkMode ? theme.colorsDark : theme.colors}> */}
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
