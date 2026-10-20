# jazertorres.com

Personal portfolio of Jazer Torres, Backend Software Engineer. A static site built with [Astro](https://astro.build), plain CSS and a few lines of JavaScript.

## Run it

Requires Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Where things live

| Path | What it is |
|---|---|
| `src/data/` | The content: `site.ts` (name, contact, nav), `experience.ts`, `skills.ts`, `techIcons.ts` (logos), `icons.ts` (contact icons) |
| `src/components/` | One component per section (`Hero`, `About`, `Experience`, `Skills`, `Contact`) plus shared pieces |
| `src/styles/` | `variables.css` (design tokens and the dark and light palettes) and `global.css` |
| `public/` | Files served as they are: favicon, social image, `robots.txt`, `sitemap.xml`, the resume PDF |
| `docs/portfolio-text.md` | The approved wording of the whole site. Keep it in sync with the data files |

To change a text, edit the data file or component that holds it. To change the resume, replace `public/resume/CV_JazerTorres.pdf` (same name, so the links keep working).

## Deploy (Vercel)

1. Push the repository to GitHub.
2. In Vercel: **Add New > Project**, import the repository. Astro is detected automatically (build command `npm run build`, output `dist`). No environment variables are needed.
3. Check **Settings > General > Node.js Version** is 22.x.
4. Add the domain in **Settings > Domains** and set the DNS records at the domain registrar to the values Vercel shows there. Use `jazertorres.com` as the main domain and let `www` redirect to it.
5. `vercel.json` adds cache and security headers. Nothing else to configure.

## Before and after publishing

- The resume PDF is public. Check what it contains (phone number, address) before deploying.
- `astro.config.mjs` has `site: 'https://jazertorres.com'`. Canonical links, the social image URL and the sitemap depend on it, so keep it in sync with the real domain.
- `public/sitemap.xml` and `public/robots.txt` also name the domain.
- After deploying, test the social card by sharing the link in LinkedIn (use its Post Inspector) and run Lighthouse from Chrome DevTools.
