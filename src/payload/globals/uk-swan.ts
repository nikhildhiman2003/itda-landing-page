import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const UKSwan = {
  slug: 'uk-swan',
  admin: {
    description: 'UK SWAN',
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
    },
    {
      type: 'text',
      name: 'about',
      label: 'About',
      required: true,
    },
    {
      type: 'text',
      name: 'highlights',
      label: 'Highlights Heading',
      required: true,
    },
    {
      type: 'richText',
      name: 'highlightsPoints',
      label: 'Highlight Points',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig