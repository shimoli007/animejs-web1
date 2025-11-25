# Cynea AI Website - Animation Implementation Guide

## Overview
This enhanced website uses anime.js to create a professional, engaging experience that feels alive and keeps users engaged longer. All animations are subtle, purposeful, and enhance rather than distract from the content.

## Key Animation Principles

### 1. **Entrance Animations**
- Hero elements fade in sequentially with staggered timing
- Creates a sense of hierarchy and guides user attention
- Uses easeOutExpo for natural, professional feel

### 2. **Scroll-Triggered Animations**
- Sections animate into view as users scroll
- Uses Intersection Observer API for performance
- Prevents animations from running until content is visible

### 3. **Interactive Hover Effects**
- Cards lift and scale slightly on hover
- Icons rotate to show interactivity
- Smooth transitions create polish

### 4. **Counter Animations**
- Stats count up from 0 when scrolled into view
- Creates engagement and emphasizes achievements
- Only runs once per page load

### 5. **Continuous Subtle Motion**
- Floating elements provide life without distraction
- Pulse effects on CTAs draw attention
- Respects prefers-reduced-motion preference

## Animation Catalog

### Hero Section
```typescript
// Timeline for sequential entrance
anime.timeline()
  .add({ targets: '.hero-badge', ... })
  .add({ targets: '.hero-title', ... })
  .add({ targets: '.hero-description', ... })
  .add({ targets: '.hero-cta', ... });
```

### Floating Background Elements
```typescript
anime({
  targets: '.float-element',
  translateY: [-10, 10],
  duration: 3000,
  direction: 'alternate',
  loop: true
});
```

### Stats Counter
```typescript
anime({
  targets: target,
  innerHTML: [0, finalValue],
  duration: 2000,
  round: 1,
  easing: 'easeOutExpo'
});
```

### Card Hover Effects
```typescript
card.addEventListener('mouseenter', () => {
  anime({
    targets: card,
    scale: 1.05,
    translateY: -10,
    duration: 300
  });
});
```

### Scroll-Triggered Section Animations
```typescript
anime({
  targets: children,
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 800,
  delay: anime.stagger(100)
});
```

## Performance Considerations

1. **Intersection Observer**: Only animate when elements are visible
2. **Stagger Delays**: Space out animations to prevent overwhelming
3. **Single Observers**: Unobserve after animation completes
4. **Reduced Motion**: Respect user preferences (can be added)

## CSS Classes Used

- `.hero-badge`: Badge above hero title
- `.hero-title`: Main headline
- `.hero-description`: Hero paragraph
- `.hero-cta`: Call-to-action buttons
- `.float-element`: Floating background particles
- `.stat-number`: Animated counter numbers
- `.feature-card`: Service/product cards
- `.card-icon`: Icons within cards
- `.animate-section`: Sections with scroll triggers
- `.animate-on-scroll`: Individual elements to animate
- `.pulse-cta`: Pulsing call-to-action buttons

## Adding New Animations

### For New Pages:
1. Import anime.js: `import anime from 'animejs'`
2. Use useEffect hook for initialization
3. Add appropriate CSS classes
4. Use Intersection Observer for scroll triggers

### For New Components:
1. Add entrance animation in useEffect
2. Add hover effects via event listeners
3. Use semantic CSS classes
4. Keep animations subtle and purposeful

## Accessibility

- All animations enhance, never block content
- Users with vestibular disorders should see minimal motion
- Can add prefers-reduced-motion detection:

```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Run animations
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- No animations block critical functionality

## Future Enhancements

1. Add page transition animations
2. Implement parallax scrolling effects
3. Add more micro-interactions
4. Create loading state animations
5. Add success/error state animations for forms
