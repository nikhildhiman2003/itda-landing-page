'use client'

import React from 'react'
import Image from 'next/image'
import {
  CheckCircle2,
  MousePointerClick,
  Send,
  FileCheck,
  KeyRound,
} from 'lucide-react'

const bulletPoints = [
  'Statewide secure network through SWAN backbone',
  'Tier-III State Data Centre hosting & co-location',
  'Single-window service request and tracking',
  'Compliance with national e-governance standards',
]

const PROCESS_STEPS = [
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
    description:
      'Receive approval and immediate access to your provisioned service.',
    icon: KeyRound,
  },
]

export default function AboutAndProcess() {
  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl lg:text-[42px] font-bold text-slate-900 leading-tight">
              About ITDA and Step by Step Process
            </h2>

            <p className="mt-4 text-slate-600 text-[15px] leading-7 max-w-[650px]">
              The Information Technology Development Agency (ITDA) provides
              secure IT infrastructure and digital services supporting
              governance across Uttarakhand. We enable departments to deliver
              citizen-centric services through a reliable, statewide digital
              backbone.
            </p>

            <div className="mt-8 space-y-5">
              {bulletPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-500 mt-1 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-slate-700 text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#eef2ff] border border-slate-200">
              <Image
                src="/assets/itda-process.webp"
                alt="ITDA Process"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-24">

          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-slate-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">

            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >

                  <div className="relative">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                      <Icon
                        className="w-5 h-5 text-[#1507A2]"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 rounded-full bg-[#1507A2] text-white text-[11px] font-bold flex items-center justify-center shadow">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-[16px] font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-slate-500 max-w-[250px]">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}