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
      role: 'Vice Chancellor, Murang\'a University of Technology',
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
      icon: <Heart className="h-8 w-8 text-gold" />,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description')
    },
    {
      icon: <Users className="h-8 w-8 text-blue" />,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: <Target className="h-8 w-8 text-gold-dark" />,
      title: t('about.values.empowerment.title'),
      description: t('about.values.empowerment.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-dark" />,
      title: t('about.values.inclusion.title'),
      description: t('about.values.inclusion.description')
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue" />,
      title: t('about.values.growth.title'),
      description: t('about.values.growth.description')
    }
  ];

  return (
    <div className="pt-20 font-lato">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-400 via-red-500 to-red-700 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-white mb-6 font-playfair">
            {t('about.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('about.hero_text')}
          </p>
        </div>
      </section>

      {/* Founder Statement */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60"
              alt="Paullette Nyaga"
              className="rounded-full shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
              About Our Founder
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Paullette Nyaga is a renowned professional fundraiser with a strong track record of mobilizing resources for pioneering NGOs across East Africa, including Dyslexia Tanzania and grassroots organizations in Kenya and Uganda. Her lifelong dedication to social impact is deeply personal, shaped by her own family's story. Paullette's father was supported through school by Plan International in Embu, while her mother received sponsorship from a donor linked to the Thomas Barnardo Home in Nairobi. This legacy of empowerment through NGO support inspired her passion to give back and create opportunities for others.
              </p>
              <p>
                The spark for The Teens Anchor Initiative (TAI) came from a painful chapter in Paullette's youth. Her closest friend, Diana, was forced to become the sole caretaker of her siblings after both parents were imprisoned over a land dispute. With no safety nets or organizations to turn to, Diana endured isolation, stigma, and economic hardship—relying only on the kindness of friends and strangers. Paullette stepped in to raise funds for her, and through that experience, she discovered a devastating gap: no government programs or NGOs existed to support teenagers left behind by incarceration.
              </p>
              <p>
                LHOPE was born to fill that void. Working hand in hand with government agencies and prison-related organizations, we will identify vulnerable teenagers through official channels and, with consent, provide emotional, social, and economic support tailored to their needs. Our mission is to ensure that no young person is left forgotten or unsupported when their parent's imprisonment threatens to derail their future.
              </p>
              <p>
                Paullette's vision is bold yet simple: to break cycles of stigma and hardship by restoring dignity, opportunity, and hope to teenagers living through one of life's toughest challenges. With the support of donors and partners, LHOPE is committed to building a future where every teenager—no matter their circumstance—has the chance to thrive.
              </p>
            </div>
            <p className="mt-6 text-gray-900 font-bold">Paullette Nyaga</p>
            <p className="text-gray-600">Founder, The Teens Anchor Initiative</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="card">
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 text-gold mr-4" />
              <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('about.mission_title')}</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.mission_text')}</p>
          </div>
          <div className="card">
            <div className="flex items-center mb-6">
              <Heart className="h-10 w-10 text-blue mr-4" />
              <h2 className="text-3xl font-playfair font-bold text-gray-900">{t('about.vision_title')}</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.vision_text')}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-8 font-playfair">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The Teens Anchor Initiative (TAI) was created to address a critical gap in support for teenagers whose primary breadwinners have been incarcerated. Across many communities, these young people face stigma, isolation, and economic hardship—yet there are few, if any, programs designed specifically for their needs.
              </p>
              <p>
                The idea for LHOPE was sparked by the experience of a teenager suddenly left to care for her siblings after both parents were imprisoned over a land dispute. With no safety nets or organizations dedicated to her unique situation, she relied solely on friends and strangers for survival. Her story highlighted a widespread but overlooked challenge: when parents are incarcerated, teenagers are often left vulnerable and unsupported.
              </p>
              <p>
                LHOPE exists to fill that void. By partnering with government agencies and organizations working with prisoners, we identify affected teenagers through official channels and, with consent, provide emotional, social, and economic support. Our approach is designed to restore dignity, opportunity, and hope—ensuring that no young person is forgotten when their parent's imprisonment threatens their future.
              </p>
              <p>
                Today, LHOPE is working to build sustainable, community-driven programs in Kenya and beyond, with one clear mission: to break cycles of stigma and hardship, and to give every teenager the chance to thrive.
              </p>
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
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6 font-playfair">{t('about.values_title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">{t('about.values_text')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6 font-playfair">Meet Our Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">Get to know the dedicated individuals who make LHOPE's mission possible.</p>

          <div className="mb-16">
            <h3 className="text-4xl font-playfair font-light mb-8 text-gray-900">Board of Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((m) => m.representation?.includes('Board of Guarantee') || m.representation?.includes('Executive Management Team'))
                .map((member, index) => (
                  <div key={index} className="card text-center">
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                    <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-blue font-medium mb-2">{member.representation}</p>
                    <p className="text-gray-700 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-playfair font-light mb-8 text-gray-900">Our Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((m) => !m.representation?.includes('Board of Guarantee') && !m.representation?.includes('Executive Management Team'))
                .map((member, index) => (
                  <div key={index} className="card text-center">
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                    <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-gray-700 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-r from-red-400 via-red-500 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">{t('about.impact_title')}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">{t('about.impact_text')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-4 text-gold">500+</div>
              <p className="text-lg">{t('about.impact_teens')}</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4 text-gold">250+</div>
              <p className="text-lg">{t('about.impact_families')}</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4 text-gold">85%</div>
              <p className="text-lg">{t('about.impact_graduation')}</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4 text-gold">95%</div>
              <p className="text-lg">{t('about.impact_positive')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;