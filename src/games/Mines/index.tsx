import React from 'react'
import image from './mines3.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  description: `
    There's money hidden beneath the squares. The reward will increase the more squares you reveal, but watch out for the 5 hidden mines. Touch one and you'll go broke. You can cash out at any time.
  `,
  theme_color: '#EEE3EC',
  image,
  app: React.lazy(() => import('./Mines')),
}
