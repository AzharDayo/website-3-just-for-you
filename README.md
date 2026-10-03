# Just Because You Are Special

A playful interactive scrapbook with reasons, questions, compliments, a gift reveal and a birthday surprise. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Live Website

https://azhardayo.github.io/website-3-just-for-you/

## Run Locally

```sh
npm ci
npm run dev
```

To use a specific port:

```sh
npm run dev -- --port 5175
```

## Build

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Personalize

Edit `src/data/content.ts` to change the reasons, question responses, compliments, final reveal, birthday wishes and other content. Optional music can be added under `public/assets/` and configured in the same content file.

## Deployment

This repository publishes the built `dist/` output through the `gh-pages` branch and GitHub Pages.
