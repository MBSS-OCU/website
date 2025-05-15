import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTelegram,
  FaTiktok,
  FaLink,
} from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'
import { SiLinktree } from 'react-icons/si'

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className="size-6" title="Facebook" />,
  twitter: <FaXTwitter className="size-6" title="X" />,
  instagram: <FaInstagram className="size-6" title="Instagram" />,
  linkedin: <FaLinkedin className="size-6" title="LinkedIn" />,
  github: <FaGithub className="size-6" title="GitHub" />,
  youtube: <FaYoutube className="size-6" title="YouTube" />,
  telegram: <FaTelegram className="size-6" title="Telegram" />,
  tiktok: <FaTiktok className="size-6" title="TikTok" />,
  threads: <FaThreads className="size-6" title="Threads" />,
  linktree: <SiLinktree className="size-6" title="Linktree" />,
}

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const smLinks = footerData?.socialMediaLinks || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row gap-8">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>

          <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
            <nav className="flex flex-row md:flex-row gap-4 flex-wrap">
              {smLinks.map(({ url, icon }, i) => {
                return (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                    {icon ? iconMap[icon] : <FaLink className="size-6" title="Link" />}
                  </a>
                )
              })}
            </nav>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
