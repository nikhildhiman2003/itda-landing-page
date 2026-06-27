import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const DataCenter = {
  slug: 'data-center',
  admin: {
    description: 'Data Center',
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
      type: 'text',
      name: 'vision',
      label: 'Vision Heading',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'visionInfo',
      label: 'Vision Description',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'mission',
      label: 'Mission Heading',
      required: true,
      localized: true,
    },
    {
      type: 'richText',
      name: 'missionDescription',
      label: 'Mission Description',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'functionalities',
      label: 'Functionalities Heading',
      required: true,
      localized: true,
    },
    {
      type: 'richText',
      name: 'functionalitiesDescription',
      label: 'Functionalities Description',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig