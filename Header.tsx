import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productsMenu = [
    { name: 'AI & Automation Tools', path: '/products/ai-automation' },
    { name: 'Blockchain Smart Contracts', path: '/products/blockchain-compliance' },
    { name: 'Digital Finance', path: '/products/digital-finance' },
    { name: 'Data Analytics & Monetization', path: '/products/data-analytics' }
  ];

  const trainingMenu = [
    { name: 'Career Growth Programs', path: '/training/career-growth' },
    { name: 'Corporate Training', path: '/training/b2b' },
    { name: 'Public Sector', path: '/training/public-sector' }
  ];

  const impactMenu = [
    { name: 'AI For Good', path: '/impact/ai-for-good' },
    { name: 'Talent Hub', path: '/impact/talent-hub' }
  ];

  return (
    <>
      <header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container">
          <nav className="nav-container">
            {/* Logo */}
            <Link to="/" className="logo">
              <span className="logo-icon">C</span>
              <span className="logo-text">Cynea AI</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="desktop-nav nav-list">
              {/* Products Dropdown */}
              <li className="nav-item dropdown">
                <button className="nav-button">
                  Products
                  <ChevronDown size={16} />
                </button>
                <div className="dropdown-menu">
                  {productsMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="dropdown-item"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>

              {/* AI Training Dropdown */}
              <li className="nav-item dropdown">
                <button className="nav-button">
                  AI Training
                  <ChevronDown size={16} />
                </button>
                <div className="dropdown-menu">
                  {trainingMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="dropdown-item"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Impact Dropdown */}
              <li className="nav-item dropdown">
                <button className="nav-button">
                  Impact
                  <ChevronDown size={16} />
                </button>
                <div className="dropdown-menu">
                  {impactMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="dropdown-item"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="nav-item">
                <Link to="/use-cases" className="nav-link">
                  Use Cases
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>

            {/* CTA Button (Desktop) */}
            <div className="desktop-nav">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <div className="mobile-section">
                  <div className="mobile-section-header">Products</div>
                  {productsMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-link mobile-link-indent"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mobile-section">
                  <div className="mobile-section-header">AI Training</div>
                  {trainingMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-link mobile-link-indent"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mobile-section">
                  <div className="mobile-section-header">Impact</div>
                  {impactMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-link mobile-link-indent"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/use-cases"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link mobile-link-main"
                >
                  Use Cases
                </Link>

                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link mobile-link-main"
                >
                  Resources
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-link mobile-link-main"
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary mobile-cta"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div style={{ height: '80px' }}></div>

      <style>{`
        /* Header Styles - Optimized for Performance */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background-color: var(--white);
          transition: box-shadow var(--transition-base);
          border-bottom: 1px solid rgba(7, 32, 72, 0.05);
        }

        .header.scrolled {
          box-shadow: var(--shadow-md);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
        }

        /* Logo Styles */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--navy-primary);
          text-decoration: none;
        }

        .logo-icon {
          background: linear-gradient(135deg, var(--gold-accent) 0%, #d89419 100%);
          color: white;
          padding: 0.5rem 0.875rem;
          border-radius: var(--radius-md);
          font-weight: 800;
          line-height: 1;
          box-shadow: 0 2px 8px rgba(236, 165, 46, 0.3);
        }

        .logo-text {
          color: var(--navy-primary);
        }

        /* Desktop Navigation - CSS-Only Dropdowns (No Lag!) */
        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        /* Dropdown Container - Always in DOM for Performance */
        .dropdown {
          position: relative;
        }

        .nav-button {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--navy-primary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          transition: color var(--transition-fast);
          font-family: var(--font-primary);
        }

        .nav-button:hover {
          color: var(--gold-accent);
        }

        .nav-link {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--navy-primary);
          padding: 0.5rem;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--gold-accent);
        }

        /* Dropdown Menu - CSS-Only Hover (ZERO LAG!) */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.5rem;
          min-width: 280px;
          background-color: var(--white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-2xl);
          padding: var(--space-2);
          border: 1px solid rgba(7, 32, 72, 0.08);

          /* Performance Optimization - No React State! */
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: opacity var(--transition-fast),
                      transform var(--transition-fast),
                      visibility var(--transition-fast);
          pointer-events: none;
        }

        /* Show dropdown on hover - Pure CSS */
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .dropdown-item {
          display: block;
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-base);
          font-weight: 500;
          color: var(--navy-primary);
          border-radius: var(--radius-lg);
          transition: background-color var(--transition-fast),
                      color var(--transition-fast);
          text-decoration: none;
        }

        .dropdown-item:hover {
          background-color: rgba(236, 165, 46, 0.1);
          color: var(--navy-primary);
        }

        /* Mobile Menu Styles */
        .mobile-menu {
          padding-bottom: 1.5rem;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-section {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-top: 1px solid var(--light-gray);
        }

        .mobile-section-header {
          font-weight: 600;
          color: var(--gray);
          font-size: var(--text-sm);
          padding: 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mobile-link {
          display: block;
          padding: 0.75rem 0;
          color: var(--navy-primary);
          text-decoration: none;
          font-size: var(--text-base);
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .mobile-link:hover {
          color: var(--gold-accent);
        }

        .mobile-link-indent {
          padding-left: 1rem;
        }

        .mobile-link-main {
          border-top: 1px solid var(--light-gray);
          font-weight: 600;
        }

        .mobile-cta {
          margin-top: 1rem;
          width: 100%;
          text-align: center;
        }

        .mobile-menu-btn {
          display: block;
          padding: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--navy-primary);
          transition: color var(--transition-fast);
        }

        .mobile-menu-btn:hover {
          color: var(--gold-accent);
        }

        /* Responsive Breakpoints */
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
