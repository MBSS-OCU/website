import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Вітаємо в Адмінці!</h4>
        <a
          href="https://payloadcms.com/docs/getting-started/what-is-payload"
          rel="noopener noreferrer"
          target="_blank"
        >
          Payload Початок
        </a>
      </Banner>
    </div>
  )
}

export default BeforeDashboard
