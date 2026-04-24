# Dhruv Agarwal — Finance & Advisory Portfolio

Personal portfolio website for Dhruv Agarwal — Operations Analyst, Finance & Reporting at DeltaX.

**Live:** [your-username.github.io](https://your-username.github.io)

## Stack

Pure HTML + CSS + Vanilla JS. Zero dependencies, zero build step.

## Deploy to GitHub Pages (2 minutes)

1. Create a new repo named **`your-username.github.io`** (replace with your actual GitHub username)
2. Upload all files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `Dhruv_Agarwal_Financial_Consulting_Resume.pdf` ← place your resume PDF here
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Done. Live at `https://your-username.github.io` in ~60 seconds.

## Project Structure

```
/
├── index.html      # All sections: Hero, Experience, Projects, Skills, Credentials, Contact
├── style.css       # Dark terminal theme, light mode toggle, fully responsive
├── script.js       # Typewriter effect, filters, scroll animations, theme toggle
└── Dhruv_Agarwal_Financial_Consulting_Resume.pdf   # Resume download
```

## Features

- Dark/light theme toggle (persisted via localStorage)
- Terminal-style hero card with typewriter animation
- Live ticker marquee (financial metrics)
- Project filter by category (Valuation, M&A, Analytics, FP&A, Tax, Tech)
- Timeline experience section
- Scroll fade-in animations
- Fully responsive (mobile + tablet + desktop)
- Active nav link highlighting on scroll

## Customisation

All content lives in `index.html` — just edit the text. Colors are CSS variables in `style.css`:

```css
--accent: #3fffa2;   /* green accent — change to any color */
--bg: #0d0d0d;       /* background */
```
