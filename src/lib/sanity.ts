import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2025-02-15',
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
});

export async function getAllPosts() {
  return await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, mainImage,
    "category": category->{title, slug},
    "tags": tags[]->{title, slug}
  }`);
}

export async function getPostBySlug(slug: string) {
  return await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, publishedAt, mainImage, body, seo,
    "category": category->{title, slug, description},
    "tags": tags[]->{title, slug}
  }`, { slug });
}

export async function getPostsByCategory(categorySlug: string) {
  return await sanityClient.fetch(`*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, mainImage,
    "category": category->{title, slug},
    "tags": tags[]->{title, slug}
  }`, { categorySlug });
}

export async function getPostsByTag(tagSlug: string) {
  return await sanityClient.fetch(`*[_type == "post" && $tagSlug in tags[]->slug.current] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, mainImage,
    "category": category->{title, slug},
    "tags": tags[]->{title, slug}
  }`, { tagSlug });
}

export async function getAllCategories() {
  return await sanityClient.fetch(`*[_type == "category"] | order(title asc) {
    _id, title, slug, description,
    "count": count(*[_type == "post" && references(^._id)])
  }`);
}

export async function getAllTags() {
  return await sanityClient.fetch(`*[_type == "tag"] | order(title asc) {
    _id, title, slug,
    "count": count(*[_type == "post" && references(^._id)])
  }`);
}

export async function getCategoryBySlug(slug: string) {
  return await sanityClient.fetch(`*[_type == "category" && slug.current == $slug][0] {
    _id, title, slug, description
  }`, { slug });
}

export async function getTagBySlug(slug: string) {
  return await sanityClient.fetch(`*[_type == "tag" && slug.current == $slug][0] {
    _id, title, slug
  }`, { slug });
}
