---
name: test-tfrkd-astro-blog
description: Verify the static tfrkd.org blog migration, filename permalinks, Atom content and narrow-screen rendering.
---

# Runtime testing

- Use Node 22.20+ (`export PATH="$HOME/.local/bin:$PATH"` where the session provides Node there). Run `npm install` if dependencies are absent, then `npm run build` and `npm run preview -- --host 0.0.0.0 --port 4322`. Rebuild after edits; preview serves `dist/`, not live source changes.
- The public static blog needs no login. Navigate `/` → Log → an article; check date, document title, Markdown formatting, browser Back and feed discovery.
- Compare archive URLs and Atom IDs against every `posts/*.md` filename minus `.md`, not merely against the generated route list. Include filenames containing punctuation: content-loader normalization can silently alter existing permalinks.
- Fetch local `/log/feed.atom` without auth to verify real served MIME, XML namespace, source title/date/ID coverage and nonempty HTML content. Build output alone does not establish deployed headers.
- Check computed `clientWidth` and `scrollWidth` alongside a 375px browser screenshot. A correctly configured mobile emulator can still report an expanded `innerWidth` if inherited CSS forces a wider body.
- External image failures must be separated from application failures: verify the preserved URL and image link, and report the external HTTP result without claiming a broken image loaded.
- Before visual testing Japanese content, run `fc-list :lang=ja`. If empty, install a Japanese font (Noto Sans CJK JP), rebuild `fc-cache`, and restart the browser before recording. Do not modify application CSS to compensate for absent host fonts.
- Only the lead owns hosted deployment checks. Local preview cannot verify GitHub Pages DNS or production response headers.

## Devin Secrets Needed

None for local static-blog testing.
