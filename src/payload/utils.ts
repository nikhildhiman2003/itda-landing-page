import { Field } from 'payload'

export const METADATA_FIELD: Field = {
  type: 'group',
  name: 'metadata',
  label: 'Metadata Settings (SEO)',
  fields: [
    { 
      type: 'text', 
      name: 'title', 
      label: 'Meta Title',
      localized: true 
    },
    { 
      type: 'textarea', 
      name: 'description', 
      label: 'Meta Description',
      localized: true 
    },
  ],
}
export function getURLFromMedia(media: any) {
  if (typeof media === 'string') {
    return media
  } else if (media && typeof media.url === 'string') {
    return media.url
  }
  return ''
}