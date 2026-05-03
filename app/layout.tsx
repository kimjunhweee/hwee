import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimjunhwee.com"),
  title: {
    default: "김준휘 | kimjunhwee",
    template: "%s — 김준휘 | kimjunhwee",
  },
  description: "김준휘의 생각과 프로젝트.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">
        <header>
          <div className="mx-auto max-w-2xl px-6 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <Link href="/" className="text-base font-semibold tracking-tight">
              김준휘 | kimjunhwee
            </Link>
            <nav className="flex gap-6 text-sm text-neutral-900 lg:hidden">
              <Link href="/about" className="transition-colors">
                About
              </Link>
              <Link href="/principles" className="transition-colors">
                Principles
              </Link>
              <Link href="/projects" className="transition-colors">
                Projects
              </Link>
              <Link href="/images" className="transition-colors">
                Images
              </Link>
              <Link href="/writing" className="transition-colors">
                Thoughts
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 mx-auto w-full max-w-2xl px-6 py-20 lg:flex lg:items-start lg:gap-10">
          <aside className="hidden lg:block w-20 shrink-0">
            <nav className="sticky top-8 flex flex-col gap-2 text-sm text-neutral-900">
              <Link href="/about" className="transition-colors hover:text-neutral-500">
                About
              </Link>
              <Link href="/principles" className="transition-colors hover:text-neutral-500">
                Principles
              </Link>
              <Link href="/projects" className="transition-colors hover:text-neutral-500">
                Projects
              </Link>
              <Link href="/images" className="transition-colors hover:text-neutral-500">
                Images
              </Link>
              <Link href="/writing" className="transition-colors hover:text-neutral-500">
                Thoughts
              </Link>
            </nav>
          </aside>
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </main>

        <footer>
          <div className="mx-auto max-w-2xl px-6 py-8 text-xs text-neutral-500">
            © {new Date().getFullYear()} Junhwee Kim. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
