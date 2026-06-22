# D. Sri Teja — Portfolio

"Where Technology Meets Storytelling" — a cinematic portfolio built with React, Vite,
TypeScript, Tailwind CSS, Framer Motion, GSAP (ScrollTrigger), and React Three Fiber / Drei.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Before you deploy — add your assets

These files are referenced but not included (no images were supplied when this was
generated). Drop them into `public/` with these exact names and they'll appear automatically:

| File | Used in | Notes |
|---|---|---|
| `public/profile.jpg` | Hero section | Square-ish or portrait photo. Until added, a placeholder initials card is shown. |
| `public/resume.pdf` | Hero & Contact "Download Resume" buttons | Your latest tailored resume. |
| `public/og-image.jpg` | `<head>` social preview meta tags | ~1200×630px works best for link previews. |

## Project structure

```
src/
  components/
    sections/        One component per page section (Hero, About, Experience, ...)
    three/            React Three Fiber scenes (hero particle network, skills sphere)
    ui/               Reusable pieces (TiltCard, SectionHeading, BookCard, modal, etc.)
    Loader.tsx        Cinematic boot-up screen
    Navbar.tsx        Floating glass navigation
    Footer.tsx        Marquee + social links
  data/               Plain content arrays — edit these to update copy without touching JSX
  hooks/              useCountUp, useMousePosition, useParallaxScroll, etc.
  types/              Shared TypeScript interfaces
```

To change any text (experience, skills, hobbies, book synopses, courses, achievements),
edit the matching file in `src/data/` — no component code needed.

## Design notes & a few deliberate tradeoffs

- **Skills Galaxy** (`src/components/three/SkillsSphere.tsx`) is real WebGL — a fibonacci-
  distributed sphere of nodes rendered with React Three Fiber, with `OrbitControls` for
  drag-to-rotate and HTML-labeled tooltips on hover.
- **Hero background** (`src/components/three/ParticleNetwork.tsx`) is also real WebGL —
  a particle field with proximity-based connecting lines, drifting on a GSAP ScrollTrigger
  parallax and reacting to mouse position.
- **The bookshelf and hover-tilt cards** use CSS 3D transforms (`transform-style:
  preserve-3d`, `perspective`) rather than textured Three.js meshes. This keeps the page
  fast on lower-end laptops/phones and is easy for you to restyle (it's just CSS), while
  still delivering the cinematic flip/tilt the brief asked for. If you'd rather have fully
  modeled 3D books later, that's a natural upgrade path for `BookCard.tsx`.
- **Reduced motion**: every animation respects `prefers-reduced-motion`, both globally
  (`index.css`) and in the loader/marquee.
- **Contact form** currently opens the visitor's email client with a pre-filled message
  (no backend). To collect submissions directly, wire `handleSubmit` in
  `src/components/sections/Contact.tsx` to a form service (Formspree, EmailJS) or your own
  API endpoint.
- **`VideoTrailer.tsx`** (`src/components/ui/VideoTrailer.tsx`) is a ready-to-use HLS video
  player built on `hls.js`, included for when your book trailers are hosted — it isn't
  wired into any section yet since no trailer URLs were provided.

## Deployment

### Vercel
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Vite. No config needed.

### Netlify
1. Push to GitHub, then "Add new site" → "Import an existing project."
2. Build command: `npm run build`. Publish directory: `dist`.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.ts` if deploying to a project page (not a
   custom domain).
4. `npm run deploy`

## Accessibility & SEO

- Semantic landmarks (`header`, `main`, `footer`), labeled form fields, visible focus rings
  (`focus-ring` utility), and alt text on the profile photo.
- `index.html` includes title, meta description, and Open Graph/Twitter card tags — update
  the URLs once you have a live domain.
