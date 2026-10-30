# Personal Brand Studio

Luxury editorial portfolio for a Digital Marketing & Brand Communication Strategist.
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Updating content — no component edits needed

All copy lives in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | **Your name**, monogram, email, location, LinkedIn/Instagram URLs, domain, nav |
| `services.ts` | Expertise list (title, description, keywords) |
| `projects.ts` | Case studies — each renders at `/work/[slug]` automatically |
| `process.ts` | The five-stage approach timeline |
| `experience.ts` | Roles (newest first) and education placeholder |
| `articles.ts` | Journal essays — each renders at `/journal/[slug]` automatically |

Anything in `[brackets]` is a placeholder. Projects carry `placeholder: true` and articles
`draft: true`, which display visible "Placeholder" / "Sample draft" tags — set them to `false`
once real, verified content is in place. No results or statistics are shown until you add them.

### Images
Placeholder visuals are generated SVG compositions (`src/components/ui/ArtFrame.tsx`).
To use photography, put files in `public/images/...` and set `cover` / `gallery` on a project
(e.g. `cover: "/images/work/studio-xo-cover.jpg"`). They are served through `next/image`.
Replace the portrait in `src/components/sections/About.tsx` by passing `src` to its `ArtFrame`.

## Structure
- `src/app` — routes, metadata, sitemap, robots, page transition (`template.tsx`)
- `src/components/sections` — homepage sections 01–08
- `src/components/layout` — nav, footer, loader, custom cursor, motion provider
- `src/components/motion` — text/image reveal and parallax primitives
- Design tokens (palette, fonts, easing) are in `src/app/globals.css` under `@theme`.

Motion respects `prefers-reduced-motion`; the custom cursor only appears on fine pointers.
