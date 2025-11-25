import { Link } from 'react-router-dom';
import { Briefcase, Users, Target, Award, CheckCircle, ArrowRight, BookOpen, Zap } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function B2BTraining() {
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
              <span className="text-sm text-cyber-blue font-mono">Corporate Training (Business Solutions)</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              Corporate AI Readiness &
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> Upskilling</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              Prepare your organization for the AI-driven future with customized training programs that deliver measurable business outcomes in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">AI Training Built for Business Impact</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                Our B2B training programs aren't academic exercises—they're hands-on, practical workshops designed to get your teams using AI tools productively within days of completion.
              </p>
              <p className="text-secondary mb-6 leading-relaxed">
                We work with enterprises across finance, agriculture, manufacturing, and professional services to identify automation opportunities, implement AI solutions, and measure ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Industry-Specific Content</h4>
                    <p className="text-secondary text-sm">Training tailored to your sector's unique AI opportunities and challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Measurable Outcomes</h4>
                    <p className="text-secondary text-sm">Track productivity gains, cost savings, and automation adoption across your organization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">15-20h</div>
                  <div className="text-secondary text-sm">Weekly Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">3X</div>
                  <div className="text-secondary text-sm">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">100+</div>
                  <div className="text-secondary text-sm">Companies Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">90%</div>
                  <div className="text-secondary text-sm">Adoption Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Comprehensive Training Portfolio</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From executive awareness to technical implementation, we offer programs for every level of your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">AI Readiness Workshops</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                2-day intensive for leadership teams to understand AI's strategic potential and create implementation roadmaps.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI landscape and business opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use case identification workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>ROI modeling and business cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implementation roadmap development</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-cyber-blue font-mono">Duration:</span> 2 days | <span className="text-cyber-blue font-mono">Format:</span> In-person or virtual
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Custom AI Implementation Training</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Up to 8-week programs to train your teams on specific AI tools relevant to your business operations.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hands-on training with real company data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom workflow automation setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Department-specific use cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ongoing support and optimization</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-cyber-blue font-mono">Duration:</span> 4-8 weeks | <span className="text-cyber-blue font-mono">Format:</span> Hybrid
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Industry-Specific Automation</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Specialized training for sectors with unique AI applications—agriculture, finance, manufacturing, logistics.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sector-specific case studies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regulatory compliance considerations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best practices from industry leaders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Peer networking opportunities</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-electric-violet font-mono">Duration:</span> 3-5 days | <span className="text-electric-violet font-mono">Format:</span> In-person workshops
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">AI Certification Programs</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Comprehensive certification tracks for professionals looking to become AI champions within their organizations.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Structured curriculum with assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Capstone project using company data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cynea AI Professional certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Alumni network and continuing education</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-electric-violet font-mono">Duration:</span> 12 weeks | <span className="text-electric-violet font-mono">Format:</span> Virtual + in-person
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Client Success Stories</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Real results from organizations that invested in AI training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card glass-card border-glass p-6 rounded-2xl hover:border-cyber-blue transition-all duration-300" style={{ opacity: 0 }}>
              <div className="text-cyber-blue font-mono text-sm mb-4">Solar Solutions</div>
              <h4 className="text-primary font-semibold mb-2">Training Installers with AI</h4>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Solar energy company trained 50 field installers on AI-powered diagnostic tools and automated reporting, reducing installation errors by 40% and cutting paperwork time by 70%.
              </p>
              <div className="flex items-center text-sm text-secondary">
                <Award className="w-4 h-4 text-cyber-blue mr-1" />
                <span>18+ employees trained</span>
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl hover:border-electric-violet transition-all duration-300" style={{ opacity: 0 }}>
              <div className="text-electric-violet font-mono text-sm mb-4">Agriculture Export</div>
              <h4 className="text-primary font-semibold mb-2">$120K Annual Savings</h4>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Coffee exporter automated compliance documentation and inventory management, saving 20 hours/week and reducing errors by 90%.
              </p>
              <div className="flex items-center text-sm text-secondary">
                <Award className="w-4 h-4 text-electric-violet mr-1" />
                <span>15 employees trained</span>
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl hover:border-cyber-blue transition-all duration-300" style={{ opacity: 0 }}>
              <div className="text-cyber-blue font-mono text-sm mb-4">Manufacturing</div>
              <h4 className="text-primary font-semibold mb-2">3X Faster Quality Control</h4>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                Food manufacturing company implemented AI-powered quality inspection after custom training, tripling throughput while maintaining standards.
              </p>
              <div className="flex items-center text-sm text-secondary">
                <Award className="w-4 h-4 text-cyber-blue mr-1" />
                <span>25 employees trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Our Training Methodology</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              A proven 4-phase approach that ensures lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                1
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Discovery</h4>
              <p className="text-secondary text-sm">
                Assess current capabilities and identify high-impact AI opportunities
              </p>
            </div>

            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                2
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Design</h4>
              <p className="text-secondary text-sm">
                Create customized curriculum with real company use cases
              </p>
            </div>

            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                3
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Delivery</h4>
              <p className="text-secondary text-sm">
                Hands-on workshops with immediate application to daily work
              </p>
            </div>

            <div className="feature-card text-center" style={{ opacity: 0 }}>
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4 font-mono text-2xl font-bold text-white shadow-glow-sm">
                4
              </div>
              <h4 className="font-mono text-lg font-bold text-primary mb-2">Support</h4>
              <p className="text-secondary text-sm">
                90-day post-training support to ensure adoption and ROI
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
            <Zap className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Ready to Upskill Your Team?</h2>
            <p className="text-secondary mb-8 text-lg">
              Join leading enterprises already transforming their operations with AI-powered automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/resources"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                Download Program Guide
              </Link>
            </div>
            <p className="text-secondary text-sm">
              Custom pricing based on team size and program scope
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

export default B2BTraining;
