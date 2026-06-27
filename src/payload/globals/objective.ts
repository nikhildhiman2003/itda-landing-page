import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils' 

export const Objectives = {
  slug: 'objectives',
  admin: {
    description: 'Objectives',
  },
  access: {
    read: () => true,
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'group',
      name: 'itdaFunction',
      fields: [
        {
          type: 'text',
          name: 'subHeading',
          label: 'SubHeading',
          required: true,
          localized: true,
        },
        {
          type: 'array',
          name: 'points',
          label: 'Points',
          required: true,
          fields: [
            {
              type: 'text',
              name: 'point',
              label: 'Point',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      name: 'members',
      label: 'Members',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Name',
          required: true,
          localized: true,
        },
        {
          type: 'text',
          name: 'designation',
          label: 'Designation',
          required: true,
          localized: true,
        },
        {
          type: 'upload',
          relationTo: 'media',
          name: 'image',
          label: 'Image',
          required: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'about',
      label: 'About Us',
      fields: [
        {
          type: 'text',
          name: 'heading',
          label: 'Heading',
          required: true,
          localized: true,
        },
        {
          type: 'text',
          name: 'title',
          label: 'Title',
          required: true,
          localized: true,
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Description',
          required: true,
          localized: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'itdaObjectives',
      label: 'ITDA Objectives',
      fields: [
        {
          type: 'text',
          name: 'subTitle',
          label: 'SubTitle',
          required: true,
          localized: true,
        },
        {
          type: 'array',
          name: 'projects',
          label: 'Projects',
          required: true,
          fields: [
            {
              type: 'upload',
              relationTo: 'media',
              name: 'image',
              label: 'Image',
              required: true,
            },
            {
              type: 'text',
              name: 'title',
              label: 'Title',
              required: true,
              localized: true,
            },
            {
              type: 'text',
              name: 'subTitle',
              label: 'Sub Title',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
} satisfies GlobalConfig