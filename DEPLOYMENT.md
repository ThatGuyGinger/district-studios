# GitHub Pages Deployment Guide

## Quick Setup

1. **Create a new repository** on GitHub (or use an existing one)
2. **Upload all files** from this directory to your repository
3. **Go to repository Settings** → Pages
4. **Set Source** to "Deploy from a branch"
5. **Select branch** (usually `main` or `master`)
6. **Select folder** to `/ (root)`
7. **Save** and wait a few minutes

## Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME
```

## Files to Upload
- `index.html` (main page)
- `style.css` (styling)
- `script.js` (functionality)
- `district-logo.png` (logo image)
- `README.md` (documentation)
- `.gitignore` (optional, for git)

## Notes
- No build process required - this is a static website
- All file paths are relative and optimized for GitHub Pages
- The countdown timer will work automatically
- All external resources (fonts, icons) load from CDNs

## Troubleshooting
- If images don't load, check that `district-logo.png` is in the root directory
- If styles don't apply, verify `style.css` is in the root directory
- If JavaScript doesn't work, verify `script.js` is in the root directory
- Make sure all file names match exactly (case-sensitive on Linux servers)

## Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings