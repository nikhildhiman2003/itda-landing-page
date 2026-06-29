'use client'

import { useState } from 'react'
import { WhosWho } from './../../../../types' 
import MemberRender from './member-render'

type DepartmentItem = NonNullable<WhosWho['departments']>[number]

type DashboardProps = {
  departments: DepartmentItem[]
}

export default function DepartmentRenderer({ departments }: DashboardProps) {
  const [activeTabId, setActiveTabId] = useState<string>(departments[0]?.id || '')
  const activeDepartment = departments.find((dept) => dept.id === activeTabId) || departments[0]

  return (
    <div className="w-full flex flex-col items-center gap-12">
     <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#F8FAFC] border border-slate-200/60 rounded-full gap-1">
        {departments.map((dept) => {
          const isActive = dept.id === activeTabId
          return (
            <button
              key={dept.id}
              onClick={() => setActiveTabId(dept.id || '')}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-150 ${
                isActive
                  ? 'bg-[#1E14C8] text-white shadow-sm'
                  : 'text-slate-600 hover:text-black hover:bg-slate-200/50'
              }`}
            >
              {dept.wingName}
            </button>
          )
        })}
      </div>

      <div className="w-full mt-4">
        {activeDepartment ? (
          <MemberRender department={activeDepartment} />
        ) : (
          <div className="text-center py-8 text-slate-400 text-sm">
            No items found under this directory filter.
          </div>
        )}
      </div>

    </div>
  )
}