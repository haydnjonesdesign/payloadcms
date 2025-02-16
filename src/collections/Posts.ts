import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({}),
    }
  ],
  versions: {
    drafts: true,
    autosave: {
      interval: 100, // We set this interval for optimal live preview
    },
  },
  admin: {
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `http://localhost:3000/${doc.slug}?locale=${locale}`
      }

      return null
    },
  },
}
