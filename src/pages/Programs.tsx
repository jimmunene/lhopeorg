import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Lightbulb, Globe, ArrowRight, Clock, MapPin, Phone, BookOpen } from 'lucide-react';

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: <Heart className="h-12 w-12 text-[#FFD700]" />,
      title: t('programs.social_work'),
      description: t('programs.social_work_desc'),
      features: [
        'Individual counseling sessions',
        'Family therapy support (including reintegration support)',
        'Crisis intervention',
        'Trauma-informed care',
        'Mental health resources',
        'Reintegration support services'
      ],
      image: 'https://images.pexels.com/photos/7551607/pexels-photo-7551607.jpeg?auto=compress&cs=tinysrgb&w=800',
      schedule: 'Monday - Friday, 9 AM - 5 PM',
      location: 'Available in US & Kenya'
    },
    {
      icon: <Users className="h-12 w-12 text-[#FFD700]" />,
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
      icon: <Lightbulb className="h-12 w-12 text-[#FFD700]" />,
      title: t('Empowerment Programs'),
      description: t('programs.empowerment_desc'),
      features: [
        'Leadership workshops',
        'Confidence building',
        'Vocational training (e.g., tailoring, IT, mechanics)',
        'Financial literacy workshops',
        'Internship & job placement programs',
        'Small business/startup grants for youth initiatives',
        'Goal setting sessions',
        'Personal development'
      ],
      image: 'https://images.pexels.com/photos/175760/pexels-photo-175760.jpeg',
      schedule: 'Weekends & Evenings',
      location: 'Community Centers'
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#FFD700]" />,
      title: t('Educational Programs'),
      description: t('programs.educational_desc'),
      features: [
        'Tutoring & homework help',
        'Literacy and numeracy support',
        'Scholarships & school fee assistance',
        'Digital learning tools access',
        'Exam preparation workshops'
      ],
      image: 'https://images.pexels.com/photos/11025058/pexels-photo-11025058.jpeg',
      schedule: 'After school & Weekends',
      location: 'Schools & Learning Centers'
    },
    {
      icon: <Globe className="h-12 w-12 text-[#FFD700]" />,
      title: t('Community programs'),
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
      <section className="py-20 bg-red-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6">{t('programs.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Our comprehensive programs are designed to address the unique challenges 
              faced by teenagers affected by familial incarceration. Each program is 
              trauma-informed and culturally responsive.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 fade-in-up delay-1 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="card bg-[#111111] p-8 rounded-xl shadow-xl">
                    <div className="flex items-center mb-6">
                      <div className="mr-4 transform hover:scale-110 transition-transform duration-300">
                        {program.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-[#FFD700]">{program.title}</h2>
                    </div>
                    <p className="text-lg text-white mb-8 leading-relaxed">{program.description}</p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Program Features:</h3>
                        <ul className="space-y-2">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-white">
                              <ArrowRight className="h-4 w-4 text-[#FFD700] mr-2 flex-shrink-0 mt-1" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-blue-400 mr-2" />
                          {program.schedule}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-[#FFD700] mr-2" />
                          {program.location}
                        </div>
                      </div>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center text-blue-400 hover:text-[#FFD700] font-semibold group mt-4"
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
      <section className="py-20 bg-[#FFD700] text-black">
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
                <div className="text-5xl font-bold mb-4 text-black">{outcome.stat}</div>
                <p className="text-lg leading-tight">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6 text-[#FFD700]">How to Join Our Programs</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Getting started is easy. We'll work with you to find the right program 
              match based on your needs and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center bg-[#111111] p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">1. Contact Us</h3>
              <p className="text-white">Reach out via phone, email, or our contact form to schedule an initial conversation.</p>
            </div>
            <div className="card text-center bg-[#111111] p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">2. Assessment</h3>
              <p className="text-white">We'll work together to understand your needs and identify the best program fit.</p>
            </div>
            <div className="card text-center bg-[#111111] p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">3. Get Started</h3>
              <p className="text-white">Begin your journey with our supportive community and dedicated staff.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block px-8 py-4 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition">
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
