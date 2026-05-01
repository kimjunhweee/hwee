import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
};

export type Post = PostMeta & {
  content: string;
};

function slugFromFilename(filename: string): string {
  return filename
    .replace(/\.mdx?$/, "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function readPostFile(filename: string): Post {
  const fullPath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug: slugFromFilename(filename),
    title: data.title ?? slugFromFilename(filename),
    date: data.date ?? "",
    summary: data.summary,
    tags: data.tags,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  return files
    .map(readPostFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(POSTS_DIR)) return null;
  const files = fs.readdirSync(POSTS_DIR);
  const match = files.find((f) => slugFromFilename(f) === slug);
  if (!match) return null;
  return readPostFile(match);
}
