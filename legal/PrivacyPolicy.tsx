import React, { useEffect } from 'react';
import anime from 'animejs';

export function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="hero-date text-secondary mb-12 opacity-0">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-secondary mb-4 leading-relaxed">
              Cynea AI ("<strong className="text-primary">we</strong>", "<strong className="text-primary">our</strong>", or "<strong className="text-primary">us</strong>") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-secondary leading-relaxed">
              We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our website, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Data Controller */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">2. Data Controller</h2>
            <p className="text-secondary mb-4">
              Cynea AI is the data controller responsible for your personal information. If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="glass-card border-glass bg-black bg-opacity-30 p-6 rounded-xl">
              <p className="text-primary mb-2 font-mono font-bold">Cynea AI</p>
              <p className="text-secondary mb-1">
                Email: <a href="mailto:privacy@cynea.ai" className="text-cyber-blue hover:text-electric-violet underline transition-colors">privacy@cynea.ai</a>
              </p>
              <p className="text-secondary mb-1">Address: [Your Business Address]</p>
              <p className="text-secondary">Data Protection Officer: [DPO Name or "N/A if not required"]</p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">3. Information We Collect</h2>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">3.1 Information You Provide</h3>
            <p className="text-secondary mb-3">We collect information that you voluntarily provide to us when you:</p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Contact us through forms on our website</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Subscribe to our newsletter or marketing communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Register for our services or create an account</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Participate in surveys or provide feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Apply for employment opportunities</span>
              </li>
            </ul>

            <p className="text-secondary mb-3">This information may include:</p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Name and contact details (email, phone number, address)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Company name and job title</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Professional information and qualifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Communications with us</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span>Any other information you choose to provide</span>
              </li>
            </ul>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">3.2 Automatically Collected Information</h3>
            <p className="text-secondary mb-3">When you visit our website, we automatically collect certain information, including:</p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Device Information:</strong> IP address, browser type, operating system, device type</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring website</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Location Data:</strong> Approximate geographic location based on IP address</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span><strong className="text-primary">Cookies and Tracking:</strong> See our Cookie Policy section below</span>
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">4. How We Use Your Information</h2>
            <p className="text-secondary mb-4">We process your personal data under the following lawful bases:</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card border-glass bg-black bg-opacity-20 p-6 rounded-xl">
                <h4 className="font-mono font-bold text-cyber-blue mb-3">Legitimate Interest</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Operating and improving our website and services</li>
                  <li>• Analyzing website usage and performance</li>
                  <li>• Preventing fraud and ensuring security</li>
                  <li>• Marketing our services (with opt-out option)</li>
                </ul>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-6 rounded-xl">
                <h4 className="font-mono font-bold text-emerald-400 mb-3">Contractual Necessity</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Providing services you've requested</li>
                  <li>• Processing transactions and payments</li>
                  <li>• Managing your account</li>
                  <li>• Customer support and communication</li>
                </ul>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-6 rounded-xl">
                <h4 className="font-mono font-bold text-electric-violet mb-3">Consent</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Sending marketing communications (when you opt in)</li>
                  <li>• Using non-essential cookies (as per Cookie Policy)</li>
                  <li>• Processing special categories of data (if applicable)</li>
                </ul>
              </div>

              <div className="glass-card border-glass bg-black bg-opacity-20 p-6 rounded-xl">
                <h4 className="font-mono font-bold text-amber-400 mb-3">Legal Obligation</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Complying with legal requirements</li>
                  <li>• Responding to lawful requests from authorities</li>
                  <li>• Protecting our legal rights</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">5. How We Share Your Information</h2>
            <p className="text-secondary mb-6">We do not sell your personal information. We may share your information with:</p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">5.1 Service Providers</h3>
            <p className="text-secondary mb-3">
              We engage third-party service providers to assist with our operations, such as:
            </p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Website hosting providers</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Email marketing platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Analytics services (e.g., Google Analytics)</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Customer relationship management (CRM) systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Payment processors</span>
              </li>
            </ul>
            <p className="text-sm text-secondary mb-6">
              These providers are contractually obligated to protect your data and use it only for the purposes we specify.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">5.2 Legal Requirements</h3>
            <p className="text-secondary mb-3">We may disclose your information if required by law or to:</p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Comply with legal processes or government requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Enforce our terms and conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Protect our rights, property, or safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Prevent fraud or security issues</span>
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">9. Your Rights Under UK GDPR</h2>
            <p className="text-secondary mb-6">You have the following rights regarding your personal data:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Access</h4>
                <p className="text-sm text-secondary">Request a copy of your personal data we hold</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Rectification</h4>
                <p className="text-sm text-secondary">Correct inaccurate or incomplete data</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Erasure</h4>
                <p className="text-sm text-secondary">Request deletion of your data ("right to be forgotten")</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Restrict Processing</h4>
                <p className="text-sm text-secondary">Limit how we use your data</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Data Portability</h4>
                <p className="text-sm text-secondary">Receive your data in a structured, machine-readable format</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Object</h4>
                <p className="text-sm text-secondary">Object to processing based on legitimate interests or marketing</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Withdraw Consent</h4>
                <p className="text-sm text-secondary">Withdraw consent for processing at any time</p>
              </div>
              <div className="glass-card border-glass bg-black bg-opacity-20 p-4 rounded-lg">
                <h4 className="font-mono font-bold mb-2 text-cyber-blue">Right to Lodge a Complaint</h4>
                <p className="text-sm text-secondary">File a complaint with the ICO</p>
              </div>
            </div>

            <p className="text-secondary mb-6">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@cynea.ai" className="text-cyber-blue hover:text-electric-violet underline transition-colors">privacy@cynea.ai</a>.
              We will respond to your request within one month.
            </p>

            <div className="glass-card border-l-4 border-l-cyan-400 bg-cyan-400 bg-opacity-5 p-4 rounded">
              <p className="font-mono font-bold text-cyan-400 mb-2">UK Information Commissioner's Office (ICO)</p>
              <p className="text-sm text-secondary mb-1">
                If you're not satisfied with our response, you have the right to lodge a complaint with the ICO:
              </p>
              <p className="text-sm text-secondary mb-1">
                Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-cyber-blue underline hover:text-electric-violet transition-colors">https://ico.org.uk</a>
              </p>
              <p className="text-sm text-secondary">
                Helpline: 0303 123 1113
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">14. Contact Us</h2>
            <p className="text-secondary mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="glass-card border-glass border-l-4 border-l-cyber-blue bg-cyber-blue bg-opacity-5 p-6 rounded-xl">
              <h3 className="text-xl font-mono font-bold text-cyber-blue mb-4">Cynea AI - Data Protection</h3>
              <p className="text-primary mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@cynea.ai" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                  privacy@cynea.ai
                </a>
              </p>
              <p className="text-primary mb-2">
                <strong>Address:</strong> [Your Business Address, City, Postcode]
              </p>
              <p className="text-primary mb-2">
                <strong>Phone:</strong> [Your Contact Number]
              </p>
              <p className="text-sm text-secondary mt-4">
                We aim to respond to all inquiries within 48 hours.
              </p>
            </div>
          </section>

          {/* UK GDPR Statement */}
          <section className="legal-section glass-card border-glass border-l-4 border-l-emerald-500 bg-emerald-500 bg-opacity-5 p-8 rounded-2xl opacity-0">
            <h3 className="text-lg font-mono font-bold text-emerald-400 mb-2">
              ✓ UK GDPR Compliant
            </h3>
            <p className="text-secondary">
              This Privacy Policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              Cynea AI is committed to protecting your personal data and respecting your privacy rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
