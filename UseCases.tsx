import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { Coffee, Leaf, Package, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export function UseCases() {
  useEffect(() => {
    // Hero animations
    anime({
      targets: '.hero-title',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1200,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.hero-subtitle',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      delay: 200,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.hero-description',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      delay: 400,
      easing: 'easeOutExpo'
    });

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('use-case-section')) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('additional-case')) {
            const cards = document.querySelectorAll('.additional-case');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(120),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('impact-stat')) {
            const stats = document.querySelectorAll('.impact-stat');
            anime({
              targets: stats,
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.use-case-section, .additional-case, .impact-stat').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-deep-night text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="hero-title inline-block px-4 py-2 bg-gradient-cyber text-white rounded-full text-sm font-mono font-bold mb-6 shadow-glow-sm opacity-0">
              USE CASES
            </div>
            <h1 className="hero-subtitle font-mono text-5xl md:text-7xl font-bold mb-6 opacity-0">
              Real Businesses,
              <span className="block mt-2 bg-gradient-to-r from-cyber-blue via-electric-violet to-cyber-blue bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            <p className="hero-description text-xl text-secondary max-w-3xl mx-auto leading-relaxed opacity-0">
              See how businesses across emerging markets are using Cynea AI to transform their operations,
              meet compliance requirements, and scale internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Use Case: Coffee Exports */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="use-case-section glass-card border-glass p-8 md:p-12 rounded-2xl opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-amber-500 bg-opacity-20 text-amber-400 px-3 py-2 rounded-full mb-6 border border-amber-500 border-opacity-30">
                  <Coffee className="w-4 h-4 mr-2" />
                  <span className="text-sm font-mono font-bold">COFFEE EXPORT</span>
                </div>
                <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
                  Premium Coffee Exporter Achieves EUDR Compliance
                </h2>
                <div className="text-secondary mb-6 space-y-4">
                  <p>
                    <span className="text-cyber-blue font-mono font-bold">Challenge:</span> A Kenyan specialty coffee exporter faced losing access to EU markets due to new EUDR requirements demanding proof of deforestation-free sourcing. Manual documentation across 200+ smallholder farmers was impossible.
                  </p>
                  <p>
                    <span className="text-electric-violet font-mono font-bold">Solution:</span> Implemented Cynea's blockchain traceability platform with QR codes at each farm, tracking beans from harvest through processing and export. Automated EUDR compliance documentation.
                  </p>
                  <p>
                    <span className="text-emerald-400 font-mono font-bold">Impact:</span> Generated complete compliance dossiers in 3 weeks instead of 6 months, secured $1.2M EU contract, and now uses premium "full traceability" positioning to command 15% price premium.
                  </p>
                </div>
                <div className="glass-card border-glass bg-black bg-opacity-30 p-6 rounded-xl mb-6">
                  <h4 className="font-mono text-xl font-bold mb-6">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-mono font-bold text-cyber-blue mb-2">3 weeks</div>
                      <div className="text-secondary text-sm">Time to compliance</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-cyber-blue mb-2">$1.2M</div>
                      <div className="text-secondary text-sm">New contract value</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-electric-violet mb-2">200+</div>
                      <div className="text-secondary text-sm">Farmers onboarded</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-electric-violet mb-2">15%</div>
                      <div className="text-secondary text-sm">Price premium</div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/products/blockchain-compliance"
                  className="inline-flex items-center text-cyber-blue hover:text-electric-violet transition-colors font-mono"
                >
                  Learn about Blockchain Solutions <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1746367805612-bc46ff00bf9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBleHBvcnQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjI1MDg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Coffee agriculture and export"
                  className="rounded-xl shadow-glow-md w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Edtech */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="use-case-section glass-card border-glass p-8 md:p-12 rounded-2xl opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjc3MjY4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Education technology and teaching"
                  className="rounded-xl shadow-glow-md w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center bg-emerald-500 bg-opacity-20 text-emerald-400 px-3 py-2 rounded-full mb-6 border border-emerald-500 border-opacity-30">
                  <Leaf className="w-4 h-4 mr-2" />
                  <span className="text-sm font-mono font-bold">EDTECH</span>
                </div>
                <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
                  Edtech Company Streamlines Operations with AI
                </h2>
                <div className="text-secondary mb-6 space-y-4">
                  <p>
                    <span className="text-cyber-blue font-mono font-bold">Challenge:</span> An emerging market edtech company struggled with manual student enrollment, grading, and communication across 500+ students and 20 instructors.
                  </p>
                  <p>
                    <span className="text-electric-violet font-mono font-bold">Solution:</span> Implemented Cynea's AI automation tools for student onboarding, automated grading, personalized learning recommendations, and AI teaching assistants.
                  </p>
                  <p>
                    <span className="text-emerald-400 font-mono font-bold">Impact:</span> Reduced administrative time by 25 hours/week, improved student satisfaction by 40%, scaled to serve 1,200 students with the same team, and enhanced learning outcomes through personalized AI assistance.
                  </p>
                </div>
                <div className="glass-card border-glass bg-black bg-opacity-30 p-6 rounded-xl mb-6">
                  <h4 className="font-mono text-xl font-bold mb-6">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-mono font-bold text-cyber-blue mb-2">25 hrs/week</div>
                      <div className="text-secondary text-sm">Time saved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-cyber-blue mb-2">40%</div>
                      <div className="text-secondary text-sm">Satisfaction increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-electric-violet mb-2">2.4x</div>
                      <div className="text-secondary text-sm">Student growth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-electric-violet mb-2">0</div>
                      <div className="text-secondary text-sm">New admin hires</div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/products/ai-automation"
                  className="inline-flex items-center text-emerald-400 hover:text-cyber-blue transition-colors font-mono"
                >
                  Explore AI Automation Tools <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Food Innovation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="use-case-section glass-card border-glass p-8 md:p-12 rounded-2xl opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-electric-violet bg-opacity-20 text-electric-violet px-3 py-2 rounded-full mb-6 border border-electric-violet border-opacity-30">
                  <Package className="w-4 h-4 mr-2" />
                  <span className="text-sm font-mono font-bold">FOOD INNOVATION</span>
                </div>
                <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
                  Packaged Foods Startup Secures Funding with Data
                </h2>
                <div className="text-secondary mb-6 space-y-4">
                  <p>
                    <span className="text-cyber-blue font-mono font-bold">Challenge:</span> A healthy snacks startup needed to demonstrate business viability to investors but lacked the data and financial infrastructure to prove traction.
                  </p>
                  <p>
                    <span className="text-electric-violet font-mono font-bold">Solution:</span> Used Cynea's data analytics platform to track and monetize verified sales data, plus stablecoin payments to show stable revenue despite currency volatility.
                  </p>
                  <p>
                    <span className="text-emerald-400 font-mono font-bold">Impact:</span> Presented investors with blockchain-verified financials and sold market insights for additional $15K revenue. Secured $250K seed round citing data infrastructure as key differentiator.
                  </p>
                </div>
                <div className="glass-card border-glass bg-black bg-opacity-30 p-6 rounded-xl mb-6">
                  <h4 className="font-mono text-xl font-bold mb-6">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-mono font-bold text-cyber-blue mb-2">$250K</div>
                      <div className="text-secondary text-sm">Seed funding raised</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-cyber-blue mb-2">$15K</div>
                      <div className="text-secondary text-sm">Data monetization</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-electric-violet mb-2">100%</div>
                      <div className="text-secondary text-sm">Currency protection</div>
                    </div>
                    <div>
                      <div className="text-3xl font-mono font-bold text-electric-violet mb-2">3 months</div>
                      <div className="text-secondary text-sm">To investment</div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/products/data-analytics"
                  className="inline-flex items-center text-electric-violet hover:text-cyber-blue transition-colors font-mono"
                >
                  Discover Data Solutions <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjQ3NzA5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Data analytics dashboard"
                  className="rounded-xl shadow-glow-md w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Use Cases Grid */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">More Success Stories</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Cynea AI is transforming businesses across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="additional-case glass-card border-glass p-8 rounded-2xl hover:border-cyan-400 transition-all duration-300 opacity-0">
              <TrendingUp className="w-12 h-12 text-cyan-400 mb-6" />
              <h4 className="font-mono text-xl font-bold mb-3">Fish Export to EU</h4>
              <p className="text-secondary mb-6 leading-relaxed">
                Fish exporter used stablecoin payments to protect against currency devaluation, saving $45K in 6 months on a $300K contract.
              </p>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-primary font-mono">15% cost savings</span>
              </div>
            </div>

            <div className="additional-case glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0">
              <TrendingUp className="w-12 h-12 text-cyber-blue mb-6" />
              <h4 className="font-mono text-xl font-bold mb-3">Manufacturing Supply Chain</h4>
              <p className="text-secondary mb-6 leading-relaxed">
                A manufacturer implemented blockchain traceability for raw materials, enabling ISO certification and winning 3 new corporate contracts.
              </p>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-5 h-5 text-cyber-blue mr-2 flex-shrink-0" />
                <span className="text-primary font-mono">3 new B2B clients</span>
              </div>
            </div>

            <div className="additional-case glass-card border-glass p-8 rounded-2xl hover:border-pink-400 transition-all duration-300 opacity-0">
              <TrendingUp className="w-12 h-12 text-pink-400 mb-6" />
              <h4 className="font-mono text-xl font-bold mb-3">Marketing Agency</h4>
              <p className="text-secondary mb-6 leading-relaxed">
                Marketing agency completed AI training academy, now offers AI-powered services at 2x previous rates with 50% faster delivery.
              </p>
              <div className="flex items-center text-sm">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0" />
                <span className="text-primary font-mono">100% revenue growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Aggregate Impact Across All Use Cases</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Measurable outcomes from SMEs using Cynea's platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="impact-stat text-center opacity-0">
              <div className="text-5xl font-mono font-bold bg-gradient-cyber bg-clip-text text-transparent mb-3">100+</div>
              <div className="font-bold text-primary mb-2">SMEs Supported</div>
              <p className="text-secondary text-sm">Across 6 countries</p>
            </div>
            <div className="impact-stat text-center opacity-0">
              <div className="text-5xl font-mono font-bold bg-gradient-cyber bg-clip-text text-transparent mb-3">$5M+</div>
              <div className="font-bold text-primary mb-2">Trade Value Enabled</div>
              <p className="text-secondary text-sm">Cross-border transactions</p>
            </div>
            <div className="impact-stat text-center opacity-0">
              <div className="text-5xl font-mono font-bold bg-gradient-cyber bg-clip-text text-transparent mb-3">15-20 hrs</div>
              <div className="font-bold text-primary mb-2">Weekly Time Saved</div>
              <p className="text-secondary text-sm">Per business on average</p>
            </div>
            <div className="impact-stat text-center opacity-0">
              <div className="text-5xl font-mono font-bold bg-gradient-cyber bg-clip-text text-transparent mb-3">95%</div>
              <div className="font-bold text-primary mb-2">Client Satisfaction</div>
              <p className="text-secondary text-sm">Would recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card border-glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-cyber opacity-5"></div>
            <div className="relative z-10">
              <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the SMEs already transforming their businesses with Cynea AI's full-stack infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cyber text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/products/ai-automation"
                  className="inline-flex items-center justify-center px-8 py-4 glass-card border-glass text-primary font-mono font-bold rounded-lg hover:border-cyber-blue transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
