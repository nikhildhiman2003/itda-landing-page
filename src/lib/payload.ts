import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getCachedGlobal(slug: string) {
  const payload = (await getPayload({ config })) as any
  try {
    const data = await payload.findGlobal({
      slug: slug,
    })
    return data
  } catch (error) {
    console.error(`Error loading database attributes for global [${slug}]:`, error)
    return null
  }
}