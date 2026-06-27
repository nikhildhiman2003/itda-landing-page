import { GlobalConfig } from 'payload' 
import { METADATA_FIELD } from '../utils'

export const PhotoGallery = {
  slug: 'photo-gallery',
  admin: {
    description: 'Photo Gallery',
  },
  access: {
    read: () => true, 
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'array',
      name: 'photoGallery',
      label: 'Photo Gallery',
      required: true,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
      ],
    },
  ],
} satisfies GlobalConfig