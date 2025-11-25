# Complete Beginner's Guide to Building a Website with Anime.js

## What is Anime.js?

Anime.js is a lightweight JavaScript animation library that makes it easy to animate HTML elements, CSS properties, SVG, and more. It's perfect for creating smooth, professional animations on your website.

---

## Step 1: Set Up Your HTML File

Create a basic HTML file structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Anime.js Website</title>
    <style>
        /* Your CSS will go here */
    </style>
</head>
<body>
    <!-- Your HTML content will go here -->

    <!-- Load anime.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    
    <script>
        // Your animation code will go here
    </script>
</body>
</html>
```

---

## Step 2: Include Anime.js Library

You have two options:

### Option A: Use a CDN (easiest for beginners)
Add this before your closing `</body>` tag:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

### Option B: Download the library
1. Download from https://animejs.com/
2. Save it in your project folder
3. Link it: `<script src="anime.min.js"></script>`

---

## Step 3: Create Your First Animation

### Basic Syntax
```javascript
anime({
    targets: '.my-element',  // What to animate (CSS selector)
    translateX: 250,         // Move right 250px
    duration: 1000,          // Animation takes 1 second
    easing: 'easeInOutQuad'  // How it moves (smooth)
});
```

### Simple Example
```html
<div class="box"></div>

<style>
    .box {
        width: 100px;
        height: 100px;
        background: blue;
    }
</style>

<script>
    anime({
        targets: '.box',
        translateX: 250,
        duration: 1000
    });
</script>
```

---

## Step 4: Understanding Key Properties

### Targets
What element(s) to animate:
```javascript
targets: '.box'           // CSS class
targets: '#myId'          // ID
targets: 'div'            // HTML tag
targets: document.querySelector('.box')  // DOM element
```

### Transform Properties
```javascript
translateX: 250          // Move horizontally
translateY: 100          // Move vertically
rotate: '1turn'          // Rotate (degrees, turn, rad)
scale: 2                 // Make bigger/smaller
```

### CSS Properties
```javascript
backgroundColor: '#FFF'  // Change background color
opacity: 0.5            // Change transparency
width: '200px'          // Change width
borderRadius: '50%'     // Make it circular
```

### Timing Properties
```javascript
duration: 1000          // How long (milliseconds)
delay: 500              // Wait before starting
easing: 'easeInOutQuad' // Animation curve
loop: true              // Repeat forever
direction: 'alternate'  // Go back and forth
```

---

## Step 5: Common Animation Patterns

### Pattern 1: Animate on Button Click
```html
<button onclick="animateBox()">Click Me!</button>
<div class="box"></div>

<script>
    function animateBox() {
        anime({
            targets: '.box',
            translateX: 200,
            backgroundColor: '#FF0000',
            duration: 1000
        });
    }
</script>
```

### Pattern 2: Animate Multiple Elements
```javascript
anime({
    targets: '.box',  // Animates ALL elements with class "box"
    translateX: 250,
    delay: anime.stagger(100)  // Each starts 100ms after previous
});
```

### Pattern 3: Chain Animations with Timeline
```javascript
const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

timeline
    .add({
        targets: '.box1',
        translateX: 250
    })
    .add({
        targets: '.box2',
        translateX: 250
    })
    .add({
        targets: '.box3',
        translateX: 250
    });
```

### Pattern 4: Animate on Page Load
```javascript
window.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.header',
        translateY: [-100, 0],  // From -100px to 0px
        opacity: [0, 1],        // From invisible to visible
        duration: 1000
    });
});
```

---

## Step 6: Popular Easing Functions

Easing controls how the animation accelerates/decelerates:

```javascript
'linear'           // Constant speed
'easeInOutQuad'    // Slow start and end
'easeOutBounce'    // Bouncy ending
'easeInOutElastic' // Elastic/spring effect
'easeOutExpo'      // Fast start, slow end
```

Try them all to see which feels best!

---

## Step 7: Interactive Examples You Can Try

### Hover Animation
```html
<div class="card">Hover Me!</div>

<script>
    const card = document.querySelector('.card');
    
    card.addEventListener('mouseenter', () => {
        anime({
            targets: card,
            scale: 1.1,
            duration: 300
        });
    });
    
    card.addEventListener('mouseleave', () => {
        anime({
            targets: card,
            scale: 1,
            duration: 300
        });
    });
</script>
```

### Loading Animation
```javascript
anime({
    targets: '.loading-bar',
    width: '100%',
    duration: 2000,
    easing: 'linear'
});
```

### Fade In Gallery
```javascript
anime({
    targets: '.gallery-item',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100),
    duration: 800
});
```

---

## Step 8: Debugging Tips

### Common Mistakes

1. **Animation not working?**
   - Make sure anime.js is loaded before your script
   - Check if your selector is correct
   - Open browser console (F12) to check for errors

2. **Element jumps back?**
   - Anime.js only animates, doesn't set final state
   - Add CSS for the final state or use `anime.remove()` to keep changes

3. **Can't see the element?**
   - Check if it has width/height
   - Make sure it's not hidden by CSS

### Console Logging
```javascript
anime({
    targets: '.box',
    translateX: 250,
    update: () => {
        console.log('Animation is running');
    },
    complete: () => {
        console.log('Animation finished!');
    }
});
```

---

## Step 9: Building a Complete Project

### Project: Animated Landing Page

1. **HTML Structure**
```html
<header class="header">
    <h1 class="title">Welcome</h1>
    <p class="subtitle">To My Animated Website</p>
</header>

<section class="features">
    <div class="feature-card">Feature 1</div>
    <div class="feature-card">Feature 2</div>
    <div class="feature-card">Feature 3</div>
</section>
```

2. **CSS Styling**
```css
.header {
    text-align: center;
    padding: 100px 20px;
}

.feature-card {
    width: 200px;
    height: 200px;
    margin: 20px;
    background: #667eea;
    border-radius: 10px;
    display: inline-block;
}
```

3. **Animations**
```javascript
// Animate header on load
anime.timeline()
    .add({
        targets: '.title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000
    })
    .add({
        targets: '.subtitle',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800
    }, '-=500');

// Animate cards with stagger
anime({
    targets: '.feature-card',
    scale: [0, 1],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 800,
    easing: 'easeOutElastic(1, .8)'
});
```

---

## Step 10: Next Steps & Resources

### Practice Projects
1. Animated navigation menu
2. Image gallery with effects
3. Loading screen animation
4. Scroll-triggered animations
5. Interactive button effects

### Official Resources
- Documentation: https://animejs.com/documentation/
- Examples: https://animejs.com/examples/
- CodePen: Search "anime.js" for examples

### Tips for Success
1. Start simple - animate one property at a time
2. Experiment with different easing functions
3. Use the browser console to debug
4. Keep animations subtle (don't overdo it!)
5. Test on different devices/browsers

---

## Quick Reference Cheat Sheet

```javascript
// Basic animation
anime({
    targets: '.element',
    translateX: 250,
    duration: 1000
});

// Multiple properties
anime({
    targets: '.element',
    translateX: 250,
    rotate: 360,
    scale: 2,
    backgroundColor: '#FFF'
});

// Stagger (cascade effect)
anime({
    targets: '.items',
    translateY: 30,
    delay: anime.stagger(100)
});

// Timeline (sequence)
const tl = anime.timeline();
tl.add({ targets: '.el1', translateX: 250 })
  .add({ targets: '.el2', translateX: 250 });

// Loop
anime({
    targets: '.element',
    translateX: 250,
    loop: true,
    direction: 'alternate'
});
```

---

## Conclusion

You now have everything you need to start building animated websites with anime.js! Remember:
- Start with simple animations
- Practice regularly
- Experiment with different properties
- Keep it subtle and purposeful
- Have fun!

Happy animating! 🎨
