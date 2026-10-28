# Skill: monthly SEO audit

Run on the first weekday of each month. Report findings in a pull request or issue; change nothing without approval.

1. Build the site and check every page has a unique title and a description under 160 characters.
2. Check every internal link and every link in `kb/links.md`. roblough.c21.ca: mark "verify manually", don't report as broken.
3. Check each post's sources still load and its facts still match `kb/facts.md`.
4. Flag posts older than 12 months for a review and an `updated` date.
5. Each January: flag the cost calculator and `kb/facts.md` costs for Rob to update from the new cost guide.
6. With Search Console data (when connected): list queries with impressions but low clicks, and suggest title or answer changes.
7. Suggest next month's topics from the content plan, in order.
