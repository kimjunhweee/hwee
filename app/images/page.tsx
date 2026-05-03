import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const metadata = {
  title: "Images",
};

const IMAGES_PATH = path.join(process.cwd(), "content", "images.mdx");

function Img({
  src,
  alt,
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <figure className="mb-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ""} className="w-full h-auto" />
      {caption && (
        <figcaption className="mt-2 text-sm text-neutral-500 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const components = {
  Img,
  hr: () => <hr className="my-12 border-neutral-200" />,
};

export default function ImagesPage() {
  const raw = fs.readFileSync(IMAGES_PATH, "utf8");
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
