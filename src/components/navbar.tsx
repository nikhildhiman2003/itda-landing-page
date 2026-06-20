'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isHindi, setIsHindi] = useState(false)

  return (
    <header className="w-full bg-white border-b border-slate-200 select-none font-sans">
      
      <div className="bg-slate-50 border-b border-slate-200 px-20 py-2 flex justify-between items-center text-slate-700 text-sm font-medium">
        
        <div>
          <Link 
            href="#main-content" 
            className="hover:text-blue-600 transition-colors focus:outline-2 focus:outline-blue-500 text-[13px]"
          >
            Skip to main content
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          
          <div className="flex items-center gap-2">
            <span className={`text-[13px] ${!isHindi ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>English</span>
            
            <button 
              onClick={() => setIsHindi(!isHindi)}
              className="w-9 h-5 bg-slate-200 rounded-full relative p-0.5 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle Language"
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${isHindi ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
            
            <span className={`text-[13px] ${isHindi ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>हिन्दी</span>
          </div>

          <div className="h-4 w-[1px] bg-slate-300" />

          <div className="flex items-center gap-1.5">
            <button className="px-2 py-0.5 border border-slate-300 bg-white rounded text-xs font-semibold shadow-xs hover:bg-slate-100 transition-colors active:scale-95">
              A-
            </button>
            <button className="px-2 py-0.5 border border-slate-300 bg-white rounded text-xs font-semibold shadow-xs hover:bg-slate-100 transition-colors active:scale-95">
              A
            </button>
            <button className="px-2 py-0.5 border border-slate-300 bg-white rounded text-xs font-semibold shadow-xs hover:bg-slate-100 transition-colors active:scale-95">
              A+
            </button>
          </div>

          <div className="h-4 w-[1px] bg-slate-300" />

          <button 
            className="p-1 text-slate-700 hover:text-slate-900 transition-colors"
            title="Accessibility Options"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <circle cx="12" cy="4" r="1" />
              <path d="m18 19 1-7-6 1" />
              <path d="m5 8 3-1 5.5 2-3.5 4.5 2.5 4.5" />
              <path d="M10 19v-3.5" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <Image 
            src="/assets/uttrakhand-logo.webp" 
            alt="Government of Uttarakhand" 
            width={48} 
            height={48} 
            className="object-contain"
            priority
          />
          <Image 
            src="/assets/itda-logo.png" 
            alt="ITDA Logo" 
            width={44} 
            height={44} 
            className="object-contain"
            priority
          />
          <div className="flex flex-col ml-1">
            <h1 className="font-extrabold text-5xl md:text-2xl text-slate-900 tracking-tight leading-none">
              ITDA Service Portal
            </h1>
            <p className="font-semibold text-slate-600 mt-1.5 tracking-wide">
              Govt. Of Uttarakhand
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-bold text-[15px] text-slate-800">
          <Link href="/" className="text-slate-900 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/whos-who" className="hover:text-blue-600 transition-colors">
            Who's Who
          </Link>
          <Link href="/career" className="hover:text-blue-600 transition-colors">
            Career
          </Link>
        </nav>

        <div className="flex items-center">
          <button className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 text-[15px] group transition-colors focus:outline-none">
            Login 
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  )
}