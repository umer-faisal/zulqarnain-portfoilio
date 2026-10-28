# Z.S Productions

A single-page, statically exported production-studio website. Built in the existing workspace with Next.js App Router, JavaScript, Tailwind CSS, and GSAP/ScrollTrigger.

## Run and verify

Node.js 20.9+ and npm are required.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
npm run test:e2e
```

Development runs at localhost:3000. Build output is `out/`; deploy that directory to any static host. `preview` serves the export at http://127.0.0.1:4173. Browser tests require installed Google Chrome and a fresh build, start their own preview server, and save screenshots under `test-results/`. There are no API routes, database, authentication, or production server dependencies.

ESLint 9.39.5 is pinned because the plugins bundled with the current Next.js ESLint configuration do not all declare ESLint 10 compatibility. npm reports ESLint 9 as out of support; upgrade once that dependency chain supports ESLint 10.

## Structure

- `src/app`: root metadata, global imports, single-page section composition.
- `src/components/layout`: fixed navigation, accessible mobile menu, footer.
- `src/components/sections`: hero, introduction, studio narrative, selected work, services, contact.
- `src/components/ui`: unchanged original logo and decorative vector underline.
- `src/components/animations/StudioMotion.jsx`: GSAP entrance, reveal, drawing, progress, and scroll-linked accent animations; all cleaned up through `gsap.matchMedia()`.
- `src/data/studio.js`: navigation, studio narrative, and services.
- `src/data/projects.js`: approved project records for the two-column gallery and same-page image dialog.
- `src/config/site.js`: brand identity, metadata, logo path, and public email.
- `src/styles/tokens.css`: central blue/yellow/white/dark palette, derived shades, typography, and layout tokens.
- `src/styles/globals.css`: responsive presentation and interaction styles.
- `public/images`: original supplied logo, copied without edits.
- `scripts`, `tests`: static preview and browser verification.

## Reference mapping

Reference: https://nesilnoble.com/ and the screenshots supplied in this conversation.

The screenshot sequence is adapted as: framed serif identity hero → oversized studio introduction → oversized “Stories” statement → serif craft statement → narrow editorial narrative panels → bold manifesto with drawn strike → invitation → selected work → studio craft/services → contact. Fixed navigation and all section links stay on the same page.

The blue/yellow palette replaces the reference's purple, green, and red surfaces. Bodoni Moda provides high-contrast editorial display typography; Oswald provides condensed statements and labels. Manrope supports smaller service descriptions. Fonts are bundled locally with Fontsource. These are deliberate visual approximations, not verified copies of the original fonts. The original full logo image is displayed without cropping, filters, stretching, or recoloring.

## Interaction boundaries

Screenshots establish composition, hierarchy, spacing, and section order. They do **not** establish exact easing, durations, pinning, cursor tracking, audio behavior, or a mobile menu interaction. The text-browser review also cannot verify those behaviors.

The implemented GSAP motion is an original adaptation: staggered hero/logo entrance, once-per-section reveals, SVG underline drawing, desktop scroll-linked decorations, and a reading-progress line. Native smooth anchor scrolling retains standard browser navigation. No claim is made that these exactly reproduce the reference's motion. There is no unverified sound toggle, custom cursor, copied character artwork, or award badge. Native service disclosures, mobile overlay navigation, and project dialogs are studio-specific interaction choices.

Reduced-motion users receive static, visible content and instant anchor scrolling. Mobile removes desktop parallax. All content remains readable without JavaScript. The mobile menu supports Escape, focus containment, focus return, body-scroll restoration, and closing on section selection. Project dialogs use native dialog focus behavior and Escape dismissal.

## Add real content later

The user confirmed that email and project assets will be supplied later. No email, client history, years-of-experience number, project, or photograph is invented. The Work section currently shows a clearly labelled archive-in-preparation layout.

The original logo appears in the navbar; `public/images/zs.png` is the full, uncropped center hero image. The Get in touch panel beneath it includes social and CV slots. Set `site.socials` URLs and `site.cv.url` in `src/config/site.js` to activate those links; missing destinations display Coming soon, without fake links. Place the actual CV in `public/` and use its root-relative path.

Set `site.email` in `src/config/site.js` to enable the real mailto CTA. Add project records to `src/data/projects.js`:

```js
// Use your own approved title, description, and image filename.
{ id, title, category, image, alt, description }
```

`image` is a root-relative path such as `/images/your-approved-file.jpg`. Cards open a same-page dialog; no separate routes are generated. Add deployment-specific canonical and social image URLs after the real domain is supplied.

## Verification

`npm run lint` and `npm run build` verify source and static export. `npm run test:e2e` covers desktop anchor navigation, service disclosures, client errors, overflow at six viewport widths, mobile keyboard interaction, reduced-motion presentation, and no-JavaScript content. Screenshots support visual review of desktop hero, introduction, work, and mobile hero.
