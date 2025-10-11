import React, { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check, Info } from 'lucide-react';
import CookiePreferences from './CookiePreferences';

interface CookieSettings {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedSettings = JSON.parse(consent);
      setSettings(savedSettings);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setSettings(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    
    // Initialize analytics and marketing tools here
    initializeOptionalCookies(allAccepted);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(settings));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowPreferences(false);
    
    // Initialize only selected tools
    initializeOptionalCookies(settings);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setSettings(essentialOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const initializeOptionalCookies = (cookieSettings: CookieSettings) => {
    // Initialize Google Analytics
    if (cookieSettings.analytics) {
      // gtag('consent', 'update', { analytics_storage: 'granted' });
      console.log('Analytics cookies enabled');
    }
    
    // Initialize marketing tools
    if (cookieSettings.marketing) {
      // Initialize marketing pixels, etc.
      console.log('Marketing cookies enabled');
    }
    
    // Initialize functional cookies
    if (cookieSettings.functional) {
      // Initialize chat widgets, preference storage, etc.
      console.log('Functional cookies enabled');
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <Cookie className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your experience, analyze site usage, and support our mission 
                  of helping teenagers affected by familial incarceration. You can customize your preferences 
                  or accept all cookies to continue.
                </p>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mt-2"
                >
                  <Info className="h-4 w-4 mr-1" />
                  Learn more about our data practices
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-blue-600 hover:text-blue-800 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-sm font-medium flex items-center justify-center"
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
              >
                <Check className="h-4 w-4 mr-2" />
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <CookiePreferences
          settings={settings}
          onSettingsChange={setSettings}
          onAccept={handleAcceptSelected}
          onClose={() => setShowPreferences(false)}
        />
      )}
    </>
  );
};

export default CookieConsent;