import { Link } from 'react-router-dom';
import { Building2, GraduationCap, Users, Award, CheckCircle, ArrowRight, Shield, Globe } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function GovernmentPrograms() {
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
              <span className="text-sm text-cyber-blue font-mono">Government AI Training Programs</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              National AI
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> Workforce Development</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              Partner with us to build AI-ready public sectors and empower citizens with the skills needed for the digital economy. Trusted by government institutions across Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Discuss Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Ongoing Government Partnerships</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Cynea AI is the trusted training partner for forward-thinking governments building AI capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card glass-card border-glass border-l-4 border-l-cyber-blue p-8 rounded-2xl" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Kenya School of Government</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Official training partner delivering AI readiness programs for Kenyan public sector leaders and administrators.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>250+ government officials trained</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>5 ministries and departments reached</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ongoing curriculum development</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass border-l-4 border-l-electric-violet p-8 rounded-2xl" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 shadow-glow-sm">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Zambian National Government</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Strategic engagement to develop national AI workforce strategy and implementation framework.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>National AI strategy consultation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Public sector training programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Digital transformation roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Government Training Solutions</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Comprehensive programs designed for public sector needs and constraints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Public Sector AI Readiness</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Executive training for ministers, permanent secretaries, and senior officials on AI's potential for public service delivery.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI for citizen service improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Government automation opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Policy and regulatory considerations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ethical AI frameworks for government</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-cyber-blue font-mono">Target:</span> Senior leadership | <span className="text-cyber-blue font-mono">Duration:</span> 2-3 days
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Ministry Training Partnerships</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Department-specific AI training programs for line ministries looking to digitize operations and improve efficiency.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ministry-specific use case development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Staff upskilling at all levels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pilot project implementation support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Change management and adoption</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-cyber-blue font-mono">Target:</span> Ministry teams | <span className="text-cyber-blue font-mono">Duration:</span> 4-12 weeks
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">National AI Workforce Strategy</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Comprehensive consultation and planning services to develop national AI skills development frameworks.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Skills gap assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>National curriculum development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Train-the-trainer programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implementation roadmap and KPIs</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-electric-violet font-mono">Target:</span> National governments | <span className="text-electric-violet font-mono">Duration:</span> 6-12 months
              </div>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Citizen AI Literacy Programs</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Mass training initiatives to build AI awareness and basic skills among the general population.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accessible, non-technical content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-language delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Online and community-based formats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-electric-violet mr-2 mt-0.5 flex-shrink-0" />
                  <span>Certification for participants</span>
                </li>
              </ul>
              <div className="text-sm text-secondary">
                <span className="text-electric-violet font-mono">Target:</span> General public | <span className="text-electric-violet font-mono">Duration:</span> Ongoing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Cynea */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">Why Governments Choose Cynea AI</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Emerging Markets Expertise</h4>
                    <p className="text-secondary text-sm">Deep understanding of emerging market government contexts, constraints, and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-secondary text-sm">Our government partnerships provide real-world experience and industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-electric-violet mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Practical, Not Theoretical</h4>
                    <p className="text-secondary text-sm">Training focused on real public sector challenges with immediate application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-electric-violet mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Scalable Solutions</h4>
                    <p className="text-secondary text-sm">From executive workshops to national workforce programs, we scale to your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Ethical AI Framework</h4>
                    <p className="text-secondary text-sm">Built-in focus on responsible AI adoption and citizen protection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <h3 className="font-mono text-2xl font-bold text-primary mb-6 text-center">Government Training Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">200+</div>
                  <div className="text-secondary text-sm">Officials Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">15</div>
                  <div className="text-secondary text-sm">Ministries Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">2</div>
                  <div className="text-secondary text-sm">National Partnerships</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">95%</div>
                  <div className="text-secondary text-sm">Satisfaction Rate</div>
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
            <Globe className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Build Your Nation's AI Capabilities</h2>
            <p className="text-secondary mb-8 text-lg">
              Partner with Cynea AI to develop a comprehensive AI workforce strategy for your country or institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Discuss Partnership Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <p className="text-secondary text-sm">
              <span className="text-cyber-blue">Flexible engagement models</span> • <span className="text-electric-violet">Multi-year partnerships</span> • <span className="text-cyber-blue">Train-the-trainer options</span>
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

        .border-l-cyber-blue {
          border-left-color: #00F0FF;
        }

        .border-l-electric-violet {
          border-left-color: #7000FF;
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

export default GovernmentPrograms;
