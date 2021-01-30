/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'

export type Theme = typeof theme.colorsLight
export type ThemeDark = typeof theme.colorsDark

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeLight {}
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDark {}
};
