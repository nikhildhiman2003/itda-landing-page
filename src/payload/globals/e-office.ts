import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const EOffice = {
  slug: 'e-office',
  admin: {
    description: 'E-Office',
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
      name: 'objectives',
      label: 'Objectives Heading',
      required: true,
    },
    {
      type: 'richText',
      name: 'objectivesPoints',
      label: 'Objective Points',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'uttrakhandStatus',
      label: 'Uttarakhand Status Heading',
      required: true,
    },
    {
      type: 'richText',
      name: 'uttrakhandStatusPoints',
      label: 'Uttarakhand Status Points',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig