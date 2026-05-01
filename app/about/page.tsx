import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const metadata = {
  title: "소개",
};

const ABOUT_PATH = path.join(process.cwd(), "content", "about.mdx");

function Year({
  date,
  children,
}: {
  date: string;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="text-sm font-medium text-neutral-900 tracking-tight">
        {date}
      </div>
      <div className="mt-2 space-y-3 text-[15px] leading-[1.85] text-neutral-800 [&_p]:m-0">
        {children}
      </div>
    </section>
  );
}

const components = {
  Year,
  hr: () => <hr className="my-12 border-neutral-200" />,
};

export default function AboutPage() {
  const raw = fs.readFileSync(ABOUT_PATH, "utf8");
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
