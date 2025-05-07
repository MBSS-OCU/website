// components/Card.tsx
'use client'

import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { Media } from '@/components/Media'
import React from 'react'
import RichText from '@/components/RichText'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const Card: React.FC<{
  className?: string
  image?: string | number | typeof Media | null | undefined
  title?: string
  description?: DefaultTypedEditorState // Payload RichText JSON
}> = ({ className, image, title, description }) => {
  const { card } = useClickableCard({})

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {!image && <div className="aspect-[16/9] bg-muted" />}
        {image && typeof image === 'object' && <Media resource={image} size="33vw" />}
      </div>
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {description && (
          <div className="prose prose-sm mt-2">
            <RichText data={description} enableGutter={false} />
          </div>
        )}
      </div>
    </article>
  )
}
