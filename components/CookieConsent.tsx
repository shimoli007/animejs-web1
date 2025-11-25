import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { X } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => {
        setIsVisible(true);
        // Animate banner entrance
        setTimeout(() => {
          anime({
            targets: '.cookie-banner',
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 800,
            easing: 'easeOutExpo'
          });
        }, 50);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (showPreferences) {
      anime({
        targets: '.cookie-preference-card',
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutExpo'
      });
    }
  }, [showPreferences]);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    // Initialize analytics if accepted
    if (prefs.analytics) {
      // TODO: Initialize Google Analytics or your analytics service
      console.log('Analytics enabled');
    }

    // Initialize marketing if accepted
    if (prefs.marketing) {
      // TODO: Initialize marketing pixels/tags
      console.log('Marketing cookies enabled');
    }

    // Animate banner exit
    anime({
      targets: '.cookie-banner',
      opacity: [1, 0],
      translateY: [0, 100],
      duration: 600,
      easing: 'easeInExpo',
      complete: () => setIsVisible(false)
    });
  };

  const handleClose = () => {
    anime({
      targets: '.cookie-banner',
      opacity: [1, 0],
      translateY: [0, 100],
      duration: 600,
      easing: 'easeInExpo',
      complete: () => setIsVisible(false)
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="cookie-banner fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 opacity-0"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card border-glass p-6 md:p-8 rounded-2xl shadow-glow-lg relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-cyber rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-neon rounded-full filter blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-grow">
                <h2 id="cookie-consent-title" className="font-mono text-2xl font-bold text-primary mb-3">
                  Cookie Settings
                </h2>
                <p id="cookie-consent-description" className="text-sm text-secondary leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                  <Link to="/legal/privacy-policy" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-secondary hover:text-primary p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!showPreferences ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-gradient-cyber text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="px-6 py-3 glass-card border-glass text-primary font-mono font-bold rounded-lg hover:border-cyber-blue transition-all duration-300"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowPreferences(!showPreferences)}
                  className="px-6 py-3 glass-card border-glass text-primary font-mono font-bold rounded-lg hover:border-electric-violet transition-all duration-300"
                >
                  Customize Settings
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {/* Necessary Cookies */}
                  <div className="cookie-preference-card glass-card border-glass border-l-4 border-l-emerald-500 p-6 rounded-xl bg-emerald-500 bg-opacity-5 opacity-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow">
                        <h3 className="font-mono font-bold text-primary mb-2">Necessary</h3>
                        <p className="text-xs text-secondary leading-relaxed">
                          Essential for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="mt-1 w-5 h-5 rounded cursor-not-allowed opacity-50"
                        aria-label="Necessary cookies (always enabled)"
                      />
                    </div>
                    <p className="text-xs text-secondary mt-3 leading-relaxed">
                      Session management, security, accessibility features.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="cookie-preference-card glass-card border-glass border-l-4 border-l-cyber-blue p-6 rounded-xl bg-cyber-blue bg-opacity-5 opacity-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow">
                        <h3 className="font-mono font-bold text-primary mb-2">Analytics</h3>
                        <p className="text-xs text-secondary leading-relaxed">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="mt-1 w-5 h-5 rounded cursor-pointer accent-cyber-blue"
                        aria-label="Enable analytics cookies"
                      />
                    </div>
                    <p className="text-xs text-secondary mt-3 leading-relaxed">
                      Google Analytics, page views, user behavior analysis.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="cookie-preference-card glass-card border-glass border-l-4 border-l-electric-violet p-6 rounded-xl bg-electric-violet bg-opacity-5 opacity-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow">
                        <h3 className="font-mono font-bold text-primary mb-2">Marketing</h3>
                        <p className="text-xs text-secondary leading-relaxed">
                          Used to deliver personalized advertisements.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="mt-1 w-5 h-5 rounded cursor-pointer accent-electric-violet"
                        aria-label="Enable marketing cookies"
                      />
                    </div>
                    <p className="text-xs text-secondary mt-3 leading-relaxed">
                      Advertising networks, remarketing, conversion tracking.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-gradient-cyber text-white font-mono font-bold rounded-lg hover:shadow-glow-md transition-all duration-300"
                  >
                    Save My Preferences
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-3 glass-card border-glass text-primary font-mono font-bold rounded-lg hover:border-cyber-blue transition-all duration-300"
                  >
                    Back
                  </button>
                </div>

                <p className="text-xs text-secondary leading-relaxed">
                  You can change your cookie preferences at any time by visiting our{' '}
                  <Link to="/legal/privacy-policy#cookies" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                    Cookie Policy
                  </Link>
                  . For more information about how we process your data, see our{' '}
                  <Link to="/legal/privacy-policy" className="text-cyber-blue underline hover:text-electric-violet transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
