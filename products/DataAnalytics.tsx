import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Users, Award, CheckCircle, ArrowRight, Database, DollarSign } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function DataAnalytics() {
  useEffect(() => {
    // Hero section entrance animation
    anime({
      targets: '.hero-badge',
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutExpo',
      delay: 200
    });

    anime({
      targets: '.hero-title',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: 400
    });

    anime({
      targets: '.hero-description',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutExpo',
      delay: 600
    });

    // Feature cards entrance animation
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target.querySelectorAll('.feature-card'),
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
            featureObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.features-section').forEach((section) => {
      featureObserver.observe(section);
    });

    return () => featureObserver.disconnect();
  }, []);

  return (
    <div className="bg-deep-night min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
        {/* Floating background shapes */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-block glass-card border-glass px-6 py-3 rounded-full mb-8" style={{ opacity: 0 }}>
              <span className="text-sm text-cyber-blue font-mono">Data Analytics & Monetization</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              Turn Your Data Into
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> Revenue</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              Your verified business data is valuable to banks, corporates, and impact investors. Our analytics platform helps you monetize your data insights—selling verified SME intelligence to financial institutions—while accessing predictive intelligence to grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                View Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">Data That Works For You</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                Every transaction, compliance check, and operational metric you generate through Cynea creates verified data. Banks need this data to assess creditworthiness. Corporates need it to verify suppliers. Impact investors need it to measure social impact.
              </p>
              <p className="text-secondary mb-6 leading-relaxed">
                Instead of letting this valuable intelligence sit idle, our platform helps you package and monetize it—while maintaining full control over what you share and with whom.
              </p>
              <div className="glass-card bg-cyber-blue bg-opacity-10 border-l-4 border-cyber-blue p-6 rounded-lg">
                <p className="text-primary">
                  <span className="text-cyber-blue font-semibold">Average SME data value:</span> $500-$2,000/year in verified insights that banks and corporates will pay for
                </p>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <h3 className="font-mono text-2xl font-bold text-primary mb-6 text-center">Data Monetization Potential</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-primary">
                    <span>Monthly Active SME</span>
                    <span className="text-cyber-blue font-mono">$50-$150/mo</span>
                  </div>
                  <p className="text-secondary text-sm">Basic transaction and operational data</p>
                </div>
                <div className="h-px bg-glass"></div>
                <div>
                  <div className="flex justify-between mb-2 text-primary">
                    <span>Export-Focused SME</span>
                    <span className="text-electric-violet font-mono">$150-$500/mo</span>
                  </div>
                  <p className="text-secondary text-sm">Compliance, traceability, and supply chain data</p>
                </div>
                <div className="h-px bg-glass"></div>
                <div>
                  <div className="flex justify-between mb-2 text-primary">
                    <span>Market Leader</span>
                    <span className="text-cyber-blue font-mono">$500+/mo</span>
                  </div>
                  <p className="text-secondary text-sm">Premium insights, supplier networks, industry benchmarks</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-glass">
                <p className="text-sm text-secondary text-center">
                  All data is anonymized and aggregated. You maintain full control over what is shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Comprehensive Analytics & Insights</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From your own business intelligence to monetizable market insights, we provide the complete data stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">SME Insights Marketplace</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Sell anonymized, aggregated insights about your market, suppliers, and operations to interested parties.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>You control what data is shared</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated privacy protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Revenue share on every sale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monthly passive income potential</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Predictive Analytics</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                AI-powered forecasting to optimize inventory, predict demand, and identify growth opportunities.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Demand forecasting by product</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seasonal trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Price optimization recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Market opportunity alerts</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Supplier Verification Network</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Access verified data on potential suppliers and partners, or offer your verified profile to buyers.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain-verified track records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance and certification status</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance ratings and reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Partnership matching algorithms</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Credit Score Enhancement</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Build a blockchain-backed credit profile that helps you access better financing terms.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verified transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Payment reliability tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>ESG performance metrics</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Impact Measurement</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Track and report your social and environmental impact to attract ESG-focused investors and buyers.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Jobs created and supported</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Carbon footprint reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Community economic impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>SDG alignment reporting</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Business Intelligence Dashboard</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Real-time visibility into all your key metrics in one intuitive, mobile-friendly dashboard.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customizable KPI tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Visual trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated reporting exports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team collaboration features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Who Benefits From Our Analytics?</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Different stakeholders need different insights—we serve them all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card glass-card border-glass p-6 rounded-2xl" style={{ opacity: 0 }}>
              <h4 className="font-mono text-lg font-bold text-primary mb-3">For SMEs</h4>
              <p className="text-secondary mb-4 text-sm">
                Gain actionable insights to grow your business and monetize your verified data
              </p>
              <ul className="space-y-1 text-sm text-secondary">
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Predictive analytics</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Market intelligence</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Revenue opportunities</li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl" style={{ opacity: 0 }}>
              <h4 className="font-mono text-lg font-bold text-primary mb-3">For Banks</h4>
              <p className="text-secondary mb-4 text-sm">
                Access verified SME data for better credit decisions and risk assessment
              </p>
              <ul className="space-y-1 text-sm text-secondary">
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Transaction history</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Compliance verification</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Performance metrics</li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl" style={{ opacity: 0 }}>
              <h4 className="font-mono text-lg font-bold text-primary mb-3">For Corporates</h4>
              <p className="text-secondary mb-4 text-sm">
                Find and verify reliable suppliers with proven track records
              </p>
              <ul className="space-y-1 text-sm text-secondary">
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Supplier verification</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Quality assurance data</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Compliance documentation</li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl" style={{ opacity: 0 }}>
              <h4 className="font-mono text-lg font-bold text-primary mb-3">For Investors</h4>
              <p className="text-secondary mb-4 text-sm">
                Measure social and environmental impact with verifiable metrics
              </p>
              <ul className="space-y-1 text-sm text-secondary">
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Impact measurement</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> ESG reporting</li>
                <li className="flex items-center"><span className="text-cyber-blue mr-2">•</span> Portfolio analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card border-glass p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <DollarSign className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Turn Your Business Data Into An Asset</h2>
            <p className="text-secondary mb-8 text-lg">
              Join the SMEs already earning passive income from their verified business data while accessing powerful analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Monetize Your Data
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
        }

        .border-glass {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .bg-glass-hover {
          background: rgba(0, 240, 255, 0.05);
        }

        .bg-glass {
          background: rgba(255, 255, 255, 0.1);
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

        .text-electric-violet {
          color: #7000FF;
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

        .btn-cyber {
          background: linear-gradient(135deg, #00F0FF 0%, #7000FF 100%);
          color: #ffffff;
          border: 1px solid #00F0FF;
        }

        .btn-cyber:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default DataAnalytics;
