# Pelmot Creativity — Project Context

Architecture portfolio site for **Pelmot Creativity** (real person behind it: Abdurrazzak Jazmati, "Junior Architect", based in Gaziantep, Turkey). Built as a React SPA, content is managed through Sanity CMS (no code needed to edit content), deployed to Cloudflare Workers.

## Live URLs

- **Live site**: https://pelcre.myworkss.workers.dev
- **Content editor (Sanity Studio)**: https://pelmot-creativity.sanity.studio/ — log in with GitHub (reiw9 / tala.wj@gmail.com)
- **GitHub repo**: https://github.com/reiw9/pelcre (branch `main`)

## Stack

- React 19 + TypeScript (strict) + Vite 8 + Tailwind CSS v4 + Framer Motion + React Router
- Content: Sanity CMS (project ID `cmdikf3a`, dataset `production`) — see `src/lib/sanity.ts` and `src/context/DataContext.tsx`
- Deploy: Cloudflare Workers with static assets (`wrangler.jsonc`, worker name `pelcre`)
- Fonts self-hosted via `@fontsource` (Cormorant Garamond serif + Inter sans), no external font requests

## Data architecture

All content (projects, bio, services, timeline, skills, software, awards, testimonials, contact info) lives in Sanity, **not** in local files. `src/data/content.ts` and `src/data/projects.ts` were deleted — don't recreate them as the source of truth.

- `src/lib/sanity.ts` — Sanity client, image URL builder, paragraph-splitting helper, placeholder image for projects with no photo yet
- `src/context/DataContext.tsx` — fetches everything once on app load (`DataProvider`), exposes `useSiteData()` hook returning `{ architect, bio, timeline, skills, software, awards, services, testimonials, projects }`. Shows a full-screen loading state until the fetch resolves.
- Sanity schema has two document types: `project` (repeatable) and `siteSettings` (**singleton — only one should ever exist**, don't create a second one)
- Images map through `imageUrl()` which returns a neutral Soft-Stone placeholder SVG data-URI if no photo has been uploaded yet — this is intentional, not a bug. Gallery/Floor Plans/Renders sections on the project detail page hide themselves entirely when empty.
- CORS is configured on the Sanity project for `http://localhost:5173` (dev) and `https://pelcre.myworkss.workers.dev` (prod). If the site moves to a new domain, add it via the Sanity MCP `add_cors_origin` tool or sanity.io/manage.

**Current gap**: none of the 9 seeded projects have real photos yet (only placeholder blocks show). That's expected — real photography needs to be uploaded through Sanity Studio by whoever owns the content.

## Design system

Strict 5-color palette (do not introduce other colors without being asked):

| Token (Tailwind) | Hex | Role |
|---|---|---|
| `paper` / `bone` | `#F3F1EC` | Primary background, light-mode default |
| `linen` | `#E0DFD2` | Secondary sections / card backgrounds |
| `mist` | `#B6B8AB` | Borders, dividers, subtle UI |
| `gold` / `gold-soft` | `#9FA3AD` / `#B6B8AB` | Accent (replaces old "gold" naming — token names are legacy, values are the cool-slate/sage palette) |
| `ink` / `charcoal` | `#3C3E4A` | Primary text, nav, buttons, dark-mode background |
| `stone` | derived `color-mix` of ink+paper | Muted body text (kept darker than raw `#9FA3AD` for WCAG AA contrast — this was a deliberate fix, don't lighten it) |

Tokens defined in `src/index.css` `@theme` block. Design rules in effect: no gradients (flat `bg-ink/N` overlays on hero photos instead), no glassmorphism (no `backdrop-blur`, solid opaque surfaces), subtle `rounded-lg` (~8px) on cards/buttons/inputs/images, thin `border-mist` over shadows, dark mode fully supported (class-based, toggle in navbar, localStorage key `pelmot-creativity-theme`).

## Contact info (as seeded in Sanity `siteSettings`)

- Email: pelmot.creativity@gmail.com · Phone: 0530 449 94 00
- Address: Ibrahimli Mah. Sehitkamil, Gaziantep, Turkey
- Social: Instagram, LinkedIn (abdurrazzak-jazmati), Behance (abdurrajazmati), X — all real links, already wired into Footer + Contact page + `SocialIcons.tsx` (custom-drawn icons; lucide-react's current version has no brand icons)

## Deploy workflow — standing instruction

**Always commit + push to GitHub and redeploy to Cloudflare after finishing a round of edits, without being asked.** (User preference, stated explicitly.)

```bash
npm run build      # type-check + vite build
npm run deploy      # build + wrangler deploy (redeploys pelcre.myworkss.workers.dev)
git add -A && git commit -m "..." && git push origin main
```

Sanity content changes (via Studio) go live instantly on their own — no rebuild/redeploy needed for content edits, only for actual code changes.

## Known environment quirks (not app bugs)

- The Claude Code preview tool (`preview_screenshot`) sometimes hangs or shows stale/wrong-tab state after several calls in one session — stopping and restarting the preview server (`preview_stop` then `preview_start`) reliably fixes it. Don't chase this as a real rendering bug.
- Custom viewport sizes via `preview_resize` occasionally render only in a corner of the screenshot; using presets (`desktop`/`mobile`/`tablet`) avoids it.
- `git push` to GitHub has occasionally failed once with a connection timeout then succeeded on immediate retry — treat a single failure as transient before investigating further.

## Reference: full walkthrough for the site owner

A step-by-step non-technical content-editing guide was published as a Claude Artifact (log into Studio, edit/add projects, upload photos, edit site-wide info, invite a collaborator). If it's needed again, it can be regenerated from `src/lib/sanity.ts` schema shape — the schema itself lives only in Sanity (deployed via the Sanity MCP `deploy_schema`/`get_schema` tools), not in this repo.
