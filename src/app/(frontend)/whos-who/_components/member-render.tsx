'use client'

import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { WhosWho } from './../../../../types'

type DepartmentItem = NonNullable<WhosWho['departments']>[number]

type MemberRenderProps = {
  department: DepartmentItem
}

export default function MemberRender({ department }: MemberRenderProps) {
  if (!department) return null
  const officials = department.officials || []

  return (
    <div className="max-w-7xl w-full mx-auto mt-6">
      {officials.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {officials.map((member) => {
            const profileImage = member.image
            const imageUrl = profileImage && typeof profileImage === 'object' ? profileImage.url : ''

            return (
              <div
                key={member.id}
                className="border border-slate-100/80 rounded-2xl flex flex-col items-center p-8 gap-5 w-full bg-[#F4F9F8] transition-all duration-300 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={member.name ?? 'Official'}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold bg-slate-100 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="w-full text-center flex flex-col gap-1 mt-2">
                  <div className="font-bold text-xl text-slate-900 tracking-tight">{member.name}</div>
                  <div className="text-base text-slate-500 font-medium capitalize">
                    {member.designationKey}
                  </div>
                  {(member.email || member.phone) && (
                    <div className="flex flex-col items-center justify-center mt-3 pt-3 border-t border-slate-200/50 w-full gap-1.5">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center text-[#2C5E52] hover:text-emerald-700 hover:underline text-sm font-medium gap-1.5 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-[#386C5F]/80" />
                          <span className="truncate max-w-[220px]">{member.email}</span>
                        </a>
                      )}
                      {member.phone && (
                        <span className="inline-flex items-center text-slate-500 text-sm gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {member.phone}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-400 text-sm">
          No records associated under this section.
        </div>
      )}
    </div>
  )
}