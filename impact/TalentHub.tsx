import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import {
  Users,
  Rocket,
  Award,
  Heart,
  Briefcase,
  Shield,
  Target,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const TalentHub: React.FC = () => {
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
          if (entry.target.classList.contains('benefit-card')) {
            const cards = document.querySelectorAll('.benefit-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('success-story')) {
            const stories = document.querySelectorAll('.success-story');
            anime({
              targets: stories,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('quality-step')) {
            const steps = document.querySelectorAll('.quality-step');
            anime({
              targets: steps,
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(120),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('partner-card')) {
            const cards = document.querySelectorAll('.partner-card');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
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
    document.querySelectorAll('.benefit-card, .success-story, .quality-step, .partner-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Rocket,
      title: 'Real-World Projects',
      description: 'Work on actual client projects under expert guidance, building production-ready solutions that make a real impact.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn directly from industry professionals with years of experience in AI, blockchain, and emerging technologies.'
    },
    {
      icon: Zap,
      title: 'Skills Development',
      description: 'Master cutting-edge technologies through hands-on training in AI development, data science, and system architecture.'
    },
    {
      icon: Globe,
      title: 'Community & Network',
      description: 'Join a vibrant community of innovators, collaborate with peers, and build lasting professional connections.'
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Access pathways to full-time positions, freelance projects, and entrepreneurial ventures in the tech ecosystem.'
    },
    {
      icon: Heart,
      title: 'Support & Resources',
      description: 'Receive comprehensive support including mentorship, learning materials, and access to professional development tools.'
    }
  ];

  const successStories = [
    {
      name: 'Sarah M.',
      role: 'AI Developer',
      story: 'Started as an intern, now leading AI automation projects for enterprise clients. The mentorship and real-world experience were invaluable.',
      achievement: 'Led development of AI chatbot processing 10K+ queries/month'
    },
    {
      name: 'James K.',
      role: 'Blockchain Engineer',
      story: 'Joined with basic coding skills, now building supply chain traceability solutions for international organizations.',
      achievement: 'Architected EUDR compliance system for agricultural exporters'
    },
    {
      name: 'Amina T.',
      role: 'Data Scientist',
      story: 'Transitioned from traditional finance to tech through Talent Hub. Now developing predictive analytics models.',
      achievement: 'Created forecasting models improving accuracy by 35%'
    }
  ];

  const qualitySteps = [
    {
      number: 1,
      title: 'Rigorous Selection',
      description: 'Only top 5% of applicants are accepted through our multi-stage assessment process.'
    },
    {
      number: 2,
      title: 'Structured Training',
      description: 'Comprehensive curriculum combining technical skills, soft skills, and industry best practices.'
    },
    {
      number: 3,
      title: 'Real Projects',
      description: 'Immediate immersion in live client projects with direct mentorship from senior engineers.'
    },
    {
      number: 4,
      title: 'Continuous Growth',
      description: 'Ongoing learning opportunities, skill assessments, and career development support.'
    }
  ];

  const partnerOpportunities = [
    {
      title: 'For Organizations',
      description: 'Access pre-vetted, highly skilled talent for your projects while supporting the next generation of tech leaders.',
      benefits: ['Reduced hiring costs', 'Fresh perspectives', 'Flexible engagement models', 'Quality guarantee']
    },
    {
      title: 'For Universities',
      description: 'Partner with us to provide students with real-world experience and industry connections.',
      benefits: ['Enhanced curriculum', 'Industry partnerships', 'Student placement support', 'Collaborative research']
    },
    {
      title: 'For Mentors',
      description: 'Share your expertise and shape the future of technology while growing your professional network.',
      benefits: ['Give back to community', 'Develop leadership skills', 'Expand your network', 'Recognition & rewards']
    }
  ];

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
              CYNEA TALENT HUB
            </div>
            <h1 className="hero-subtitle font-mono text-5xl md:text-7xl font-bold mb-6 opacity-0">
              Nurturing the Next Generation
              <span className="block mt-2 bg-gradient-to-r from-cyber-blue via-electric-violet to-cyber-blue bg-clip-text text-transparent">
                of Tech Leaders
              </span>
            </h1>
            <p className="hero-description text-xl text-secondary max-w-3xl mx-auto leading-relaxed opacity-0">
              We believe in investing in people. Our Talent Hub provides aspiring developers, data scientists,
              and engineers with real-world experience, expert mentorship, and pathways to meaningful careers
              in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card border-glass p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-cyber rounded-full filter blur-3xl opacity-10"></div>
            <div className="relative z-10">
              <Target className="w-16 h-16 text-cyber-blue mb-6 mx-auto" />
              <h2 className="font-mono text-3xl font-bold text-center mb-6">Our Mission</h2>
              <p className="text-lg text-secondary text-center max-w-4xl mx-auto leading-relaxed">
                To bridge the gap between education and employment by providing talented individuals
                with hands-on experience, mentorship, and opportunities to work on meaningful projects
                that solve real-world problems. We're not just training developers—we're nurturing
                innovators, problem-solvers, and future leaders in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Why Join Talent Hub?</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            More than an internship—a comprehensive program designed to accelerate your tech career.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0"
                >
                  <Icon className="w-12 h-12 text-cyber-blue mb-4" />
                  <h3 className="font-mono text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-secondary leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Real people, real growth, real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="success-story glass-card border-glass p-8 rounded-2xl opacity-0"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-cyber flex items-center justify-center font-mono font-bold text-white mr-4">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg">{story.name}</h3>
                    <p className="text-sm text-cyber-blue">{story.role}</p>
                  </div>
                </div>
                <p className="text-secondary mb-4 leading-relaxed italic">"{story.story}"</p>
                <div className="glass-card border-l-4 border-l-electric-violet p-3 rounded bg-black bg-opacity-20">
                  <div className="flex items-start">
                    <Star className="w-4 h-4 text-electric-violet mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-primary">{story.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Our Quality Standards</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            We maintain excellence through a structured, rigorous approach to talent development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitySteps.map((step, index) => (
              <div
                key={index}
                className="quality-step text-center opacity-0"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-6 font-mono text-3xl font-bold text-white shadow-glow-sm">
                  {step.number}
                </div>
                <h3 className="font-mono text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Opportunities */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-mono text-4xl font-bold text-center mb-4">Partner With Us</h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Join us in building the future of technology talent in Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="partner-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 opacity-0"
              >
                <h3 className="font-mono text-2xl font-bold mb-4">{opportunity.title}</h3>
                <p className="text-secondary mb-6 leading-relaxed">{opportunity.description}</p>
                <div className="space-y-2">
                  {opportunity.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0" />
                      <span className="text-sm text-primary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card border-glass p-12 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-cyber opacity-5"></div>
            <div className="relative z-10">
              <Award className="w-16 h-16 text-electric-violet mx-auto mb-6" />
              <h2 className="font-mono text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Whether you're an aspiring developer, an organization looking for talent, or a potential
                mentor, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cyber text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 glass-card border-glass text-primary font-mono font-bold rounded-lg hover:border-cyber-blue transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentHub;
