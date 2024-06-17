import React from 'react'

type HeaderProps = {
  title?: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className="font-semibold">{title ?? 'Playground'}</h1>
    </header>
  )
}
