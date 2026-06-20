'use client'

import React from 'react'
import Image from 'next/image'
import { 
  CheckCircle2, 
  MousePointerClick, 
  Send, 
  FileCheck, 
  KeyRound 
} from 'lucide-react'

const bulletPoints = [
  'Statewide secure network through SWAN backbone',
  'Tier-III State Data Centre hosting & co-location',
  'Single-window service request and tracking',
  'Compliance with national e-governance standards'
]

const steps = [
  {
    number: '1',
    title: 'Select Service',
    description: 'Browse the catalogue and pick the service you require.',
    icon: MousePointerClick,
  },
  {
    number: '2',
    title: 'Submit Request',
    description: 'Fill in the digital form and submit with required attachments.',
    icon: Send,
  },
  {
    number: '3',
    title: 'Department Review',
    description: 'The concerned department reviews and processes your request.',
    icon: FileCheck,
  },
  {
    number: '4',
    title: 'Approval & Access',
    description: 'Receive approval and immediate access to your provisioned service.',
    icon: KeyRound,
  },
]

export default function AboutAndProcess() {
  return (
    <section className="w-full bg-white py-16 md:py-24 font-sans select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">

          <div className="lg:col-span-7 flex flex-col pt-0">
  
            <h2 className="text-3xl md:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight mt-0 pt-0">
              About ITDA and Step by Step Process
            </h2>
            
            <p className="text-slate-600 text-[15px] font-medium leading-relaxed mt-4 max-w-[92%]">
              The Information Technology Development Agency (ITDA) provides secure IT infrastructure 
              and digital services supporting governance across Uttarakhand. We enable departments to 
              deliver citizen-centric services through a reliable, statewide digital backbone.
            </p>

            {/* Checkmark Bullets */}
            <div className="mt-8 space-y-4">
              {bulletPoints.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-800 mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span className="text-slate-800 text-[15px] font-bold tracking-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center pt-0">

            <div className="w-full relative rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-slate-50 aspect-[4/3] max-w-[520px] mt-0">
              <Image 
                src="/assets/itda-process.webp" 
                alt="itda process" 
                fill
                className="object-cover "
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-4">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div key={idx} className="flex flex-col items-start text-left group">

                <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center relative shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="w-5 h-5 text-slate-800" strokeWidth={2.2} />

                  <span className="absolute -top-1.5 -right-1.5 bg-white text-slate-900 text-[11px] font-black w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.number}
                  </span>
                </div>

                <div className="mt-5 w-full">
                  <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed mt-2 max-w-[90%]">
                    {step.description}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}