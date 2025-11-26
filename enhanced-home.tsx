import { Link } from 'react-router-dom';
import { GraduationCap, Database, Bot, Link2, DollarSign, BarChart3, ArrowRight, TrendingUp, Users, Globe, Sparkles } from 'lucide-react';

export function EnhancedHome() {
  const infrastructureStack = [
    {
      title: 'Train',
      description: 'Comprehensive AI readiness programs for officials and SME staff',
      icon: GraduationCap,
      color: 'var(--purple-accent)',
      link: '/training/b2b',
      features: ['Career Growth', 'Corporate Training', 'Public Sector']
    },
    {
      title: 'Digitize',
      description: 'Transform analog operations into streamlined digital systems',
      icon: Database,
      color: 'var(--gold-accent)',
      link: '/products/ai-automation',
      features: ['Data Migration', 'Cloud Infrastructure', 'Digital Workflows']
    },
    {
      title: 'Automate',
      description: 'Deploy AI agents to handle repetitive tasks and workflows',
      icon: Bot,
      color: 'var(--purple-deep)',
      link: '/products/ai-automation',
      features: ['AI Agents', 'Workflow Automation', 'Process Optimization']
    },
    {
      title: 'Trace',
      description: 'Blockchain-powered supply chain transparency and compliance',
      icon: Link2,
      color: 'var(--gold-accent)',
      link: '/products/blockchain-compliance',
      features: ['Supply Chain Tracking', 'EUDR Compliance', 'ESG Reporting']
    },
    {
      title: 'Finance',
      description: 'Access stablecoin payments and digital finance solutions',
      icon: DollarSign,
      color: 'var(--purple-accent)',
      link: '/products/digital-finance',
      features: ['Stablecoin Payments', 'Digital Wallets', 'Cross-Border Transactions']
    },
    {
      title: 'Monetize',
      description: 'Transform business data into actionable insights and revenue',
      icon: BarChart3,
      color: 'var(--purple-deep)',
      link: '/products/data-analytics',
      features: ['Data Analytics', 'Insights Marketplace', 'Revenue Optimization']
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Officials Trained', description: 'Across multiple government agencies' },
    { icon: TrendingUp, value: '100+', label: 'SMEs Empowered', description: 'Growing businesses in emerging markets' },
    { icon: Globe, value: '5', label: 'Countries', description: 'Active in Eastern & Southern Africa' },
    { icon: BarChart3, value: '95%', label: 'Client Satisfaction', description: 'Consistent positive feedback' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section - Striking & Attention-Grabbing */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              AI & Blockchain Infrastructure for Emerging Markets
            </div>

            <h1 className="hero-title">
              Empower Your SME with{' '}
              <span className="hero-highlight">AI & Blockchain</span>
            </h1>

            <p className="hero-description">
              Complete infrastructure stack for emerging market SMEs. Train your team, digitize operations, automate workflows, trace products, access digital finance, and monetize your data—all in one platform.
            </p>

            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link to="/use-cases" className="btn btn-secondary btn-lg">
                View Use Cases
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-value">200+</div>
                <div className="trust-label">Officials Trained</div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-value">100+</div>
                <div className="trust-label">SMEs Supported</div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-value">5</div>
                <div className="trust-label">Active Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack Section */}
      <section className="infrastructure-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Complete Infrastructure Stack</h2>
            <p className="section-description">
              Everything your business needs to compete globally—from training to digitization, automation, traceability, finance, and monetization
            </p>
          </div>

          <div className="infrastructure-grid">
            {infrastructureStack.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="infrastructure-card card">
                  <div className="card-icon-wrapper">
                    <div className="card-icon" style={{ backgroundColor: item.color }}>
                      <Icon size={32} />
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>

                    <div className="card-features">
                      {item.features.map((feature) => (
                        <span key={feature} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link to={item.link} className="card-link">
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-navy">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-card">
                  <div className="stat-icon-wrapper">
                    <div className="stat-icon">
                      <Icon size={28} />
                    </div>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Join the SMEs, governments, and enterprises already building the future with Cynea AI. Get started today with a free consultation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Demo
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section - Striking & Modern */
        .hero-section {
          padding: var(--space-32) 0 var(--space-28) 0;
          background: linear-gradient(135deg, var(--navy-primary) 0%, var(--navy-light) 50%, #0A2F5F 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(236, 165, 46, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          background: linear-gradient(135deg, var(--gold-accent) 0%, #fdb241 100%);
          color: var(--white);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 700;
          margin-bottom: var(--space-8);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(236, 165, 46, 0.4);
          animation: fadeInUp 0.6s ease-out;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: var(--space-8);
          letter-spacing: -0.02em;
          animation: fadeInUp 0.6s ease-out 0.1s backwards;
        }

        .hero-highlight {
          background: linear-gradient(135deg, var(--gold-accent) 0%, #fdb241 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: var(--text-xl);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
          margin-bottom: var(--space-12);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.6s ease-out 0.2s backwards;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-16);
          animation: fadeInUp 0.6s ease-out 0.3s backwards;
        }

        .trust-indicators {
          display: flex;
          gap: var(--space-12);
          justify-content: center;
          flex-wrap: wrap;
          padding-top: var(--space-8);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          animation: fadeIn 0.8s ease-out 0.5s backwards;
        }

        .trust-item {
          text-align: center;
        }

        .trust-value {
          font-weight: 800;
          color: var(--gold-accent);
          font-size: var(--text-3xl);
          line-height: 1;
          margin-bottom: var(--space-2);
        }

        .trust-label {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }

        .trust-divider {
          width: 1px;
          background-color: rgba(255, 255, 255, 0.15);
        }

        /* Infrastructure Section */
        .infrastructure-section {
          padding: var(--space-28) 0;
          background-color: var(--white);
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto var(--space-16) auto;
        }

        .section-title {
          font-size: var(--text-5xl);
          font-weight: 900;
          color: var(--navy-primary);
          margin-bottom: var(--space-6);
          letter-spacing: -0.02em;
        }

        .section-description {
          font-size: var(--text-xl);
          color: var(--dark-gray);
          line-height: 1.8;
        }

        .infrastructure-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        @media (min-width: 768px) {
          .infrastructure-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .infrastructure-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .infrastructure-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-icon-wrapper {
          margin-bottom: var(--space-6);
        }

        .card-icon {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--navy-primary);
          margin-bottom: var(--space-4);
        }

        .card-description {
          font-size: var(--text-lg);
          color: var(--dark-gray);
          line-height: 1.7;
          margin-bottom: var(--space-5);
          flex: 1;
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-bottom: var(--space-5);
        }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--gold-accent);
          font-weight: 700;
          font-size: var(--text-base);
          text-decoration: none;
          transition: gap var(--transition-fast);
        }

        .card-link:hover {
          gap: var(--space-3);
        }

        /* Stats Section */
        .stats-section {
          padding: var(--space-28) 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          text-align: center;
          padding: var(--space-10);
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-2xl);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-base);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(236, 165, 46, 0.3);
        }

        .stat-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: var(--space-5);
        }

        .stat-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--gold-accent) 0%, #fdb241 100%);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          box-shadow: 0 4px 16px rgba(236, 165, 46, 0.4);
        }

        .stat-value {
          font-size: var(--text-6xl);
          font-weight: 900;
          color: var(--white);
          margin-bottom: var(--space-3);
          line-height: 1;
        }

        .stat-label {
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--white);
          margin-bottom: var(--space-2);
        }

        .stat-description {
          font-size: var(--text-base);
          color: rgba(255, 255, 255, 0.7);
        }

        /* CTA Section */
        .cta-section {
          padding: var(--space-28) 0;
          background-color: var(--off-white);
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: var(--text-5xl);
          font-weight: 900;
          color: var(--navy-primary);
          margin-bottom: var(--space-6);
          letter-spacing: -0.02em;
        }

        .cta-description {
          font-size: var(--text-xl);
          color: var(--dark-gray);
          line-height: 1.8;
          margin-bottom: var(--space-10);
        }

        .cta-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .hero-section {
            padding: var(--space-24) 0 var(--space-20) 0;
          }

          .hero-title {
            font-size: var(--text-4xl);
          }

          .hero-description {
            font-size: var(--text-lg);
          }

          .section-title, .cta-title {
            font-size: var(--text-3xl);
          }

          .trust-indicators {
            gap: var(--space-8);
          }
        }
      `}</style>
    </div>
  );
}

export default EnhancedHome;
