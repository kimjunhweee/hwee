import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recent = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-20">
      <section>
        <h1 className="text-3xl font-medium tracking-tight">김준휘</h1>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          이곳에 한 줄 소개를 적어주세요.
        </p>
      </section>

      <section>
        <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.15em] mb-8">
          생각
        </h2>
        <ul className="space-y-4">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="flex items-baseline justify-between gap-4 group"
              >
                <span className="group-hover:underline underline-offset-4 decoration-1">
                  {post.title}
                </span>
                <span className="shrink-0 text-sm text-neutral-400 tabular-nums">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
          {recent.length === 0 && (
            <li className="text-sm text-neutral-400">아직 작성된 생각이 없습니다.</li>
          )}
        </ul>
        {recent.length > 0 && (
          <Link
            href="/writing"
            className="mt-8 inline-block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            모든 생각 →
          </Link>
        )}
      </section>
    </div>
  );
}
