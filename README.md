# akshitjindal1.github.io

Personal academic website, built with Next.js (static export) and Tailwind CSS, deployed to GitHub Pages.

## Preview before pushing

| Command | What it does |
| --- | --- |
| `npm run dev` | Live-reloading dev server on http://localhost:3000. Use while editing. |
| `npm run preview` | Builds the static site into `out/` and serves it on http://localhost:4000, resolving URLs the same way GitHub Pages does. Use for a final check. |
| `npm run serve` | Serves an existing `out/` build without rebuilding. |

In VS Code, the same two previews are available under **Terminal → Run Task** and in the **Run and Debug** panel (F5). Over Remote-SSH the page opens in a VS Code tab automatically; otherwise use the **Ports** panel or **Simple Browser: Show**.

## Where the content lives

| What | File |
| --- | --- |
| Name, bio links, research interests | `src/data/profile.ts`, `src/components/home/HeroSection.tsx` |
| Publications and patents (abstracts, links, BibTeX) | `src/data/publications.ts` |
| News | `src/data/news.ts` |
| Projects | `src/data/projects.ts` |
| CV page | `src/data/cv.ts` (mirrors `public/assets/documents/cv.pdf`; update both together) |
| Blog posts | `src/content/blog/*.mdx`, listed automatically |
| Site title, links, navigation | `src/lib/constants.ts` |

A new blog post only needs an `.mdx` file with `title`, `date` (YYYY-MM-DD), `author`, `tags` and `excerpt` front matter. Reading time is computed.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages. Pushing any other branch does not deploy.
