import { GlobalConfig } from 'payload'
import { METADATA_FIELD } from './../utils'

export const WhoIsWho: GlobalConfig = {
  slug: 'whos-who',
  admin: {
    description: 'whos-who configuration layout panel',
  },
  access: {
    read: () => true,
  },
  fields: [
    METADATA_FIELD,
    {
      type: 'array',
      name: 'departments',
      label: 'Department  / Categories',
      required: true,
      fields: [
        {
          type: 'text',
          name: 'wingName', 
          label: 'Department Name',
          required: true,
        },
        {
          type: 'select',
          name: 'memberInformationStructure',
          label: 'Member Information Structure',
          required: true,
          defaultValue: 'directMembers',
          options: [
            { label: 'Direct Members', value: 'directMembers' },
            { label: 'Member Table', value: 'memberTable' },
          ],
        },
        {
          type: 'array',
          name: 'memberTableInformation',
          label: 'Member Table Information',
          admin: {
            condition: (_, siblingData) => siblingData?.memberInformationStructure === 'memberTable',
          },
          fields: [
            { type: 'text', name: 'name', label: 'Name', required: true },
            { type: 'text', name: 'designation', label: 'Designation', required: true },
            { type: 'text', name: 'department', label: 'Department', required: true },
            { type: 'text', name: 'email', label: 'Email', required: true },
          ],
        },
        {
          type: 'array',
          name: 'memberInformation',
          label: 'Member Information',
          admin: {
            condition: (_, siblingData) => siblingData?.memberInformationStructure === 'directMembers',
          },
          fields: [
            { type: 'upload', name: 'image', label: 'Image', relationTo: 'media', required: true },
            { type: 'text', name: 'name', label: 'Name', required: true },
            { type: 'text', name: 'designation', label: 'Designation', required: true },
            { type: 'text', name: 'email', label: 'Email', required: true },
          ],
        },
      ],
    },
  ],
}

export default WhoIsWho