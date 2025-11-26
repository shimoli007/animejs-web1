import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { EnhancedHome } from './enhanced-home';
import { About } from './About';
import { UseCases } from './UseCases';
import { Resources } from './Resources';
import { Contact } from './Contact';
import { SEOHead } from './components/SEOHead';
import { CookieConsent } from './components/CookieConsent';

// Products
import { AIAutomation } from './products/AIAutomation';
import { BlockchainCompliance } from './products/BlockchainCompliance';
import { DigitalFinance } from './products/DigitalFinance';
import { DataAnalytics } from './products/DataAnalytics';

// Training
import { CareerGrowth } from './training/CareerGrowth';
import { B2BTraining } from './training/B2BTraining';
import { GovernmentPrograms } from './training/GovernmentPrograms';

// Impact
import TalentHub from './impact/TalentHub';
import AIForGood from './impact/AIForGood';

// Legal
import { AccessibilityStatement } from './legal/AccessibilityStatement';
import { PrivacyPolicy } from './legal/PrivacyPolicy';
import { TermsOfService } from './legal/TermsOfService';

function App() {
  return (
    <Router>
      <SEOHead />
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<EnhancedHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />

            {/* Products */}
            <Route path="/products/ai-automation" element={<AIAutomation />} />
            <Route path="/products/blockchain-compliance" element={<BlockchainCompliance />} />
            <Route path="/products/digital-finance" element={<DigitalFinance />} />
            <Route path="/products/data-analytics" element={<DataAnalytics />} />

            {/* Training */}
            <Route path="/training/career-growth" element={<CareerGrowth />} />
            <Route path="/training/b2b" element={<B2BTraining />} />
            <Route path="/training/public-sector" element={<GovernmentPrograms />} />

            {/* Impact */}
            <Route path="/impact/talent-hub" element={<TalentHub />} />
            <Route path="/impact/ai-for-good" element={<AIForGood />} />

            {/* Legal */}
            <Route path="/legal/accessibility-statement" element={<AccessibilityStatement />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
