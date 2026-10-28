# Skill: write a post

Use for every new article on realestatecareerns.ca.

1. Read every file in `kb/` first. `facts.md` and `rules.md` override anything else.
2. Take the next unchecked post from `kb/content-plan.md`.
3. Check the search wording for the title in `kb/facts.md` (search data) and use it in the title, description and at least one H2.
4. Create `src/content/blog/<slug>.md`. Slug: the title in lowercase words joined by hyphens, no dates.
5. Fill the frontmatter: title, description (under 160 characters), track, answer (two or three sentences), published, faq (three to five), sources, `draft: true`.
6. Write the body in Rob's voice (`kb/voice.md`): H2 sections as questions, short paragraphs, no em dashes, Canadian spelling.
7. Link to one or two Optimum pages from `kb/links.md` and one earlier post on this site.
8. Any fact not in `facts.md`: stop and list it in the pull request under "Facts Rob needs to confirm". Never guess.
9. Run `npm run build`. Fix any error.
10. Open a pull request titled "Draft: <post title>". In the description: the answer, the target search phrase, facts to confirm, and the Netlify preview link.
11. Tick the post in `kb/content-plan.md` as drafted.
