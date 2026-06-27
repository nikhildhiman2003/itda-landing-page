import path from 'path'
import { CollectionConfig } from 'payload'


export const Documents = {
  slug: 'documents',
  access: {
    read:()=> true,
  },
  upload: {
    staticDir: path.resolve('public', 'documents'),
    mimeTypes: ['application/*', 'text/*'],
  },
  fields: [],
} satisfies CollectionConfig
