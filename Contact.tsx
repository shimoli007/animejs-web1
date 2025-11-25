import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEOHead } from './components/SEOHead';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: 'sme',
    message: '',
    gdprConsent: false,
    marketingConsent: false,
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      targets: '.hero-description',
      opacity: [0, 1],
      translateY: [30, 0],
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
          if (entry.target.classList.contains('contact-info-item')) {
            const items = document.querySelectorAll('.contact-info-item');
            anime({
              targets: items,
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('contact-form')) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('quick-link')) {
            const links = document.querySelectorAll('.quick-link');
            anime({
              targets: links,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.contact-info-item, .contact-form, .quick-link').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'You must consent to data processing to submit this form';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState('submitting');

    try {
      // In a real implementation, this would send to your backend API
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      setFormState('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          category: 'sme',
          message: '',
          gdprConsent: false,
          marketingConsent: false,
        });
        setFormState('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-deep-night text-primary">
      <SEOHead
        title="Contact Us - Cynea AI | Get in Touch for AI Solutions"
        description="Contact Cynea AI for AI automation, blockchain compliance, digital finance solutions. Serving SMEs, corporates, and government entities across the UK and emerging markets."
        keywords="contact cynea ai, AI consultation UK, business AI solutions contact, AI support, get in touch AI company"
        canonicalUrl="https://cynea.ai/contact"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="hero-title font-mono text-5xl md:text-7xl font-bold mb-6 opacity-0">
              Get in Touch
            </h1>
            <p className="hero-description text-xl text-secondary max-w-3xl mx-auto leading-relaxed opacity-0">
              Whether you're an SME looking to transform your business, a government institution building AI capacity,
              or a talented innovator seeking opportunities—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-mono text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="contact-info-item flex items-start opacity-0">
                  <div className="w-12 h-12 rounded-lg bg-cyber-blue bg-opacity-20 flex items-center justify-center flex-shrink-0 border border-cyber-blue border-opacity-30">
                    <Mail className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-mono font-bold mb-2">Email</h4>
                    <a href="mailto:irene@cynea.ai" className="text-secondary hover:text-cyber-blue transition-colors">
                      irene@cynea.ai
                    </a>
                  </div>
                </div>

                <div className="contact-info-item flex items-start opacity-0">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500 bg-opacity-20 flex items-center justify-center flex-shrink-0 border border-emerald-500 border-opacity-30">
                    <Phone className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-mono font-bold mb-2">Phone</h4>
                    <p className="text-secondary">+44 7469 721021 (UK)</p>
                  </div>
                </div>

                <div className="contact-info-item flex items-start opacity-0">
                  <div className="w-12 h-12 rounded-lg bg-electric-violet bg-opacity-20 flex items-center justify-center flex-shrink-0 border border-electric-violet border-opacity-30">
                    <MapPin className="w-6 h-6 text-electric-violet" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-mono font-bold mb-2">Locations</h4>
                    <p className="text-secondary">5 Merchant Square, London, UK</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-item glass-card border-glass bg-cyber-blue bg-opacity-5 p-6 rounded-xl mt-8 opacity-0">
                <h4 className="font-mono font-bold mb-3">Office Hours</h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM EAT<br />
                  Saturday: 10:00 AM - 2:00 PM EAT<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="contact-form glass-card border-glass p-8 rounded-2xl opacity-0">
                <h2 className="font-mono text-3xl font-bold mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-primary font-mono mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-black bg-opacity-30 border rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-primary placeholder-secondary transition-all ${
                          errors.name ? 'border-pink-500' : 'border-glass'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-pink-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-primary font-mono mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-black bg-opacity-30 border rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-primary placeholder-secondary transition-all ${
                          errors.email ? 'border-pink-500' : 'border-glass'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-pink-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-primary font-mono mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black bg-opacity-30 border border-glass rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-primary placeholder-secondary"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-primary font-mono mb-2">
                      I'm interested in: *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black bg-opacity-30 border border-glass rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-primary"
                    >
                      <option value="sme">SME Solutions (AI, Blockchain, Finance)</option>
                      <option value="b2b-training">B2B Training Programs</option>
                      <option value="government">Government Partnerships</option>
                      <option value="marketing">AI Upskilling</option>
                      <option value="talent">Talent Hub / Careers</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-primary font-mono mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-black bg-opacity-30 border rounded-lg focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-primary placeholder-secondary resize-none ${
                        errors.message ? 'border-pink-500' : 'border-glass'
                      }`}
                      placeholder="Tell us about your needs or questions..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-pink-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* GDPR Compliance Section */}
                  <div className="space-y-4 glass-card border-glass border-l-4 border-l-cyber-blue bg-cyber-blue bg-opacity-5 p-6 rounded-xl">
                    <h4 className="font-mono font-bold mb-4">Data Protection & Consent</h4>

                    {/* Required GDPR Consent */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-2 cursor-pointer accent-cyber-blue"
                        aria-invalid={!!errors.gdprConsent}
                        aria-describedby={errors.gdprConsent ? 'gdpr-error' : undefined}
                      />
                      <label htmlFor="gdprConsent" className="ml-3 text-sm text-secondary">
                        <span className="font-bold text-primary">I consent to data processing *</span>
                        <br />I agree to Cynea AI processing my personal data according to the{' '}
                        <Link
                          to="/legal/privacy-policy"
                          className="text-cyber-blue underline hover:text-electric-violet transition-colors"
                        >
                          Privacy Policy
                        </Link>
                        . My data will be used solely to respond to this inquiry and will be stored securely.
                      </label>
                    </div>
                    {errors.gdprConsent && (
                      <p id="gdpr-error" className="text-sm text-pink-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.gdprConsent}
                      </p>
                    )}

                    {/* Optional Marketing Consent */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-2 border-glass cursor-pointer accent-cyber-blue"
                      />
                      <label htmlFor="marketingConsent" className="ml-3 text-sm text-secondary">
                        <span className="font-bold text-primary">I'd like to receive updates (Optional)</span>
                        <br />I consent to receiving marketing communications, newsletters, and product updates from Cynea AI.
                        You can unsubscribe at any time.
                      </label>
                    </div>

                    <p className="text-xs text-secondary mt-4">
                      By submitting this form, you acknowledge that your information will be processed in accordance with
                      UK GDPR regulations. See our{' '}
                      <Link to="/legal/privacy-policy" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/legal/terms-of-service" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                        Terms of Service
                      </Link>{' '}
                      for more information.
                    </p>
                  </div>

                  {/* Form Status Messages */}
                  {formState === 'success' && (
                    <div className="glass-card border-l-4 border-l-emerald-500 bg-emerald-500 bg-opacity-10 p-4 rounded" role="alert">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3" />
                        <div>
                          <p className="font-mono font-bold text-emerald-400">Message sent successfully!</p>
                          <p className="text-sm text-secondary">
                            Thank you for contacting us. We'll respond within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {formState === 'error' && (
                    <div className="glass-card border-l-4 border-l-pink-500 bg-pink-500 bg-opacity-10 p-4 rounded" role="alert">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-pink-400 mr-3" />
                        <div>
                          <p className="font-mono font-bold text-pink-400">Something went wrong</p>
                          <p className="text-sm text-secondary">
                            Please try again or email us directly at irene@cynea.ai
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full md:w-auto bg-gradient-cyber text-white px-8 py-4 rounded-lg hover:shadow-glow-md transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-mono font-bold"
                    data-loading={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-secondary">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Looking for Something Specific?</h2>
            <p className="text-secondary">Quick links to help you find what you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products/ai-automation" className="quick-link glass-card border-glass p-6 rounded-2xl hover:border-cyber-blue transition-all duration-300 text-center opacity-0">
              <h4 className="font-mono font-bold mb-2">Product Demo</h4>
              <p className="text-secondary text-sm">Schedule a personalized demo of our platform</p>
            </Link>
            <Link to="/training/b2b" className="quick-link glass-card border-glass p-6 rounded-2xl hover:border-emerald-500 transition-all duration-300 text-center opacity-0">
              <h4 className="font-mono font-bold mb-2">Training Programs</h4>
              <p className="text-secondary text-sm">Explore our corporate and government training</p>
            </Link>
            <Link to="/impact/talent-hub" className="quick-link glass-card border-glass p-6 rounded-2xl hover:border-electric-violet transition-all duration-300 text-center opacity-0">
              <h4 className="font-mono font-bold mb-2">Join Talent Hub</h4>
              <p className="text-secondary text-sm">Apply to our Nairobi talent development program</p>
            </Link>
            <Link to="/resources" className="quick-link glass-card border-glass p-6 rounded-2xl hover:border-amber-400 transition-all duration-300 text-center opacity-0">
              <h4 className="font-mono font-bold mb-2">Resources</h4>
              <p className="text-secondary text-sm">Access guides, whitepapers, and research</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
