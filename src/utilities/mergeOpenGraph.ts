import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Офіційний вебсайт Молодіжного Братства святого Стиліана ПЦУ — спільноти православної молоді для зростання у вірі та служінні.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Молодіжне Братство св. Стиліана ПЦУ',
  title: 'Молодіжне Братство св. Стиліана ПЦУ',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
