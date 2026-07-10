# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/blog for kimjunhwee.com. Next.js 15 (App Router) + React 19, TypeScript, Tailwind CSS v4, with content authored in MDX. Content is Korean; the design is intentionally minimal (Swiss/typography-driven, light mode only) — keep decoration to a minimum.

## Commands

- `npm run dev` — local dev server (Next.js)
- `npm run build` — production build (also the fastest way to typecheck the whole project via `next build`)
- `npm run start` — serve the production build
- `npm run lint` — ESLint via `next lint`

No test suite is configured.

## Architecture

Two content mechanisms, both parsed with `gray-matter` and rendered with `next-mdx-remote/rsc` + `remark-gfm`:

1. **Blog posts** (`/writing`) — many files in `content/posts/`, accessed through `lib/posts.ts`.
   - Filenames follow `YYYY-MM-DD-slug.mdx`. The date prefix is stripped to form the URL slug (`slugFromFilename`), and posts are sorted by frontmatter `date` descending.
   - Frontmatter: `title`, `date`, `summary?`, `tags?` (see `PostMeta` in `lib/posts.ts`).
   - `app/writing/page.tsx` lists posts; `app/writing/[slug]/page.tsx` renders one and uses `generateStaticParams` for static generation.

2. **Single-page content** (`/about`, `/principles`, `/projects`) — one MDX file each in `content/` (`about.mdx`, `principles.mdx`, `projects.mdx`), read directly in the corresponding `app/*/page.tsx`. Each page defines its own custom MDX component(s) passed to `<MDXRemote components={...}>`:
   - `principles.mdx` → `<Principle n="…">`
   - `projects.mdx` → `<Project name year link>`
   - `about.mdx` → `<Year date>`
   To add/change these, edit both the `.mdx` content and the component definition in the page.

`app/page.tsx` (home) and `app/contact/page.tsx` are plain hardcoded TSX, not MDX-driven.

## Layout & navigation

`app/layout.tsx` is the single shared shell: a centered `max-w-2xl` column with a left sticky sidebar nav (desktop, `lg:`) and an inline wrapped nav (mobile). Nav links are hardcoded here — adding a page/route means adding its link in **both** navs. Global styles and Tailwind live in `app/globals.css`.

## Conventions

- `@/*` path alias maps to the repo root (see `tsconfig.json`).
- New routes are App Router directories under `app/`; export a `metadata` object per page for the title (the layout applies the `%s — 김준휘 | kimjunhwee` template).
- Deployed on Vercel.
