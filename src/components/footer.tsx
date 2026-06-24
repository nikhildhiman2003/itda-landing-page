'use client'

import React from 'react'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1325] text-slate-400 pt-16 pb-8 font-sans select-none border-t border-slate-900">
      <div className="max-w-[1370px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/60">
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-xs">
                <Image src="/assets/uttrakhand-logo.webp" alt="Govt. of Uttarakhand Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center shadow-xs">
                <Image src="/assets/itda-logo.png" alt="ITDA Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col ml-1">
                <span className="text-white text-lg font-extrabold tracking-tight leading-tight">
                  ITDA Service Portal
                </span>
                <span className="text-[10.5px] font-black tracking-wider text-slate-500 uppercase mt-0.5">
                  Government of Uttarakhand
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-[13.5px] font-medium leading-relaxed max-w-[90%]">
              Information Technology Development Agency — building secure digital infrastructure and citizen-centric e-governance for the people of Uttarakhand.
            </p>

            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.2} />
                <span className="text-slate-300 text-[13.5px] font-semibold leading-relaxed max-w-[85%]">
                  IT Bhawan Plot No. IT-07, Sahastradhara Rd, IT Park, Dehradun, Uttarakhand 248013
                </span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Phone className="w-4.5 h-4.5 text-emerald-500 shrink-0" strokeWidth={2.2} />
                <a href="tel:+911352608330" className="text-slate-300 text-[13.5px] font-semibold hover:text-emerald-400 transition-colors">
                  +91 135 2608330
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-4.5 h-4.5 text-emerald-500 shrink-0" strokeWidth={2.2} />
                <a href="mailto:support@itda.uk.gov.in" className="text-slate-300 text-[13.5px] font-semibold hover:text-emerald-400 transition-colors break-all">
                  support@itda.uk.gov.in
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start lg:pl-4">
            <span className="text-white text-[12px] font-black tracking-widest uppercase mb-6 text-slate-200">
              Pages
            </span>
            <ul className="space-y-3.5">
              {['Home Page', 'Services', "Who's Who", 'Career'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/[' ]/g, '')}`} className="text-[13.5px] font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-start">
            <span className="text-white text-[12px] font-black tracking-widest uppercase mb-6 text-slate-200">
              Quick Links
            </span>
            <ul className="space-y-3.5">
              {['Privacy Policy', 'Disclaimer', 'Accessibility', 'Sitemap', 'Help', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/[ &]/g, '-')}`} className="text-[13.5px] font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start">
            <span className="text-white text-[12px] font-black tracking-widest uppercase mb-6 text-slate-200">
              Helpdesk
            </span>
            <p className="text-slate-400 text-[13.5px] font-medium leading-relaxed mb-4">
              For technical assistance & queries, reach out to the ITDA helpdesk.
            </p>
            <a 
              href="/support" 
              className="inline-flex items-center gap-1.5 font-bold text-emerald-500 hover:text-emerald-400 text-[14px] group transition-colors focus:outline-none mt-2"
            >
              Contact Support
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
            </a>
          </div>

        </div>

        <div className="w-full pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-slate-500 text-[12.5px] font-bold leading-relaxed max-w-2xl">
            © 2026 Contents of this website is published and managed by Information Technology Development Agency (ITDA), Department of IT
          </p>
          
          <div className="flex items-center gap-5 text-slate-400">
            {[
              { icon: "/assets/insta-logo.svg", href: 'https://instagram.com', alt: 'Instagram' },
              { icon: "/assets/fb-logo.svg", href: 'https://facebook.com', alt: 'Facebook' },
              { icon: "/assets/linkedin-logo.svg", href: 'https://linkedin.com', alt: 'LinkedIn' },
              { icon: "/assets/yt-logo.svg", href: 'https://youtube.com', alt: 'YouTube' },
              { icon: "/assets/twitter.svg", href: 'https://twitter.com', alt: 'Twitter' },
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none">
              <Image src={social.icon} alt={social.alt} width={20} height={20} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}