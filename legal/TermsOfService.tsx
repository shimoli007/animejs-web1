import React, { useEffect } from 'react';
import anime from 'animejs';

export function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="hero-date text-secondary mb-12 opacity-0">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary mb-4 leading-relaxed">
              Welcome to Cynea AI. These Terms of Service ("<strong className="text-primary">Terms</strong>") govern your access to and use of our website, services, and products (collectively, the "<strong className="text-primary">Services</strong>").
            </p>
            <p className="text-secondary mb-4 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
            </p>
            <div className="glass-card border-l-4 border-l-amber-500 bg-amber-500 bg-opacity-5 p-4 rounded">
              <p className="text-sm text-primary">
                <strong className="text-amber-400">Important:</strong> These Terms contain provisions that govern how claims are resolved, including an arbitration clause. Please read them carefully.
              </p>
            </div>
          </section>

          {/* Definitions */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">2. Definitions</h2>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span><strong className="text-primary">"Company," "we," "us," or "our"</strong> refers to Cynea AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span><strong className="text-primary">"Services"</strong> means our website, AI solutions, training programs, and related services</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span><strong className="text-primary">"User," "you," or "your"</strong> refers to the individual or entity using our Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span><strong className="text-primary">"Content"</strong> means text, images, software, and other materials on our website</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-3 mt-1">•</span>
                <span><strong className="text-primary">"Account"</strong> means your registered user account (if applicable)</span>
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">3. Eligibility</h2>
            <p className="text-secondary mb-3">To use our Services, you must:</p>
            <ul className="space-y-2 text-secondary mb-4">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Be at least 18 years old or the age of majority in your jurisdiction</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Have the legal capacity to enter into binding contracts</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Provide accurate and complete information when creating an account</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Comply with all applicable laws and regulations</span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed">
              If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Services */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">4. Our Services</h2>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">4.1 AI Solutions</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              We provide AI-powered solutions for automation, blockchain compliance, digital finance, and data analytics.
              Services are provided "as is" and may be modified or discontinued at any time.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">4.2 Training Programs</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              We offer training programs for career growth, B2B solutions, government programs, and marketing.
              Training content, schedules, and availability are subject to change.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">4.3 Service Modifications</h3>
            <p className="text-secondary mb-3">We reserve the right to:</p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Modify, suspend, or discontinue any part of our Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Change pricing and payment terms with notice</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Impose limits on features or services</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Update these Terms as necessary</span>
              </li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">5. User Accounts</h2>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">5.1 Account Creation</h3>
            <p className="text-secondary mb-3">To access certain features, you may need to create an account. You agree to:</p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Provide accurate, current, and complete information</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Maintain and update your information</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Keep your password confidential</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Notify us immediately of unauthorized access</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Accept responsibility for all activities under your account</span>
              </li>
            </ul>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">5.2 Account Termination</h3>
            <p className="text-secondary mb-3">We may suspend or terminate your account if you:</p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Violate these Terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Provide false or misleading information</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Engage in fraudulent or illegal activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Harm our Services or other users</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Fail to pay for Services</span>
              </li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">6. Acceptable Use Policy</h2>

            <h3 className="font-mono text-xl font-bold mb-3 text-emerald-400">6.1 Permitted Use</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              You may use our Services for lawful business and professional purposes consistent with these Terms.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-amber-400">6.2 Prohibited Conduct</h3>
            <p className="text-secondary mb-3">You agree NOT to:</p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Violate any laws, regulations, or third-party rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Infringe intellectual property rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Transmit viruses, malware, or harmful code</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Interfere with or disrupt our Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Use automated tools to access our Services without permission</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Impersonate others or misrepresent your affiliation</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Collect user data without consent</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Engage in spamming or unsolicited communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Use our Services for competitive purposes</span>
              </li>
            </ul>

            <div className="glass-card border-l-4 border-l-pink-500 bg-pink-500 bg-opacity-5 p-4 rounded">
              <p className="text-sm text-primary">
                <strong className="text-pink-400">Violation Consequences:</strong> Violating this Acceptable Use Policy may result in immediate account termination,
                legal action, and reporting to appropriate authorities.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">7. Intellectual Property Rights</h2>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">7.1 Our Content</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              All content on our website and Services, including text, graphics, logos, software, and designs, is owned by
              Cynea AI or our licensors and is protected by UK and international copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">7.2 Limited License</h3>
            <p className="text-secondary mb-3">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for their intended purpose.
              This license does not include the right to:
            </p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Copy, modify, or create derivative works</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Reverse engineer or decompile our software</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Remove copyright or proprietary notices</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Use our content for commercial purposes without permission</span>
              </li>
            </ul>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">7.3 Trademarks</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              "Cynea AI" and our logos are trademarks of Cynea AI. You may not use our trademarks without our prior written consent.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-cyber-blue">7.4 User Content</h3>
            <p className="text-secondary leading-relaxed">
              By submitting content to our Services (feedback, suggestions, etc.), you grant us a worldwide, royalty-free,
              perpetual license to use, reproduce, modify, and distribute that content for our business purposes.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">9. Disclaimers and Warranties</h2>

            <h3 className="font-mono text-xl font-bold mb-3 text-amber-400">9.1 "As Is" Basis</h3>
            <p className="text-secondary mb-3 leading-relaxed">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING:
            </p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Merchantability and fitness for a particular purpose</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Non-infringement</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Accuracy, reliability, or completeness of content</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Uninterrupted or error-free operation</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Security or freedom from viruses</span>
              </li>
            </ul>

            <h3 className="font-mono text-xl font-bold mb-3 text-amber-400">9.2 No Professional Advice</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Our Services provide information and tools but do not constitute professional advice (legal, financial, technical, etc.).
              Always consult qualified professionals for specific advice.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-amber-400">9.3 Third-Party Services</h3>
            <p className="text-secondary leading-relaxed">
              We are not responsible for third-party services, websites, or content linked from our Services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p className="text-secondary mb-4 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY UK LAW:
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-pink-400">10.1 Exclusion of Damages</h3>
            <p className="text-secondary mb-3">
              WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING:
            </p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Lost profits or revenue</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Data loss or corruption</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Business interruption</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Loss of goodwill</span>
              </li>
              <li className="flex items-start">
                <span className="text-electric-violet mr-3 mt-1">•</span>
                <span>Cost of substitute services</span>
              </li>
            </ul>

            <h3 className="font-mono text-xl font-bold mb-3 text-pink-400">10.2 Cap on Liability</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF OUR SERVICES SHALL NOT EXCEED
              THE GREATER OF: (A) THE AMOUNT YOU PAID TO US IN THE 12 MONTHS BEFORE THE CLAIM, OR (B) £100.
            </p>

            <h3 className="font-mono text-xl font-bold mb-3 text-emerald-400">10.3 Exceptions</h3>
            <p className="text-secondary mb-3">
              Nothing in these Terms excludes or limits our liability for:
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">•</span>
                <span>Death or personal injury caused by our negligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">•</span>
                <span>Fraud or fraudulent misrepresentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">•</span>
                <span>Any other liability that cannot be limited under UK law</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="legal-section glass-card border-glass p-8 rounded-2xl opacity-0">
            <h2 className="font-mono text-2xl font-bold mb-4">15. Contact Information</h2>
            <p className="text-secondary mb-6">
              For questions, concerns, or notices regarding these Terms, please contact us:
            </p>
            <div className="glass-card border-glass border-l-4 border-l-cyber-blue bg-cyber-blue bg-opacity-5 p-6 rounded-xl">
              <h3 className="text-xl font-mono font-bold text-cyber-blue mb-4">Cynea AI - Legal Department</h3>
              <p className="text-primary mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@cynea.ai" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                  legal@cynea.ai
                </a>
              </p>
              <p className="text-primary mb-2">
                <strong>Address:</strong> [Your Business Address, City, Postcode, United Kingdom]
              </p>
              <p className="text-primary mb-2">
                <strong>Company Registration:</strong> [Your Company Number]
              </p>
              <p className="text-primary">
                <strong>VAT Number:</strong> [Your VAT Number]
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="legal-section glass-card border-glass border-l-4 border-l-cyan-400 bg-cyan-400 bg-opacity-5 p-8 rounded-2xl opacity-0">
            <h3 className="text-lg font-mono font-bold text-cyan-400 mb-2">
              Acknowledgment
            </h3>
            <p className="text-secondary">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
