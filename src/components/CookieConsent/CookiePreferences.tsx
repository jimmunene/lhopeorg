import React from 'react';
import { X, Shield, BarChart3, Target, Cog, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieSettings {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookiePreferencesProps {
  settings: CookieSettings;
  onSettingsChange: (settings: CookieSettings) => void;
  onAccept: () => void;
  onClose: () => void;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({
  settings,
  onSettingsChange,
  onAccept,
  onClose
}) => {
  const handleToggle = (category: keyof CookieSettings) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    onSettingsChange({
      ...settings,
      [category]: !settings[category]
    });
  };

  const cookieCategories = [
    {
      id: 'essential' as keyof CookieSettings,
      title: 'Essential Cookies',
      icon: <Shield className="h-6 w-6 text-green-600" />,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      details: [
        'Session management and user authentication',
        'Security features and fraud prevention',
        'Basic website functionality and navigation',
        'Accessibility features and language preferences'
      ],
      dataCollected: [
        'Session identifiers',
        'Security tokens',
        'Language preferences',
        'Accessibility settings'
      ]
    },
    {
      id: 'functional' as keyof CookieSettings,
      title: 'Functional Cookies',
      icon: <Cog className="h-6 w-6 text-blue-600" />,
      description: 'These cookies enable enhanced functionality and personalization features.',
      required: false,
      details: [
        'Remember your preferences and settings',
        'Provide enhanced features like live chat',
        'Store form data to prevent loss',
        'Enable social media integration'
      ],
      dataCollected: [
        'User preferences and settings',
        'Form data and progress',
        'Chat session information',
        'Social media interaction data'
      ]
    },
    {
      id: 'analytics' as keyof CookieSettings,
      title: 'Analytics Cookies',
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      details: [
        'Track website usage and performance',
        'Understand user behavior and preferences',
        'Identify popular content and features',
        'Improve website design and functionality'
      ],
      dataCollected: [
        'Page views and session duration',
        'Click patterns and navigation paths',
        'Device and browser information',
        'Geographic location (general)'
      ]
    },
    {
      id: 'marketing' as keyof CookieSettings,
      title: 'Marketing Cookies',
      icon: <Target className="h-6 w-6 text-orange-600" />,
      description: 'These cookies are used to deliver relevant content and track campaign effectiveness.',
      required: false,
      details: [
        'Show relevant content and updates',
        'Track donation campaign effectiveness',
        'Provide personalized volunteer opportunities',
        'Measure social media engagement'
      ],
      dataCollected: [
        'Interaction with marketing content',
        'Campaign source and effectiveness',
        'Social media engagement',
        'Content preferences and interests'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Cookie Preferences</h2>
              <p className="text-gray-600 mt-1">
                Manage how we use cookies to improve your experience and support our mission.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              aria-label="Close preferences"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto p-6">
            <div className="space-y-6">
              {cookieCategories.map((category) => (
                <div key={category.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {category.required ? (
                        <div className="flex items-center text-green-600 text-sm font-medium">
                          <Check className="h-4 w-4 mr-1" />
                          Required
                        </div>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings[category.id]}
                            onChange={() => handleToggle(category.id)}
                            className="sr-only"
                          />
                          <div className={`w-11 h-6 rounded-full transition-colors duration-300 ${
                            settings[category.id] ? 'bg-blue-600' : 'bg-gray-300'
                          }`}>
                            <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                              settings[category.id] ? 'translate-x-6' : 'translate-x-1'
                            } mt-1`}></div>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">What this enables:</h4>
                      <ul className="space-y-1 text-gray-600">
                        {category.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Data collected:</h4>
                      <ul className="space-y-1 text-gray-600">
                        {category.dataCollected.map((data, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {data}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <h4 className="font-medium text-blue-800 mb-1">Your Privacy Matters</h4>
                  <p className="text-blue-700 mb-2">
                    We are committed to protecting your privacy and using data responsibly to support 
                    teenagers affected by familial incarceration. All data collection serves our mission 
                    and helps us improve our services.
                  </p>
                  <p className="text-blue-700">
                    You can change these preferences at any time by clicking the cookie settings 
                    link in our footer. For more information, read our{' '}
                    <Link to="/privacy" className="underline hover:no-underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-600 mb-4 sm:mb-0">
              <p>
                <strong>Essential cookies:</strong> Always active • 
                <strong> Optional cookies:</strong> {
                  Object.entries(settings).filter(([key, value]) => key !== 'essential' && value).length
                } of 3 enabled
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={onAccept}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center"
              >
                <Check className="h-4 w-4 mr-2" />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;