import { Link } from 'react-router-dom';
import { Bot, BarChart3, Workflow, MessageSquare, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function AIAutomation() {
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
              <span className="text-sm text-cyber-blue font-mono">AI & Automation Tools</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              Intelligent Agents for
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> SME Operations</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              Transform your business with AI-powered agents that handle customer service, inventory management, analytics, and more—freeing your team to focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Request Automation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                View Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">From Manual to Automated in Days</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                Our AI agents are specifically designed for SMEs in emerging markets, understanding the unique challenges you face from inconsistent data to limited technical resources.
              </p>
              <p className="text-secondary mb-6 leading-relaxed">
                Whether you're processing customer inquiries, managing inventory, or analyzing sales patterns, our intelligent automation adapts to your business workflows and scales as you grow.
              </p>
              <div className="glass-card bg-cyber-blue bg-opacity-10 border-l-4 border-cyber-blue p-6 rounded-lg">
                <p className="text-primary">
                  <span className="text-cyber-blue font-semibold">Average time savings:</span> 15-20 hours per week per team member on repetitive tasks
                </p>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">15-20h</div>
                  <div className="text-secondary text-sm">Weekly Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">24/7</div>
                  <div className="text-secondary text-sm">AI Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">3+</div>
                  <div className="text-secondary text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">100+</div>
                  <div className="text-secondary text-sm">SMEs Automated</div>
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
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Powerful AI Tools Built for SMEs</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Every tool is designed to work with the data you already have, no complex integrations or expensive consultants required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">AI Customer Service Agents</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                24/7 automated responses to common inquiries via WhatsApp, SMS, and web chat in multiple languages.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-language support (English, Swahili, French)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seamless handoff to human agents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom training on your products/services</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Productivity Dashboard</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Real-time insights into sales, inventory, customer behavior, and operational efficiency.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Visual analytics that anyone can understand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Predictive alerts for low stock, late payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile-first design for on-the-go access</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Smart Workflow Automation</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Automate repetitive tasks like invoice processing, order confirmations, and inventory updates.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>No-code workflow builder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pre-built templates for common tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integration with WhatsApp, email, SMS</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Document Processing</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Convert receipts, invoices, and forms into structured digital data automatically.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>OCR for handwritten and printed text</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic data validation and correction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Export to accounting systems</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Inventory Intelligence</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                AI-powered forecasting to optimize stock levels and reduce waste.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Demand prediction based on seasonality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic reorder recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Waste reduction alerts</span>
                </li>
              </ul>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Sales Analytics</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Understand customer patterns, identify growth opportunities, and optimize pricing.
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer segmentation and profiling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Product performance tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Revenue forecasting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agentic Solutions Examples */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">AI Agentic Solutions in Action</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              See how our intelligent AI agents transform specific industries and workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Edtech AI Tools</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                AI teaching assistants, automated grading systems, and personalized learning path recommendations for educational institutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 student support chatbots</span>
                </li>
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated assignment grading</span>
                </li>
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Learning analytics dashboard</span>
                </li>
              </ul>
              <Link to="/contact" className="text-cyber-blue hover:text-electric-violet inline-flex items-center transition-colors duration-300">
                Request Automation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Automated ESG Reporting</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                AI agents that automatically collect, verify, and compile ESG metrics into compliance-ready reports for investors and regulators.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic data collection</span>
                </li>
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>EUDR & CBAM compliance</span>
                </li>
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Investor-ready reports</span>
                </li>
              </ul>
              <Link to="/contact" className="text-cyber-blue hover:text-electric-violet inline-flex items-center transition-colors duration-300">
                Request Automation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300 group" style={{ opacity: 0 }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-mono text-xl font-bold text-primary mb-3">Automated Marketing Products</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                AI agents for content generation, social media management, email campaigns, and customer engagement automation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI content creation</span>
                </li>
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Campaign optimization</span>
                </li>
                <li className="flex items-start text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated lead nurturing</span>
                </li>
              </ul>
              <Link to="/contact" className="text-cyber-blue hover:text-electric-violet inline-flex items-center transition-colors duration-300">
                Request Automation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card border-glass p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Ready to Automate Your Business?</h2>
            <p className="text-secondary mb-8 text-lg">
              Join hundreds of SMEs already saving 15+ hours per week with Cynea AI automation tools.
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
                View Success Stories
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

export default AIAutomation;
