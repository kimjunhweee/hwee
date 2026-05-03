import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const metadata = {
  title: "10계명",
};

const PRINCIPLES_PATH = path.join(process.cwd(), "content", "principles.mdx");

function Principle({
  n,
  children,
}: {
  n: string | number;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-4 flex items-baseline gap-6">
      <div className="shrink-0 text-sm font-medium text-neutral-900 tracking-tight tabular-nums">
        {String(n).padStart(2, "0")}
      </div>
      <div className="space-y-3 text-[15px] leading-[1.85] text-neutral-800 [&_p]:m-0">
        {children}
      </div>
    </section>
  );
}

const components = {
  Principle,
  hr: () => <hr className="my-12 border-neutral-200" />,
};

export default function PrinciplesPage() {
  const raw = fs.readFileSync(PRINCIPLES_PATH, "utf8");
  const { content } = matter(raw);

  return (
    <article>
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}
