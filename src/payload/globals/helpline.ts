import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const CMHelpline = {
  slug: 'cm-helpline',
  admin: {
    description: 'CM Helpline',
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
      name: 'visit',
      label: 'Visit Link Rich Text',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig