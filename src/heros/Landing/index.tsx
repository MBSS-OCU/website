'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const LandingHero: React.FC<Page['hero']> = ({
  links,
  media,
  background,
  title,
  description,
}) => {
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
      <div className="container md:w-3/5 mb-8 z-10 relative flex items-center justify-center gap-20">
        <div className="xl:min-w-[42rem] lg:min-w-[32rem] md:min-w-[26rem] md:text-left">
          {title && (
            <p className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight">
              {title}
            </p>
          )}
          {description && <p className="mb-10 text-xl lg:max-w-[35rem]">{description}</p>}
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
        <div className="select-none min-w-[16rem] md:min-w-[13rem] lg:min-w-[16rem] xl:min-w-[20rem] max-h-[40rem] overflow-hidden mb-5 mr-5 hidden md:block">
          {widthedMedia && typeof widthedMedia === 'object' && (
            <Media
              className="max-h-[40rem] w-full block"
              pictureClassName="max-h-[40rem] w-full block"
              imgClassName="-z-10 rounded-xl object-contain h-full w-full max-h-[40rem]"
              priority
              resource={widthedMedia}
            />
          )}
        </div>
      </div>

      <div className="min-h-[80vh] select-none">
        {background && typeof background === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={background} />
        )}
      </div>
    </div>
  )
}
