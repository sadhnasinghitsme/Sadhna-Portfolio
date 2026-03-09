# AI Web Developer Portfolio

A modern, AI-focused portfolio website built with React.js and Tailwind CSS. Features dark theme, smooth animations, glassmorphism effects, and responsive design.

## Features

- 🎨 Modern dark UI with AI-themed design elements
- ✨ Smooth animations and transitions
- 💎 Glassmorphism effects
- 📱 Fully responsive design
- 🚀 Fast and optimized
- 🎯 SEO-friendly structure

## Tech Stack

- React.js
- Tailwind CSS
- CSS3 Animations

## Getting Started

### Installation

```bash
# Navigate to project directory
cd ai-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update GitHub and LinkedIn URLs
   - Modify the tagline and description

2. **Contact Section** (`src/components/Contact.js`):
   - Add your email address
   - Update social media links
   - Integrate email service (EmailJS, Formspree, etc.)

3. **Projects** (`src/components/Projects.js`):
   - Add your actual project details
   - Update technologies and features
   - Add project links/demos

4. **Skills** (`src/components/Skills.js`):
   - Adjust skill levels
   - Add/remove skills as needed

### Email Integration

To enable the contact form, integrate with an email service:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Formspree**
- Sign up at formspree.io
- Update form action URL

**Option 3: Custom Backend**
- Create API endpoint
- Update handleSubmit function

### Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#00f0ff',    // Cyan
  secondary: '#7c3aed',  // Purple
}
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://yourusername.github.io/portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## Project Structure

```
ai-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
└── package.json
```

## Performance Tips

- Optimize images before adding them
- Use lazy loading for images
- Minimize bundle size
- Enable compression on hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!

## Contact

For questions or suggestions, reach out via the contact form on the website.
