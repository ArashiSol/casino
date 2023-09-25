import React from 'react'
import image from './flip3.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: `
    Pick Heads or Tails. Double your money or go broke. Simple as.
  `,
  image,
  theme_color: '#ccffff',
  app: React.lazy(() => import('./App')),
}
