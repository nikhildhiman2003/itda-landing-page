import React from 'react'
import Hero from '../../components/hero'
import FeaturedServices from '../../components/feature-services'
import About from '../../components/about-section'
import DepartmentServices from '../../components/department-services'
import Partners from '../../components/partners'


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow" id="main-content">
        <Hero />
        <FeaturedServices />
        <About />  
        <DepartmentServices />  
        <Partners />
        </main>
    </div>
  )}
