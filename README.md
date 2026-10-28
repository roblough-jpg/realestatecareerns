# realestatecareerns.ca

Career site presented by Century 21 Optimum Realty. Astro static site, hosted on Netlify.

## How it works

- Posts are Markdown files in `src/content/blog/`.
- New posts are drafted by AI on a branch and opened as a pull request with `draft: true`.
- Netlify builds a preview for each pull request. Drafts show there (with a "Draft for Rob's review" banner) and never on the live site.
- Rob reads the preview, sets `draft: false` (or asks for changes) and merges. Netlify publishes the live site.
- `kb/` holds the knowledge base the AI must follow. `skills/` holds the step-by-step instructions for each routine.

## Built in for search

- Sitemap (`/sitemap-index.xml`), robots.txt allowing search engines and AI crawlers, and `/llms.txt`.
- Canonical URLs, Open Graph tags, and structured data: organization, website, breadcrumbs, article with author, FAQ, and the calculator as a web app.
- Every post opens with a short answer box, the part AI search quotes.

## Commands

| Command | Does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local preview at localhost:4321 |
| `npm run build` | Build to `dist/` |

## Before launch

- [ ] Replace each `LeadForm` with the matching GoHighLevel form embed (`kb/ghl-forms.md`)
- [ ] Replace the privacy page with the brokerage's privacy policy
- [ ] Confirm the TO VERIFY facts in `kb/facts.md` with NSREC and NSAR
- [ ] Approve the first launch posts
- [ ] Verify the site in Google Search Console and Bing Webmaster Tools, and submit the sitemap
