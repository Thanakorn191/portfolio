# CLAUDE.md

Developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion, deployed on Vercel.

## Commands

- `npm run dev`: start the local dev server
- `npm run build`: production build (run before calling a change done)
- `npm run lint`: ESLint
- `npx tsc --noEmit`: type check

## Context hygiene (save tokens)

- Never read, search or list `node_modules/`, `.next/`, `.vercel/`, `out/`, `coverage/`, or `*.tsbuildinfo`.
- Never open lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`) unless debugging a dependency issue.
- Scope searches to `app/`, `components/`, `lib/` and `public/`. Prefer targeted Grep/Glob over reading whole directories.
- Don't read images or other binaries in `public/` unless asked.
- These folders are also blocked in `.claude/settings.json` (see below).

## TypeScript

- `strict: true` in `tsconfig.json`. No `any`, no `@ts-ignore`, no non-null `!` without a comment saying why.
- Type props with a named `type Props = {...}` next to the component. Prefer `type` over `interface` unless extending.
- Use `import type` for type-only imports. Use the `@/` path alias, not deep relative paths.
- Validate external data (env, fetched JSON, form input) at the boundary; trust types inside.

## Component architecture

- Server Components by default. Add `"use client"` only for state, effects, browser APIs or Framer Motion, and push it to the smallest leaf.
- One component per file, named export, PascalCase filename. Keep components under ~100 lines; split when they grow.
- Layout: `app/` routes and layouts, `components/ui/` primitives, `components/sections/` page sections, `lib/` utilities and data, `content/` static portfolio data.
- No prop drilling past two levels; compose with `children` instead. No new state libraries.
- Keep content (projects, experience, links) in typed data files, not hardcoded in JSX.

## Design

- Minimalist: generous whitespace, one accent color, max two font families, no decorative clutter.
- Dark mode by default: `darkMode: "class"` with `dark` on `<html>`; light mode is optional opt-in.
- Mobile-first: write base classes for small screens, then layer `sm:` / `md:` / `lg:` up. Test at 375px wide.
- Use Tailwind theme tokens (colors, spacing, fonts in `tailwind.config.ts`); no arbitrary hex values or inline styles.
- Accessible by default: semantic HTML, visible focus states, AA contrast, alt text on every image.
- Motion is subtle (opacity/transform, ≤ 400ms) and respects `prefers-reduced-motion` via `useReducedMotion`.

## Performance (Vercel)

- Always use `next/image` with explicit `width`/`height` (or `fill` + `sizes`). Add `priority` only to the above-the-fold hero image. Prefer AVIF/WebP sources.
- Load fonts with `next/font`; never via `<link>` to Google Fonts.
- Keep the client bundle small: import Framer Motion through `LazyMotion` + `m` components with `domAnimation`, and lazy-load heavy client components with `next/dynamic`.
- Avoid adding dependencies for things a few lines of code can do. Import named functions, never whole libraries.
- Prefer static rendering; use `generateStaticParams` for project pages. Add `export const revalidate` only when content truly changes.
- Use `next/link` for internal navigation and the Metadata API for SEO; no `<head>` tags by hand.
- Check `npm run build` output: flag any route whose First Load JS grows noticeably.

## Working rules

- Make the smallest change that solves the task; don't refactor unrelated code.
- Run `npm run lint` and `npx tsc --noEmit` before finishing.
- Never commit `.env*` files or secrets.

## Recommended `.claude/settings.json`

```json
{
  "permissions": {
    "deny": [
      "Read(./node_modules/**)",
      "Read(./.next/**)",
      "Read(./.vercel/**)",
      "Read(./out/**)",
      "Read(./coverage/**)",
      "Read(./.env*)"
    ]
  }
}
```
