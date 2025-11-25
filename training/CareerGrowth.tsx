import { Link } from 'react-router-dom';
import { GraduationCap, Lightbulb, TrendingUp, Brain, CheckCircle, ArrowRight, Users, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import anime from 'animejs';

export function CareerGrowth() {
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
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-cyber rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-neon rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-block glass-card border-glass px-6 py-3 rounded-full mb-8" style={{ opacity: 0 }}>
              <span className="text-sm text-cyber-blue font-mono">Career Growth Programs</span>
            </div>

            <h1 className="hero-title font-mono text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ opacity: 0 }}>
              AI Literacy & Upskilling for
              <span className="block bg-gradient-cyber bg-clip-text text-transparent"> Professionals</span>
            </h1>

            <p className="hero-description text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
              Advance your career with cutting-edge AI training. From foundational concepts to specialized skills in marketing and data science—transform your professional trajectory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/use-cases"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Two Pathways to AI Mastery</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Whether you're starting from scratch or looking to specialize, we have the right program for your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Literacy Course */}
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-cyber-blue transition-all duration-300" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-cyber flex items-center justify-center mb-6 shadow-glow-sm">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-2xl font-bold text-primary mb-4">1. AI Literacy Course</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Build a solid foundation in AI concepts, tools, and prompt engineering. Perfect for anyone looking to understand and leverage AI in their current role.
              </p>

              <h4 className="font-mono text-lg font-semibold text-primary mb-4">What You'll Learn:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">
                    <span className="text-primary font-semibold">AI Fundamentals:</span> Machine learning, neural networks, and how AI systems work
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">
                    <span className="text-primary font-semibold">Prompt Engineering:</span> Master the art of communicating with AI tools for maximum effectiveness
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">
                    <span className="text-primary font-semibold">AI Tools Ecosystem:</span> ChatGPT, Claude, Midjourney, and specialized industry tools
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">
                    <span className="text-primary font-semibold">Ethical AI:</span> Understanding bias, privacy, and responsible AI usage
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">
                    <span className="text-primary font-semibold">Practical Applications:</span> Real-world projects to apply AI in your work
                  </span>
                </li>
              </ul>

              <div className="glass-card border-glass p-4 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-cyber-blue font-mono">Duration</div>
                    <div className="text-secondary">4-6 weeks</div>
                  </div>
                  <div>
                    <div className="text-cyber-blue font-mono">Format</div>
                    <div className="text-secondary">Online + Live</div>
                  </div>
                  <div>
                    <div className="text-cyber-blue font-mono">Level</div>
                    <div className="text-secondary">Beginner</div>
                  </div>
                  <div>
                    <div className="text-cyber-blue font-mono">Certificate</div>
                    <div className="text-secondary">Included</div>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="inline-flex items-center text-cyber-blue hover:text-electric-violet transition-colors duration-300">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Upskilling Programs */}
            <div className="feature-card glass-card border-glass p-8 rounded-2xl hover:border-electric-violet transition-all duration-300" style={{ opacity: 0 }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-neon flex items-center justify-center mb-6 shadow-glow-sm">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-mono text-2xl font-bold text-primary mb-4">2. Professional Upskilling</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Advanced specialization tracks in high-demand areas. Build expertise that commands premium salaries and opens new career opportunities.
              </p>

              <h4 className="font-mono text-lg font-semibold text-primary mb-4">Specialization Tracks:</h4>

              <div className="space-y-4">
                {/* Marketing Track */}
                <div className="glass-card border-l-4 border-cyber-blue p-4 rounded-lg">
                  <h5 className="text-primary font-semibold mb-2 flex items-center">
                    <span className="bg-gradient-cyber text-white px-2 py-1 rounded text-xs font-mono mr-2">TRACK A</span>
                    AI-Powered Marketing
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Content generation & automation</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Social media automation tools</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Email campaign optimization</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-cyber-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">SEO & analytics with AI</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm text-secondary">
                    <span className="text-cyber-blue font-mono">Duration:</span> 4 weeks • <span className="text-cyber-blue font-mono">Projects:</span> 4 portfolio pieces
                  </div>
                </div>

                {/* Data Science Track */}
                <div className="glass-card border-l-4 border-electric-violet p-4 rounded-lg">
                  <h5 className="text-primary font-semibold mb-2 flex items-center">
                    <span className="bg-gradient-neon text-white px-2 py-1 rounded text-xs font-mono mr-2">TRACK B</span>
                    Data Science & Analytics
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-electric-violet mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Python for data analysis</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-electric-violet mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Machine learning fundamentals</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-electric-violet mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Data visualization & storytelling</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-electric-violet mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">Predictive modeling</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm text-secondary">
                    <span className="text-electric-violet font-mono">Duration:</span> 12 weeks • <span className="text-electric-violet font-mono">Projects:</span> 3 capstone projects
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center text-electric-violet hover:text-cyber-blue transition-colors duration-300">
                  Explore Tracks <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Outcomes */}
      <section className="py-20 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Career Transformation Results</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Real outcomes from professionals who completed our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card glass-card border-glass p-6 rounded-2xl hover:border-cyber-blue transition-all duration-300" style={{ opacity: 0 }}>
              <div className="text-cyber-blue font-mono text-sm mb-3">Marketing Manager → AI Marketing Lead</div>
              <p className="text-secondary mb-4 text-sm leading-relaxed">
                Completed AI-Powered Marketing track, now manages automated campaigns generating 3x more leads at half the cost.
              </p>
              <div className="text-primary font-mono text-lg">+85% salary increase</div>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl hover:border-electric-violet transition-all duration-300" style={{ opacity: 0 }}>
              <div className="text-electric-violet font-mono text-sm mb-3">Business Analyst → Data Scientist</div>
              <p className="text-secondary mb-4 text-sm leading-relaxed">
                After Data Science track, transitioned to predictive modeling role at fintech startup.
              </p>
              <div className="text-primary font-mono text-lg">+120% salary increase</div>
            </div>

            <div className="feature-card glass-card border-glass p-6 rounded-2xl hover:border-cyber-blue transition-all duration-300" style={{ opacity: 0 }}>
              <div className="text-cyber-blue font-mono text-sm mb-3">Small Business Owner → AI Consultant</div>
              <p className="text-secondary mb-4 text-sm leading-relaxed">
                Used AI Literacy knowledge to start consulting practice, now advising 12 SMEs on AI adoption.
              </p>
              <div className="text-primary font-mono text-lg">New revenue stream</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card border-glass p-8 rounded-2xl">
              <h2 className="font-mono text-3xl font-bold text-primary mb-6">Why Cynea Career Programs Stand Out</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center mr-4 flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Practical, Not Theoretical</h4>
                    <p className="text-secondary text-sm">
                      Every module includes real-world projects. You'll build a portfolio while learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-neon flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Expert Instructors</h4>
                    <p className="text-secondary text-sm">
                      Learn from practitioners actively building AI solutions for businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Career Support</h4>
                    <p className="text-secondary text-sm">
                      Job placement assistance, resume reviews, and connections to hiring companies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-neon flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1">Flexible Learning</h4>
                    <p className="text-secondary text-sm">
                      Study at your own pace with on-demand content, plus live sessions for Q&A and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border-glass p-8 rounded-2xl">
              <h3 className="font-mono text-2xl font-bold text-primary mb-6 text-center">Program Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">500+</div>
                  <div className="text-secondary text-sm">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">95%</div>
                  <div className="text-secondary text-sm">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-cyber-blue mb-2">4.8/5</div>
                  <div className="text-secondary text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-electric-violet mb-2">85%</div>
                  <div className="text-secondary text-sm">Career Advancement</div>
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
            <Sparkles className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="font-mono text-4xl font-bold text-primary mb-4">Start Your AI Career Transformation Today</h2>
            <p className="text-secondary mb-8 text-lg">
              Join hundreds of professionals who have advanced their careers through our AI training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="glass-card border-glass px-8 py-4 rounded-lg font-semibold hover:bg-glass-hover transition-all duration-300 inline-flex items-center justify-center text-primary"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="text-secondary text-sm">
              <span className="text-cyber-blue">Rolling Admissions</span> • <span className="text-electric-violet">Limited spots</span> • <span className="text-cyber-blue">Flexible payment</span>
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

export default CareerGrowth;
