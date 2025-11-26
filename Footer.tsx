import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function Footer() {
  useEffect(() => {
    // Footer section entrance animation on scroll
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.footer-column',
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.footer-social-link',
              scale: [0, 1],
              opacity: [0, 1],
              duration: 600,
              delay: anime.stagger(80, { start: 400 }),
              easing: 'easeOutBack'
            });

            footerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      footerObserver.observe(footerElement);
    }

    return () => footerObserver.disconnect();
  }, []);

  return (
    <footer className="footer bg-deep-night border-t border-glass relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 footer-column" style={{ opacity: 0 }}>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center font-mono font-bold text-lg shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                C
              </div>
              <span className="font-mono text-2xl font-bold text-primary group-hover:text-cyber-blue transition-colors duration-300">
                Cynea AI
              </span>
            </Link>

            <p className="text-secondary mb-6 leading-relaxed max-w-sm">
              Empowering SMEs with AI and blockchain infrastructure for emerging markets. Complete digital transformation solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center space-x-2 text-secondary hover:text-cyber-blue transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:irene@cynea.ai">irene@cynea.ai</a>
              </div>
              <div className="flex items-center space-x-2 text-secondary hover:text-cyber-blue transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+447469721021">+44 7469 721021</a>
              </div>
              <div className="flex items-start space-x-2 text-secondary">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>5 Merchant Square, London, UK</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://uk.linkedin.com/company/cynea-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-10 h-10 rounded-lg glass-card border-glass flex items-center justify-center text-secondary hover:text-cyber-blue hover:border-cyber-blue hover:shadow-glow-sm transition-all duration-300"
                style={{ opacity: 0 }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link w-10 h-10 rounded-lg glass-card border-glass flex items-center justify-center text-secondary hover:text-cyber-blue hover:border-cyber-blue hover:shadow-glow-sm transition-all duration-300"
                style={{ opacity: 0 }}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:irene@cynea.ai"
                className="footer-social-link w-10 h-10 rounded-lg glass-card border-glass flex items-center justify-center text-secondary hover:text-cyber-blue hover:border-cyber-blue hover:shadow-glow-sm transition-all duration-300"
                style={{ opacity: 0 }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="footer-column" style={{ opacity: 0 }}>
            <h3 className="font-mono text-lg font-semibold text-primary mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products/ai-automation"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>AI & Automation</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/products/blockchain-compliance"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Blockchain & Compliance</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/products/digital-finance"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Digital Finance</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/products/data-analytics"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Data & Analytics</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Training */}
          <div className="footer-column" style={{ opacity: 0 }}>
            <h3 className="font-mono text-lg font-semibold text-primary mb-4">AI Training</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/training/career-growth"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Career Growth</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/training/b2b"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Corporate Training</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/training/public-sector"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Public Sector</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column" style={{ opacity: 0 }}>
            <h3 className="font-mono text-lg font-semibold text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/impact/talent-hub"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Talent Hub</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/use-cases"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Use Cases</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Industry Insights</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              © 2025 Cynea AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link
                to="/legal/privacy-policy"
                className="text-secondary opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all duration-300"
              >
                Privacy
              </Link>
              <span className="text-secondary opacity-30">•</span>
              <Link
                to="/legal/terms-of-service"
                className="text-secondary opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all duration-300"
              >
                Terms
              </Link>
              <span className="text-secondary opacity-30">•</span>
              <Link
                to="/legal/accessibility-statement"
                className="text-secondary opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
        }

        .border-glass {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .bg-deep-night {
          background-color: #050505;
        }

        .text-primary {
          color: #ffffff;
        }

        .text-secondary {
          color: #8892b0;
        }

        .text-cyber-blue {
          color: #00F0FF;
        }

        .bg-gradient-cyber {
          background: linear-gradient(135deg, #00F0FF 0%, #7000FF 100%);
        }

        .bg-gradient-neon {
          background: linear-gradient(135deg, #7000FF 0%, #FF006E 100%);
        }

        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
