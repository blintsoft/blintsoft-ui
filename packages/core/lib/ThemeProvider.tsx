import React, { useEffect, useState } from 'react'

import { ThemeContext } from './Context'
import { IThemeProps, ITheme } from './types'

const themeJson = require('./theme.json')

const DEFAULT_THEME: ITheme = {
  palette: themeJson,
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
