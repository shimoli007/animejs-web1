import { Link } from 'react-router-dom';
import { Shield, Scan, FileCheck, Globe, CheckCircle, ArrowRight, Award, Lock } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function BlockchainCompliance() {
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-block glass-card border-glass px-6 py-3 rounded-full mb-8" style={{ opacity: 0 }}>
              <span className="text-sm text-cyber-blue font-mono">Blockchain Smart Contracts & Traceability</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              Trace Every Step,
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> Meet Every Standard</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              SaaS-powered blockchain traceability solutions for supply chain transparency. Ensure EUDR, CBAM compliance, and ESG reporting—building trust with international buyers and regulators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">Export Compliance Made Simple</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                New EU regulations (EUDR, CBAM) require complete supply chain transparency. Without proof of sustainable sourcing and carbon tracking, your exports could be rejected.
              </p>
              <p className="text-secondary mb-6 leading-relaxed">
                Our blockchain platform creates an immutable record of your product journey from farm to port, automatically generating the compliance documentation international buyers demand.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">EU-Ready Compliance</h4>
                    <p className="text-secondary text-sm">Automated EUDR and CBAM documentation that meets all regulatory requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Build Buyer Trust</h4>
                    <p className="text-secondary text-sm">Verifiable proof of origin and sustainable practices that win premium contracts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">100%</div>
                  <div className="text-secondary text-sm">Tamper-Proof</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">EUDR</div>
                  <div className="text-secondary text-sm">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">CBAM</div>
                  <div className="text-secondary text-sm">Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">GPS</div>
                  <div className="text-secondary text-sm">Verified</div>
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
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Complete Traceability Platform</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From farm gate to export, every transaction recorded on blockchain for permanent, tamper-proof transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Supply Chain Traceability</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Track products from origin to destination with blockchain-verified checkpoints at every stage.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>GPS-stamped location tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Photo and document verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Immutable transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-party verification (farmers, processors, exporters)</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">EUDR Compliance Automation</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Automatically generate EU Deforestation Regulation compliance reports with all required due diligence documentation.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Geolocation plot verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Deforestation-free certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Risk assessment automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ready-to-submit compliance dossiers</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">CBAM Carbon Tracking</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Carbon Border Adjustment Mechanism reporting made easy with automated emissions calculation and documentation.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Embedded carbon footprint calculation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transport emissions tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Processing and manufacturing impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>EU-compliant CBAM reports</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Scan className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">QR-Based Provenance</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Consumer-facing transparency with scannable QR codes that reveal your product's complete journey.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dynamic QR code generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customizable transparency pages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Farmer and producer profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Brand storytelling tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Reporting */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">Automated ESG Reporting</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                Environmental, Social, and Governance (ESG) metrics are no longer optional for businesses seeking investment or corporate partnerships. Our platform automatically collects and reports ESG data from your supply chain.
              </p>
              <div className="glass-card bg-cyber-blue bg-opacity-10 border-l-4 border-cyber-blue p-6 rounded-lg mb-6">
                <h4 className="text-primary font-semibold mb-3">What We Track:</h4>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span><span className="text-cyber-blue">Environmental:</span> Carbon emissions, water usage, waste reduction, renewable energy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span><span className="text-cyber-blue">Social:</span> Fair wages, working conditions, community impact, gender diversity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span><span className="text-cyber-blue">Governance:</span> Ethical sourcing, transparency, certifications, audit trails</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="inline-flex items-center text-cyber-blue hover:text-electric-violet transition-colors duration-300">
                Request ESG Demo <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <h3 className="font-mono text-2xl font-bold text-primary mb-6">Use Cases</h3>
              <div className="space-y-4">
                <div className="glass-card border-l-4 border-cyber-blue p-4 rounded-lg">
                  <h4 className="text-primary font-semibold mb-2">Coffee Exports</h4>
                  <p className="text-secondary text-sm mb-2">
                    Track beans from smallholder farms through processing and export, with full EUDR compliance.
                  </p>
                  <Link to="/use-cases" className="text-cyber-blue hover:text-electric-violet inline-flex items-center text-sm transition-colors duration-300">
                    Read Case Study <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
                <div className="glass-card border-l-4 border-electric-violet p-4 rounded-lg">
                  <h4 className="text-primary font-semibold mb-2">Cocoa & Chocolate</h4>
                  <p className="text-secondary text-sm mb-2">
                    Prove deforestation-free sourcing and fair trade practices to premium EU buyers.
                  </p>
                  <Link to="/use-cases" className="text-cyber-blue hover:text-electric-violet inline-flex items-center text-sm transition-colors duration-300">
                    Read Case Study <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
                <div className="glass-card border-l-4 border-cyber-blue p-4 rounded-lg">
                  <h4 className="text-primary font-semibold mb-2">Organic Agriculture</h4>
                  <p className="text-secondary text-sm mb-2">
                    Blockchain-verified organic certification and pesticide-free production records.
                  </p>
                  <Link to="/use-cases" className="text-cyber-blue hover:text-electric-violet inline-flex items-center text-sm transition-colors duration-300">
                    Read Case Study <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card border-glass p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <Lock className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Ready for Export Compliance?</h2>
            <p className="text-secondary mb-8 text-lg">
              Don't let regulatory requirements block your international growth. Get blockchain-verified compliance in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Request Compliance Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/resources"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                Download EUDR Guide
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

export default BlockchainCompliance;
