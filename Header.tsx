import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import anime from 'animejs';

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

  useEffect(() => {
    // Navbar entrance animation
    anime({
      targets: '.nav-logo',
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutExpo',
      delay: 200
    });

    anime({
      targets: '.nav-links > *',
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(50, { start: 400 }),
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.nav-cta',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      delay: 800,
      easing: 'easeOutBack'
    });
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-night bg-opacity-70 backdrop-blur-lg border-b border-glass shadow-glow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="nav-logo flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center font-mono font-bold text-lg shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
              C
            </div>
            <span className="font-mono text-xl font-bold text-primary group-hover:text-cyber-blue transition-colors duration-300">
              Cynea AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 nav-links">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-primary hover:text-cyber-blue transition-colors duration-300 font-medium">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-card border-glass shadow-glow-md animate-dropdown">
                  {productsMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-primary hover:text-cyber-blue hover:bg-glass-hover transition-all duration-300 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* AI Training Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('training')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-primary hover:text-cyber-blue transition-colors duration-300 font-medium">
                <span>AI Training</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'training' && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-card border-glass shadow-glow-md animate-dropdown">
                  {trainingMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-primary hover:text-cyber-blue hover:bg-glass-hover transition-all duration-300 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Impact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('impact')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-primary hover:text-cyber-blue transition-colors duration-300 font-medium">
                <span>Impact</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'impact' && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-card border-glass shadow-glow-md animate-dropdown">
                  {impactMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-primary hover:text-cyber-blue hover:bg-glass-hover transition-all duration-300 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Links */}
            <Link
              to="/use-cases"
              className="text-primary hover:text-cyber-blue transition-colors duration-300 font-medium"
            >
              Use Cases
            </Link>

            <Link
              to="/about"
              className="text-primary hover:text-cyber-blue transition-colors duration-300 font-medium"
            >
              About
            </Link>

            <Link
              to="/resources"
              className="text-primary hover:text-cyber-blue transition-colors duration-300 font-medium"
            >
              Resources
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block nav-cta">
            <Link
              to="/contact"
              className="btn-cyber px-6 py-3 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary hover:text-cyber-blue transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 glass-card border-glass p-6 space-y-4 animate-dropdown">
            {/* Products */}
            <div className="space-y-2">
              <div className="text-secondary text-sm font-mono font-semibold mb-2">Products</div>
              {productsMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-primary hover:text-cyber-blue transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-glass-hover"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* AI Training */}
            <div className="space-y-2 pt-4 border-t border-glass">
              <div className="text-secondary text-sm font-mono font-semibold mb-2">AI Training</div>
              {trainingMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-primary hover:text-cyber-blue transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-glass-hover"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Impact */}
            <div className="space-y-2 pt-4 border-t border-glass">
              <div className="text-secondary text-sm font-mono font-semibold mb-2">Impact</div>
              {impactMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-primary hover:text-cyber-blue transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-glass-hover"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Other Links */}
            <div className="space-y-2 pt-4 border-t border-glass">
              <Link
                to="/use-cases"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-primary hover:text-cyber-blue transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-glass-hover"
              >
                Use Cases
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-primary hover:text-cyber-blue transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-glass-hover"
              >
                About
              </Link>
              <Link
                to="/resources"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-primary hover:text-cyber-blue transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-glass-hover"
              >
                Resources
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-glass">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center btn-cyber px-6 py-3 rounded-lg font-semibold shadow-glow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .animate-dropdown {
          animation: dropdown-enter 0.3s ease-out;
        }

        @keyframes dropdown-enter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        .shadow-glow-md {
          box-shadow: 0 4px 20px rgba(0, 240, 255, 0.15);
        }

        .border-glass {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .bg-glass-hover {
          background: rgba(0, 240, 255, 0.05);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border-radius: 0.75rem;
        }

        .btn-cyber {
          background: linear-gradient(135deg, #00F0FF 0%, #7000FF 100%);
          color: #ffffff;
          border: 1px solid #00F0FF;
        }

        .btn-cyber:hover {
          transform: translateY(-2px);
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

        .bg-deep-night {
          background-color: #050505;
        }

        .bg-gradient-cyber {
          background: linear-gradient(135deg, #00F0FF 0%, #7000FF 100%);
        }
      `}</style>
    </header>
  );
}

export default Header;
