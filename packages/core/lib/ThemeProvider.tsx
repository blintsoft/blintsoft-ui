import React from 'react'

import { ThemeContext } from './Context'
import { IThemeProps } from './types'

const ThemeProvider: React.FC<IThemeProps> = ({ theme = {}, children }) => {
  console.log(theme)
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
