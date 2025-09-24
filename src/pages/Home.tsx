import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Target, ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '500+', label: 'Teens Supported' },
    { number: '50+', label: 'Active Mentors' },
    { number: '10', label: 'Programs' },
    { number: '2', label: 'Countries' }
  ];

  const impactAreas = [
    {
      icon: <Heart className="h-12 w-12 text-teal-500" />,
      title: 'Emotional Support',
      description:
        'Professional counseling and peer support groups to help teens process their experiences and build resilience.',
    },
    {
      icon: <Users className="h-12 w-12 text-yellow-400" />,
      title: 'Community Connection',
      description:
        'Creating safe spaces where teens can connect with others who understand their unique challenges.',
    },
    {
      icon: <Award className="h-12 w-12 text-black" />,
      title: 'Educational Support',
      description:
        'Scholarships, tutoring, and educational resources to ensure academic success despite family challenges.',
    },
    {
      icon: <Target className="h-12 w-12 text-gray-700" />,
      title: 'Future Planning',
      description:
        'Career counseling, college preparation, and life skills training to build bright futures.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center fade-in-up font-[Montserrat]">
        <div
          className="absolute inset-0 bg-teal-400 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/Hero.png")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 sm:px-8">
          <h1 className="text-5xl font-bold mb-8 font-[Playfair_Display] fade-in-up delay-1">
            {t('hero.title')}
          </h1>
          <p className="text-2xl mb-10 font-light leading-relaxed fade-in-up delay-2">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up delay-3">
            <Link
              to="/donate"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('hero.cta_primary')}
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.cta_secondary')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100 fade-in-up delay-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-teal-500 mb-4">
                  {stat.number}
                </div>
                <div className="text-black font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-gray-100 fade-in-up delay-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-[Playfair_Display] font-bold mb-8 text-black">
              How We Make a Difference
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive approach addresses the unique challenges faced by teenagers affected by familial incarceration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {impactAreas.map((area, index) => (
              <div key={index} className="card text-center group">
                <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-black">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-teal-400 text-white fade-in-up delay-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-[Playfair_Display] font-bold mb-8">
                Every Teen Deserves Hope
              </h2>
              <p className="text-xl mb-10 leading-relaxed opacity-90">
                We believe that no teenager should face the challenges of familial incarceration alone. Through our programs, we provide the support, resources, and community connections needed to overcome adversity and build bright futures.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-200 font-semibold text-lg group"
              >
                Learn About Our Mission
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Teens in support group"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">Our Partners</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are proud to collaborate with these amazing organizations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <img src="https://via.placeholder.com/150" alt="Partner 1" className="mx-auto h-20 object-contain" />
            <img src="https://via.placeholder.com/150" alt="Partner 2" className="mx-auto h-20 object-contain" />
            <img src="https://via.placeholder.com/150" alt="Partner 3" className="mx-auto h-20 object-contain" />
            <img
              src="https://images.squarespace-cdn.com/content/v1/67cef673bf83bd38343e0e81/1741819055218-I23PH6AODL6QQ2M6SFFX/10.png?format=500w"
              alt="Project Avary"
              className="mx-auto h-20 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-black text-white fade-in-up delay-4">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 font-[Playfair_Display]">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in supporting teens who need it most. Your contribution can change lives and build stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate Today
            </Link>
            <Link
              to="/help"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Documents Section */}
      <section id="key-documents" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Key Documents
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Access important documents that outline our mission, governance, and operations.
          </p>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {[
                'Articles of Incorporation',
                'Bylaws',
                'Concept Paper',
                'Conflict of Interest Policy',
                'Board of Directors Info',
                'Programs and Services',
                'Contact Information',
                'Donation Info',
                'Meeting Minutes',
                'EIN',
              ].map((doc, i) => (
                <div key={i} className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{doc}</h3>
                  <a href="#" className="text-teal-500 hover:underline">
                    View Document
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
