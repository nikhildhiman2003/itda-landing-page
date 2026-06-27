import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const Tenders = {
  slug: 'tenders',
  admin: {
    description: 'Manage Tenders Settings',
  },
  access: {
    read: () => true, 
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'array',
      name: 'documents',
      label: 'Documents',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'documentName',
          label: 'Document Label',
          required: true,
          localized: true,
        },
        {
          type: 'upload',
          name: 'fileDoc',
          relationTo: 'documents' as any,
          label: 'PDF File',
          required: true,
        },
      ],
    },
  ],
} satisfies GlobalConfig