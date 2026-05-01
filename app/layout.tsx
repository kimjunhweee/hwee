import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimjunhwee.com"),
  title: {
    default: "김준휘",
    template: "%s — 김준휘",
  },
  description: "김준휘의 글과 프로젝트.",
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
          <div className="mx-auto max-w-2xl px-6 py-6 flex items-center justify-between">
            <Link href="/" className="text-base font-medium tracking-tight">
              김준휘 | kimjunhwee
            </Link>
            <nav className="flex gap-6 text-sm text-neutral-600">
              <Link href="/writing" className="hover:text-neutral-900 transition-colors">
                글
              </Link>
              <Link href="/about" className="hover:text-neutral-900 transition-colors">
                소개
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 mx-auto w-full max-w-2xl px-6 py-20">
          {children}
        </main>

        <footer>
          <div className="mx-auto max-w-2xl px-6 py-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} 김준휘
          </div>
        </footer>
      </body>
    </html>
  );
}
