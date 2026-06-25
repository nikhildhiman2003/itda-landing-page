import React from 'react'
import './global.css' 
import '@/i18n'
import Navbar from './../../components/navbar'
import Footer from './../../components/footer'

export const metadata = {
  title: 'ITDA Service Portal - Govt. of Uttarakhand',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased text-slate-900">
      <Navbar />
      <main className="flex-grow w-full block">
         {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}