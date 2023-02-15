import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const sanityClient = createClient({
  projectId: 'ixhe6gva',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-01-12',
  token: process.env.SANITY_SECRET_TOKEN
});

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export { sanityClient, urlFor };