# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static marketing website for **District Studios**, a Roblox game development studio. The site is built with vanilla HTML, CSS, and JavaScript—no build tools, frameworks, or package managers are required.

**Key Features:**
- Light/dark mode with smooth 0.6s transitions
- Sharp, vibrant color scheme based on #0000a4 blue
- Fully responsive design optimized for mobile
- Animated gradient text with shimmer effect on hero title
- Expandable news cards with detailed project information
- Parallax scrolling effect on hero background
- Bounce animations on card hovers
- Enhanced footer with quick links and social icons

## Development Commands

### Running the Site Locally

**Windows:**
```pwsh
start index.html
```

**macOS:**
```bash
open index.html
```

**Linux:**
```bash
xdg-open index.html
```

Or use a local server (recommended for testing):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Testing Changes

Since this is a static site with no build process:
1. Make changes to HTML/CSS/JS files
2. Refresh the browser to see updates
3. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
4. Test responsive design by resizing browser or using DevTools device emulation

## Architecture

### File Structure

```
/
├── index.html          # Single-page website with all sections
├── styles.css          # All styles with CSS custom properties
├── script.js           # Dark mode toggle, smooth scrolling, animations
└── assets/
    └── District.png    # Studio logo (displayed as round image)
```

### CSS Architecture

- **CSS Custom Properties** for colors and transitions defined in `:root` (lines 8-30)
- **Dark mode** implemented via `:root.dark-mode` class with inverted color values
- **Transition variables** for smooth 0.6s theme switching (`--transition-bg`, `--transition-color`, etc.)
- **Color system**:
  - Light mode: Darker blue primary (#1e40af), optimized contrast
  - Dark mode: Lighter blue primary (#60a5fa), colors automatically invert
- **Responsive breakpoints**: 1024px, 768px, 480px (mobile-first approach)
- **Layout patterns**: Flexbox for navigation, CSS Grid for cards
- **Subtle animations**: Floating background orbs using `@keyframes float`

### JavaScript Behavior

All JavaScript is in `script.js` and handles:
1. **Dark mode toggle** - Saves preference to localStorage, persists across sessions (lines 1-17)
2. **Smooth scrolling** for anchor links with 80px offset for fixed navbar (lines 19-33)
3. **Navbar shadow on scroll** - Adds shadow after 50px scroll (lines 35-49)
4. **Scroll-triggered animations** - IntersectionObserver with 80ms stagger for cards (lines 51-83)
5. **Expandable news cards** - Click to toggle detailed content, auto-closes other cards (lines 85-102)
6. **Parallax scrolling** - Hero background moves at 0.5x scroll speed (lines 104-114)

### HTML Structure

Single-page site with semantic sections:
- **Navigation** - Fixed navbar with logo (round), nav links, and dark mode toggle button
- **Hero** - Full viewport with parallax background and shimmer text effect on "District Studios"
- **About** - Three feature cards with SVG icons (Quality Games, Active Community, Innovation)
- **News** - Two expandable news cards with badges, detailed descriptions, and bullet points
- **Community** - Social cards linking to Roblox and YouTube
- **Contact** - Email contact card
- **Footer** - Multi-column footer with Quick Links, Community links, tagline, and social icons

## Design System

### Color System

**Light Mode:**
- Primary: `#0000a4` (sharp royal blue)
- Secondary: `#0000d4` (brighter blue)
- Accent: `#4d4dff` (vibrant light blue)
- Backgrounds: `#ffffff` (pure white), `#f8f9fa` (subtle gray)
- Text: `#0a0a0a` (near black), `#525252` (medium gray)
- Glow color: `rgba(0, 0, 164, 0.4)` for text effects

**Dark Mode:**
- Primary: `#4d4dff` (bright blue)
- Secondary: `#6666ff` (lighter blue)
- Accent: `#9999ff` (pale blue)
- Backgrounds: `#0a0a0a` (near black), `#141414` (dark gray)
- Text: `#f5f5f5` (off-white), `#a3a3a3` (light gray)
- Glow color: `rgba(77, 77, 255, 0.5)` for text effects

**Note:** All backgrounds use `var(--bg-main)` and `var(--bg-alt)` to maintain consistency across sections - no color changes when scrolling.

### Typography
- Font family: **Inter** (Google Fonts)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- Letter spacing: -0.02em to -0.03em for headings

### Component Patterns
- **Cards**: 12px border-radius, 1px borders, bounce hover effect with `cubic-bezier(0.34, 1.56, 0.64, 1)`
  - Feature cards: translateY(-8px) + scale(1.02)
  - Social cards: translateY(-6px) + scale(1.02)
  - Contact cards: translateY(-8px) + scale(1.02)
- **News Cards**: Expandable on click with smooth height transition
- **Buttons**: 10px border-radius, 13px vertical padding, 2px borders
- **Logos**: All logo images are `border-radius: 50%` (circular)
- **Animations**: 0.3s cubic-bezier for bouncy interactions, 0.6s for theme transitions

## Deployment Options

This static site can be deployed to:
- **GitHub Pages**: Set main branch as source in repo settings
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Use `vercel` CLI

No build configuration needed for any platform.

## Dark Mode System

### Implementation
- Dark mode is controlled by the `.dark-mode` class on the `<html>` element
- Theme preference is saved in `localStorage` under the key `theme`
- All colors use CSS custom properties that automatically update
- Transitions are 0.6s with `cubic-bezier(0.4, 0, 0.2, 1)` easing

### Testing Dark Mode
- Click the sun/moon icon in the navbar to toggle
- Refresh the page - theme should persist
- Check all sections transition smoothly (no flashing)

## External Links

Keep these links synchronized when making updates:
- **Roblox Community**: https://www.roblox.com/communities/35469479/Vortex-Innovators#!/about
- **YouTube**: https://www.youtube.com/@District-Studios-Official
- **Email**: district.studios.official@gmail.com

## Modifying Content

### Adding News Items
Edit the `.news-grid` section in `index.html`. Each news card has:
- `.news-badge` - Status label (e.g., "In Progress")
- `.news-icon` - SVG icon container
- `<h3>` - Title
- `<p>` - Description
- `.news-date` - Date string

### Adding a New Section
1. Add section HTML in `index.html` with semantic `<section>` tag
2. Add navigation link in `.nav-links` (remember to add to mobile breakpoint if needed)
3. Style in `styles.css` with consistent spacing (100px desktop, 80px tablet, 60px mobile)
4. Add cards to IntersectionObserver selector in `script.js` line 71

### Updating Colors
All colors use CSS custom properties:
- Light mode colors: `:root` (lines 8-30)
- Dark mode colors: `:root.dark-mode` (lines 32-48)
- Update both sets to maintain proper contrast

### Theme Transition Speed
Change the transition duration in the CSS variables (line 26-29):
```css
--transition-bg: background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```
Increase/decrease the `0.6s` value as needed.

### Animation Patterns
- **Hero text shimmer**: Linear gradient animation sliding across "District Studios" text
  - Uses `-webkit-background-clip: text` for gradient effect
  - `@keyframes shimmer` creates continuous 3s animation
  - Drop shadow glow using `var(--glow-color)`
- **Background orbs**: Subtle floating blurred gradients with `@keyframes float`
  - Primary orb: 25s animation cycle
  - Secondary orb: 20s reverse animation
  - Very low opacity (0.03-0.04) for subtlety
- **Parallax effect**: Hero background translates at 0.5x scroll speed
- **Bounce hover**: Cards use `cubic-bezier(0.34, 1.56, 0.64, 1)` for springy feel
- **News card expansion**: Max-height transition with opacity fade
- **Icon animations**: News icons rotate and scale on hover
