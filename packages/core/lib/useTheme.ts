import { useContext } from 'react'

import { ThemeContext } from './Context'
import { IThemeContext } from './types'

export function useTheme() {
  const context = useContext<IThemeContext>(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider')
  }

  return context
}
