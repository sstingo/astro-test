import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export function getResponsiveImageUrl(source: any, width: number = 800) {
  return urlFor(source).width(width).auto('format').url();
}

export function getImageSrcSet(source: any) {
  const widths = [400, 800, 1200, 1600];
  return widths
    .map((width) => `${urlFor(source).width(width).auto('format').url()} ${width}w`)
    .join(', ');
}
