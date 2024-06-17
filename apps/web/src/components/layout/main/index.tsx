import React, { type PropsWithChildren } from 'react'

type MainProps = PropsWithChildren

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main>{children}</main>
}
