# jkht-site

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

### Vercel (Vite)

1. Import the repo in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages (Vite)

1. Set `base` in `vite.config.ts` to `/<repo-name>/`.
2. Use the included GitHub Actions workflow: `.github/workflows/deploy-gh-pages.yml`.
3. In GitHub repo Settings → Pages, set Source to GitHub Actions.
