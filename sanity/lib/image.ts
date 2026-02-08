import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

import type { SanityImageSource } from 'sanity'

const builder = createImageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}