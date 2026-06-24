'use client'

import React from 'react'
import { 
  Database, 
  Network, 
  Lightbulb, 
  Briefcase 
} from 'lucide-react'

const SERVICE_CARDS_DATA = [
  {
    title: 'State Data Centre (SDC)',
    description: 'Provides secure hosting, storage, and reliable server infrastructure for applications.',
    count: '15',
    icon: Database,
    bgClass: 'bg-[#ff7d44] text-[#FFFFFF]', 
  },
  {
    title: 'SWAN',
    description: 'Enables secure connectivity and communication across government offices statewide networks.',
    count: '04',
    icon: Network,
    bgClass: 'bg-[#00b06b] text-[#FFFFFF]', 
  },
  {
    title: 'Startup Cell',
    description: 'Supports startups with infrastructure, approvals, and innovation-driven ecosystem facilitation.',
    count: '01',
    icon: Lightbulb,
    bgClass: 'bg-[#00a3a6] text-[#FFFFFF]', 
  },
  {
    title: 'Administration',
    description: 'Manages operations, approvals, and facility services including meeting hall bookings.',
    count: '02',
    icon: Briefcase,
    bgClass: 'bg-[#7c83d7] text-[#FFFFFF]', 
  },
]

export default function DepartmentServices() {
  return (
    <section className="w-full bg-white py-16 font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-[36px] font-bold text-slate-950 tracking-tight">
            Services by Department
          </h2>
          <p className="text-black text-[14.5px] font-medium mt-2">
            Explore ITDA services organized by specialized departments for efficient delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ">
          {SERVICE_CARDS_DATA.map((dept, idx) => {
            const IconComponent = dept.icon
            return (
              <div 
                key={idx}
                className={`${dept.bgClass} rounded-2xl p-7 min-h-[230px] flex flex-col justify-between shadow-xs relative group transition-transform duration-300`}
              >
                <div className="flex items-start justify-between w-full ">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#FFFFFF]" strokeWidth={2} />
                  </div>
                  <span className="text-[#FFFFFF] text-lg font-black tracking-tight mt-1">
                    {dept.count}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-extrabold tracking-tight leading-tight">
                    {dept.title}
                  </h3>
                  <p className="text-[#FFFFFF] text-[13px] font-medium leading-relaxed mt-2.5">
                    {dept.description}
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