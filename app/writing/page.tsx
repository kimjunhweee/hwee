import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "글",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight mb-12">글</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/writing/${post.slug}`} className="block group">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base font-medium group-hover:underline underline-offset-4 decoration-1">
                  {post.title}
                </h2>
                <span className="shrink-0 text-sm text-neutral-400 tabular-nums">
                  {post.date}
                </span>
              </div>
              {post.summary && (
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {post.summary}
                </p>
              )}
            </Link>
          </li>
        ))}
        {posts.length === 0 && (
          <li className="text-sm text-neutral-400">아직 작성된 글이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
