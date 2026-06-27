import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from '../utils'

export const Homepage = {
  slug: 'home',
  label: 'Homepage',
  admin: {
    description: 'Homepage',
  },
  access: {
    read: () => true,
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'array',
      name: 'carousel',
      label: 'Carousel',
      fields: [
        {
          type: 'upload',
          relationTo: 'media',
          name: 'image',
          required: true,
        },
      ],
    },
    {
      type: 'array',
      name: 'notifications',
      label: 'Notifications',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Title of Notification',
          required: true,
          localized: true,
        },
        {
          type: 'text',
          name: 'link',
          label: 'Link',
          required: true,
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
          type: 'array',
          name: 'images',
          label: 'Images',
          required: true,
          fields: [
            {
              type: 'upload',
              relationTo: 'media',
              name: 'image',
              label: 'Image',
            },
          ],
        },
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
        {
          type: 'text',
          name: 'link',
          label: 'View More link',
          required: true,
          localized: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'projects',
      label: 'Projects',
      fields: [
        {
          type: 'array',
          name: 'projects',
          label: 'Projects',
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
            {
              type: 'text',
              name: 'link',
              label: 'Link',
              required: true,
            },
          ],
          required: true,
        },
        {
          type: 'text',
          name: 'title',
          label: 'Title',
          required: true,
          localized: true,
        },
      ],
    },
    {
      type: 'array',
      name: 'partners',
      label: 'Partners',
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
          name: 'link',
          label: 'Link',
          required: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'photoGallery',
      label: 'Photo Gallery',
      fields: [
        {
          type: 'upload',
          relationTo: 'media',
          name: 'centerImage',
          label: 'Center Image',
          required: true,
        },
        {
          type: 'array',
          name: 'leftCarousel',
          label: 'Left Carousel',
          required: true,
          fields: [
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
          type: 'array',
          name: 'rightCarousel',
          label: 'Right Gallery',
          required: true,
          fields: [
            {
              type: 'upload',
              relationTo: 'media',
              name: 'image',
              label: 'Image',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      name: 'homepageGallery',
      label: 'Homepage Gallery',
      required: true,
      fields: [
        {
          type: 'upload',
          relationTo: 'media',
          name: 'image',
          label: 'Image',
          required: true,
        },
      ],
    },
  ],
} satisfies GlobalConfig