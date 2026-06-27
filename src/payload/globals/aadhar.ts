import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const Aadhar: GlobalConfig = {
  slug: 'aadhar',
  admin: {
    description: 'Aadhar',
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
      required: true,
      label: 'Hero Image Asset',
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
      label: 'About Section Text',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'stats',
      label: 'Statistics Main Title',
      required: true,
      localized: true,
    },
    {
      type: 'richText',
      name: 'statPoints',
      label: 'Statistical Bullet Points',
      required: true,
      localized: true,
    },
  ],
}