// ===========================
// DOM Elements
// ===========================

const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelectorAll('.nav-link');

// ===========================
// Mobile Menu Toggle
// ===========================

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }

        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)) {
        toggleMobileMenu();
    }
});

// ===========================
// Navbar Scroll Effect
// ===========================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Hero Section Animations
// ===========================

function initHeroAnimations() {
    // Badge animation
    anime({
        targets: '.hero-badge',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 200
    });

    // Title animation
    anime({
        targets: '.hero-title',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 400
    });

    // Description animation
    anime({
        targets: '.hero-description',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 600
    });

    // CTA buttons animation
    anime({
        targets: '.hero-cta .btn',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(100, {start: 800})
    });

    // Stats animation
    anime({
        targets: '.hero-stats .stat-item',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: anime.stagger(100, {start: 1000})
    });

    // Visual cards animation
    anime({
        targets: '.visual-card',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: anime.stagger(150, {start: 600})
    });

    // Card bar animation
    anime({
        targets: '.card-bar::after',
        width: ['0%', '70%'],
        duration: 1500,
        easing: 'easeOutExpo',
        delay: 1200
    });
}

// ===========================
// Floating Shapes Animation
// ===========================

function animateFloatingShapes() {
    anime({
        targets: '.shape-1',
        translateY: [0, -50, 0],
        translateX: [0, 30, 0],
        duration: 15000,
        easing: 'easeInOutSine',
        loop: true
    });

    anime({
        targets: '.shape-2',
        translateY: [0, 40, 0],
        translateX: [0, -30, 0],
        duration: 18000,
        easing: 'easeInOutSine',
        loop: true,
        delay: 1000
    });

    anime({
        targets: '.shape-3',
        translateY: [0, 30, 0],
        scale: [1, 1.2, 1],
        duration: 12000,
        easing: 'easeInOutSine',
        loop: true,
        delay: 2000
    });

    anime({
        targets: '.shape-4',
        translateX: [0, -40, 0],
        scale: [1, 0.8, 1],
        duration: 14000,
        easing: 'easeInOutSine',
        loop: true,
        delay: 1500
    });
}

// ===========================
// Stats Counter Animation
// ===========================

function animateCounter(element, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    };

    window.requestAnimationFrame(step);
}

function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, 0, target, 2000);
                });
            }
        });
    }, { threshold: 0.5 });

    if (statNumbers.length > 0) {
        observer.observe(statNumbers[0].closest('.hero-stats'));
    }
}

// ===========================
// Scroll-Triggered Animations
// ===========================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Animate children with stagger
                const children = entry.target.querySelectorAll('.feature-card, .service-card, .stat-item');
                if (children.length > 0) {
                    anime({
                        targets: children,
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo',
                        delay: anime.stagger(100)
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.features, .services, .about, .cta-section');
    sections.forEach(section => observer.observe(section));

    // Section header animations
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target.children,
                        translateY: [20, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo',
                        delay: anime.stagger(100)
                    });
                    headerObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        headerObserver.observe(header);
    });
}

// ===========================
// Feature Card Hover Effects
// ===========================

function initFeatureCardEffects() {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('.feature-icon'),
                rotate: [0, 10],
                scale: [1, 1.1],
                duration: 300,
                easing: 'easeOutExpo'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('.feature-icon'),
                rotate: [10, 0],
                scale: [1.1, 1],
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });
}

// ===========================
// Visual Card Animations
// ===========================

function initVisualCardAnimations() {
    const visualCards = document.querySelectorAll('.visual-card');

    visualCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                duration: 300,
                easing: 'easeOutExpo'
            });

            anime({
                targets: this.querySelector('.card-icon'),
                rotate: 360,
                duration: 600,
                easing: 'easeOutExpo'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });
}

// ===========================
// Service Card Animations
// ===========================

function initServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('.service-icon-large'),
                rotate: [0, 10],
                scale: [1, 1.1],
                duration: 400,
                easing: 'easeOutExpo'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('.service-icon-large'),
                rotate: [10, 0],
                scale: [1.1, 1],
                duration: 400,
                easing: 'easeOutExpo'
            });
        });
    });
}

// ===========================
// Button Ripple Effect
// ===========================

function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Apply ripple effect to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ===========================
// CTA Section Animation
// ===========================

function initCtaAnimation() {
    const ctaSection = document.querySelector('.cta-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '.cta-title',
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });

                anime({
                    targets: '.cta-description',
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo',
                    delay: 200
                });

                anime({
                    targets: '.cta-buttons .btn',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 600,
                    easing: 'easeOutExpo',
                    delay: anime.stagger(100, {start: 400})
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if (ctaSection) {
        observer.observe(ctaSection);
    }
}

// ===========================
// About Section Animation
// ===========================

function initAboutAnimation() {
    const aboutSection = document.querySelector('.about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '.about-content > *',
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo',
                    delay: anime.stagger(100)
                });

                anime({
                    targets: '.about-visual',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutExpo',
                    delay: 400
                });

                anime({
                    targets: '.metric',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 600,
                    easing: 'easeOutExpo',
                    delay: anime.stagger(100, {start: 600})
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// ===========================
// Parallax Effect
// ===========================

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');

        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
        }

        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.05;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===========================
// Initialize All Animations
// ===========================

function init() {
    // Check if animations should be reduced
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        initHeroAnimations();
        animateFloatingShapes();
        initStatsCounter();
        initScrollAnimations();
        initFeatureCardEffects();
        initVisualCardAnimations();
        initServiceCardAnimations();
        initCtaAnimation();
        initAboutAnimation();
        initParallax();
    }

    // Always initialize interactive features
    console.log('🎨 Cynea AI Website Initialized');
}

// ===========================
// Page Load
// ===========================

// Wait for DOM and anime.js to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===========================
// Performance Monitoring
// ===========================

if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
                console.warn('⚠️ Long task detected:', entry.duration.toFixed(2) + 'ms');
            }
        }
    });

    try {
        perfObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
        // Longtask observer not supported
    }
}

// ===========================
// Utility Functions
// ===========================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
