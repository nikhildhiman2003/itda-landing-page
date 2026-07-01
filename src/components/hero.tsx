import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden mt-8 md:pt-2 md:pb-20 px-6 md:px-12">
      <div className="max-w-[1370px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-start space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-50 text-[#1507A2] border border-slate-200 tracking-wide uppercase">
            Government of Uttarakhand
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
            Unified Services Portal
          </h1>

          <p className="text-base md:text-lg max-w-xl font-normal leading-relaxed">
            The ITDA Services Portal, provides a centralized platform for government
            departments to access IT infrastructure and digital services.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button className="text-white bg-[#1507A2] px-6 py-3 h-auto rounded-full gap-2 shadow-sm text-sm">
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="px-6 py-3 h-auto border-2 border-[#1507A2] rounded-full gap-2 text-sm text-[#1507A2]"
            >
              Department Registration
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="w-full h-[1px] bg-slate-100 my-4" />

          <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-2">
            <Card className="border border-slate-100 shadow-none bg-slate-50/50 rounded-2xl">
              <CardContent className="p-5 flex justify-between items-center">
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">
                    20+
                  </span>
                  <span className="text-xs  text-slate-500 mt-1 block">
                    Digital Services
                  </span>
                </div>

                <div className="p-3 bg-[#DAF2FA] border-slate-100 rounded-xl text-slate-700 ">
                  <LayoutGrid className="w-4 h-4 text-[#675585]" />
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-none bg-slate-50/50 rounded-2xl">
              <CardContent className="p-5 flex justify-between items-center">
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">
                    100+
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Departments Served
                  </span>
                </div>

                <div className="p-3 bg-[#C5FCEF] border-slate-100 rounded-xl text-slate-700">
                  <CheckCircle2 className="w-4 h-4  text-[#00C9A5]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

       <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-3xl bg-slate-50/50">
    <Image
    src="/assets/hero-image.webp"
    alt="ITDA Infrastructure"
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-contain object-center lg:object-bottom"
    
  />
    </div>
    </div>
    </section>
  )
}