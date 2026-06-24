import React from 'react'
import './global.css' 

export const metadata = {
  title: 'ITDA Service Portal - Govt. of Uttarakhand',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased text-slate-900">
        {children}
      </body>
    </html>
  )
}