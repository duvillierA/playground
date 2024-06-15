import React from 'react'

export const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button type="button" className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
      {children}
    </button>
  )
}
