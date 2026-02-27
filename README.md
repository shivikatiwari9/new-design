# Shivika Tiwari - Makeup Artist Portfolio

A beautiful, elegant static portfolio website for Shivika Tiwari, professional makeup artist.

## Features

- 🎨 **Elegant & Minimal Design** - Clean, sophisticated aesthetic perfect for showcasing makeup artistry
- 📱 **Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- 🖼️ **Interactive Gallery** - Click photos to expand and see related images from the same shoot
- 🔍 **Lightbox View** - Full-screen image viewing with keyboard navigation
- 📂 **Category Organization** - Editorial, Fashion, Beauty, Glam, and Bridal categories
- 📧 **Contact Form** - Netlify-powered form for easy inquiries
- ⚡ **Fast Loading** - Lazy loading images and optimized assets

## Categories

- **Editorial** - Magazine and publication shoots
- **Fashion** - Runway and fashion photography
- **Beauty** - Skincare-focused natural looks
- **Glam** - Red carpet and evening looks
- **Bridal** - Wedding and bridal makeup

## Setup

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

### Deploying to Netlify

1. Push this repository to GitHub
2. Connect your GitHub repo to Netlify
3. Deploy! Netlify will automatically detect it's a static site
4. The contact form will work automatically with Netlify Forms

### Deploying to GitHub Pages

1. Push to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and folder (root)
4. Your site will be live at `https://yourusername.github.io/repo-name`

## Adding Your Own Photos

### Option 1: Local Images

1. Create folders in `images/` for each category:
   ```
   images/
   ├── editorial/
   ├── fashion/
   ├── beauty/
   ├── glam/
   ├── bridal/
   └── about/
   ```

2. Add your photos to appropriate folders

3. Update `js/portfolio-data.js`:
   ```javascript
   {
       id: 'ed-1',
       src: 'images/editorial/photo1.jpg',
       thumb: 'images/editorial/photo1.jpg',
       alt: 'Description of the photo',
       group: 'editorial-shoot-1'
   }
   ```

### Option 2: GitHub Hosted Images

Store images in a separate GitHub repository and use raw URLs:

```javascript
{
    id: 'br-1',
    src: 'https://raw.githubusercontent.com/username/repo/main/bridal/photo.jpg',
    thumb: 'https://raw.githubusercontent.com/username/repo/main/bridal/photo.jpg',
    alt: 'Bridal makeup look',
    group: 'bridal-wedding-1'
}
```

### Option 3: Multiple GitHub Repos (for 1GB+ storage)

Create separate repositories for different categories:
- `makeup-portfolio-editorial`
- `makeup-portfolio-bridal`
- etc.

Each repo gives you 1GB of storage. Reference images using raw URLs from each repo.

### Grouping Related Photos

Photos with the same `group` value will be shown together when clicked:

```javascript
// These two photos will display together when either is clicked
{ id: 'ed-1', group: 'magazine-shoot-1', ... },
{ id: 'ed-2', group: 'magazine-shoot-1', ... }
```

## Customization

### Contact Information

Update the contact details in `index.html`:

```html
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
<a href="https://instagram.com/yourusername">@yourusername</a>
```

### Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --color-accent: #c9a87c;      /* Gold accent color */
    --color-black: #1a1a1a;        /* Primary text */
    --color-grey: #999999;         /* Secondary text */
}
```

### About Page Photo

Replace `images/about/shivika-portrait.jpg` with your professional portrait.

## Image Optimization Tips

For best performance:

1. **Resize images** to max 1200px width for full-size, 600px for thumbnails
2. **Compress images** using tools like:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
   - ImageOptim (Mac)
3. **Target file size**: 200-500KB for full images, 50-150KB for thumbnails
4. **Format**: JPEG for photos, WebP for modern browsers

## File Structure

```
shivika-portfolio/
├── index.html              # Main HTML file
├── favicon.svg             # Site icon
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── main.js             # Main functionality
│   └── portfolio-data.js   # Photo data configuration
├── images/
│   ├── about/              # About page photos
│   ├── editorial/          # Editorial category
│   ├── fashion/            # Fashion category
│   ├── beauty/             # Beauty category
│   ├── glam/               # Glam category
│   └── bridal/             # Bridal category
├── netlify.toml            # Netlify configuration
└── README.md               # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Shivika Tiwari. All rights reserved.

---

Built with ❤️ for showcasing beautiful makeup artistry.
