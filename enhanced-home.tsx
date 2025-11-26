import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { GraduationCap, Database, Bot, Link2, DollarSign, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

export function EnhancedHome() {
  useEffect(() => {
    // Hero section entrance animation
    anime.timeline()
      .add({
        targets: '.hero-badge',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.hero-title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=400')
      .add({
        targets: '.hero-description',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      }, '-=600')
      .add({
        targets: '.hero-cta',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutBack'
      }, '-=400');

    // Floating animation for visual elements
    anime({
      targets: '.float-element',
      translateY: [-10, 10],
      duration: 3000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });

    // Stats counter animation on scroll
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.getAttribute('data-value') || '0');

          anime({
            targets: target,
            innerHTML: [0, finalValue],
            duration: 2000,
            round: 1,
            easing: 'easeOutExpo'
          });

          statsObserver.unobserve(target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(stat => {
      statsObserver.observe(stat);
    });

    // Card hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', function(this: HTMLElement) {
        anime({
          targets: this,
          scale: 1.05,
          translateY: -10,
          duration: 300,
          easing: 'easeOutCubic'
        });

        anime({
          targets: this.querySelector('.card-icon'),
          rotate: [0, 360],
          duration: 600,
          easing: 'easeInOutBack'
        });
      });

      card.addEventListener('mouseleave', function(this: HTMLElement) {
        anime({
          targets: this,
          scale: 1,
          translateY: 0,
          duration: 300,
          easing: 'easeOutCubic'
        });
      });
    });

    // Scroll-triggered animations for sections
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.animate-on-scroll');

          anime({
            targets: children,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutExpo'
          });

          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-section').forEach(section => {
      sectionObserver.observe(section);
    });

    // Pulse animation for CTAs
    anime({
      targets: '.pulse-cta',
      scale: [1, 1.03, 1],
      duration: 2000,
      easing: 'easeInOutQuad',
      loop: true
    });

  }, []);

  const infrastructureStack = [
    {
      title: 'Train',
      desc: 'AI readiness programs',
      icon: GraduationCap,
      color: 'from-cyber-blue to-electric-violet',
      link: '/training/b2b'
    },
    {
      title: 'Digitize',
      desc: 'Transform to digital data',
      icon: Database,
      color: 'from-emerald-400 to-cyan-400',
      link: '/products/ai-automation'
    },
    {
      title: 'Automate',
      desc: 'AI agents and workflows',
      icon: Bot,
      color: 'from-electric-violet to-fuchsia-500',
      link: '/products/ai-automation'
    },
    {
      title: 'Trace',
      desc: 'Blockchain traceability',
      icon: Link2,
      color: 'from-amber-400 to-orange-500',
      link: '/products/blockchain-compliance'
    },
    {
      title: 'Finance',
      desc: 'Stablecoin payments',
      icon: DollarSign,
      color: 'from-teal-400 to-cyan-500',
      link: '/products/digital-finance'
    },
    {
      title: 'Monetize',
      desc: 'Data insights marketplace',
      icon: BarChart3,
      color: 'from-indigo-400 to-purple-500',
      link: '/products/data-analytics'
    }
  ];

  const stats = [
    { value: 200, label: 'Officials Trained', suffix: '+' },
    { value: 100, label: 'SMEs Supported', suffix: '+' },
    { value: 5, label: 'Countries', suffix: '' },
    { value: 95, label: 'Client Satisfaction', suffix: '%' }
  ];

  const workflowSteps = ['Train', 'Digitize', 'Automate', 'Trace', 'Finance', 'Monetize'];

  return (
    <div className="bg-deep-night overflow-hidden">
      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20 float-element"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20 float-element" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-electric-violet rounded-full filter blur-3xl opacity-10 float-element" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="hero-badge inline-flex items-center glass-card border-glass px-5 py-2.5 rounded-full mb-6 gap-2 opacity-0">
                <Sparkles className="w-4 h-4 text-cyber-blue" />
                <span className="text-sm font-mono text-secondary">AI + Blockchain Infrastructure for Emerging Markets</span>
              </div>

              <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight opacity-0">
                Empowering SMEs with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-cyber">
                  AI & Blockchain
                </span>
              </h1>

              <p className="hero-description text-secondary text-lg mb-8 leading-relaxed opacity-0">
                Complete infrastructure stack for emerging market SMEs to compete globally. Train your team, digitize operations, automate workflows, trace products, and access digital finance.
              </p>

              <div className="hero-cta flex flex-col sm:flex-row gap-4 opacity-0">
                <Link
                  to="/contact"
                  className="pulse-cta inline-flex items-center justify-center bg-gradient-cyber text-white px-8 py-4 rounded-lg font-mono font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/use-cases"
                  className="inline-flex items-center justify-center glass-card border-glass text-primary px-8 py-4 rounded-lg font-mono font-bold hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300"
                >
                  View Use Cases
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="animate-on-scroll opacity-0">
                  <div className="text-secondary text-sm font-mono">Trusted by</div>
                  <div className="text-primary font-mono font-semibold">Government Partners</div>
                </div>
                <div className="border-l border-glass h-12"></div>
                <div className="animate-on-scroll opacity-0">
                  <div className="text-secondary text-sm font-mono">Supporting</div>
                  <div className="text-primary font-mono font-semibold">100+ SMEs</div>
                </div>
              </div>
            </div>

            {/* Animated Workflow Diagram */}
            <div className="relative">
              <div className="glass-card border-glass p-8 rounded-2xl shadow-glow-lg overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-cyber rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-neon rounded-full filter blur-3xl"></div>
                </div>

                <div className="space-y-4 relative z-10">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step}
                      className="animate-on-scroll flex items-center space-x-4 p-4 glass-card border-glass rounded-xl hover:border-cyber-blue hover:shadow-glow-sm transition-all duration-300 cursor-pointer feature-card opacity-0"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="card-icon w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center text-white font-mono font-bold shadow-glow-sm">
                        {index + 1}
                      </div>
                      <div className="text-primary font-mono font-semibold text-lg flex-grow">{step}</div>
                      <ArrowRight className="w-5 h-5 text-cyber-blue" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack Section */}
      <section className="py-20 relative overflow-hidden animate-section">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
              Complete Infrastructure Stack
            </h2>
            <p className="text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
              We provide the full infrastructure that emerging market businesses need to compete in the global economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className="animate-on-scroll feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue hover:shadow-glow-md transition-all duration-300 group relative overflow-hidden opacity-0"
                >
                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`card-icon w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-glow-sm group-hover:shadow-glow transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-mono text-2xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-secondary mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center text-cyber-blue font-mono font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 relative overflow-hidden animate-section">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-electric-violet to-cyber-blue opacity-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center animate-on-scroll opacity-0">
                <div className="glass-card border-glass p-6 rounded-2xl">
                  <div className="font-mono text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-cyber">
                    <span className="stat-number" data-value={stat.value}>0</span>
                    {stat.suffix}
                  </div>
                  <div className="text-secondary text-sm md:text-base font-mono">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            Join the SMEs, governments, and enterprises already building the future with Cynea AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="pulse-cta inline-flex items-center justify-center bg-gradient-cyber text-white px-8 py-4 rounded-lg font-mono font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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

        .bg-gradient-cyber {
          background: linear-gradient(135deg, #00F0FF 0%, #7000FF 100%);
        }

        .bg-gradient-neon {
          background: linear-gradient(135deg, #7000FF 0%, #FF006E 100%);
        }

        .electric-violet {
          color: #7000FF;
        }

        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        .shadow-glow-md {
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.25);
        }

        .shadow-glow-lg {
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
        }
      `}</style>
    </div>
  );
}

export default EnhancedHome;
