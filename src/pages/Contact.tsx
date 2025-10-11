import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const schema = yup.object({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    subject: yup.string().max(200, 'Subject must be less than 200 characters'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters').max(5000, 'Message must be less than 5000 characters')
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('loading');
      
      // Add language to the submission
      const submissionData = {
        ...data,
        language: i18n.language
      };

      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: [
        'info@teensanchornitiative.org',
        'programs@teensanchornitiative.org'
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: [
        'US: +1 (419) 315-0132',
        'Kenya: +254 700 123 456'
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: [
        'New York: 123 Hope Street, Suite 100, NY 10001',
        'Nairobi: P.O. Box 12345, Nairobi, Kenya'
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
  <section className="py-20 bg-gradient-to-r from-red-600 to-red-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              We're here to support you and answer any questions about our programs. 
              Reach out to us anytime - we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
  <section className="py-20 fade-in-up delay-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  {t('contact.form_title')}
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                    {t('contact.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                    {t('contact.error')}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.subject')}
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 ${
                        errors.subject ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-300 resize-vertical ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'loading'}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting || submitStatus === 'loading' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t('contact.submit')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're a teen seeking support, a parent looking for resources, 
                  or someone interested in volunteering, we're here to help. Don't hesitate 
                  to reach out - we respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="text-red-600 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Crisis Support
                </h3>
                <p className="text-red-700 text-sm mb-2">
                  If you or someone you know is in crisis and needs immediate support:
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• US: National Suicide Prevention Lifeline: 988</li>
                  <li>• Kenya: Kenya Red Cross: 1199</li>
                  <li>• Emergency services: 911 (US) / 112 (Kenya)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title mb-6">We're Here for You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Teens Anchor Initiative operates with offices and programs in both the United States 
              and Kenya, providing local support with a global perspective. Our doors are 
              always open to teens and families in need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">United States</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">New York Headquarters</p>
                  <p>123 Hope Street, Suite 100</p>
                  <p>New York, NY 10001</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Email: ny@teensanchornitiative.org</p>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Kenya</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">Nairobi Office</p>
                  <p>P.O. Box 12345</p>
                  <p>Nairobi, Kenya</p>
                  <p>Phone: +254 700 123 456</p>
                  <p>Email: kenya@teensanchornitiative.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;