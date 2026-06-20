import React from 'react'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col">
      {children}
    </div>
  )
}