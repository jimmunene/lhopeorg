import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData: FAQItem[] = [
    {
      id: '1',
      category: 'general',
      question: 'What is Legacy of Hope?',
      answer: 'Legacy of Hope is a nonprofit organization dedicated to supporting teenagers whose lives have been affected by the incarceration of family members. We provide comprehensive support through social work services, mentoring programs, empowerment initiatives, and community engagement activities.'
    },
    {
      id: '2',
      category: 'general',
      question: 'Who can benefit from your programs?',
      answer: 'Our programs are designed for teenagers (ages 13-18) who have been affected by familial incarceration. This includes teens whose parents, siblings, or other close family members are currently incarcerated or have been incarcerated in the past. We welcome teens from all backgrounds and circumstances.'
    },
    {
      id: '3',
      category: 'programs',
      question: 'What types of programs do you offer?',
      answer: 'We offer four main program areas: Social Work Support (individual and family counseling), Mentoring (one-on-one and group mentorship), Empowerment Initiatives (leadership and life skills development), and Community Engagement (support groups and cultural events). Each program is trauma-informed and culturally responsive.'
    },
    {
      id: '4',
      category: 'programs',
      question: 'How do I enroll my teen in your programs?',
      answer: 'Getting started is easy! Contact us through our website, phone, or email to schedule an initial conversation. We\'ll work together to understand your teen\'s needs and identify the best program fit. All our services are confidential and provided at no cost to families.'
    },
    {
      id: '5',
      category: 'programs',
      question: 'Are your services free?',
      answer: 'Yes, all of our programs and services are provided free of charge to teens and families. We believe that financial barriers should never prevent someone from accessing the support they need.'
    },
    {
      id: '6',
      category: 'volunteer',
      question: 'How can I become a volunteer?',
      answer: 'We welcome volunteers in various capacities including mentoring, tutoring, event support, and professional services. To get started, contact us through our website or attend one of our volunteer information sessions. All volunteers must complete a background check and training program.'
    },
    {
      id: '7',
      category: 'volunteer',
      question: 'What training do volunteers receive?',
      answer: 'All volunteers receive comprehensive training that includes trauma-informed care, cultural sensitivity, confidentiality requirements, and role-specific skills. We also provide ongoing support and professional development opportunities throughout your volunteer experience.'
    },
    {
      id: '8',
      category: 'volunteer',
      question: 'What is the time commitment for volunteers?',
      answer: 'Time commitments vary by role. Mentors typically commit to 2-3 hours per week for at least 6 months. Tutors usually volunteer 1-2 hours per week. Event volunteers can participate on a flexible, as-needed basis. We work with each volunteer to find a schedule that works for them.'
    },
    {
      id: '9',
      category: 'support',
      question: 'Do you provide crisis support?',
      answer: 'While we provide ongoing emotional support through our programs, we are not a crisis intervention service. If you or someone you know is in immediate danger, please call emergency services (911 in the US, 112 in Kenya) or contact a crisis hotline such as the National Suicide Prevention Lifeline (988) or Kenya Red Cross (1199).'
    },
    {
      id: '10',
      category: 'support',
      question: 'How do you maintain confidentiality?',
      answer: 'We take confidentiality very seriously. All staff and volunteers are trained in confidentiality requirements and sign confidentiality agreements. We only share information when required by law (such as mandatory reporting of abuse) or with explicit written consent from participants and their guardians.'
    },
    {
      id: '11',
      category: 'locations',
      question: 'Where are you located?',
      answer: 'We have offices in both the United States and Kenya. Our US headquarters is in New York, and our Kenya office is in Nairobi. We also provide virtual services and work with community partners to extend our reach to teens who cannot access our physical locations.'
    },
    {
      id: '12',
      category: 'locations',
      question: 'Do you provide services in languages other than English?',
      answer: 'Yes! We provide services in multiple languages including English, Deutsch (German), Español (Spanish), Français (French), and Kiswahili (Swahili). Our multilingual staff and volunteers ensure that language is never a barrier to accessing our services.'
    },
    {
      id: '13',
      category: 'donation',
      question: 'How can I make a donation?',
      answer: 'You can make a donation through our secure online donation portal, by mailing a check to our office, or by contacting us to discuss other giving options. We accept one-time donations, monthly recurring gifts, and in-kind donations of goods and services.'
    },
    {
      id: '14',
      category: 'donation',
      question: 'Are donations tax-deductible?',
      answer: 'Yes, Legacy of Hope is a registered 501(c)(3) nonprofit organization in the United States. All donations are tax-deductible to the full extent allowed by law. You will receive a tax receipt for your records after making a donation.'
    },
    {
      id: '15',
      category: 'donation',
      question: 'How is my donation used?',
      answer: 'Your donation directly supports our programs and services for teens and families. Approximately 85% of donations go directly to program costs, with the remainder supporting essential administrative and fundraising activities. We publish an annual report detailing our financial transparency and impact.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General Information' },
    { id: 'programs', name: 'Programs & Services' },
    { id: 'volunteer', name: 'Volunteering' },
    { id: 'support', name: 'Support & Safety' },
    { id: 'locations', name: 'Locations & Languages' },
    { id: 'donation', name: 'Donations & Funding' }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
<section className="py-20 bg-gradient-to-r from-yellow-400 via-warm-gold to-yellow-600 text-white fade-in-up">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6">
              {t('nav.faq')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Find answers to common questions about our programs, services, and how 
              Legacy of Hope supports teenagers affected by familial incarceration.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
  <section className="py-12 fade-in-up delay-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No questions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset rounded-lg"
                    aria-expanded={openItems.includes(item.id)}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-lg font-semibold text-gray-800 pr-4">
                      {item.question}
                    </span>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-6 pb-4 text-gray-600 leading-relaxed"
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-custom-cream">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-yellow-600 mb-8">
            Can't find the answer you're looking for? Our team is here to help. 
            Reach out to us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@legacyofhope.org"
              className="btn-secondary"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Need Immediate Help?
            </h3>
            <p className="text-red-700 mb-6">
              If you or someone you know is in crisis and needs immediate support, 
              please don't wait - reach out for help right away.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">United States</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Crisis Text Line: Text HOME to 741741</li>
                  <li>• National Suicide Prevention Lifeline: 988</li>
                  <li>• Emergency Services: 911</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Kenya</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Kenya Red Cross: 1199</li>
                  <li>• Befrienders Kenya: +254 722 178 177</li>
                  <li>• Emergency Services: 112</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;