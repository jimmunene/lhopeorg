import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Target, Users, Globe, Award, BookOpen } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Johnson Taylor',
      role: 'Retired Correctional Officer, Oregon State Department of Corrections',
      representation: 'Board of Guarantee Member, United States',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: ''
    },
    {
      name: 'Joy Abigael Kinyanjui',
      role: 'Adolescent Nurse, Washington State',
      representation: 'Board of Guarantee Member, United States',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: ''
    },
    {
      name: 'Jimbrian Munene',
      role: 'ICT Engineer, Ohio State',
      representation: 'Board of Guarantee Member, United States',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: ''
    },
    {
      name: 'Prof. Dickson Nyariki',
      role: 'Vice Chancellor, Murang’a University of Technology',
      representation: 'Board of Guarantee Member, Kenya',
      image: 'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: ''
    },
    {
      name: 'Bishop Samuel Mithika Amuiri',
      role: 'Evangelist, Kajiado County and Retired Security Officer',
      representation: 'Board of Guarantee Member, Kenya',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: ''
    },
    {
      name: 'Rev. Jane Violet Wanjiru',
      role: 'Head of Youth Affairs, Anglican Church of Kenya (ACK), Embu Diocese',
      representation: 'Board of Guarantee Member, Kenya',
      image: 'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: ''
    },
    {
      name: 'Paullette Nyaga',
      role: 'Chief Executive Officer & Chairperson, LHOPE Kenya Projects',
      representation: 'Executive Management Team, Kenya',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified Fundraising Professional.'
    },
    {
      name: 'Eddah Wambui Nyaga',
      role: 'Director & Treasurer',
      representation: 'Executive Management Team, Kenya',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'An NGO Professional. Worked with Japan International Cooperation Agency (JICA) Population Education Promotion Project (PEPP) in Kenya and Compassion International - Kenya.'
    },
    {
      name: 'Jimbrian Munene',
      role: 'Director & Operations, Communication Secretary',
      representation: 'Executive Management Team, Kenya',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Information and Communication Technology Expert.'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description')
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: t('about.values.empowerment.title'),
      description: t('about.values.empowerment.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: t('about.values.inclusion.title'),
      description: t('about.values.inclusion.description')
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
      title: t('about.values.growth.title'),
      description: t('about.values.growth.description')
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('about.hero_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0JTIwYnVzaW5lc3MlMjBsYWR5fGVufDB8fDB8fHww"
              alt="Paullette Nyaga"
              className="rounded-full shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              LHOPE (The Legacy of Hope) Founder’s Statement
            </h2>
            <p className="text-gray-700 mb-4">
              Paullette, a renowned professional fundraiser with a proven track record supporting Dyslexia Tanzania and pioneering NGOs in Kenya and Uganda, brings a lifetime of personal inspiration to The Legacy of Hope. Her commitment is deeply rooted in her own family’s story—her father was supported through school by Plan International in Embu, and her mother received sponsorship from a donor associated with Thomas Barnardo Home in Nairobi. This legacy of empowerment through NGO support shaped Paullette’s passion to give back.
            </p>
            <p className="text-gray-700 mb-4">
              What ignited Paullette’s focused mission to support teenagers whose primary breadwinners have been incarcerated stems from a painful chapter in her youth. Her closest friend, Diana, was forced to suddenly become the family’s sole caretaker after her parents were imprisoned over a land dispute. Alone and burdened with raising two siblings, Diana faced isolation, stigma, and economic hardship, relying solely on the kindness of friends and strangers. Paullette stepped in to fundraise for Diana, witnessing firsthand the devastating gap in support for vulnerable teenagers left behind by incarceration—no government safety nets, no NGOs specializing in their unique needs.
            </p>
            <p className="text-gray-700 mb-4">
              The Legacy of Hope exists to fill that void. We will partner with government agencies and organizations working with prisoners to identify vulnerable teenagers through official channels. With consent and access to incarceration records, LHOPE will provide critical emotional, social, and economic support to these young lives, breaking the cycle of stigma and hardship. Paullette’s vision is clear: no teenager should be left forgotten or unsupported when their parent’s imprisonment threatens to steal their future. Together, with donors and partners, we will restore hope and dignity to those who need it most.
            </p>
            <p className="text-gray-800 font-bold">Paullette Nyaga</p>
            <p className="text-gray-600">Founder LHOPE</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
  <section className="py-20 fade-in-up delay-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="card">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  {t('about.mission_title')}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.mission_text')}
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  {t('about.vision_title')}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.vision_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
  <section className="py-20 bg-custom-cream fade-in-up delay-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-8">{t('about.story_title')}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t('about.story_p1')}</p>
                <p>{t('about.story_p2')}</p>
                <p>{t('about.story_p3')}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community gathering"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">{t('about.values_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values_text')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the dedicated individuals who make LHOPE’s mission possible.
            </p>
          </div>

          {/* Directors Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-center text-gray-800">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) =>
                  member.representation?.includes('Board of Guarantee') ||
                  member.representation?.includes('Executive Management Team')
                )
                .map((member, index) => (
                  <div key={index} className="card text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.representation}
                    </p>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Rest of the Team Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-center text-gray-800">Our Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter(
                  (member) =>
                    !member.representation?.includes('Board of Guarantee') &&
                    !member.representation?.includes('Executive Management Team')
                )
                .map((member, index) => (
                  <div key={index} className="card text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-custom-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t('about.impact_title')}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('about.impact_text')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 text-yellow-300">500+</div>
              <p className="text-lg">{t('about.impact_teens')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 text-yellow-300">250+</div>
              <p className="text-lg">{t('about.impact_families')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 text-yellow-300">85%</div>
              <p className="text-lg">{t('about.impact_graduation')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 text-yellow-300">95%</div>
              <p className="text-lg">{t('about.impact_positive')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;