'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { StoreContextWrapper } from '../store'
import { useReducer } from 'react'
import reducer from '../store/reducer'
import { globalState } from '../store/state'

export default function Providers({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(reducer, globalState)
  
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='light'
      >
        <StoreContextWrapper.Provider value={ {state, dispatch} }>
          {children}
        </StoreContextWrapper.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}