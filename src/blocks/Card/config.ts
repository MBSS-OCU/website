// fields/card.ts
import { Block, Field } from 'payload'

export const cardField: Field = {
  name: 'card',
  label: 'Card',
  type: 'group',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
  ],
}

export const Card: Block = {
  slug: 'card',
  interfaceName: 'Card',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
  ],
}
