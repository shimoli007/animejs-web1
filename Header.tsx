import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'var(--white)',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
          transition: 'box-shadow var(--transition-base)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0' }}>
            {/* Logo */}
            <Link
              to="/"
              style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: 'var(--navy-dark)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem'
              }}
            >
              <span style={{
                background: 'var(--teal)',
                color: 'white',
                padding: '0.5rem 0.875rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: '800',
                lineHeight: 1
              }}>
                C
              </span>
              <span>Cynea AI</span>
            </Link>

            {/* Desktop Navigation */}
            <ul
              className="desktop-nav"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {/* Products Dropdown */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--navy-dark)')}
                >
                  Products
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'products' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '0.5rem',
                      minWidth: '280px',
                      backgroundColor: 'white',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-xl)',
                      padding: '0.5rem',
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {productsMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          fontSize: 'var(--text-base)',
                          color: 'var(--navy-dark)',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--light-gray)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* AI Training Dropdown */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('training')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--navy-dark)')}
                >
                  AI Training
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'training' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '0.5rem',
                      minWidth: '260px',
                      backgroundColor: 'white',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-xl)',
                      padding: '0.5rem',
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {trainingMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          fontSize: 'var(--text-base)',
                          color: 'var(--navy-dark)',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--light-gray)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Impact Dropdown */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('impact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--navy-dark)')}
                >
                  Impact
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'impact' && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '0.5rem',
                      minWidth: '200px',
                      backgroundColor: 'white',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-xl)',
                      padding: '0.5rem',
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {impactMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          fontSize: 'var(--text-base)',
                          color: 'var(--navy-dark)',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                          textDecoration: 'none'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--light-gray)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/use-cases"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    padding: '0.5rem',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--navy-dark)')}
                >
                  Use Cases
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    padding: '0.5rem',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--navy-dark)')}
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    padding: '0.5rem',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--navy-dark)')}
                >
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
              style={{
                display: 'block',
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--navy-dark)'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu" style={{ paddingBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', borderTop: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--gray)', fontSize: 'var(--text-sm)', padding: '0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Products
                  </div>
                  {productsMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0 0.75rem 1rem',
                        color: 'var(--navy-dark)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-base)'
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', borderTop: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--gray)', fontSize: 'var(--text-sm)', padding: '0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    AI Training
                  </div>
                  {trainingMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0 0.75rem 1rem',
                        color: 'var(--navy-dark)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-base)'
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', borderTop: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--gray)', fontSize: 'var(--text-sm)', padding: '0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Impact
                  </div>
                  {impactMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0 0.75rem 1rem',
                        color: 'var(--navy-dark)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-base)'
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/use-cases"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    textDecoration: 'none',
                    borderTop: '1px solid var(--light-gray)',
                    fontSize: 'var(--text-base)'
                  }}
                >
                  Use Cases
                </Link>

                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)'
                  }}
                >
                  Resources
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0',
                    fontWeight: '500',
                    color: 'var(--navy-dark)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)'
                  }}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}
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
