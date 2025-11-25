import React, { useEffect } from 'react';
import anime from 'animejs';

export function AccessibilityStatement() {
  const lastUpdated = "November 2025";

  useEffect(() => {
    // Hero animations
    anime({
      targets: '.hero-title',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1200,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.hero-date',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      delay: 200,
      easing: 'easeOutExpo'
    });

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo'
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.legal-section').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-deep-night text-primary">
      <div className="container mx-auto max-w-5xl px-6 py-20">
        <h1 className="hero-title font-mono text-4xl md:text-5xl font-bold mb-4 opacity-0">
          Accessibility Statement
        </h1>
        <p className="hero-date text-secondary mb-12 opacity-0">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          {/* Commitment */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
            <p className="text-secondary mb-4 leading-relaxed">
              Cynea AI is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <div className="glass-card border-l-4 border-l-emerald-500 bg-emerald-500 bg-opacity-5 p-4 rounded">
              <p className="text-sm text-primary">
                <strong className="text-emerald-400">Our Goal:</strong> We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA,
                ensuring our website is accessible to the widest possible audience.
              </p>
            </div>
          </section>

          {/* Measures */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Measures to Support Accessibility</h2>
            <p className="text-secondary mb-4">Cynea AI takes the following measures to ensure accessibility of our website:</p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Include accessibility as part of our mission statement and corporate values</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Integrate accessibility into our procurement and development processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Provide continual accessibility training for our staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Assign clear accessibility goals and responsibilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Conduct regular accessibility audits and testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Employ formal accessibility quality assurance methods</span>
              </li>
            </ul>
          </section>

          {/* Conformance Status */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Conformance Status</h2>
            <p className="text-secondary mb-4">
              The <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-electric-violet underline transition-colors">
                Web Content Accessibility Guidelines (WCAG)
              </a> defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance:
              Level A, Level AA, and Level AAA.
            </p>

            <div className="glass-card border-glass bg-black bg-opacity-30 p-6 rounded-xl my-6">
              <h3 className="text-xl font-mono font-bold text-cyber-blue mb-3">
                ✓ WCAG 2.1 Level AA Conformance
              </h3>
              <p className="text-secondary mb-3">
                The Cynea AI website is <strong className="text-primary">partially conformant</strong> with WCAG 2.1 Level AA. Partially conformant means
                that some parts of the content do not fully conform to the accessibility standard.
              </p>
              <p className="text-sm text-secondary">
                We are actively working to achieve full conformance and will update this statement as we make improvements.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-6">Accessibility Features</h2>
            <p className="text-secondary mb-6">Our website includes the following accessibility features:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Keyboard Navigation</h4>
                <p className="text-sm text-secondary">Full keyboard navigation support with visible focus indicators</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Screen Reader Support</h4>
                <p className="text-sm text-secondary">ARIA labels and semantic HTML for screen reader compatibility</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Color Contrast</h4>
                <p className="text-sm text-secondary">WCAG AA compliant color contrast ratios (4.5:1 minimum)</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Responsive Design</h4>
                <p className="text-sm text-secondary">Mobile-friendly and works across all device sizes</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Skip Links</h4>
                <p className="text-sm text-secondary">"Skip to main content" links for faster navigation</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Alt Text</h4>
                <p className="text-sm text-secondary">Descriptive alternative text for all meaningful images</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Reduced Motion</h4>
                <p className="text-sm text-secondary">Respects prefers-reduced-motion preference for animations</p>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Resizable Text</h4>
                <p className="text-sm text-secondary">Text can be resized up to 200% without loss of content or functionality</p>
              </div>
            </div>
          </section>

          {/* Compatibility */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Compatible Technologies</h2>
            <p className="text-secondary mb-4">Our website is designed to be compatible with the following technologies:</p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">Browsers</h3>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Google Chrome (latest version)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Mozilla Firefox (latest version)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Apple Safari (latest version)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Microsoft Edge (latest version)</span>
              </li>
            </ul>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">Assistive Technologies</h3>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>JAWS (Job Access With Speech)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>NVDA (NonVisual Desktop Access)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>VoiceOver (macOS and iOS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>TalkBack (Android)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Dragon NaturallySpeaking</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>ZoomText</span>
              </li>
            </ul>

            <div className="glass-card border-l-4 border-l-cyan-400 bg-cyan-400 bg-opacity-5 p-4 rounded">
              <p className="text-sm text-primary">
                <strong className="text-cyan-400">Note:</strong> Our website is not compatible with browsers older than 3 major versions
                or mobile operating systems older than 5 years.
              </p>
            </div>
          </section>

          {/* Known Limitations */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Known Limitations</h2>
            <p className="text-secondary mb-6">
              Despite our best efforts, some content on our website may not yet be fully accessible. Below are known limitations:
            </p>

            <div className="space-y-4">
              <div className="glass-card border-l-4 border-l-amber-500 bg-amber-500 bg-opacity-5 p-4 rounded">
                <h4 className="font-mono font-bold text-amber-400 mb-2">Third-Party Content</h4>
                <p className="text-sm text-secondary mb-2">
                  Some embedded third-party content (videos, social media widgets) may not be fully accessible.
                </p>
                <p className="text-sm text-primary">
                  <strong className="text-amber-400">Workaround:</strong> We provide alternative content or transcripts where possible.
                </p>
              </div>

              <div className="glass-card border-l-4 border-l-amber-500 bg-amber-500 bg-opacity-5 p-4 rounded">
                <h4 className="font-mono font-bold text-amber-400 mb-2">PDF Documents</h4>
                <p className="text-sm text-secondary mb-2">
                  Some PDF documents may not be fully tagged for accessibility.
                </p>
                <p className="text-sm text-primary">
                  <strong className="text-amber-400">Solution:</strong> We are working to remediate existing PDFs and ensure new documents are accessible.
                  Contact us if you need an alternative format.
                </p>
              </div>

              <div className="glass-card border-l-4 border-l-amber-500 bg-amber-500 bg-opacity-5 p-4 rounded">
                <h4 className="font-mono font-bold text-amber-400 mb-2">Complex Interactive Elements</h4>
                <p className="text-sm text-secondary mb-2">
                  Some complex interactive components may have limited keyboard support.
                </p>
                <p className="text-sm text-primary">
                  <strong className="text-amber-400">Status:</strong> We are actively improving keyboard navigation for all interactive elements.
                </p>
              </div>
            </div>

            <p className="text-sm text-secondary mt-6">
              We are committed to addressing these limitations as part of our ongoing accessibility improvements.
            </p>
          </section>

          {/* Feedback */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Feedback and Contact Information</h2>
            <p className="text-secondary mb-6">
              We welcome your feedback on the accessibility of the Cynea AI website. Please let us know if you encounter
              accessibility barriers:
            </p>

            <div className="glass-card border-glass border-l-4 border-l-cyber-blue bg-cyber-blue bg-opacity-5 p-6 rounded-xl">
              <h3 className="text-xl font-mono font-bold text-cyber-blue mb-4">Accessibility Contact</h3>

              <p className="text-primary mb-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:accessibility@cynea.ai" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                  accessibility@cynea.ai
                </a>
              </p>

              <p className="text-primary mb-3">
                <strong>Phone:</strong> [Your Contact Number]
              </p>

              <p className="text-primary mb-3">
                <strong>Postal Address:</strong><br />
                Cynea AI - Accessibility Team<br />
                [Your Business Address]<br />
                [City, Postcode]<br />
                United Kingdom
              </p>

              <p className="text-sm text-secondary mt-4">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </section>

          {/* Response */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">Our Response to Feedback</h2>
            <p className="text-secondary mb-4">When you contact us about accessibility, we will:</p>
            <ol className="space-y-2 text-secondary mb-6 list-decimal list-inside">
              <li>Acknowledge receipt of your message within 2 business days</li>
              <li>Investigate the reported issue</li>
              <li>Provide you with information about potential workarounds</li>
              <li>Implement fixes based on priority and complexity</li>
              <li>Update you on the progress and expected resolution timeline</li>
            </ol>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">Resolution Timelines</h3>
            <p className="text-secondary mb-4">We aim to resolve accessibility issues within the following timeframes:</p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Critical issues</strong> (complete blocker): 48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">High priority</strong> (significant barrier): 5 business days</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Medium priority</strong> (moderate impact): 2 weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Low priority</strong> (minor enhancement): Next major update</span>
              </li>
            </ul>
          </section>

          {/* Commitment Statement */}
          <section className="legal-section glass-card border-glass border-l-4 border-l-emerald-500 bg-emerald-500 bg-opacity-5 p-8 rounded-2xl opacity-0">
            <h3 className="text-lg font-mono font-bold text-emerald-400 mb-2">
              ✓ Our Commitment
            </h3>
            <p className="text-secondary mb-2">
              Cynea AI is committed to providing an inclusive digital experience. Accessibility is not a one-time effort but
              an ongoing commitment to ensuring all users can access our content and services.
            </p>
            <p className="text-secondary">
              We will continue to improve the accessibility of our website and welcome your feedback to help us serve you better.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
