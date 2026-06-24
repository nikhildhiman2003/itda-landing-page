import React from 'react'

export const metadata = {
  title: 'Career Opportunities | ITDA Service Portal',
  description: 'Explore innovative government technology career opportunities at ITDA Uttarakhand.',
}

export default function CareerPage() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white px-4 py-16 text-center">

      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-3">
          Career Opportunity
        </h1>
        <p className="text-slate-600 text-base md:text-lg">
          Explore innovative government technology career opportunities.
        </p>
      </div>

      <div className="max-w-xl mx-auto py-10 animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-300 mb-4 tracking-tight">
          Currently No Job Available
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-medium">
          Check back later for Career Opportunities
        </p>
      </div>

    </div>
  )
}