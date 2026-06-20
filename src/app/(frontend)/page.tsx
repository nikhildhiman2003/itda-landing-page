import React from 'react'
import Navbar from '../../components/navbar'
import Hero from '../../components/hero'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
    
      <Navbar />
      <main className="flex-grow" id="main-content">
        <Hero />
      </main>
    </div>
  )}
