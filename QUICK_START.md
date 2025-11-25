# 🚀 Quick Start Guide - Cynea AI Animated Website

## 30-Second Setup

### 1. Install Dependencies
```bash
npm install animejs
```

### 2. Copy Files
```bash
# Copy these files to your project:
- enhanced-home.tsx → src/pages/
- animated-components.tsx → src/components/
- animations.css → src/styles/
```

### 3. Import and Use
```typescript
import { EnhancedHome } from './pages/enhanced-home';
import './styles/animations.css';

function App() {
  return <EnhancedHome />;
}
```

## ✨ What You Get

### Animations
- ✅ Hero entrance with timeline
- ✅ Scroll-triggered reveals
- ✅ Card hover effects
- ✅ Animated counters
- ✅ Floating particles
- ✅ Pulsing CTAs

### Performance
- ✅ 60 FPS animations
- ✅ Intersection Observer
- ✅ GPU acceleration
- ✅ Reduced motion support

### Components
- ✅ AnimatedCard
- ✅ AnimatedButton
- ✅ AnimatedCounter
- ✅ AnimatedProgressBar
- ✅ AnimatedSection
- ✅ FloatingElement

## 🎯 Most Common Use Cases

### 1. Hero Animation
```typescript
useEffect(() => {
  anime.timeline()
    .add({ targets: '.hero-title', translateY: [50,0], opacity: [0,1] })
    .add({ targets: '.hero-cta', scale: [0.8,1], opacity: [0,1] });
}, []);
```

### 2. Scroll Animation
```typescript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({ targets: entry.target, translateY: [50,0], opacity: [0,1] });
    }
  });
});
```

### 3. Hover Effect
```typescript
card.addEventListener('mouseenter', () => {
  anime({ targets: card, scale: 1.05, translateY: -10, duration: 300 });
});
```

### 4. Counter
```typescript
anime({
  targets: element,
  innerHTML: [0, 100],
  duration: 2000,
  round: 1,
  easing: 'easeOutExpo'
});
```

## 🔧 Quick Customization

### Change Timing
```typescript
duration: 1000,  // milliseconds
delay: 500,      // delay before start
```

### Change Easing
```typescript
easing: 'easeOutExpo',     // smooth deceleration
easing: 'easeInOutQuad',   // smooth both ways
easing: 'easeOutBounce',   // bouncy ending
```

### Stagger Effect
```typescript
delay: anime.stagger(100)  // 100ms between each
```

## 📱 Test Checklist

- [ ] Desktop Chrome
- [ ] Mobile Safari
- [ ] Firefox
- [ ] Reduced motion works
- [ ] Keyboard navigation
- [ ] Screen reader friendly

## 🐛 Quick Fixes

**Animations not running?**
- Check anime.js is imported
- Verify elements have correct classes
- Check browser console

**Poor performance?**
- Reduce simultaneous animations
- Use transform (not position)
- Check for memory leaks

**Janky animations?**
- Use GPU-accelerated properties
- Avoid animating layout
- Test on target devices

## 📚 Next Steps

1. ✅ Review [Animation Guide](./ANIMATION_GUIDE.md)
2. ✅ Read [Implementation Guide](./IMPLEMENTATION.md)
3. ✅ Open [Demo HTML](./demo.html) in browser
4. ✅ Customize for your brand
5. ✅ Test across devices

## 💡 Pro Tips

1. **Less is more** - Subtle beats flashy
2. **Performance first** - Always test FPS
3. **Accessibility matters** - Support reduced motion
4. **Test early** - Check on real devices
5. **Stay consistent** - Use same timing/easing

## 🎨 Color Scheme

Primary: `#3b82f6` (blue-600)
Secondary: `#6366f1` (indigo-600)
Accent: `#f59e0b` (amber-500)
Success: `#10b981` (green-500)

## ⚡ Performance Targets

- Initial Load: < 2s
- Frame Rate: 60 FPS
- Animation: 300-1000ms
- Time to Interactive: < 3s

## 🆘 Need Help?

1. Check [README.md](./README.md)
2. Review [ANIMATION_GUIDE.md](./ANIMATION_GUIDE.md)
3. Open [demo.html](./demo.html) for reference
4. Check anime.js docs: https://animejs.com

---

**You're ready to go! 🚀**

Start with the demo.html file to see everything in action, then integrate the components into your React app.
