import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const Darc = {
  slug: 'darc',
  admin: {
    description: 'Darc',
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
      name: 'missionAndVision',
      label: 'Mission And Vision',
      required: true,
    },
    {
      type: 'richText',
      name: 'missinoAndVisionPoints',
      label: 'Mission And Vision Points',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'objective',
      label: 'Objective',
      required: true,
    },
    {
      type: 'richText',
      name: 'objectivePoints',
      label: 'Objective Points',
      required: true,
      localized: true,
    },
  ],
} satisfies GlobalConfig