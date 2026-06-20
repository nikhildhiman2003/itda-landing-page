import React from 'react'

export const metadata = {
  title: 'ITDA Service Portal - Govt. of Uttarakhand',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="min-h-screen bg-white antialiased text-slate-900">
        {children}
      </body>
    </html>
  )
}