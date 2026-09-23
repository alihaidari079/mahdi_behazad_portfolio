# Omor Rahman — UI/UX Designer Portfolio

A one-page designer portfolio built with **React + Vite + Tailwind CSS**, based on
the dark, pink-accent template layout: hero, about ("Who I Am?"), services,
portfolio grid, blog, and contact.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`, ready to deploy anywhere (Vercel, Netlify,
GitHub Pages, your own server).

## Project structure

```
src/
  App.jsx              # assembles all sections
  index.css            # Tailwind entry + base styles
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Portfolio.jsx
    Blog.jsx
    Contact.jsx
    Footer.jsx
    Portrait.jsx        # placeholder SVG portrait
```

## Customizing

- **Your photo**: replace `<Portrait className="..." />` in `Hero.jsx` and
  `About.jsx` with a real `<img src="/your-photo.jpg" className="..." />`.
  Drop your image into `public/`.
- **Colors**: edit the `accent` and other tokens in `tailwind.config.js`.
- **Content**: all copy (name, bio, services, projects, blog posts, contact
  info) lives directly in each component file under `src/components/`.
- **Fonts**: Sora (display) + Inter (body), loaded via Google Fonts in
  `index.html`. Swap the `<link>` tags and `fontFamily` config to change them.
- **Icons**: from `react-icons` (`Fa*` and `Hi*` sets already imported where
  needed).

## Tech

- React 18
- Vite 5
- Tailwind CSS 3
- react-icons
