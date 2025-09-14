import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Target, Users, Globe, Award, BookOpen } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('about.team.sarah.name'),
      role: t('about.team.sarah.role'),
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('about.team.sarah.bio')
    },
    {
      name: t('about.team.michael.name'),
      role: t('about.team.michael.role'),
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('about.team.michael.bio')
    },
    {
      name: t('about.team.amara.name'),
      role: t('about.team.amara.role'),
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('about.team.amara.bio')
    },
    {
      name: t('about.team.roberto.name'),
      role: t('about.team.roberto.role'),
      image: 'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: t('about.team.roberto.bio')
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

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">{t('about.team_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team_text')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
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