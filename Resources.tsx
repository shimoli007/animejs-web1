import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { FileText, BookOpen, Newspaper, Video, Download, ArrowRight } from 'lucide-react';

export function Resources() {
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
          if (entry.target.classList.contains('featured-resource')) {
            const cards = document.querySelectorAll('.featured-resource');
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(120),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('blog-post')) {
            const posts = document.querySelectorAll('.blog-post');
            anime({
              targets: posts,
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('whitepaper-item')) {
            const items = document.querySelectorAll('.whitepaper-item');
            anime({
              targets: items,
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 800,
              delay: anime.stagger(80),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('video-card')) {
            const videos = document.querySelectorAll('.video-card');
            anime({
              targets: videos,
              opacity: [0, 1],
              scale: [0.95, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
          } else if (entry.target.classList.contains('media-item')) {
            const items = document.querySelectorAll('.media-item');
            anime({
              targets: items,
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(60),
              easing: 'easeOutExpo'
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.featured-resource, .blog-post, .whitepaper-item, .video-card, .media-item').forEach(el => {
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
              RESOURCES
            </div>
            <h1 className="hero-subtitle font-mono text-5xl md:text-7xl font-bold mb-6 opacity-0">
              Resources &
              <span className="block mt-2 bg-gradient-to-r from-cyber-blue via-electric-violet to-cyber-blue bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="hero-description text-xl text-secondary max-w-3xl mx-auto leading-relaxed opacity-0">
              Explore our library of guides, research, and industry insights on AI, blockchain, and digital trade
              for emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Featured Resources</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Start with our most popular guides and reports
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="featured-resource glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0">
              <div className="w-14 h-14 rounded-xl bg-cyber-blue bg-opacity-20 flex items-center justify-center mb-6 border border-cyber-blue border-opacity-30">
                <FileText className="w-7 h-7 text-cyber-blue" />
              </div>
              <div className="text-sm text-secondary mb-3 font-mono">WHITEPAPER</div>
              <h3 className="font-mono text-xl font-bold mb-4">Complete Guide to EUDR Compliance for Emerging Market Exporters</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Everything you need to know about the EU Deforestation Regulation, what it means for your business,
                and how to achieve compliance.
              </p>
              <button className="text-cyber-blue hover:text-electric-violet inline-flex items-center font-mono transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>

            <div className="featured-resource glass-card border-glass p-8 rounded-2xl hover:border-emerald-500 transition-all duration-300 opacity-0">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 bg-opacity-20 flex items-center justify-center mb-6 border border-emerald-500 border-opacity-30">
                <BookOpen className="w-7 h-7 text-emerald-500" />
              </div>
              <div className="text-sm text-secondary mb-3 font-mono">GUIDE</div>
              <h3 className="font-mono text-xl font-bold mb-4">SME's Handbook to AI Automation</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Practical guide for small businesses looking to implement AI tools without technical expertise or
                large budgets.
              </p>
              <button className="text-emerald-500 hover:text-cyber-blue inline-flex items-center font-mono transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>

            <div className="featured-resource glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 opacity-0">
              <div className="w-14 h-14 rounded-xl bg-electric-violet bg-opacity-20 flex items-center justify-center mb-6 border border-electric-violet border-opacity-30">
                <FileText className="w-7 h-7 text-electric-violet" />
              </div>
              <div className="text-sm text-secondary mb-3 font-mono">RESEARCH REPORT</div>
              <h3 className="font-mono text-xl font-bold mb-4">State of Digital Trade in Africa 2025</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Annual report on trends, challenges, and opportunities in Africa's digital trade ecosystem.
              </p>
              <button className="text-electric-violet hover:text-cyber-blue inline-flex items-center font-mono transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Insights */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Fresh perspectives on AI, blockchain, and emerging market innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="blog-post glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0">
              <div className="flex items-center text-sm text-secondary mb-4 font-mono">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>BLOG POST • 5 MIN READ</span>
              </div>
              <h3 className="font-mono text-xl font-bold mb-4">Why Stablecoins Are Essential for Emerging Market Exporters</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                How currency volatility erodes profit margins and why stablecoin infrastructure offers a better
                solution than traditional forex hedging.
              </p>
              <Link to="#" className="text-cyber-blue hover:text-electric-violet inline-flex items-center font-mono transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="blog-post glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 opacity-0">
              <div className="flex items-center text-sm text-secondary mb-4 font-mono">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>BLOG POST • 7 MIN READ</span>
              </div>
              <h3 className="font-mono text-xl font-bold mb-4">Building AI-Ready Teams: Lessons from 250+ Government Officials</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Key insights from our partnership with Kenya School of Government on what it takes to prepare
                organizations for AI adoption.
              </p>
              <Link to="#" className="text-cyber-blue hover:text-electric-violet inline-flex items-center font-mono transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="blog-post glass-card border-glass p-8 rounded-2xl hover:border-emerald-500 transition-all duration-300 opacity-0">
              <div className="flex items-center text-sm text-secondary mb-4 font-mono">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>BLOG POST • 6 MIN READ</span>
              </div>
              <h3 className="font-mono text-xl font-bold mb-4">Blockchain Traceability: Beyond the Hype</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Real-world implementation lessons from helping coffee and cocoa exporters achieve EUDR compliance
                with blockchain.
              </p>
              <Link to="#" className="text-emerald-500 hover:text-cyber-blue inline-flex items-center font-mono transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="blog-post glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300 opacity-0">
              <div className="flex items-center text-sm text-secondary mb-4 font-mono">
                <Newspaper className="w-4 h-4 mr-2" />
                <span>BLOG POST • 4 MIN READ</span>
              </div>
              <h3 className="font-mono text-xl font-bold mb-4">The Hidden Value in Your Business Data</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                How SMEs are monetizing verified operational data while maintaining privacy and control.
              </p>
              <Link to="#" className="text-electric-violet hover:text-cyber-blue inline-flex items-center font-mono transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers & Research */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Whitepapers & Research</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              In-depth analysis and thought leadership
            </p>
          </div>
          <div className="space-y-6">
            <div className="whitepaper-item glass-card border-glass p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between opacity-0 hover:border-cyber-blue transition-all duration-300">
              <div className="flex items-start flex-1">
                <FileText className="w-10 h-10 text-cyber-blue mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono text-xl font-bold mb-2">AI + Blockchain Convergence for Emerging Markets</h4>
                  <p className="text-secondary">Technical whitepaper on infrastructure design for low-connectivity environments</p>
                </div>
              </div>
              <button className="text-cyber-blue hover:text-electric-violet inline-flex items-center flex-shrink-0 mt-4 md:mt-0 md:ml-6 font-mono transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>

            <div className="whitepaper-item glass-card border-glass p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between opacity-0 hover:border-emerald-500 transition-all duration-300">
              <div className="flex items-start flex-1">
                <FileText className="w-10 h-10 text-emerald-500 mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono text-xl font-bold mb-2">Carbon Border Adjustment Mechanism (CBAM) Implementation Guide</h4>
                  <p className="text-secondary">Step-by-step guide for emerging market manufacturers exporting to EU</p>
                </div>
              </div>
              <button className="text-emerald-500 hover:text-cyber-blue inline-flex items-center flex-shrink-0 mt-4 md:mt-0 md:ml-6 font-mono transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>

            <div className="whitepaper-item glass-card border-glass p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between opacity-0 hover:border-electric-violet transition-all duration-300">
              <div className="flex items-start flex-1">
                <FileText className="w-10 h-10 text-electric-violet mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-mono text-xl font-bold mb-2">The SME Data Economy: Monetizing Verified Business Insights</h4>
                  <p className="text-secondary">Research on emerging data marketplaces and privacy-preserving monetization</p>
                </div>
              </div>
              <button className="text-electric-violet hover:text-cyber-blue inline-flex items-center flex-shrink-0 mt-4 md:mt-0 md:ml-6 font-mono transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos & Webinars */}
      <section className="py-16 px-6 bg-black bg-opacity-30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Videos & Webinars</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Watch and learn from our expert sessions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="video-card glass-card border-glass rounded-2xl overflow-hidden hover:border-cyber-blue transition-all duration-300 opacity-0">
              <div className="bg-gradient-to-br from-cyber-blue to-blue-800 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <Video className="w-16 h-16 text-white relative z-10" />
              </div>
              <div className="p-6">
                <div className="text-sm text-secondary mb-3 font-mono">WEBINAR RECORDING • 45 MIN</div>
                <h4 className="font-mono text-lg font-bold mb-3">Getting Started with AI Automation for SMEs</h4>
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                  Live demo and Q&A on implementing your first AI agents
                </p>
                <button className="text-cyber-blue hover:text-electric-violet font-mono transition-colors">Watch Now</button>
              </div>
            </div>

            <div className="video-card glass-card border-glass rounded-2xl overflow-hidden hover:border-emerald-500 transition-all duration-300 opacity-0">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-800 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <Video className="w-16 h-16 text-white relative z-10" />
              </div>
              <div className="p-6">
                <div className="text-sm text-secondary mb-3 font-mono">TUTORIAL • 20 MIN</div>
                <h4 className="font-mono text-lg font-bold mb-3">Setting Up Blockchain Traceability</h4>
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                  Step-by-step walkthrough for supply chain tracking
                </p>
                <button className="text-emerald-500 hover:text-cyber-blue font-mono transition-colors">Watch Now</button>
              </div>
            </div>

            <div className="video-card glass-card border-glass rounded-2xl overflow-hidden hover:border-electric-violet transition-all duration-300 opacity-0">
              <div className="bg-gradient-to-br from-electric-violet to-indigo-800 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <Video className="w-16 h-16 text-white relative z-10" />
              </div>
              <div className="p-6">
                <div className="text-sm text-secondary mb-3 font-mono">WEBINAR RECORDING • 60 MIN</div>
                <h4 className="font-mono text-lg font-bold mb-3">National AI Strategy Development</h4>
                <p className="text-secondary text-sm mb-6 leading-relaxed">
                  Insights from our government partnerships in Kenya and Zambia
                </p>
                <button className="text-electric-violet hover:text-cyber-blue font-mono transition-colors">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-4xl font-bold mb-4">Media Coverage</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Cynea AI in the news
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="media-item text-center glass-card border-glass p-6 rounded-2xl opacity-0 hover:border-cyan-400 transition-all duration-300">
              <div className="font-mono text-lg font-bold mb-2 text-cyan-400">TechCrunch Africa</div>
              <p className="text-secondary text-sm">AI infrastructure for emerging markets</p>
            </div>
            <div className="media-item text-center glass-card border-glass p-6 rounded-2xl opacity-0 hover:border-amber-400 transition-all duration-300">
              <div className="font-mono text-lg font-bold mb-2 text-amber-400">Financial Times</div>
              <p className="text-secondary text-sm">Blockchain traceability for compliance</p>
            </div>
            <div className="media-item text-center glass-card border-glass p-6 rounded-2xl opacity-0 hover:border-emerald-400 transition-all duration-300">
              <div className="font-mono text-lg font-bold mb-2 text-emerald-400">The Africa Report</div>
              <p className="text-secondary text-sm">Government AI partnerships</p>
            </div>
            <div className="media-item text-center glass-card border-glass p-6 rounded-2xl opacity-0 hover:border-pink-400 transition-all duration-300">
              <div className="font-mono text-lg font-bold mb-2 text-pink-400">Bloomberg</div>
              <p className="text-secondary text-sm">Stablecoins for emerging market trade</p>
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
                Want to Contribute to Our Blog?
              </h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                We're always looking for guest contributors with expertise in AI, blockchain, and emerging market
                innovation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cyber text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
