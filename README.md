# Fermor homepage

A homepage for Fermor built with Next.js (App Router) and plain CSS. No UI kit, no Tailwind.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy

Push to GitHub, import the repo in Vercel, accept the defaults. No environment variables needed.

## Decisions

- **The hero is the product idea.** Fermor's promise is "finance you can read", so the first thing a visitor meets is a sentence they can edit: monthly amount, years, return. The result and chart update live. It shows the product instead of describing it.
- **Plain words over finance words.** Every section is written for someone who isn't an expert. Headings are statements, buttons say what happens ("Start your plan").
- **Visual direction.** Pale sage background, deep pine and a single marigold accent used only for growth. Bricolage Grotesque for headlines, Hanken Grotesk for text. Layout is deliberately not a grid of identical cards: the steps stagger down the page, and the audience section is a full-width pine band with rows.
- **Page order.** Promise and demo, how it works, who it is for, objections (FAQ), then one call to action.
- **Accessibility.** Labelled inputs, live region on the result, visible focus, reduced-motion respected, native `<details>` for the FAQ.
- **Calculator maths.** Monthly SIP future value with monthly compounding, shown in Indian number format (₹, lakh, crore). It is an illustration, labelled as such.

## Things to know

- Copy is my interpretation of Fermor from the brief, not taken from the existing site. Replace with real product claims if needed.
- The sign-up form is front-end only. Wire it to your backend or a service like Formspree.
