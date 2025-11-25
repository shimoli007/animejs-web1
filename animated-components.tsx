import { useEffect, useRef } from 'react';
import anime from 'animejs';

/**
 * Animated Progress Bar Component
 * Shows progress with smooth animation
 */
export function AnimatedProgressBar({ 
  value, 
  max = 100, 
  label 
}: { 
  value: number; 
  max?: number; 
  label: string; 
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      anime({
        targets: barRef.current,
        width: `${(value / max) * 100}%`,
        duration: 1500,
        easing: 'easeOutExpo'
      });
    }
  }, [value, max]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          ref={barRef}
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
}

/**
 * Animated Number Counter
 * Counts up to target value when visible
 */
export function AnimatedCounter({ 
  end, 
  duration = 2000,
  suffix = '' 
}: { 
  end: number; 
  duration?: number;
  suffix?: string;
}) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && countRef.current) {
          anime({
            targets: countRef.current,
            innerHTML: [0, end],
            duration,
            round: 1,
            easing: 'easeOutExpo'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef}>0</span>
  );
}

/**
 * Animated Card with Hover Effects
 * Professional card with subtle animations
 */
export function AnimatedCard({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      // Entrance animation
      anime({
        targets: cardRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay,
        easing: 'easeOutExpo'
      });

      // Hover effects
      const card = cardRef.current;
      
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card,
          scale: 1.03,
          translateY: -5,
          duration: 300,
          easing: 'easeOutCubic'
        });
      });

      card.addEventListener('mouseleave', () => {
        anime({
          targets: card,
          scale: 1,
          translateY: 0,
          duration: 300,
          easing: 'easeOutCubic'
        });
      });
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white p-6 rounded-xl shadow-lg opacity-0 cursor-pointer"
    >
      {children}
    </div>
  );
}

/**
 * Animated Button with Ripple Effect
 * Enhanced button with professional interactions
 */
export function AnimatedButton({ 
  children, 
  onClick,
  variant = 'primary'
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      // Create ripple effect
      const button = buttonRef.current;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');

      button.appendChild(ripple);

      anime({
        targets: ripple,
        scale: [0, 2],
        opacity: [0.5, 0],
        duration: 600,
        easing: 'easeOutExpo',
        complete: () => ripple.remove()
      });
    }

    onClick?.();
  };

  const baseClasses = "relative overflow-hidden px-6 py-3 rounded-lg font-semibold transition-all";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button 
      ref={buttonRef}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          pointer-events: none;
        }
      `}</style>
    </button>
  );
}

/**
 * Animated Section Reveal
 * Wrapper for sections that animate into view
 */
export function AnimatedSection({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.animate-child');
          
          anime({
            targets: children,
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutExpo'
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

/**
 * Animated Icon with Rotation
 * Icon that rotates on interaction
 */
export function AnimatedIcon({ 
  icon, 
  size = 'w-12 h-12' 
}: { 
  icon: React.ReactNode; 
  size?: string;
}) {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.addEventListener('mouseenter', () => {
        anime({
          targets: iconRef.current,
          rotate: 360,
          duration: 600,
          easing: 'easeInOutBack'
        });
      });
    }
  }, []);

  return (
    <div ref={iconRef} className={`${size} inline-block cursor-pointer`}>
      {icon}
    </div>
  );
}

/**
 * Floating Background Element
 * Creates ambient motion in background
 */
export function FloatingElement({ 
  className = '',
  delay = 0 
}: { 
  className?: string;
  delay?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      anime({
        targets: elementRef.current,
        translateY: [-20, 20],
        translateX: [-10, 10],
        duration: 4000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
        delay
      });
    }
  }, [delay]);

  return (
    <div 
      ref={elementRef}
      className={`absolute rounded-full opacity-20 ${className}`}
    />
  );
}

/**
 * Loading Spinner with Animation
 * Professional loading indicator
 */
export function AnimatedLoader({ size = 'w-12 h-12' }: { size?: string }) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaderRef.current) {
      anime({
        targets: loaderRef.current,
        rotate: 360,
        duration: 1000,
        easing: 'linear',
        loop: true
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div 
        ref={loaderRef}
        className={`${size} border-4 border-blue-200 border-t-blue-600 rounded-full`}
      />
    </div>
  );
}
