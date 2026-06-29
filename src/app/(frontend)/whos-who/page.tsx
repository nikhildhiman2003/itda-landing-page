import { getCachedGlobal } from '@/lib/payload'
import DepartmentRenderer from './../whos-who/_components/department-info'

export default async function WhoIsWhoPage() {
  const whoIsWhoData = await getCachedGlobal('whos-who')

  if (!whoIsWhoData || !whoIsWhoData.departments) {
    return (
      <div className="p-20 text-center text-slate-500">
        Who's Who directory configuration not found in CMS.
      </div>
    )
  }
  return (
    <main className="w-full pt-[90px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        
        <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Who’s Who
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Discover the experienced leaders shaping secure and efficient digital governance across the state.
          </p>
        </div>
        <DepartmentRenderer departments={whoIsWhoData.departments} />
      </div>
    </main>
  )
}