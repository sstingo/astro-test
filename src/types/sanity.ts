export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: SanityImage;
  publishedAt: string;
  category?: Category;
  tags?: Tag[];
  body?: any[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
