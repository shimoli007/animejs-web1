import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

// Import page components
import { About } from '../About';
import { Contact } from '../Contact';
import { Resources } from '../Resources';
import { UseCases } from '../UseCases';

// Product pages
import { AIAutomation } from '../products/AIAutomation';
import { BlockchainCompliance } from '../products/BlockchainCompliance';
import { DataAnalytics } from '../products/DataAnalytics';
import { DigitalFinance } from '../products/DigitalFinance';

// Training pages
import { B2BTraining } from '../training/B2BTraining';
import { CareerGrowth } from '../training/CareerGrowth';
import { GovernmentPrograms } from '../training/GovernmentPrograms';

// Impact pages
import AIForGood from '../impact/AIForGood';
import TalentHub from '../impact/TalentHub';

// Legal pages
import { AccessibilityStatement } from '../legal/AccessibilityStatement';
import { PrivacyPolicy } from '../legal/PrivacyPolicy';
import { TermsOfService } from '../legal/TermsOfService';

// Components
import { CookieConsent } from '../components/CookieConsent';
import { SEOHead } from '../components/SEOHead';

// Home page component (we'll create a simple one for now)
function Home() {
  return (
    <div className="min-h-screen bg-deep-night text-white">
      <SEOHead
        title="Cynea AI - Empowering SMEs with AI & Blockchain Solutions"
        description="Transform your business with cutting-edge AI and blockchain solutions designed specifically for SMEs"
      />
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Welcome to Cynea AI
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8">
            Empowering SMEs with AI & Blockchain Solutions
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/about" className="btn-primary">Learn More</a>
            <a href="/contact" className="btn-secondary">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-night">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/use-cases" element={<UseCases />} />

            {/* Product Routes */}
            <Route path="/products/ai-automation" element={<AIAutomation />} />
            <Route path="/products/blockchain-compliance" element={<BlockchainCompliance />} />
            <Route path="/products/data-analytics" element={<DataAnalytics />} />
            <Route path="/products/digital-finance" element={<DigitalFinance />} />

            {/* Training Routes */}
            <Route path="/training/b2b" element={<B2BTraining />} />
            <Route path="/training/career-growth" element={<CareerGrowth />} />
            <Route path="/training/public-sector" element={<GovernmentPrograms />} />

            {/* Impact Routes */}
            <Route path="/impact/ai-for-good" element={<AIForGood />} />
            <Route path="/impact/talent-hub" element={<TalentHub />} />

            {/* Legal Routes */}
            <Route path="/legal/accessibility" element={<AccessibilityStatement />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
