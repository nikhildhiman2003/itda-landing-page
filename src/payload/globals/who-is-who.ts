import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from './../utils'

export const WhoIsWho: GlobalConfig = {
  slug: 'whos-who',
  admin: {
    description: 'whos-who',
  },
  access: {
    read: () => true,
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'array',
      name: 'departments',
      label: 'Department Wings / Categories',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'wingName',
          label: 'Wing / Department Name',
          required: true,
          localized: true, 
        },
        {
          type: 'array',
          name: 'officials',
          label: 'Officials Under Wing',
          required: true,
          fields: [
            {
              type: 'text',
              name: 'name',
              label: 'Official Full Name',
              required: true,
            },
            {
              type: 'text',
              name: 'designationKey',
              label: 'Designation Translation Key',
              required: true,
              admin: {
                description: 'i18n hook text trigger key (e.g., director, jointDirector)',
              },
            },
            {
              type: 'text',
              name: 'email',
              label: 'Official Email ID',
              required: true,
            },
            {
              type: 'text',
              name: 'phone',
              label: 'Official Contact / Intercom Phone',
              required: true,
            },
            {
              type: 'upload',
              name: 'image',
              label: 'Official Profile Photo',
              relationTo: 'media',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}