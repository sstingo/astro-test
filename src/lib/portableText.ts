import { toHTML } from '@portabletext/to-html';
import { urlFor } from './imageUrl';

export function portableTextToHtml(blocks: any[]) {
  return toHTML(blocks, {
    components: {
      types: {
        image: ({ value }) => {
          const imageUrl = urlFor(value).width(800).auto('format').url();
          const alt = value.alt || '';
          return `<figure>
            <img src="${imageUrl}" alt="${alt}" loading="lazy" />
            ${alt ? `<figcaption>${alt}</figcaption>` : ''}
          </figure>`;
        },
      },
    },
  });
}
