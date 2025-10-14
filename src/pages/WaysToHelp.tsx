import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Handshake, Gift, Calendar, MapPin, Clock, ArrowRight, DollarSign, Briefcase, BookOpen } from 'lucide-react';
import Logo from '../components/assets/logo.jpg';

const WaysToHelp = () => {

  // Sample data
  const donationOptions = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Monthly Donations',
      description: 'Support teenagers every month with your contributions.',
      amounts: ['$25', '$50', '$100', '$250'],
      impact: 'Helps fund mentorship programs and resources for teens.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: 'One-Time Donations',
      description: 'Make a one-time contribution to support our programs.',
      amounts: ['$50', '$100', '$500', '$1000'],
      impact: 'Enables us to organize events and workshops for teens.'
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      title: 'In-Kind Donations',
      description: 'Provide essential items and resources.',
      items: ['Books', 'Stationery', 'Sports equipment', 'Clothing'],
      impact: 'Directly supports the daily needs of teenagers in our programs.'
    }
  ];

  const volunteerOpportunities = [
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Mentorship',
      description: 'Guide teens through mentorship sessions.',
      commitment: '2-4 hours per week',
      requirements: ['Good communication skills', 'Patience', 'Experience with youth'],
      location: 'Nairobi'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
      title: 'Tutoring',
      description: 'Provide academic support to students.',
      commitment: '2 hours per week',
      requirements: ['Subject knowledge', 'Teaching experience', 'Empathy'],
      location: 'Nairobi'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Corporate Partnerships',
      description: 'Collaborate with companies to sponsor events and programs.',
      benefits: ['Brand visibility', 'CSR fulfillment', 'Employee engagement'],
      examples: ['Company A', 'Company B', 'Company C']
    },
    {
      title: 'Education Partnerships',
      description: 'Partner with schools and universities to provide mentorship and training.',
      benefits: ['Community impact', 'Student engagement', 'Shared resources'],
      examples: ['School X', 'University Y', 'College Z']
    },
    {
      title: 'Community Partnerships',
      description: 'Work with local groups to organize workshops and outreach programs.',
      benefits: ['Local impact', 'Networking', 'Skill-sharing'],
      examples: ['Community Group 1', 'NGO 2', 'Youth Org 3']
    }
  ];

  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="py-20 bg-red-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={Logo} alt="LHOPE Logo" className="mx-auto mb-6 w-40 h-40 object-contain" />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Welcome to Teens Anchor Initative, where your support changes lives.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 fade-in-up delay-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Donate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your contribution makes a difference in teens’ lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationOptions.map((option, index) => (
              <div key={index} className="card p-6 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  {option.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                {option.amounts && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Suggested Amounts:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.amounts.map((amt, idx) => (
                        <button key={idx} className="px-3 py-1 border border-gray-300 rounded hover:border-blue-500 hover:text-blue-600">
                          {amt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {option.items && (
                  <ul className="mb-4 space-y-1">
                    {option.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="h-4 w-4 text-green-500 mr-2" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-blue-800 font-medium mb-4">💡 {option.impact}</p>
                <Link to="/donate" className="bg-red-500 hover:bg-red-400 text-black px-6 py-2 rounded font-semibold w-full block text-center">
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
            <h2 className="section-title mb-6">Volunteer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give your time and skills to make a real difference.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((v, idx) => (
              <div key={idx} className="card p-6 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  {v.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{v.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{v.description}</p>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="flex items-center mb-1">
                    <Clock className="h-4 w-4 text-blue-500 mr-2" /> <span className="font-medium">Commitment:</span> {v.commitment}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-red-500 mr-2" /> <span className="font-medium">Location:</span> {v.location}
                  </div>
                </div>
                <ul className="mb-4 space-y-1 text-gray-600 text-sm">
                  {v.requirements.map((req, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-3 w-3 text-green-500 mr-2" /> {req}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded font-semibold w-full block text-center">
                  Apply to Volunteer
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborate with us to create meaningful impact in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((p, idx) => (
              <div key={idx} className="card p-6 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{p.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{p.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-600">
                    {p.benefits.map((b, i) => (
                      <li key={i} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-green-500 mr-2" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.examples.map((ex, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{ex}</span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded font-semibold w-full block text-center">
                  Explore Partnership
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-black opacity-90">
            Every form of support - whether financial, volunteer time, or partnership - 
            directly impacts the lives of teenagers who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-red-500 hover:bg-red-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Donate Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaysToHelp;
