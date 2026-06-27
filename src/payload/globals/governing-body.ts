import { GlobalConfig } from 'payload' 
import { METADATA_FIELD } from '../utils'

export const GoverningBody = {
  slug: 'governing-body',
  admin: {
    description: 'Governing Body',
  },
  access: {
    read: () => true, 
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'description',
      label: 'Description',
      required: true,
      localized: true,
    },
    {
      type: 'array',
      name: 'members',
      label: 'Members',
      required: true,
      fields: [
        {
          type: 'number',
          name: 'sno',
          label: 'Serial Number',
          required: true,
        },
        {
          type: 'text',
          name: 'name',
          label: 'Name',
          required: true,
          localized: true,
        },
        {
          type: 'text',
          name: 'position',
          label: 'Position',
          required: true,
          localized: true,
        },
      ],
    },
  ],
} satisfies GlobalConfig