import { GlobalConfig } from 'payload' 
import { METADATA_FIELD } from '../utils'

export const GatiShakti = {
  slug: 'gati-shakti',
  admin: {
    description: 'Gati Shakti',
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
      name: 'accessiblePoints',
      label: 'Accessible Points',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'features',
      label: 'Features Heading',
      required: true,
      localized: true,
    },
    {
      type: 'richText',
      name: 'featuresPoints',
      label: 'Features Points',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig