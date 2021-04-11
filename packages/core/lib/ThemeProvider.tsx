import React, { useEffect, useState } from 'react'

import { ThemeContext } from './Context'
import {
  IThemeProps,
  ITheme,
  IPalette,
  IPaletteColor,
  IPaletteText,
  IPaletteBackground,
} from './types'

const DEFAULT_PALETTE_BACKGROUND: IPaletteBackground = {
  default: '#fafafa',
  paper: '#fff',
}

const DEFAULT_PALETTE_TEXT: IPaletteText = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.54)',
  disabled: 'rgba(0, 0, 0, 0.38)',
}

const DEFAULT_PALETTE_COLOR_PRIMARY: IPaletteColor = {
  light: '#a6d4fa',
  main: '#90caf9',
  dark: '#648dae',
}

const DEFAULT_PALETTE_COLOR_SECONDARY: IPaletteColor = {
  light: '#f6a5c0',
  main: '#f48fb1',
  dark: '#aa647b',
}

const DEFAULT_PALETTE_COLOR_ERROR: IPaletteColor = {
  light: '#e57373',
  main: '#f44336',
  dark: '#d32f2f',
}

const DEFAULT_PALETTE_COLOR_WARNING: IPaletteColor = {
  light: '#ffb74d',
  main: '#ff9800',
  dark: '#f57c00',
}

const DEFAULT_PALETTE_COLOR_INFO: IPaletteColor = {
  light: '#64b5f6',
  main: '#2196f3',
  dark: '#1976d2',
}

const DEFAULT_PALETTE_COLOR_SUCCESS: IPaletteColor = {
  light: '#81c784',
  main: '#4caf50',
  dark: '#388e3c',
}

const DEFAULT_PALETTE: IPalette = {
  type: 'light',
  primary: DEFAULT_PALETTE_COLOR_PRIMARY,
  secondary: DEFAULT_PALETTE_COLOR_SECONDARY,
  error: DEFAULT_PALETTE_COLOR_ERROR,
  warning: DEFAULT_PALETTE_COLOR_WARNING,
  info: DEFAULT_PALETTE_COLOR_INFO,
  success: DEFAULT_PALETTE_COLOR_SUCCESS,
  text: DEFAULT_PALETTE_TEXT,
  background: DEFAULT_PALETTE_BACKGROUND,
  divider: 'rgba(0, 0, 0, 0.12)',
}

const DEFAULT_THEME: ITheme = {
  palette: DEFAULT_PALETTE,
} as ITheme

const Theme: React.FC<IThemeProps> = ({ theme = DEFAULT_THEME, children }) => {
  const [data, setData] = useState<ITheme>(DEFAULT_THEME)

  useEffect(() => {
    if (!theme) {
      setData(theme)
    }
  }, [theme])

  console.log(data)

  return (
    <ThemeContext.Provider value={{ theme: data }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeProvider = Theme
