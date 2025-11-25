import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

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
          rotate: 360,
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
      scale: [1, 1.05, 1],
      duration: 2000,
      easing: 'easeInOutQuad',
      loop: true
    });

  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Advanced Animations */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white min-h-screen flex items-center">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-20 float-element" style={{top: '20%', left: '10%'}}></div>
          <div className="absolute w-3 h-3 bg-blue-300 rounded-full opacity-30 float-element" style={{top: '60%', right: '15%', animationDelay: '1s'}}></div>
          <div className="absolute w-4 h-4 bg-indigo-300 rounded-full opacity-25 float-element" style={{bottom: '30%', left: '20%', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="hero-badge inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-sm">AI + Blockchain Infrastructure for Emerging Markets</span>
              </div>
              
              <h1 className="hero-title text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering SMEs with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"> AI & Blockchain</span>
              </h1>
              
              <p className="hero-description text-blue-100 text-lg mb-8 leading-relaxed">
                Complete infrastructure stack for emerging market SMEs to compete globally. Train your team, digitize operations, automate workflows, trace products, and access digital finance.
              </p>
              
              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="pulse-cta inline-flex items-center justify-center bg-amber-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-amber-400 transition font-semibold shadow-xl"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/use-cases" 
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
                >
                  View Use Cases
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="animate-on-scroll">
                  <div className="text-blue-100 text-sm">Trusted by</div>
                  <div className="text-white font-semibold">Government Partners</div>
                </div>
                <div className="border-l border-blue-400 h-12"></div>
                <div className="animate-on-scroll">
                  <div className="text-blue-100 text-sm">Supporting</div>
                  <div className="text-white font-semibold">100+ SMEs</div>
                </div>
              </div>
            </div>
            
            {/* Animated Workflow Diagram */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white border-opacity-20">
                <div className="space-y-6">
                  {['Train', 'Digitize', 'Automate', 'Trace', 'Finance', 'Monetize'].map((step, index) => (
                    <div 
                      key={step}
                      className="animate-on-scroll flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition cursor-pointer feature-card"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="card-icon w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                        {index + 1}
                      </div>
                      <div className="text-white font-semibold text-lg">{step}</div>
                      <div className="ml-auto">
                        <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stack Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Infrastructure Stack
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide the full infrastructure that emerging market businesses need to compete in the global economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Train', desc: 'AI readiness programs', icon: '🎓', color: 'blue', link: '/training/b2b' },
              { title: 'Digitize', desc: 'Transform to digital data', icon: '💾', color: 'green', link: '/products/ai-automation' },
              { title: 'Automate', desc: 'AI agents and workflows', icon: '🤖', color: 'purple', link: '/products/ai-automation' },
              { title: 'Trace', desc: 'Blockchain traceability', icon: '🔗', color: 'orange', link: '/products/blockchain-compliance' },
              { title: 'Finance', desc: 'Stablecoin payments', icon: '💰', color: 'teal', link: '/products/digital-finance' },
              { title: 'Monetize', desc: 'Data insights marketplace', icon: '📊', color: 'indigo', link: '/products/data-analytics' }
            ].map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="animate-on-scroll feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 group"
              >
                <div className={`card-icon w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:shadow-xl transition`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 200, label: 'Officials Trained', suffix: '+' },
              { value: 100, label: 'SMEs Supported', suffix: '+' },
              { value: 5, label: 'Countries', suffix: '' },
              { value: 95, label: 'Client Satisfaction', suffix: '%' }
            ].map((stat) => (
              <div key={stat.label} className="text-center animate-on-scroll">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="stat-number" data-value={stat.value}>0</span>
                  {stat.suffix}
                </div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join the SMEs, governments, and enterprises already building the future with Cynea AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="pulse-cta inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold shadow-xl text-lg"
            >
              Schedule a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnhancedHome;
