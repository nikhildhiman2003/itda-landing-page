import { GlobalConfig } from 'payload' 
import { METADATA_FIELD } from '../utils'

export const DocumentsPage = {
  slug: 'documents-page',
  admin: {
    description: 'Documents',
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