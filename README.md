# Portfolio

Personal portfolio for Ayomide Ogunyemi, built as a sheet of ruled notebook
paper. React 19 + TypeScript + Tailwind v4, bundled with Vite, deployed on
Vercel.

Live: https://ayomide-flame.vercel.app

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the built bundle
npm run lint
```

## Contact form

The form validates in the browser and then submits one of two ways:

- **With `VITE_FORMSPREE_ID` set**, it POSTs to Formspree and the message
  arrives by email without leaving the page.
- **Without it**, it falls back to opening the visitor's mail client with the
  message prefilled.

To turn on the first path, create a form at formspree.io and put its id in
`.env.local`:

```
VITE_FORMSPREE_ID=xxxxxxxx
```

Add the same variable in the Vercel project settings so production uses it too.

## Editing content

Almost everything is data, not markup:

- `src/data/projects.ts` — project cards. `repo` and `live` render as links
  only when non-empty, so leaving `live: ""` simply hides that link.
- `src/data/skills.ts` — skill groups and the "currently learning" note.
- `src/components/About.tsx` — `BIRTH_YEAR` and `START_YEAR` drive the age and
  years-of-experience figures, so they stay correct without edits.

## Layout notes

The paper is drawn entirely in CSS in `src/index.css`. Two things are load
bearing:

- `--rule` is the ruling height, and body text uses a matching line-height so
  the text sits on the lines rather than floating between them. Changing one
  without the other breaks the effect.
- `.notebook-wrapper::before` draws the punched holes, and `::after` adds the
  paper grain.

Reveal animations go through `src/components/Reveal.tsx`, which renders plain
elements when the visitor prefers reduced motion. Content is never hidden
behind an animation that might not run.

## Assets

- `public/og.png` is the 1200x630 link preview card.
- Project screenshots are JPEGs sized to 1280px wide; keep new ones under
  ~100KB and reference them from `src/data/projects.ts`.
