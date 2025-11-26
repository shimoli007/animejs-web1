# Cynea AI Website - Glassmorphism Design

A professional, modern website for Cynea AI featuring a stunning glassmorphism design system with deep space aesthetics.

## Features

- 🎨 **Glassmorphism Design** - Modern frosted glass effects with backdrop blur
- 🌌 **Deep Space Theme** - Dark background (#050505) with cyber-blue (#00F0FF) and electric violet (#7000FF) accents
- ✨ **Anime.js Animations** - Smooth scroll-triggered animations and interactive effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 🔒 **GDPR Compliant** - Cookie consent and privacy controls

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Anime.js** - Animation library
- **Lucide React** - Beautiful icon set

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
cynea-ai-website/
├── components/          # Shared components
│   ├── SEOHead.tsx
│   └── CookieConsent.tsx
├── products/           # Product pages
│   ├── AIAutomation.tsx
│   ├── BlockchainCompliance.tsx
│   ├── DigitalFinance.tsx
│   └── DataAnalytics.tsx
├── training/           # Training pages
│   ├── CareerGrowth.tsx
│   ├── B2BTraining.tsx
│   └── GovernmentPrograms.tsx
├── impact/             # Impact pages
│   ├── TalentHub.tsx
│   └── AIForGood.tsx
├── legal/              # Legal pages
│   ├── AccessibilityStatement.tsx
│   ├── PrivacyPolicy.tsx
│   └── TermsOfService.tsx
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
├── Header.tsx          # Global header
├── Footer.tsx          # Global footer
├── enhanced-home.tsx   # Home page
├── About.tsx           # About page
├── UseCases.tsx        # Use cases page
├── Resources.tsx       # Resources page
└── Contact.tsx         # Contact page
```

## Design System

### Colors

- **Background**: `#050505` (Deep Night)
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#8892b0` (Slate)
- **Cyber Blue**: `#00F0FF`
- **Electric Violet**: `#7000FF`

### Gradients

- **Cyber Gradient**: `linear-gradient(135deg, #00F0FF 0%, #7000FF 100%)`
- **Neon Gradient**: `linear-gradient(135deg, #7000FF 0%, #FF006E 100%)`

### Glass Effects

- **Glass Card**: `rgba(255, 255, 255, 0.03)` + `backdrop-filter: blur(12px)`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`

### Typography

- **Body**: Inter
- **Headings**: JetBrains Mono

### Shadows

- **Glow SM**: `0 0 10px rgba(0, 240, 255, 0.2)`
- **Glow MD**: `0 0 15px rgba(0, 240, 255, 0.25)`
- **Glow LG**: `0 0 30px rgba(0, 240, 255, 0.4)`

## Pages

### Main Pages
- **Home** (`/`) - Landing page with hero and infrastructure stack
- **About** (`/about`) - Company information and founder story
- **Use Cases** (`/use-cases`) - Real business results and case studies
- **Resources** (`/resources`) - Blog posts, whitepapers, videos
- **Contact** (`/contact`) - Contact form with validation

### Product Pages
- **AI & Automation** (`/products/ai-automation`)
- **Blockchain & Compliance** (`/products/blockchain-compliance`)
- **Digital Finance** (`/products/digital-finance`)
- **Data Analytics** (`/products/data-analytics`)

### Training Pages
- **Career Growth** (`/training/career-growth`)
- **Corporate Training** (`/training/b2b`)
- **Public Sector** (`/training/public-sector`)

### Impact Pages
- **Talent Hub** (`/impact/talent-hub`)
- **AI for Good** (`/impact/ai-for-good`)

### Legal Pages
- **Accessibility Statement** (`/legal/accessibility-statement`)
- **Privacy Policy** (`/legal/privacy-policy`)
- **Terms of Service** (`/legal/terms-of-service`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation
- Screen reader friendly
- Reduced motion support
- Focus indicators

## Performance

- Optimized animations with GPU acceleration
- Lazy loading of images
- Code splitting with React Router
- Efficient intersection observers

## License

ISC License - Copyright © 2025 Cynea AI

## Contact

- Email: irene@cynea.ai
- Phone: +44 7469 721021
- Address: 5 Merchant Square, London, UK
- LinkedIn: https://uk.linkedin.com/company/cynea-africa
