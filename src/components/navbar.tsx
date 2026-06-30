'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n'

export default function Navbar() {
  const { t } = useTranslation() 
  const pathname = usePathname()
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHindi = i18n.language === 'hi'

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
  const handleLanguageToggle = () => {
    const nextLang = isHindi ? 'en' : 'hi'
    i18n.changeLanguage(nextLang)
  }

  const navLinks = [
    { label: t('navbar.home'), href: '/' },
    { label: t('navbar.services'), href: '/services' },
    { label: t('navbar.whosWho'), href: '/whos-who' },
    { label: t('navbar.career'), href: '/career' },
  ]

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-[#F8F9FA] border-b border-slate-200">
        <div className="hidden md:block border-b border-slate-200 bg-[#F8F9FA]">
          <div className="max-w-[1440px] mx-auto px-8 h-11 flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="#main-content"
                onClick={handleSkipToMain}
                className="px-4  text-[14px] text-slate-700 hover:text-slate-900 transition-colors"
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
                <span className={`text-[14px] ${!isHindi ? 'text-black font-bold' : 'text-slate-500'}`}>
                  English
                </span>

                <button
                  onClick={handleLanguageToggle} 
                  className="relative w-10 h-5 rounded-full bg-[#43544A] p-[2px] transition-all"
                  aria-label="Toggle Language"
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition-transform duration-200 ${
                      isHindi ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>

                <span className={`text-[14px] ${isHindi ? 'text-black font-bold' : 'text-slate-500'}`}>
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

              <button title="Accessibility Options" className="flex items-center justify-center w-8 h-8">
                <img src="/assets/wheelchair.png" alt="Accessibility" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-8 h-[104px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/assets/uttrakhand-logo.webp"
                alt="Government of Uttarakhand"
                width={52}
                height={52}
                className="w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] object-contain cursor-pointer transition-opacity hover:opacity-90"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/itda-logo.png"
                alt="ITDA Logo"
                width={52}
                height={52}
                className="w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] object-contain cursor-pointer transition-opacity hover:opacity-90"
                priority
              />
            </Link>
            <div>
              <h1 className="text-[18px] sm:text-[24px] font-bold text-black leading-none">
                {isHindi ? 'ITDA सेवा पोर्टल' : 'ITDA Service Portal'}
              </h1>
              <p className="mt-1 sm:mt-2 text-[12px] sm:text-[14px] text-black">
                {isHindi ? 'उत्तराhealth सरकार' : 'Govt. of Uttarakhand'}
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-14">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`relative text-[15px] pb-2 transition-all duration-150 ${
                    isActive 
                      ? 'font-bold text-[#1E14C8]' 
                      : 'font-medium text-black hover:text-[#1E14C8]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1E14C8]" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center gap-3 h-[50px] rounded-full px-5 bg-[#1E14C8] hover:bg-[#170fa5] text-white font-semibold text-[16px] transition-all group">
              {t('navbar.login')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-slate-200/60 rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden w-full bg-[#F8F9FA] border-t border-slate-200 px-8 py-4 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-4 font-medium text-[15px] text-black">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`pb-1 border-b border-slate-200 transition-colors ${
                      isActive ? 'text-[#1E14C8] font-bold' : 'text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="pt-2 sm:hidden">
              <button className="flex items-center justify-center gap-3 h-[46px] w-full rounded-full bg-[#1E14C8] text-white font-semibold text-[15px]">
                {t('navbar.login')}
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        )}
      </header>
      <div className="h-[104px] md:h-[148px]" />
    </>
  )
}