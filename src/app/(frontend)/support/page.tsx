import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1507A2] leading-tight">
          Contact Support
        </h1>

        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4">
            <MapPin
              className="w-6 h-6 text-black shrink-0 mt-1"
              strokeWidth={2.2}
            />
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-black leading-relaxed hover:text-[#1507A2]">
              IT Bhawan, Plot No. IT-07, Sahastradhara Road, IT Park,
              Dehradun, Uttarakhand - 248013
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Phone
              className="w-6 h-6 shrink-0"
              strokeWidth={2.2}
            />
            <a
              href="tel:+911352608330"
              className="text-base sm:text-lg lg:text-xl font-semibold hover:text-[#1507A2] transition-colors"
            >
              +91 135 2608330
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail
              className="w-6 h-6 shrink-0"
              strokeWidth={2.2}
            />
            <a
              href="mailto:support@itda.uk.gov.in"
              className="text-base sm:text-lg lg:text-xl font-semibold text-black hover:text-[#1507A2] transition-colors break-all"
            >
              support@itda.uk.gov.in
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}