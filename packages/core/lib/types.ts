import { ReactNode } from 'react'

export interface IPaletteBackground {
  default: string
  paper: string
}

export interface IPaletteText {
  primary: string
  secondary: string
  disabled: string
}

export interface IPaletteColor {
  light?: string
  main: string
  dark?: string
}

export interface IPalette {
  type: 'dark' | 'light'
  primary: IPaletteColor
  secondary: IPaletteColor
  error: IPaletteColor
  warning: IPaletteColor
  info: IPaletteColor
  success: IPaletteColor
  text: IPaletteText
  background: IPaletteBackground
  divider: string
}

export interface ISpacing {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface ITheme {
  screens: {}
  palette: IPalette
  fontFamily: {}
  spacing: ISpacing
  borderRadius: {}
}

export interface IThemeContext {
  theme: ITheme
}

export interface IThemeProps {
  theme?: ITheme
  children: ReactNode
}
