import { GlobalConfig } from 'payload' 
import { METADATA_FIELD } from '../utils'

export const  ItdaCalc = {
  slug: 'itda-calc',
  admin: {
    description: 'ITDA CALC',
  },
  access: {
    read: () => true,
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'upload',
      relationTo: 'media',
      name: 'heroImage',
      label: 'Hero Image',
      required: true,
    },
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'about',
      label: 'About',
      required: true,
      localized: true,
    },
    {
      type: 'richText',
      name: 'visitLink',
      label: 'Visit Link Rich Text',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig