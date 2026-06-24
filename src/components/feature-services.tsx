'use client'

import React from 'react'
import { 
  Server, 
  Wifi, 
  Rocket, 
  Calendar, 
  Mail, 
  FileText, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react'

const SERVICES = [
  {
    title: 'New VM',
    description: 'Create and deploy secure virtual machines for government department infrastructure needs.',
    tag: 'STATE DATA CENTER',
    icon: Server,
    bgClass: 'bg-[#edf5eb] text-slate-950 border-emerald-100/50', 
    tagColor: 'text-emerald-800',
  },
  {
    title: 'Existing Connectivity',
    description: 'Manage and monitor existing government network connectivity infrastructure services.',
    tag: 'SWAN',
    icon: Wifi,
    bgClass: 'bg-[#e9f3f1] text-slate-950 border-teal-100/50', 
    tagColor: 'text-teal-800',
  },
  {
    title: 'UK Startup Support',
    description: 'Access startup infrastructure support, facilitation, mentorship, and innovation ecosystem services.',
    tag: 'STARTUP CELL',
    icon: Rocket,
    bgClass: 'bg-[#e3f2f7] text-slate-950 border-sky-100/50', 
    tagColor: 'text-sky-800',
  },
  {
    title: 'Meeting Hall Booking',
    description: 'Reserve ITDA conference halls and meeting facilities for official departmental activities.',
    tag: 'ADMINISTRATION',
    icon: Calendar,
    bgClass: 'bg-[#ebf0f5] text-slate-950 border-slate-200/60', 
    tagColor: 'text-slate-600',
  },
  {
    title: 'Request For New Email',
    description: 'Request official government email accounts and secure departmental communication access.',
    tag: 'ADMINISTRATION',
    icon: Mail,
    bgClass: 'bg-[#def3fa] text-slate-950 border-cyan-100/50', 
    tagColor: 'text-cyan-800',
  },
  {
    title: 'Grievance Redressal',
    description: 'Submit and resolve IT infrastructure and service-related grievances efficiently.',
    tag: 'SWAN',
    icon: FileText,
    bgClass: 'bg-[#fbf0e6] text-slate-950 border-orange-100/50',
    tagColor: 'text-orange-800',
  },
]

export default function FeaturedServices() {
  return (
   <section className="relative w-full bg-white overflow-hidden pt-0 pb-2 md:pb-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1370px] mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 tracking-tight">
              Featured Services
            </h2>
            <p className="text-slate-600 text-[15px] font-medium mt-2">
              Access essential ITDA services quickly through a centralized and secure digital platform.
            </p>
          </div>
          
          <div>
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors text-[15px] group focus:outline-none"
            >
              View All Services
              <ExternalLink className="w-4 h-4 text-slate-800 group-hover:text-blue-600 transition-colors" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className={`${service.bgClass} border border-transparent rounded-2xl p-7 md:p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden group`}
              >
                
                <div className="flex items-center justify-between w-full">
                  <div className="text-slate-800">
                    <IconComponent className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <span className={`text-[10px] md:text-[11px] font-black tracking-widest uppercase opacity-75 ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>

                <div className="my-5">
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 text-[13.5px] font-medium leading-relaxed mt-2.5 max-w-[95%]">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button className="inline-flex items-center gap-1.5 font-bold text-slate-950 text-[14px] hover:text-blue-700 group/btn transition-colors focus:outline-none">
                    Apply Now
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </button>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}