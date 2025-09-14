import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Handshake, Gift, Calendar, MapPin, Clock, ArrowRight, DollarSign, Briefcase, BookOpen } from 'lucide-react';
import Logo from '../components/assets/logo.jpg';

const WaysToHelp = () => {
  const { t } = useTranslation();

  const donationOptions = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: t('waysToHelp.donation.monthly.title'),
      description: t('waysToHelp.donation.monthly.description'),
      amounts: ['$25', '$50', '$100', '$250'],
      impact: t('waysToHelp.donation.monthly.impact')
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: t('waysToHelp.donation.onetime.title'),
      description: t('waysToHelp.donation.onetime.description'),
      amounts: ['$50', '$100', '$500', '$1000'],
      impact: t('waysToHelp.donation.onetime.impact')
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      title: t('waysToHelp.donation.inkind.title'),
      description: t('waysToHelp.donation.inkind.description'),
      items: [t('waysToHelp.donation.inkind.items.0'), t('waysToHelp.donation.inkind.items.1'), t('waysToHelp.donation.inkind.items.2'), t('waysToHelp.donation.inkind.items.3')],
      impact: t('waysToHelp.donation.inkind.impact')
    }
  ];

  const volunteerOpportunities = [
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: t('waysToHelp.volunteer.mentorship.title'),
      description: t('waysToHelp.volunteer.mentorship.description'),
      commitment: t('waysToHelp.volunteer.mentorship.commitment'),
      requirements: [t('waysToHelp.volunteer.mentorship.requirements.0'), t('waysToHelp.volunteer.mentorship.requirements.1'), t('waysToHelp.volunteer.mentorship.requirements.2')],
      location: t('waysToHelp.volunteer.mentorship.location')
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
      title: t('waysToHelp.volunteer.tutoring.title'),
      description: t('waysToHelp.volunteer.tutoring.description'),
      commitment: t('waysToHelp.volunteer.tutoring.commitment'),
      requirements: [t('waysToHelp.volunteer.tutoring.requirements.0'), t('waysToHelp.volunteer.tutoring.requirements.1'), t('waysToHelp.volunteer.tutoring.requirements.2')],
      location: t('waysToHelp.volunteer.tutoring.location')
    },
    {
      icon: <Calendar className="h-8 w-8 text-yellow-500" />,
      title: t('waysToHelp.volunteer.event.title'),
      description: t('waysToHelp.volunteer.event.description'),
      commitment: t('waysToHelp.volunteer.event.commitment'),
      requirements: [t('waysToHelp.volunteer.event.requirements.0'), t('waysToHelp.volunteer.event.requirements.1'), t('waysToHelp.volunteer.event.requirements.2')],
      location: t('waysToHelp.volunteer.event.location')
    },
    {
      icon: <Briefcase className="h-8 w-8 text-teal-500" />,
      title: t('waysToHelp.volunteer.professional.title'),
      description: t('waysToHelp.volunteer.professional.description'),
      commitment: t('waysToHelp.volunteer.professional.commitment'),
      requirements: [t('waysToHelp.volunteer.professional.requirements.0'), t('waysToHelp.volunteer.professional.requirements.1'), t('waysToHelp.volunteer.professional.requirements.2')],
      location: t('waysToHelp.volunteer.professional.location')
    }
  ];

  const partnershipTypes = [
    {
      title: t('waysToHelp.partnerships.corporate.title'),
      description: t('waysToHelp.partnerships.corporate.description'),
      benefits: [t('waysToHelp.partnerships.corporate.benefits.0'), t('waysToHelp.partnerships.corporate.benefits.1'), t('waysToHelp.partnerships.corporate.benefits.2')],
      examples: [t('waysToHelp.partnerships.corporate.examples.0'), t('waysToHelp.partnerships.corporate.examples.1'), t('waysToHelp.partnerships.corporate.examples.2')]
    },
    {
      title: t('waysToHelp.partnerships.education.title'),
      description: t('waysToHelp.partnerships.education.description'),
      benefits: [t('waysToHelp.partnerships.education.benefits.0'), t('waysToHelp.partnerships.education.benefits.1'), t('waysToHelp.partnerships.education.benefits.2')],
      examples: [t('waysToHelp.partnerships.education.examples.0'), t('waysToHelp.partnerships.education.examples.1'), t('waysToHelp.partnerships.education.examples.2')]
    },
    {
      title: t('waysToHelp.partnerships.community.title'),
      description: t('waysToHelp.partnerships.community.description'),
      benefits: [t('waysToHelp.partnerships.community.benefits.0'), t('waysToHelp.partnerships.community.benefits.1'), t('waysToHelp.partnerships.community.benefits.2')],
      examples: [t('waysToHelp.partnerships.community.examples.0'), t('waysToHelp.partnerships.community.examples.1'), t('waysToHelp.partnerships.community.examples.2')]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Logo */}
  <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center">
            <img src={Logo} alt="LHOPE Logo" className="mx-auto mb-6 w-40 h-40 object-contain" style={{ background: 'transparent' }} />
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('waysToHelp.hero.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
  <section className="py-20 fade-in-up delay-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">{t('waysToHelp.donation.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('waysToHelp.donation.text')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationOptions.map((option, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  <div className="mr-4 transform hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {option.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>

                {option.amounts && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Suggested Amounts:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {option.amounts.map((amount, amountIndex) => (
                        <button
                          key={amountIndex}
                          className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {option.items && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Needed Items:</h4>
                    <ul className="space-y-1">
                      {option.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-800 font-medium">
                    💡 {option.impact}
                  </p>
                </div>

                <Link to="/donate" className="btn-primary w-full text-center">
                  {option.title === 'In-Kind Donations' ? 'Contact Us' : 'Donate Now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">{t('waysToHelp.volunteer.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('waysToHelp.volunteer.text')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  <div className="mr-4 transform hover:scale-110 transition-transform duration-300">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {opportunity.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="font-medium">Time Commitment:</span>
                    <span className="ml-2">{opportunity.commitment}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-red-500 mr-2" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">{opportunity.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600 text-sm">
                        <ArrowRight className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn-secondary w-full text-center">
                  Apply to Volunteer
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                New to Volunteering?
              </h3>
              <p className="text-yellow-700 mb-4">
                Don't worry! We provide comprehensive training and ongoing support 
                to ensure you feel confident and prepared in your volunteer role.
              </p>
              <Link to="/contact" className="text-yellow-800 font-semibold hover:text-yellow-900">
                Learn More About Our Training Program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">{t('waysToHelp.partnerships.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('waysToHelp.partnerships.text')}
            </p>
          </div>

          <div className="space-y-12">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="card">
                    <div className="flex items-center mb-6">
                      <Handshake className="h-8 w-8 text-blue-600 mr-4" />
                      <h3 className="text-3xl font-bold text-gray-800">
                        {partnership.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {partnership.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {partnership.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <ArrowRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partnership.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact" className="btn-primary">
                      Explore Partnership
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '3184465' : index === 1 ? '5212317' : '7551669'
                    }/pexels-photo-${
                      index === 0 ? '3184465' : index === 1 ? '5212317' : '7551669'
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={partnership.title}
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every form of support - whether financial, volunteer time, or partnership - 
            directly impacts the lives of teenagers who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Donate Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaysToHelp;