'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const LandingHero: React.FC<Page['hero']> = ({ links, media, background, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const widthedMedia = media &&
    typeof media === 'object' && {
      ...media,
      width: 320,
      height: 480,
    }

  return (
    <div
      className="relative -mt-[10.4rem] pt-[6.4rem] flex items-center justify-center text-white"
      data-theme="dark"
    >
      <div className="container w-2/3 mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-left">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-left gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="min-h-[80vh] select-none">
        {background && typeof background === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={background} />
        )}
      </div>
      <div className="select-none w-1/3 max-h-[30rem] overflow-hidden mb-5 mr-5 hidden md:block">
        {widthedMedia && typeof widthedMedia === 'object' && (
          <Media
            className="max-h-[30rem] w-full block"
            pictureClassName="max-h-[30rem] w-full block"
            imgClassName="-z-10 rounded-xl object-contain h-full w-full max-h-[30rem]"
            priority
            resource={widthedMedia}
          />
        )}
      </div>
    </div>
  )
}
