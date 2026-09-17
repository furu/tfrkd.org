[続きはWebで](https://tfrkd.org/)

[Astro](https://astro.build/) で構築したブログ。`main` への push で GitHub Pages にデプロイされる。

```sh
npm install
npm run dev
npm run build
```

記事は `posts/YYYY-MM-DD-slug.md`(front matter は `title` のみ)。新規作成は `bundle exec rake "post:create[slug]"`。
