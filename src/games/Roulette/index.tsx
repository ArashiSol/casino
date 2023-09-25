import React from 'react'
import image from './rl3.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: `
    A miniature version of Roulette. WYSIWYG!
  `,
  image,
  theme_color: '#FFD1B0',
  app: React.lazy(() => import('./App')),
}
