// components/BlockHeader/Component.tsx
'use client'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const BlockHeader: React.FC<{
  className?: string
  title?: string
  description?: DefaultTypedEditorState | null // Payload RichText JSON
}> = ({ className, title, description }) => {
  return (
    <article
      className={cn(
        'p-4 items-center justify-center text-center w-full flex flex-col pb-0',
        className,
      )}
    >
      {title && <h3 className="text-3xl font-bold mb-2">{title}</h3>}
      <span className="h-1 w-24 bg-brand"></span>
      {description && (
        <div className="prose prose-sm mt-2">
          <RichText data={description} enableGutter={true} />
        </div>
      )}
    </article>
  )
}
