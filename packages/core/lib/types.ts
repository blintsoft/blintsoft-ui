import { ReactNode } from 'react'

export interface ITheme {}

export interface IThemeContext {
  theme: ITheme
}

export interface IThemeProps {
  theme?: ITheme
  children: ReactNode
}
