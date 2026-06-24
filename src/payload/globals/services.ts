import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from './../utils'
export const Services: GlobalConfig = {
  slug: 'services',
  admin: {
    description: 'Manage Main Services Categories Grid Portal Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'array',
      name: 'category',
      label: 'Service Categories',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'categoryName',
          label: 'Category Name',
          required: true,
          localized: true,
        },
        {
          type: 'array',
          name: 'services',
          label: 'Services Under Category',
          required: true,
          fields: [
            {
              type: 'text',
              name: 'name',
              label: 'Service Name',
              required: true,
              localized: true,
            },
            {
              type: 'textarea',
              name: 'description',
              label: 'Service Brief Description',
              required: true,
              localized: true,
            },
            {
              type: 'text',
              name: 'link',
              label: 'Service Redirect URL / Link',
              required: true,
            },
            {
              type: 'select',
              name: 'color',
              label: 'UI Theme Card Color Accent',
              options: [
                { label: 'Cream Accent', value: 'cream' },
                { label: 'Leaf Green Accent', value: 'leafGreen' },
                { label: 'Sky Blue Accent', value: 'blue' },
                { label: 'Mint Green Accent', value: 'mintGreen' },
              ],
              required: true,
            },
          ],
        },
      ],
    },
  ],
}