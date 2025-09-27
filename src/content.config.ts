// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
});

const books = defineCollection({
  loader: file("src/content/books/books.json" ),
});

const updates = defineCollection({
  loader: file("src/content/updates/updates.json" ),
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, books, updates };