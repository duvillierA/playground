import React, { type PropsWithChildren } from 'react'

type MainProps = PropsWithChildren

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="container mx-auto grid gap-2 py-3">{children}</main>
}
