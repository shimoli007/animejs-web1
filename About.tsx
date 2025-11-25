import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { Target, Eye, Award, MapPin, Users, ArrowRight, Mic, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export function About() {
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
          if (entry.target.classList.contains('vision-mission-card')) {
            const cards = document.querySelectorAll('.vision-mission-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('founder-section')) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('value-card')) {
            const cards = document.querySelectorAll('.value-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(80),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('geo-card')) {
            const cards = document.querySelectorAll('.geo-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(120),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('recognition-card')) {
            const cards = document.querySelectorAll('.recognition-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutExpo'
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.vision-mission-card, .founder-section, .value-card, .geo-card, .recognition-card').forEach(el => {
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
              ABOUT CYNEA AI
            </div>
            <h1 className="hero-subtitle font-mono text-5xl md:text-7xl font-bold mb-6 opacity-0">
              Building Infrastructure for
              <span className="block mt-2 bg-gradient-to-r from-cyber-blue via-electric-violet to-cyber-blue bg-clip-text text-transparent">
                Global SME Success
              </span>
            </h1>
            <p className="hero-description text-xl text-secondary max-w-3xl mx-auto leading-relaxed opacity-0">
              Cynea AI is more than a platform—we're the full-stack infrastructure that emerging market SMEs
              need to compete globally, powered by AI, blockchain, and digital finance technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="vision-mission-card glass-card border-glass border-l-4 border-l-cyber-blue p-8 md:p-10 rounded-2xl opacity-0">
              <Eye className="w-14 h-14 text-cyber-blue mb-6" />
              <h2 className="font-mono text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-secondary leading-relaxed text-lg">
                A world where emerging market SMEs have the same digital infrastructure advantages as developed
                market enterprises—enabling trusted, data-driven, borderless trade that lifts entire economies.
              </p>
            </div>
            <div className="vision-mission-card glass-card border-glass border-l-4 border-l-emerald-500 p-8 md:p-10 rounded-2xl opacity-0">
              <Target className="w-14 h-14 text-emerald-500 mb-6" />
              <h2 className="font-mono text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-secondary leading-relaxed text-lg">
                To power the next generation of emerging market exporters with AI training, productivity tools,
                blockchain traceability, and digital finance—delivering measurable business outcomes while building
                local tech capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story - Irene Otieno */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="founder-section glass-card border-glass p-8 md:p-12 rounded-2xl opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block bg-amber-500 bg-opacity-20 text-amber-400 px-4 py-2 rounded-full mb-6 border border-amber-500 border-opacity-30">
                  <span className="text-sm font-mono font-bold">FOUNDER & CEO</span>
                </div>
                <h2 className="font-mono text-4xl font-bold mb-3">Irene Otieno</h2>
                <h3 className="text-electric-violet text-xl mb-6 font-mono">
                  Analytical Chemist turned AI Entrepreneur
                </h3>

                <div className="space-y-4 text-secondary leading-relaxed mb-8">
                  <p>
                    Irene's journey from analytical chemistry to AI entrepreneurship brings a unique perspective to
                    solving complex technological challenges for SMEs in emerging markets. Her background in HPLC, NMR,
                    spectroscopy, and data precision instilled a commitment to accuracy and reliability that defines
                    Cynea AI's approach.
                  </p>
                  <p>
                    Transitioning from the laboratory to the world of AI, data intelligence, and automation, Irene
                    founded Cynea AI with a clear mission: turn complex digital and technological challenges into
                    accessible and cost-effective solutions for SMEs in emerging markets.
                  </p>
                  <p>
                    Operating at the intersection of emerging market SME realities and UK digital trust ecosystems,
                    Irene has built a company that bridges the gap between cutting-edge technology and practical
                    business needs.
                  </p>
                </div>

                <div className="glass-card border-l-4 border-l-amber-500 bg-amber-500 bg-opacity-5 p-6 rounded-xl mb-8">
                  <p className="text-primary italic text-lg mb-4 leading-relaxed">
                    "Technology should not be the privilege of the few. I built Cynea to empower the many."
                  </p>
                  <div className="text-amber-400 font-mono font-bold">— Irene Otieno, Founder & CEO</div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-lg font-bold mb-4">Global Recognition & Speaking Engagements</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center bg-cyber-blue bg-opacity-20 text-cyber-blue px-3 py-2 rounded-full text-sm border border-cyber-blue border-opacity-30 font-mono">
                        <Mic className="w-3 h-3 mr-2" />
                        Estonia Digital Society
                      </span>
                      <span className="inline-flex items-center bg-electric-violet bg-opacity-20 text-electric-violet px-3 py-2 rounded-full text-sm border border-electric-violet border-opacity-30 font-mono">
                        <Mic className="w-3 h-3 mr-2" />
                        Latitude59
                      </span>
                      <span className="inline-flex items-center bg-purple-500 bg-opacity-20 text-purple-400 px-3 py-2 rounded-full text-sm border border-purple-500 border-opacity-30 font-mono">
                        <Mic className="w-3 h-3 mr-2" />
                        APAIC
                      </span>
                      <span className="inline-flex items-center bg-amber-500 bg-opacity-20 text-amber-400 px-3 py-2 rounded-full text-sm border border-amber-500 border-opacity-30 font-mono">
                        <Mic className="w-3 h-3 mr-2" />
                        Women in AI UK
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-lg font-bold mb-3">Advocacy</h4>
                    <p className="text-secondary">
                      Women in STEM champion and digital inclusion advocate, working to ensure technology empowers
                      rather than excludes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card border-glass border-l-4 border-l-cyber-blue p-8 rounded-2xl bg-black bg-opacity-30">
                  <h4 className="font-mono text-xl font-bold mb-6">Strategic Advantages</h4>
                  <div className="space-y-5">
                    <div>
                      <div className="text-amber-400 font-mono font-bold mb-2">Unique cross-border perspective</div>
                      <p className="text-secondary text-sm">
                        Building FROM emerging markets FOR global scale
                      </p>
                    </div>
                    <div>
                      <div className="text-amber-400 font-mono font-bold mb-2">Technical depth</div>
                      <p className="text-secondary text-sm">
                        Chemistry background brings precision to AI/data solutions
                      </p>
                    </div>
                    <div>
                      <div className="text-amber-400 font-mono font-bold mb-2">Government trust</div>
                      <p className="text-secondary text-sm">
                        Established relationships across UK, Kenya, Uganda, Zambia
                      </p>
                    </div>
                    <div>
                      <div className="text-amber-400 font-mono font-bold mb-2">Investor-ready</div>
                      <p className="text-secondary text-sm">
                        Proven ability to articulate complex tech to diverse stakeholders
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NjI3NzI2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Professional business leader"
                    className="rounded-xl shadow-glow-md w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="value-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0">
              <div className="w-16 h-16 rounded-full bg-cyber-blue bg-opacity-20 flex items-center justify-center mx-auto mb-6 border border-cyber-blue border-opacity-30">
                <Award className="w-8 h-8 text-cyber-blue" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3 text-center">Trust & Transparency</h3>
              <p className="text-secondary text-center leading-relaxed">
                We build systems that create verifiable trust through blockchain and open reporting—no hidden
                processes or black boxes.
              </p>
            </div>

            <div className="value-card glass-card border-glass p-8 rounded-2xl hover:border-emerald-500 transition-all duration-300 opacity-0">
              <div className="w-16 h-16 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center mx-auto mb-6 border border-emerald-500 border-opacity-30">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3 text-center">Empowerment</h3>
              <p className="text-secondary text-center leading-relaxed">
                We don't just provide tools—we train people to use them, building long-term capability rather than
                dependency.
              </p>
            </div>

            <div className="value-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 opacity-0">
              <div className="w-16 h-16 rounded-full bg-electric-violet bg-opacity-20 flex items-center justify-center mx-auto mb-6 border border-electric-violet border-opacity-30">
                <Target className="w-8 h-8 text-electric-violet" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3 text-center">Impact Over Scale</h3>
              <p className="text-secondary text-center leading-relaxed">
                We measure success by the businesses we transform, not just the revenue we generate.
              </p>
            </div>

            <div className="value-card glass-card border-glass p-8 rounded-2xl hover:border-amber-500 transition-all duration-300 opacity-0">
              <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center mx-auto mb-6 border border-amber-500 border-opacity-30">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3 text-center">Excellence</h3>
              <p className="text-secondary text-center leading-relaxed">
                We hold ourselves to the highest technical and ethical standards—our clients' success depends on it.
              </p>
            </div>

            <div className="value-card glass-card border-glass p-8 rounded-2xl hover:border-cyan-400 transition-all duration-300 opacity-0">
              <div className="w-16 h-16 rounded-full bg-cyan-400 bg-opacity-20 flex items-center justify-center mx-auto mb-6 border border-cyan-400 border-opacity-30">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3 text-center">Emerging Markets First</h3>
              <p className="text-secondary text-center leading-relaxed">
                We design for emerging market contexts and constraints, then export these solutions globally.
              </p>
            </div>

            <div className="value-card glass-card border-glass p-8 rounded-2xl hover:border-pink-400 transition-all duration-300 opacity-0">
              <div className="w-16 h-16 rounded-full bg-pink-400 bg-opacity-20 flex items-center justify-center mx-auto mb-6 border border-pink-400 border-opacity-30">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3 text-center">Collaborative Growth</h3>
              <p className="text-secondary text-center leading-relaxed">
                We succeed when our clients, partners, and talent community succeed—growth is collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">UK-Emerging Markets Focus</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Strategically positioned to serve the growing trade and technology exchange between the UK and
              emerging markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="geo-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0">
              <MapPin className="w-14 h-14 text-cyber-blue mb-6" />
              <h3 className="font-mono text-2xl font-bold mb-4">United Kingdom</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                UK-registered company providing strategic partnerships and market access for emerging market exporters.
              </p>
              <div className="glass-card border-l-4 border-l-cyber-blue bg-cyber-blue bg-opacity-5 p-4 rounded">
                <p className="text-sm font-mono text-primary">
                  Focus: Compliance, buyer relationships, fintech infrastructure
                </p>
              </div>
            </div>

            <div className="geo-card glass-card border-glass p-8 rounded-2xl hover:border-emerald-500 transition-all duration-300 opacity-0">
              <MapPin className="w-14 h-14 text-emerald-500 mb-6" />
              <h3 className="font-mono text-2xl font-bold mb-4">Nairobi Hub</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Talent Hub serving as our innovation center and primary operational base in East Africa.
              </p>
              <div className="glass-card border-l-4 border-l-emerald-500 bg-emerald-500 bg-opacity-5 p-4 rounded">
                <p className="text-sm font-mono text-primary">
                  Focus: Product development, talent development, government partnerships
                </p>
              </div>
            </div>

            <div className="geo-card glass-card border-glass p-8 rounded-2xl hover:border-amber-500 transition-all duration-300 opacity-0">
              <MapPin className="w-14 h-14 text-amber-500 mb-6" />
              <h3 className="font-mono text-2xl font-bold mb-4">Emerging Markets</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Building the next generation of business leaders through hands-on training and partnerships.
              </p>
              <div className="glass-card border-l-4 border-l-amber-500 bg-amber-500 bg-opacity-5 p-4 rounded">
                <p className="text-sm font-mono text-primary">
                  Focus: AI training, Workflow automation tools, Blockchain traceability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Recognition & Partnerships</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Trusted by governments, validated by results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="recognition-card glass-card border-glass border-l-4 border-l-cyber-blue p-8 rounded-2xl opacity-0">
              <Award className="w-12 h-12 text-cyber-blue mb-6" />
              <h4 className="font-mono text-xl font-bold mb-3">Government Partners</h4>
              <p className="text-secondary mb-6 leading-relaxed">
                Recognized AI training solutions for AI workforce development and national strategy.
              </p>
              <div className="inline-block bg-cyber-blue bg-opacity-20 text-cyber-blue px-3 py-1 rounded-full text-sm font-mono border border-cyber-blue border-opacity-30">
                2024-Present
              </div>
            </div>

            <div className="recognition-card glass-card border-glass border-l-4 border-l-emerald-500 p-8 rounded-2xl opacity-0">
              <Award className="w-12 h-12 text-emerald-500 mb-6" />
              <h4 className="font-mono text-xl font-bold mb-3">SME Impact Leader</h4>
              <p className="text-secondary mb-6 leading-relaxed">
                Supporting 100+ SMEs across agriculture, coffee exports, and food innovation with measurable
                business outcomes.
              </p>
              <div className="inline-block bg-emerald-500 bg-opacity-20 text-emerald-500 px-3 py-1 rounded-full text-sm font-mono border border-emerald-500 border-opacity-30">
                Ongoing
              </div>
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
                Join Us in Building the Future of Global Trade
              </h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're an SME looking to grow, a government building capacity, or a talented innovator
                seeking opportunity—we'd love to work with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/impact/talent-hub"
                  className="inline-flex items-center justify-center px-8 py-4 glass-card border-glass text-primary font-mono font-bold rounded-lg hover:border-cyber-blue transition-all duration-300"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
