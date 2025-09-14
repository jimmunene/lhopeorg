import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Lightbulb, Globe, ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: t('programs.social_work'),
      description: t('programs.social_work_desc'),
      features: [
        'Individual counseling sessions',
        'Family therapy support',
        'Crisis intervention',
        'Trauma-informed care',
        'Mental health resources'
      ],
      image: 'https://images.pexels.com/photos/7551607/pexels-photo-7551607.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: 'Monday - Friday, 9 AM - 5 PM',
      location: 'Available in US & Kenya'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: t('programs.mentoring'),
      description: t('programs.mentoring_desc'),
      features: [
        'One-on-one mentorship',
        'Group mentoring sessions',
        'Career guidance',
        'Life skills development',
        'Peer support networks'
      ],
      image: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: 'Flexible scheduling',
      location: 'In-person & Virtual'
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-yellow-500" />,
      title: t('programs.empowerment'),
      description: t('programs.empowerment_desc'),
      features: [
        'Leadership workshops',
        'Confidence building',
        'Public speaking training',
        'Goal setting sessions',
        'Personal development'
      ],
      image: 'https://images.pexels.com/photos/7551669/pexels-photo-7551669.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: 'Weekends & Evenings',
      location: 'Community Centers'
    },
    {
      icon: <Globe className="h-12 w-12 text-green-500" />,
      title: t('programs.community'),
      description: t('programs.community_desc'),
      features: [
        'Support groups',
        'Cultural events',
        'Community service projects',
        'Family reunification support',
        'Advocacy training'
      ],
      image: 'https://images.pexels.com/photos/6646862/pexels-photo-6646862.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: 'Monthly events',
      location: 'Various locations'
    }
  ];

  const outcomes = [
    { stat: '89%', label: 'Report improved emotional wellbeing' },
    { stat: '92%', label: 'Show increased academic performance' },
    { stat: '85%', label: 'Develop stronger family relationships' },
    { stat: '94%', label: 'Feel more hopeful about their future' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
  <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6">
              {t('programs.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Our comprehensive programs are designed to address the unique challenges 
              faced by teenagers affected by familial incarceration. Each program is 
              trauma-informed and culturally responsive.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
  <section className="py-20 fade-in-up delay-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="card">
                    <div className="flex items-center mb-6">
                      <div className="mr-4 transform hover:scale-110 transition-transform duration-300">
                        {program.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {program.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                          Program Features:
                        </h3>
                        <ul className="space-y-2">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <ArrowRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-blue-500 mr-2" />
                          {program.schedule}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-red-500 mr-2" />
                          {program.location}
                        </div>
                      </div>

                      <Link 
                        to="/contact"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
                      >
                        Learn More About This Program
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Program Outcomes</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our data-driven approach ensures that we're making a real difference 
              in the lives of the teens we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-4 text-yellow-300">
                  {outcome.stat}
                </div>
                <p className="text-lg leading-tight">
                  {outcome.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-custom-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">How to Join Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is easy. We'll work with you to find the right program 
              match based on your needs and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Contact Us</h3>
              <p className="text-gray-600">
                Reach out via phone, email, or our contact form to schedule 
                an initial conversation.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Assessment</h3>
              <p className="text-gray-600">
                We'll work together to understand your needs and identify 
                the best program fit.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Get Started</h3>
              <p className="text-gray-600">
                Begin your journey with our supportive community and 
                dedicated staff.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;