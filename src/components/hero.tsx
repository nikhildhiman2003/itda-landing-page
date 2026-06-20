import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-2 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-start space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-50 text-slate-800 border border-slate-200 tracking-wide uppercase">
            Government of Uttarakhand
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Unified Services Portal
          </h1>
          
          <p className="text-base md:text-lg  max-w-xl font-normal leading-relaxed">
            The ITDA Services Portal provides a centralized platform for government departments to access IT infrastructure and digital services.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button className="text-black px-6 py-3 h-auto rounded-xl gap-2 shadow-sm text-sm">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="px-6 py-6 h-auto border-2 rounded-2xl gap-2 text-sm text-slate-800">
              Department Registration <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="w-full h-[1px] bg-slate-100 my-4" />

          <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-2">
            <Card className="border border-slate-100 shadow-none bg-slate-50/50 rounded-2xl">
              <CardContent className="p-5 flex justify-between items-center">
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">20+</span>
                  <span className="text-xs font-bold text-slate-500 mt-1 block">Digital Services</span>
                </div>
                <div className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-sm">
                  <LayoutGrid className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-none bg-slate-50/50 rounded-2xl">
              <CardContent className="p-5 flex justify-between items-center">
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">100+</span>
                  <span className="text-xs font-bold text-slate-500 mt-1 block">Departments Served</span>
                </div>
                <div className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        
        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-100">
          <Image 
            src="/assets/hero-image.webp" 
            alt="ITDA Infrastructure Diagram" 
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}