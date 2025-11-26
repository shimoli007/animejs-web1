import { Link } from 'react-router-dom';
import { GraduationCap, Database, Bot, Link2, DollarSign, BarChart3, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';

export function EnhancedHome() {
  const infrastructureStack = [
    {
      title: 'Train',
      description: 'Comprehensive AI readiness programs for officials and SME staff',
      icon: GraduationCap,
      color: 'var(--teal)',
      link: '/training/b2b',
      features: ['Career Growth', 'Corporate Training', 'Public Sector']
    },
    {
      title: 'Digitize',
      description: 'Transform analog operations into streamlined digital systems',
      icon: Database,
      color: 'var(--blue)',
      link: '/products/ai-automation',
      features: ['Data Migration', 'Cloud Infrastructure', 'Digital Workflows']
    },
    {
      title: 'Automate',
      description: 'Deploy AI agents to handle repetitive tasks and workflows',
      icon: Bot,
      color: 'var(--purple)',
      link: '/products/ai-automation',
      features: ['AI Agents', 'Workflow Automation', 'Process Optimization']
    },
    {
      title: 'Trace',
      description: 'Blockchain-powered supply chain transparency and compliance',
      icon: Link2,
      color: 'var(--teal)',
      link: '/products/blockchain-compliance',
      features: ['Supply Chain Tracking', 'EUDR Compliance', 'ESG Reporting']
    },
    {
      title: 'Finance',
      description: 'Access stablecoin payments and digital finance solutions',
      icon: DollarSign,
      color: 'var(--blue)',
      link: '/products/digital-finance',
      features: ['Stablecoin Payments', 'Digital Wallets', 'Cross-Border Transactions']
    },
    {
      title: 'Monetize',
      description: 'Transform business data into actionable insights and revenue',
      icon: BarChart3,
      color: 'var(--purple)',
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
    <div style={{ backgroundColor: 'var(--white)' }}>
      {/* Hero Section */}
      <section style={{ padding: 'var(--space-32) 0 var(--space-24) 0', backgroundColor: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-4)',
                backgroundColor: 'var(--teal)',
                color: 'white',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                marginBottom: 'var(--space-6)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              <TrendingUp size={16} />
              AI & Blockchain Infrastructure for Emerging Markets
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: 'var(--navy-dark)',
                lineHeight: '1.1',
                marginBottom: 'var(--space-6)',
                letterSpacing: '-0.02em'
              }}
            >
              Empower Your SME with{' '}
              <span style={{ color: 'var(--teal)' }}>AI & Blockchain</span>
            </h1>

            <p
              className="hero-description"
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--dark-gray)',
                lineHeight: '1.7',
                marginBottom: 'var(--space-10)',
                maxWidth: '700px',
                margin: '0 auto var(--space-10) auto'
              }}
            >
              Complete infrastructure stack for emerging market SMEs. Train your team, digitize operations, automate workflows, trace products, access digital finance, and monetize your data.
            </p>

            <div className="hero-cta" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/use-cases"
                className="btn btn-secondary btn-lg"
              >
                View Use Cases
              </Link>
            </div>

            {/* Trust Indicators */}
            <div style={{ marginTop: 'var(--space-12)', display: 'flex', gap: 'var(--space-12)', justifyContent: 'center', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'var(--gray)' }}>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--navy-dark)', fontSize: 'var(--text-lg)' }}>200+</div>
                <div>Officials Trained</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--light-gray)' }}></div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--navy-dark)', fontSize: 'var(--text-lg)' }}>100+</div>
                <div>SMEs Supported</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--light-gray)' }}></div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--navy-dark)', fontSize: 'var(--text-lg)' }}>5</div>
                <div>Active Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack Section */}
      <section style={{ padding: 'var(--space-24) 0' }}>
        <div className="container">
          <div className="text-center max-w-3xl" style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: 'var(--space-4)' }}>
              Complete Infrastructure Stack
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--dark-gray)', lineHeight: '1.7' }}>
              Everything your business needs to compete globally—from training to digitization, automation, traceability, finance, and monetization
            </p>
          </div>

          <div className="grid grid-cols-1" style={{ gap: 'var(--space-8)' }}>
            {infrastructureStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'var(--space-6)',
                    alignItems: 'start'
                  }}
                >
                  <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'start' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: item.color,
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: 'white'
                      }}
                    >
                      <Icon size={32} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: 'var(--space-3)' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--dark-gray)', lineHeight: '1.7', marginBottom: 'var(--space-4)' }}>
                        {item.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                        {item.features.map((feature) => (
                          <span
                            key={feature}
                            style={{
                              padding: 'var(--space-1) var(--space-3)',
                              backgroundColor: 'var(--light-gray)',
                              borderRadius: 'var(--radius-md)',
                              fontSize: 'var(--text-sm)',
                              color: 'var(--navy-dark)',
                              fontWeight: '500'
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={item.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          color: 'var(--teal)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)',
                          textDecoration: 'none',
                          transition: 'gap var(--transition-fast)'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.gap = 'var(--space-3)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.gap = 'var(--space-2)';
                        }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: 'var(--space-24) 0', backgroundColor: 'var(--navy-dark)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-1" style={{ gap: 'var(--space-8)' }}>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    padding: 'var(--space-8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'var(--teal)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={28} />
                    </div>
                  </div>
                  <div
                    className="stat-number"
                    data-value={stat.value.replace(/[^0-9]/g, '')}
                    style={{
                      fontSize: 'var(--text-6xl)',
                      fontWeight: '800',
                      color: 'white',
                      marginBottom: 'var(--space-2)',
                      lineHeight: 1
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 'var(--text-base)', color: 'rgba(255, 255, 255, 0.7)' }}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--space-24) 0', backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="max-w-4xl" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: 'var(--space-6)' }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--dark-gray)', lineHeight: '1.7', marginBottom: 'var(--space-10)' }}>
              Join the SMEs, governments, and enterprises already building the future with Cynea AI. Get started today with a free consultation.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        @media (min-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default EnhancedHome;
