'use client'

import type { Dispatch, ReactNode } from 'react'
import React, { createContext, useReducer } from 'react'

import type { StoreAction, StoreState } from '@/components/common/store/reducer'
import { storeReducer } from '@/components/common/store/reducer'

interface StoreContextType {
  state: StoreState
  dispatch: Dispatch<StoreAction>
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined)

interface StoreProviderProps {
  children: ReactNode
  initialState: StoreState
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}
