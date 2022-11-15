import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
 
export const client = sanityClient({
    projectId: '8zb36ss6',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-11-03',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
