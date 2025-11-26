import { Link } from 'react-router-dom';
import { DollarSign, Zap, TrendingDown, Lock, CheckCircle, ArrowRight, AlertCircle, Coins } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function DigitalFinance() {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-block glass-card border-glass px-6 py-3 rounded-full mb-8" style={{ opacity: 0 }}>
              <span className="text-sm text-cyber-blue font-mono">Digital Finance Infrastructure</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              Stable Payments for
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> Unstable Currencies</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              Bypass currency volatility and high fees with stablecoin-powered cross-border payments. Get paid faster, preserve your earnings, and access working capital when you need it.
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
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">The Currency Problem Every Exporter Faces</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-electric-violet mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Currency Devaluation</h4>
                    <p className="text-secondary text-sm">Your local currency can lose 10-30% of its value between invoice and payment, erasing profit margins.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-electric-violet mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">High Transfer Fees</h4>
                    <p className="text-secondary text-sm">Traditional banks charge 5-10% in fees and FX spreads for international transfers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-electric-violet mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Slow Settlements</h4>
                    <p className="text-secondary text-sm">Cross-border payments take 3-7 days, tying up working capital and delaying operations.</p>
                  </div>
                </div>
              </div>
              <div className="glass-card bg-cyber-blue bg-opacity-10 border-l-4 border-cyber-blue p-6 rounded-lg">
                <p className="text-primary">
                  <span className="text-cyber-blue font-semibold">Cynea's solution:</span> Stablecoin infrastructure that settles in minutes, not days, with fees under 1%.
                </p>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">&lt;1%</div>
                  <div className="text-secondary text-sm">Transaction Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">15min</div>
                  <div className="text-secondary text-sm">Settlement Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">USD</div>
                  <div className="text-secondary text-sm">Value Stable</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">24/7</div>
                  <div className="text-secondary text-sm">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Complete Digital Finance Stack</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From receiving international payments to accessing working capital, our platform handles all your financial infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Stablecoin Payment Solutions</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Accept payments in USD-pegged stablecoins (USDC, USDT) that maintain their value regardless of local currency fluctuations.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Instant USD value preservation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Easy conversion to local currency when needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compatible with all major buyers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain-verified payment history</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Cross-Border Settlement</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Send and receive international payments in minutes instead of days, with full transparency and tracking.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Settlement in under 15 minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time payment tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-currency support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated reconciliation</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Ultra-Low Fees</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Pay less than 1% in transaction fees compared to 5-10% with traditional banking channels.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>No hidden FX spreads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing upfront</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Volume discounts available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>No monthly maintenance fees</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Digital Trade Finance</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Access working capital based on your verified transaction history and export contracts.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Invoice financing in 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Supply chain finance options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain-backed credit scoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Flexible repayment terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Traditional Banking vs. Our Solution</h2>
            <p className="text-secondary">See how much you can save on every transaction</p>
          </div>

          <div className="glass-card border-glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="glass-card border-b border-glass">
                  <tr>
                    <th className="px-6 py-4 text-left text-primary font-mono">Feature</th>
                    <th className="px-6 py-4 text-left text-secondary font-mono">Traditional Banking</th>
                    <th className="px-6 py-4 text-left text-cyber-blue font-mono">Our Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glass">
                  <tr className="hover:bg-glass-hover transition-colors duration-300">
                    <td className="px-6 py-4 text-primary">Transaction Fees</td>
                    <td className="px-6 py-4 text-secondary">5-10% of transfer amount</td>
                    <td className="px-6 py-4 text-cyber-blue">&lt;1% of transfer amount</td>
                  </tr>
                  <tr className="hover:bg-glass-hover transition-colors duration-300">
                    <td className="px-6 py-4 text-primary">Settlement Time</td>
                    <td className="px-6 py-4 text-secondary">3-7 business days</td>
                    <td className="px-6 py-4 text-cyber-blue">Under 15 minutes</td>
                  </tr>
                  <tr className="hover:bg-glass-hover transition-colors duration-300">
                    <td className="px-6 py-4 text-primary">Currency Protection</td>
                    <td className="px-6 py-4 text-secondary">Exposed to devaluation</td>
                    <td className="px-6 py-4 text-cyber-blue">USD-pegged stablecoins</td>
                  </tr>
                  <tr className="hover:bg-glass-hover transition-colors duration-300">
                    <td className="px-6 py-4 text-primary">Working Capital Access</td>
                    <td className="px-6 py-4 text-secondary">Weeks of paperwork</td>
                    <td className="px-6 py-4 text-cyber-blue">24-48 hours approval</td>
                  </tr>
                  <tr className="hover:bg-glass-hover transition-colors duration-300">
                    <td className="px-6 py-4 text-primary">Payment Transparency</td>
                    <td className="px-6 py-4 text-secondary">Limited tracking</td>
                    <td className="px-6 py-4 text-cyber-blue">Full blockchain visibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block glass-card border-glass px-6 py-4 rounded-lg">
              <p className="text-primary">
                <span className="text-cyber-blue font-semibold">Example savings:</span> On a $10,000 export payment, save up to $900 in fees and preserve value against currency fluctuation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Getting Started is Simple</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From signup to your first payment in under 48 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                1
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Sign Up</h4>
              <p className="text-secondary text-sm">
                Create your account and complete basic KYC verification
              </p>
            </div>

            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                2
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Connect Wallet</h4>
              <p className="text-secondary text-sm">
                Set up your stablecoin wallet (we'll guide you through it)
              </p>
            </div>

            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                3
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Share Address</h4>
              <p className="text-secondary text-sm">
                Provide payment details to your international buyers
              </p>
            </div>

            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                4
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Get Paid</h4>
              <p className="text-secondary text-sm">
                Receive payments instantly and convert when ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card border-glass p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <Coins className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Stop Losing Money to Currency Risk</h2>
            <p className="text-secondary mb-8 text-lg">
              Protect your hard-earned export revenue with stablecoin infrastructure built for emerging market SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Open Your Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                See Success Stories
              </Link>
            </div>
            <p className="text-secondary text-sm">
              <span className="text-cyber-blue">No setup fees</span> • <span className="text-electric-violet">No monthly minimums</span> • <span className="text-cyber-blue">Get started in 48 hours</span>
            </p>
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

export default DigitalFinance;
