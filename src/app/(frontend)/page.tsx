import React from 'react'
import Navbar from '../../components/navbar'
import Hero from '../../components/hero'
import FeaturedServices from '../../components/feature-services'
import About from '../../components/about-section'
import DepartmentServices from '../../components/department-services'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
    
      <Navbar />
      <main className="flex-grow" id="main-content">
        <Hero />
        <FeaturedServices />
        <About />  
        <DepartmentServices />    
        </main>
    </div>
  )}
