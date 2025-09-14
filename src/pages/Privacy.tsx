import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Globe, Calendar, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-white mb-6">
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
  <section className="py-8 bg-gray-50 border-b fade-in-up delay-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: January 15, 2025
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Version 2.1
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
  <section className="py-16 fade-in-up delay-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Introduction</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Legacy of Hope ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website, use our services, or 
                interact with our organization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This policy applies to all users of our website and services, including teens, families, 
                volunteers, donors, and partners. By using our services, you consent to the data practices 
                described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Program Participation:</strong> Age, school information, family circumstances (for program participants)</li>
                <li><strong>Volunteer Information:</strong> Background check results, skills, availability, references</li>
                <li><strong>Donation Information:</strong> Payment details, donation history, tax information</li>
                <li><strong>Communication Preferences:</strong> Language preferences, newsletter subscriptions</li>
                <li><strong>Support Requests:</strong> Messages sent through contact forms, support tickets</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Website Usage:</strong> Pages visited, time spent, click patterns, referral sources</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                <li><strong>Cookies and Tracking:</strong> Session cookies, preference cookies, analytics cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sensitive Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For program participants, we may collect sensitive information necessary for providing appropriate 
                support services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Information about family incarceration circumstances</li>
                <li>Mental health and counseling needs</li>
                <li>Educational and academic support requirements</li>
                <li>Emergency contact information</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">How We Use Your Information</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Program Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Provide counseling, mentoring, and support services</li>
                <li>Match participants with appropriate mentors and programs</li>
                <li>Track program progress and outcomes</li>
                <li>Coordinate with schools, families, and other support services</li>
                <li>Ensure participant safety and well-being</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Communication</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Respond to inquiries and support requests</li>
                <li>Send program updates and important notifications</li>
                <li>Provide newsletters and impact reports (with consent)</li>
                <li>Coordinate volunteer activities and training</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Operations and Improvement</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Process donations and maintain donor records</li>
                <li>Analyze program effectiveness and outcomes</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">With Your Consent</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We will share your information when you have given us explicit consent to do so, 
                such as when connecting you with partner organizations for additional services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We work with trusted third-party service providers who help us operate our programs and website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Payment Processors:</strong> Stripe for secure donation processing</li>
                <li><strong>Email Services:</strong> For sending newsletters and communications</li>
                <li><strong>Cloud Storage:</strong> For secure data storage and backup</li>
                <li><strong>Analytics:</strong> For website performance and user experience analysis</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may disclose your information when required by law or to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Comply with legal processes, court orders, or government requests</li>
                <li>Report suspected child abuse or neglect (mandatory reporting)</li>
                <li>Protect the safety and well-being of our participants</li>
                <li>Prevent fraud or illegal activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Program Partners</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With appropriate consent, we may share relevant information with schools, healthcare providers, 
                or other organizations involved in supporting our participants' well-being.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-yellow-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Data Security</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We implement comprehensive security measures to protect your personal information:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Safeguards</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure backup and disaster recovery procedures</li>
                <li>Multi-factor authentication for staff access</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Administrative Safeguards</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Staff training on privacy and security practices</li>
                <li>Access controls limiting who can view personal information</li>
                <li>Regular review and updating of security policies</li>
                <li>Background checks for all staff and volunteers</li>
                <li>Confidentiality agreements for all personnel</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Safeguards</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Secure facilities with controlled access</li>
                <li>Locked filing cabinets for physical documents</li>
                <li>Secure disposal of sensitive documents</li>
                <li>Visitor access controls and monitoring</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-indigo-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Your Rights and Choices</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                You have several rights regarding your personal information:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Access and Correction</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Update your contact preferences and information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Communication Preferences</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Opt out of newsletters and marketing communications</li>
                <li>Choose your preferred communication methods</li>
                <li>Update language preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Portability and Deletion</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Request a copy of your personal information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Withdraw consent for certain uses of your information</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-blue-800 mb-2">Important Note for Program Participants</h4>
                <p className="text-blue-700 text-sm">
                  Some information may need to be retained for program continuity, safety reasons, 
                  or legal compliance. We will work with you to address your requests while ensuring 
                  continued support and safety.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-teal-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Cookies and Tracking Technologies</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We use cookies and similar technologies to improve your experience on our website:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                <li><strong>Preference Cookies:</strong> Remember your language and accessibility settings</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted communications (with consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Managing Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control cookies through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Our cookie consent banner and preference center</li>
                <li>Your browser settings and privacy controls</li>
                <li>Third-party opt-out tools for analytics and advertising</li>
              </ul>
            </div>

            {/* International Users */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-orange-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">International Users</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Legacy of Hope operates in both the United States and Kenya. We comply with applicable 
                privacy laws in both jurisdictions:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Transfers</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Information collected in Kenya may be transferred to and processed in the United States, 
                and vice versa. We ensure appropriate safeguards are in place for international data transfers.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Regional Rights</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li><strong>EU/UK Users:</strong> GDPR rights including data portability and erasure</li>
                <li><strong>California Users:</strong> CCPA rights including disclosure and deletion</li>
                <li><strong>Kenya Users:</strong> Data Protection Act rights and protections</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-pink-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Children's Privacy</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Protecting the privacy of minors is especially important to us. Our approach includes:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Parental Consent</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>We obtain parental/guardian consent before collecting information from minors</li>
                <li>Parents can review, modify, or delete their child's information</li>
                <li>We limit collection to information necessary for program services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Special Protections</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Enhanced security measures for minor participants' data</li>
                <li>Strict access controls and staff training</li>
                <li>Age-appropriate privacy notices and communications</li>
                <li>Regular review of data collection and use practices</li>
              </ul>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-gray-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Changes to This Policy</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. When we make changes:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>We will post the updated policy on our website</li>
                <li>We will update the "Last Modified" date</li>
                <li>For significant changes, we will provide additional notice</li>
                <li>We will obtain new consent where required by law</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">Contact Us</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">United States Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Legacy of Hope</p>
                    <p>123 Hope Street, Suite 100</p>
                    <p>New York, NY 10001</p>
                    <p>Email: privacy@legacyofhope.org</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Kenya Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Legacy of Hope Kenya</p>
                    <p>P.O. Box 12345</p>
                    <p>Nairobi, Kenya</p>
                    <p>Email: privacy.kenya@legacyofhope.org</p>
                    <p>Phone: +254 700 123 456</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Data Protection Officer</h4>
                <p className="text-yellow-700 text-sm">
                  For privacy-related inquiries, you can also contact our Data Protection Officer directly 
                  at dpo@legacyofhope.org or through the addresses above.
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