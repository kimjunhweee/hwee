import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const metadata = {
  title: "Projects",
};

const PROJECTS_PATH = path.join(process.cwd(), "content", "projects.mdx");

function Project({
  name,
  year,
  link,
  children,
}: {
  name: string;
  year?: string;
  link?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-base font-medium text-neutral-900 tracking-tight">
          {name}
        </h2>
        {year && (
          <span className="shrink-0 text-sm text-neutral-400 tabular-nums">
            {year}
          </span>
        )}
      </div>
      <div className="mt-2 space-y-3 text-[15px] leading-[1.85] text-neutral-800 [&_p]:m-0">
        {children}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-neutral-500 hover:text-neutral-900 underline-offset-4 decoration-1 hover:underline transition-colors"
        >
          자세히 보기 →
        </a>
      )}
    </section>
  );
}

const components = {
  Project,
  hr: () => <hr className="my-12 border-neutral-200" />,
};

export default function ProjectsPage() {
  const raw = fs.readFileSync(PROJECTS_PATH, "utf8");
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
