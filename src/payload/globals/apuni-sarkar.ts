import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const ApuniSarkar = {
  slug: 'apuni-sarkar',
  admin: {
    description: 'Apuni Sarkar',
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
      label: 'Hero Image / Illustration',
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
      type: 'richText',
      name: 'description',
      label: 'Description',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'link',
      label: 'Redirect Link / URL',
      required: true,
    },
  ],
} satisfies GlobalConfig