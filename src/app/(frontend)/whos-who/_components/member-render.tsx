'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'
import { WhosWho } from './../../../../types'

type DepartmentItem = NonNullable<WhosWho['departments']>[number]

type MemberRenderProps = {
  department: DepartmentItem
}

export default function MemberRender({ department }: MemberRenderProps) {
  if (!department) return null

  const getLocalizedText = (field: any): string => {
    if (field && typeof field === 'object') {
      return field.en || field.hi || Object.values(field)[0] || ''
    }
    return typeof field === 'string' ? field : ''
  }

  const isTableMode = 
    department.memberInformationStructure === 'memberTable' || 
    (('tableInfo' in department || 'memberTableInformation' in department) && !('memberInformation' in department))

  // Member Table
  if (isTableMode) {
    const tableRows = (department as any).memberTableInformation || (department as any).tableInfo || []

    return (
      <div className="max-w-7xl w-full mx-auto px-4 md:px-0 mt-6 overflow-x-auto">
        <table className="w-full min-w-[800px] border border-slate-200/80 rounded-xl overflow-hidden shadow-sm border-collapse bg-white">
          <thead>
            <tr className="bg-[#E2E5E9] border-b border-slate-300">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800 w-[80px]">Sr. No</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Designation</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Department</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-800">Email ID</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.length > 0 ? (
              tableRows.map((member: any, index: number) => (
                <tr 
                  key={member.id || index} 
                  className="border-b border-slate-200/60 transition-colors hover:bg-slate-50/80 bg-[white]"
                >
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{getLocalizedText(member.name)}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{getLocalizedText(member.designation)}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {getLocalizedText(member.department) || getLocalizedText(department.wingName)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-[#1E14C8] hover:underline break-all font-medium inline-flex items-center gap-1"
                      >
                        {member.email}
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-12 text-slate-400 text-sm bg-white">
                  No records listed under this department table view.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  // Direct Member
  const gridMembers = (department as any).memberInformation || (department as any).memberInfo || []

  return (
    <div className="max-w-7xl w-full mx-auto mt-6 px-4 md:px-0">
      {gridMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {gridMembers.map((member: any) => {
            const profileImage = member.image
            const imageUrl = profileImage && typeof profileImage === 'object' ? profileImage.url : ''

            return (
              <div
                key={member.id}
                className="border border-slate-100/80 rounded-2xl flex flex-col items-center p-8 gap-5 w-full bg-[#F4F9F8] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                  {imageUrl ? (
                    <Image src={imageUrl} alt={getLocalizedText(member.name) || 'Official'} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold bg-slate-100 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                <div className="w-full text-center flex flex-col gap-1 mt-2">
                  <div className="font-bold text-xl text-slate-900 tracking-tight">{getLocalizedText(member.name)}</div>
                  <div className="text-base text-slate-500 font-medium">{getLocalizedText(member.designation)}</div>
                  
                  {member.email && (
                    <div className="flex items-center justify-center mt-3 pt-3 border-t border-slate-200/50 w-full">
                      <a href={`mailto:${member.email}`} className="inline-flex items-center text-[#2C5E52] hover:text-emerald-700 hover:underline text-sm font-medium gap-1.5">
                        <Mail className="w-4 h-4 text-[#386C5F]/80" />
                        <span className="truncate max-w-[220px]">{member.email}</span>
                      </a>
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