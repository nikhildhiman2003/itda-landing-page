'use client'

import { ChevronRight } from 'lucide-react'
import { Service } from './../../../../types' 

type CategoryGridProps = {
  category: NonNullable<Service['category']>
}

const COLOR_MAP = {
  cream: '#FFE8D3B2',
  leafGreen: '#D7E6D6B2',
  blue: '#C6E7F5B2',
  mintGreen: '#D3EAE8B2',
}

export default function CategoryGrid({ category }: CategoryGridProps) {
  if (!category || category.length === 0) {
    return (
      <div className="text-center py-8 text-slate-400 text-sm">
        No active services or categories configured in CMS.
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col gap-12">
      {category.map((c) => {
        return (
          <div key={c.id}>
            <h3 className="text-2xl font-semibold mb-4 text-black">{c.categoryName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {c.services?.map((s) => (
                <div
                  key={s.id}
                  className="rounded-[32px] p-8 flex flex-col gap-6 justify-between
                            hover:shadow-md transition-all duration-200 ease-in-out border border-slate-100"
                  style={{ backgroundColor: COLOR_MAP[(s.color as keyof typeof COLOR_MAP) || 'blue'] }}
                >
                  <div className="flex flex-col gap-6">
                    <h4 className="font-medium text-xl text-black">{s.name}</h4>
                    <p className="text-sm text-[#3F4940] leading-relaxed">{s.description}</p>
                  </div>
                  
                  <a
                    href={s.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-t border-gray-300/60 font-semibold flex flex-row items-center justify-between pt-4
                              hover:underline text-black group"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}