import { Block } from 'payload'

export const BlockHeader: Block = {
  slug: 'blockHeader',
  interfaceName: 'BlockHeader',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
  ],
}
