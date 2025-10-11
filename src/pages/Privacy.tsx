import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Globe, Calendar, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20 font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6 font-serif">
              Privacy Policy & Data Protection
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Your privacy and the protection of your personal information is fundamental to our mission. 
              This policy explains how we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-neutral-100 border-b fade-in-up delay-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-soft-teal" />
              Last updated: January 15, 2025
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-soft-teal" />
              Version 2.1
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 fade-in-up delay-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Example Section (Introduction) */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-soft-teal mr-4" />
                <h2 className="text-3xl font-bold text-black m-0 font-serif">Introduction</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Teens Anchor Initiative
 ("we," "our," or "us") is committed to protecting your privacy...
              </p>
            </div>

            {/* Example: Data Security Section */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-soft-teal mr-4" />
                <h2 className="text-3xl font-bold text-black m-0 font-serif">Data Security</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We implement comprehensive security measures to protect your personal information...
              </p>
            </div>

            {/* Example: Contact Section */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-soft-teal mr-4" />
                <h2 className="text-3xl font-bold text-black m-0 font-serif">Contact Us</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-neutral-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-black mb-3">United States Office</h3>
                  <p className="text-neutral-600">123 Hope Street, Suite 100</p>
                </div>
                <div className="bg-neutral-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-black mb-3">Kenya Office</h3>
                  <p className="text-neutral-600">P.O. Box 12345, Nairobi</p>
                </div>
              </div>

              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-black mb-2">Data Protection Officer</h4>
                <p className="text-neutral-700 text-sm">
                  For privacy-related inquiries, contact our DPO at dpo@legacyofhope.org
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
