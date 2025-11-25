import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import {
  Heart,
  Users,
  Shield,
  Lightbulb,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Rocket,
  BookOpen,
  Scale,
  DollarSign,
  Building,
  Sparkles
} from 'lucide-react';

const AIForGood: React.FC = () => {
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
          if (entry.target.classList.contains('pillar-card')) {
            const cards = document.querySelectorAll('.pillar-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(150),
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
          } else if (entry.target.classList.contains('story-card')) {
            const stories = document.querySelectorAll('.story-card');
            anime({
              targets: stories,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(120),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('commitment-item')) {
            const items = document.querySelectorAll('.commitment-item');
            anime({
              targets: items,
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 800,
              delay: anime.stagger(80),
              easing: 'easeOutExpo'
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.pillar-card, .impact-stat, .story-card, .commitment-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Rocket,
      title: 'Deploy',
      subtitle: 'Technology That Serves',
      description: 'We build AI and automation solutions that empower small businesses, streamline government services, and create economic opportunities for underserved communities.',
      color: 'emerald',
      features: [
        'AI tools reducing operational costs by 40% for SMEs',
        'Digital finance platforms enabling cross-border transactions',
        'Blockchain traceability supporting sustainable supply chains',
        'Data analytics helping businesses make informed decisions'
      ]
    },
    {
      icon: BookOpen,
      title: 'Educate',
      subtitle: 'Knowledge as Empowerment',
      description: 'We democratize access to cutting-edge technology education, training government officials, corporate teams, and aspiring developers across Africa.',
      color: 'blue',
      features: [
        'Government partnerships training 200+ public sector officials',
        'Corporate programs upskilling teams in AI and data science',
        'Career growth pathways for aspiring tech professionals',
        'Talent Hub nurturing the next generation of innovators'
      ]
    },
    {
      icon: Scale,
      title: 'Govern',
      subtitle: 'Responsible Innovation',
      description: 'We champion ethical AI development, transparent systems, and technology governance that prioritizes human dignity and social impact.',
      color: 'purple',
      features: [
        'Compliance-first approach to blockchain and AI systems',
        'Transparent algorithms with explainable decision-making',
        'Privacy-preserving data practices and security standards',
        'Stakeholder engagement in technology development'
      ]
    }
  ];

  const impactStats = [
    {
      number: '200+',
      label: 'Government Officials Trained',
      description: 'Empowering public sector with AI and data literacy'
    },
    {
      number: '30+',
      label: 'SMEs Supported',
      description: 'Small businesses leveraging AI for growth'
    },
    {
      number: 'Top 5%',
      label: 'Talent Selection',
      description: 'Nurturing exceptional tech leaders through Talent Hub'
    },
    {
      number: '$45K',
      label: 'Average Annual Savings',
      description: 'Cost reduction for businesses using our AI tools'
    }
  ];

  const realStories = [
    {
      icon: Building,
      title: 'Agricultural Exporter',
      location: 'Kenya',
      challenge: 'Facing EUDR compliance requirements threatening market access to EU',
      solution: 'Implemented blockchain traceability system with GPS-stamped tracking',
      impact: 'Achieved full EUDR compliance, maintained EU market access, increased buyer confidence by 60%'
    },
    {
      icon: Users,
      title: 'Public Health Department',
      location: 'Zambia',
      challenge: 'Manual data collection delaying policy decisions by weeks',
      solution: 'Deployed AI-powered data analytics and automated reporting',
      impact: 'Reduced decision-making time from 3 weeks to 2 days, improved resource allocation'
    },
    {
      icon: Sparkles,
      title: 'Small Retail Business',
      location: 'Uganda',
      challenge: 'Spending 20 hours weekly on inventory management and customer service',
      solution: 'Integrated AI chatbot and automated inventory tracking',
      impact: 'Saved 18 hours weekly, increased customer satisfaction by 45%, reduced stockouts by 70%'
    }
  ];

  const commitments = [
    'Human-centered design: Technology serves people, not the other way around',
    'Accessibility first: Solutions designed for low-resource environments',
    'Transparent operations: Clear communication about how our systems work',
    'Ethical AI development: Bias mitigation and fairness in all algorithms',
    'Environmental responsibility: Energy-efficient systems and sustainable practices',
    'Community engagement: Involving stakeholders in development decisions',
    'Knowledge sharing: Open-source contributions and educational resources',
    'Measurable impact: Regular assessment and reporting of social outcomes'
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { border: string; bg: string; text: string; icon: string } } = {
      emerald: {
        border: 'border-l-emerald-500',
        bg: 'bg-emerald-500 bg-opacity-10',
        text: 'text-emerald-400',
        icon: 'text-emerald-500'
      },
      blue: {
        border: 'border-l-cyber-blue',
        bg: 'bg-cyber-blue bg-opacity-10',
        text: 'text-cyber-blue',
        icon: 'text-cyber-blue'
      },
      purple: {
        border: 'border-l-electric-violet',
        bg: 'bg-electric-violet bg-opacity-10',
        text: 'text-electric-violet',
        icon: 'text-electric-violet'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-deep-night text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="hero-title inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full text-sm font-mono font-bold mb-6 shadow-glow-sm opacity-0">
              AI FOR GOOD
            </div>
            <h1 className="hero-subtitle font-mono text-5xl md:text-7xl font-bold mb-6 opacity-0">
              Technology That Serves
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyber-blue to-electric-violet bg-clip-text text-transparent">
                Humanity
              </span>
            </h1>
            <p className="hero-description text-xl text-secondary max-w-3xl mx-auto leading-relaxed opacity-0">
              At Cynea AI, we believe technology should empower people, strengthen communities, and create
              opportunities for everyone. Our commitment to responsible innovation drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Our Three Pillars</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            How we ensure technology creates positive social impact.
          </p>

          <div className="space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const colors = getColorClasses(pillar.color);
              return (
                <div
                  key={index}
                  className={`pillar-card glass-card border-glass border-l-4 ${colors.border} p-8 md:p-12 rounded-2xl opacity-0`}
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className={`font-mono text-3xl font-bold ${colors.text}`}>{pillar.title}</h3>
                        <span className="text-secondary">—</span>
                        <span className="text-lg text-secondary italic">{pillar.subtitle}</span>
                      </div>
                      <p className="text-secondary text-lg mb-6 leading-relaxed">{pillar.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {pillar.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 ${colors.icon} mr-3 mt-1 flex-shrink-0`} />
                            <span className="text-sm text-primary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Impact by Numbers</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Measurable outcomes that demonstrate our commitment to positive change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="impact-stat glass-card border-glass p-8 rounded-2xl text-center opacity-0"
              >
                <div className="text-5xl font-mono font-bold bg-gradient-cyber bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-primary mb-2">{stat.label}</div>
                <div className="text-sm text-secondary">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Real Stories, Real Impact</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            See how our technology is making a difference in people's lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realStories.map((story, index) => {
              const Icon = story.icon;
              return (
                <div
                  key={index}
                  className="story-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-12 h-12 text-cyber-blue" />
                    <span className="text-xs font-mono text-electric-violet bg-electric-violet bg-opacity-10 px-3 py-1 rounded-full">
                      {story.location}
                    </span>
                  </div>
                  <h3 className="font-mono text-xl font-bold mb-4">{story.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-mono text-secondary uppercase tracking-wider mb-1">Challenge</div>
                      <p className="text-sm text-primary leading-relaxed">{story.challenge}</p>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-secondary uppercase tracking-wider mb-1">Solution</div>
                      <p className="text-sm text-primary leading-relaxed">{story.solution}</p>
                    </div>

                    <div className="glass-card border-l-4 border-l-emerald-500 bg-emerald-500 bg-opacity-5 p-3 rounded">
                      <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Impact</div>
                      <p className="text-sm text-primary leading-relaxed">{story.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Our Commitment to Responsible Technology</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Principles that guide our development, deployment, and governance of technology solutions.
          </p>

          <div className="glass-card border-glass p-8 md:p-12 rounded-2xl">
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="commitment-item flex items-start opacity-0"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-cyber flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-primary leading-relaxed flex-1 pt-1">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card border-glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyber-blue to-electric-violet opacity-5"></div>
            <div className="relative z-10">
              <Heart className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h2 className="font-mono text-3xl font-bold mb-6">Join Us in Building a Better Future</h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Whether you're a business looking for responsible AI solutions, an organization seeking
                training partnerships, or someone who shares our vision—let's work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
                >
                  Get Started
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
};

export default AIForGood;
