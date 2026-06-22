'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isHindi, setIsHindi] = useState(false)
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal')

  useEffect(() => {
    const root = document.documentElement

    if (fontSize === 'small') {
      root.style.fontSize = '14px'
    } else if (fontSize === 'large') {
      root.style.fontSize = '18px'
    } else {
      root.style.fontSize = '16px'
    }
  }, [fontSize])

  const handleSkipToMain = (e: React.MouseEvent) => {
    e.preventDefault()

    const mainSection = document.getElementById('main-content')

    if (mainSection) {
      mainSection.focus()
      mainSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full bg-[#F8F9FA] border-b border-slate-200 ">
      <div className="border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto px-8 h-11 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#main-content"
              onClick={handleSkipToMain}
              className="px-4 text-[14px] text-slate-700 hover:text-slate-900 transition-colors"
            >
              Skip to main content
            </a>

            <div className="h-11 w-px bg-slate-200" />

            <Link
              href="/sitemap"
              className="px-4 text-[14px] text-black hover:text-slate-900 transition-colors"
            >
              Sitemap
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`text-[14px] ${
                  !isHindi
                    ? 'text-black font-medium'
                    : 'text-black'
                }`}
              >
                English
              </span>

              <button
                onClick={() => setIsHindi(!isHindi)}
                className="relative w-10 h-5 rounded-full bg-[#43544A] p-[2px] transition-all"
                aria-label="Toggle Language"
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transition-transform duration-200 ${
                    isHindi ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>

              <span
                className={`text-[14px] ${
                  isHindi
                    ? 'text-black font-medium'
                    : 'text-black'
                }`}
              >
                हिन्दी
              </span>
            </div>

            <div className="h-5 w-px bg-slate-300" />

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize('large')}
                className={`w-8 h-8 rounded border text-[14px] font-medium transition-all ${
                  fontSize === 'large'
                    ? 'bg-[#43544A] text-white border-[#43544A]'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                A+
              </button>

              <button
                onClick={() => setFontSize('normal')}
                className={`w-8 h-8 rounded border text-[14px] font-medium transition-all ${
                  fontSize === 'normal'
                    ? 'bg-[#43544A] text-white border-[#43544A]'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                A=
              </button>

              <button
                onClick={() => setFontSize('small')}
                className={`w-8 h-8 rounded border text-[14px] font-medium transition-all ${
                  fontSize === 'small'
                    ? 'bg-[#43544A] text-white border-[#43544A]'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                A-
              </button>
            </div>

            <div className="h-5 w-px bg-slate-300" />

            <button
              title="Accessibility Options"
              className="flex items-center justify-center w-8 h-8"
            >
              <img
                src="/assets/wheelchair.png"
                alt="Accessibility"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 h-[104px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/uttrakhand-logo.webp"
            alt="Government of Uttarakhand"
            width={52}
            height={52}
            priority
          />

          <Image
            src="/assets/itda-logo.png"
            alt="ITDA Logo"
            width={52}
            height={52}
            priority
          />

          <div>
            <h1 className="text-[24px] font-bold text-black leading-none">
              {isHindi ? 'ITDA सेवा पोर्टल' : 'ITDA Service Portal'}
            </h1>

            <p className="mt-2 text-[14px] text-black">
              {isHindi ? 'उत्तराखंड सरकार' : 'Govt. of Uttarakhand'}
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-16">
          <Link
            href="/"
            className="relative text-[15px] font-medium text-black pb-2"
          >
            {isHindi ? 'होम' : 'Home'}

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
          </Link>

          <Link
            href="/services"
            className="text-[15px] font-medium text-black transition-colors"
          >
            {isHindi ? 'सेवाएं' : 'Services'}
          </Link>

          <Link
            href="/whos-who"
            className="text-[15px] font-medium text-black transition-colors"
          >
            {isHindi ? 'कौन कौन है' : "Who's Who"}
          </Link>

          <Link
            href="/career"
            className="text-[15px] font-medium text-black transition-colors"
          >
            {isHindi ? 'करियर' : 'Career'}
          </Link>
        </nav>
        <button
          className="flex items-center justify-center gap-3 h-[50px] -8 rounded-full px-5 bg-[#1E14C8] hover:bg-[#170fa5] text-white font-semibold text-[16px] transition-all group">

          {isHindi ? 'लॉगिन' : 'Login'}

          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </header>
  )
}