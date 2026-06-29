import { getCachedGlobal } from '@/lib/payload'
import CategoryGrid from './_components/category-grid'

export default async function ServicesPage() {
  const servicesData = await getCachedGlobal('services')

  if (!servicesData) {
    return (
      <div className="p-20 text-center text-slate-500">
        Services configuration not found in CMS.
      </div>
    )
  }

  return (
    <main className="w-full pt-[90px] pb-20 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col gap-2">
          <h1 className="text-5xl md:text-5xl font-semibold text-black tracking-tight">
            Our All Services
          </h1>
          <p className="md:text-lg text-black mt-2">
            Access essential ITDA services designed for efficient, secure, and streamlined operations.
          </p>
        </div>
        <CategoryGrid category={servicesData.category || []} />
      </div>
    </main>
  )
}