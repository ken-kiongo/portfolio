# Alex Mercer — Portfolio Website

A modern, static portfolio website for a Web Developer & Virtual Assistant.

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript interactions
└── README.md
```

## Features

- **Dark, modern aesthetic** with lime-green accent color
- **Custom cursor** with smooth lag effect
- **Terminal-style hero card** with typewriter animation
- **Animated statistics** counter
- **Work portfolio** with category filter (All / Web Dev / E-Commerce / VA & IT)
- **Testimonials slider** (auto-advances, mobile swipeable)
- **Tilt effect** on cards
- **Magnetic buttons** on hover
- **Scroll reveal** animations
- **Contact form** with success state
- **Fully responsive** — mobile, tablet, desktop
- **Noise texture overlay** for depth
- **Floating badges** in hero section

## Customization

### Personal Info
- Replace **"Alex Mercer"** with your real name throughout `index.html`
- Update email in the contact section: `hello@alexmercer.dev`
- Update LinkedIn URL
- Replace avatar initials "AM" with yours

### Colors
All colors are CSS variables in `:root` inside `style.css`:
```css
--accent: #c8f04b;     /* Lime green — main accent */
--accent2: #7af0c2;    /* Teal — secondary accent */
--accent3: #f04b7a;    /* Pink — used for hearts */
--bg: #0b0c0e;         /* Main background */
```

### Work Samples
Each `.work-card` in `index.html` has a `data-category` attribute:
- `"web"` — Web Development projects
- `"ecom"` — E-Commerce projects  
- `"va"` — Virtual Assistant / IT projects

Replace the placeholder project info with your real project details.

### Profile Photo
Replace the `.avatar-placeholder` div in the About section with an actual `<img>` tag:
```html
<img src="images/your-photo.jpg" alt="Your Name" />
```

## Deployment

This is a **static site** — no server or build step required.

Simply upload all files to any web host:
- Netlify (drag & drop)
- GitHub Pages
- Vercel
- Any shared hosting (FTP upload)

## Fonts Used
- **Syne** — Display headings
- **Cabinet Grotesk** — Body text
- **DM Mono** — Code/mono elements

Loaded from Google Fonts (requires internet connection).
