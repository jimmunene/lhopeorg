import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heart, CreditCard, Shield, Users, BookOpen, Home, Utensils, Calendar, Check } from 'lucide-react';

interface DonationFormData {
  amount?: string;
  customAmount?: string;
  frequency?: 'monthly' | 'onetime';
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  anonymous?: boolean;
  newsletter?: boolean;
}

const Donate = () => {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const schema = yup.object({
    amount: yup.string().required('Please select or enter an amount'),
    customAmount: yup.string().when('amount', {
      is: (amount: string) => amount === 'custom',
      then: (schema) => schema.required('Please enter a custom amount').matches(/^\d+(\.\d{1,2})?$/, 'Please enter a valid amount'),
      otherwise: (schema) => schema.notRequired()
    }),
    frequency: yup.string().oneOf(['monthly', 'onetime']).required(),
    firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters'),
    lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    phone: yup.string().matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number').optional(),
    anonymous: yup.boolean(),
    newsletter: yup.boolean()
  });

  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<DonationFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      frequency: 'monthly',
      anonymous: false,
      newsletter: true
    }
  });

  const watchedFrequency = watch('frequency') || 'monthly';
  const watchedAmount = watch('amount') || '';
  const watchedCustomAmount = watch('customAmount') || '';

  const predefinedAmounts = {
    monthly: ['25', '50', '100', '250'],
    onetime: ['50', '100', '500', '1000']
  };

  const impactExamples = {
    '25': 'Provides school supplies for one teen for a month',
    '50': 'Funds one counseling session with a professional therapist',
    '100': 'Supports one teen in our mentorship program for a month',
    '250': 'Covers transportation costs for family visits for 5 teens',
    '500': 'Funds a complete empowerment workshop for 20 teens',
    '1000': 'Supports our community engagement programs for a month'
  };

  const handleAmountSelect = (amount: string) => {
    if (amount === 'custom') {
      setShowCustomAmount(true);
      setSelectedAmount('custom');
      setValue('amount', 'custom');
    } else {
      setShowCustomAmount(false);
      setSelectedAmount(amount);
      setValue('amount', amount);
      setValue('customAmount', '');
    }
  };

  const onSubmit = async (data: DonationFormData) => {
    try {
      setIsProcessing(true);
      const donationAmount = (data.amount === 'custom' ? data.customAmount : data.amount) || '0';
      // Create Stripe checkout session
      const response = await fetch('/api/v1/donate/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(donationAmount) * 100, // Convert to cents
          currency: 'usd',
          frequency: data.frequency || 'monthly',
          donorInfo: {
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            phone: data.phone || '',
            anonymous: data.anonymous || false,
            newsletter: data.newsletter || false
          }
        }),
      });

      if (response.ok) {
        const { sessionId } = await response.json();
        // Redirect to Stripe Checkout
        // In a real implementation, you would use Stripe.js here
        console.log('Redirecting to Stripe Checkout with session:', sessionId);
        // For demo purposes, show success message
        alert('Donation processing initiated! In a real implementation, you would be redirected to Stripe Checkout.');
      } else {
        throw new Error('Failed to create donation session');
      }
    } catch (error) {
      console.error('Donation error:', error);
      alert('There was an error processing your donation. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const getCurrentAmount = () => {
    if (watchedAmount === 'custom') {
      return watchedCustomAmount || '0';
    }
    return watchedAmount || '0';
  };

  const getCurrentImpact = () => {
    const amount = getCurrentAmount();
    return impactExamples[amount as keyof typeof impactExamples] || 'Your donation makes a meaningful difference in teens\' lives';
  };

  return (
    <div className="pt-20">
      {/* Hero Section (no image, black text) */}
  <section className="py-20 bg-transparent fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title text-black mb-6 fade-in-up delay-1">
              {t('donate.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 text-black fade-in-up delay-2">
              {t('donate.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
  <section className="py-20 fade-in-up delay-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Frequency Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Donation Frequency
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`cursor-pointer p-4 border-2 rounded-lg transition-colors duration-300 ${
                      watchedFrequency === 'monthly' ? 'border-yellow-500 bg-Teal-50' : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        {...register('frequency')}
                        type="radio"
                        value="monthly"
                        className="sr-only"
                      />
                      <div className="text-center">
                        <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                        <div className="font-semibold">{t('donate.monthly')}</div>
                        <div className="text-sm text-gray-600">Ongoing support</div>
                      </div>
                    </label>
                    
                    <label className={`cursor-pointer p-4 border-2 rounded-lg transition-colors duration-300 ${
                      watchedFrequency === 'onetime' ? 'border-yellow-500 bg-Teal-50' : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        {...register('frequency')}
                        type="radio"
                        value="onetime"
                        className="sr-only"
                      />
                      <div className="text-center">
                        <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
                        <div className="font-semibold">{t('donate.onetime')}</div>
                        <div className="text-sm text-gray-600">Single donation</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('donate.amount')}
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {predefinedAmounts[watchedFrequency].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-3 border-2 rounded-lg font-semibold transition-colors duration-300 ${
                          selectedAmount === amount
                            ? 'border-yellow-500 bg-Teal-50 text-yellow-700'
                            : 'border-gray-300 hover:border-gray-400 text-gray-700'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAmountSelect('custom')}
                    className={`w-full p-3 border-2 rounded-lg font-semibold transition-colors duration-300 ${
                      selectedAmount === 'custom'
                        ? 'border-Teal-500 bg-Teal-50 text-yellow-600'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    {t('donate.custom')}
                  </button>

                  {showCustomAmount && (
                    <div className="mt-4">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          {...register('customAmount')}
                          type="number"
                          min="1"
                          step="0.01"
                          placeholder="0.00"
                          className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                            errors.customAmount ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      {errors.customAmount && (
                        <p className="mt-1 text-sm text-red-600">{errors.customAmount.message}</p>
                      )}
                    </div>
                  )}

                  {(errors.amount || errors.customAmount) && !showCustomAmount && (
                    <p className="mt-1 text-sm text-red-600">Please select an amount</p>
                  )}
                </div>


                {/* Donor Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('donate.donor_info')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        {...register('firstName')}
                        type="text"
                        id="firstName"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                          errors.firstName ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        {...register('lastName')}
                        type="text"
                        id="lastName"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                          errors.lastName ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Card Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Card Information (Test Mode)</h3>
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Teal-500 focus:border-Teal-500"
                      pattern="^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$"
                      maxLength={19}
                      autoComplete="cc-number"
                      inputMode="numeric"
                    />
                    <span className="text-xs text-gray-500">Visa or Mastercard only. Use test card numbers.</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Teal-500 focus:border-Teal-500"
                        maxLength={5}
                        autoComplete="cc-exp"
                        inputMode="numeric"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Teal-500 focus:border-Teal-500"
                        maxLength={4}
                        autoComplete="cc-csc"
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 block mt-2">This is a test checkout. No real payment will be processed.</span>
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      {...register('anonymous')}
                      type="checkbox"
                      className="rounded border-gray-300 text-Teal-600 focus:ring-Teal-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Make this donation anonymous
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      {...register('newsletter')}
                      type="checkbox"
                      className="rounded border-gray-300 text-Teal-600 focus:ring-Teal-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Subscribe to our newsletter for updates on our impact
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isProcessing}
                  className="w-full btn-primary flex items-center justify-center text-lg py-4"
                >
                  {isSubmitting || isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5 mr-2" />
                      {t('donate.donate_button')}
                    </>
                  )}
                </button>

                {/* Security Notice */}
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure payment processing powered by Stripe
                </div>
              </form>
            </div>

            {/* Impact Summary */}
            <div className="space-y-8">
              {/* Current Impact */}
              <div className="card bg-Teal-50 border-Teal-200">
                <h3 className="text-2xl font-bold text-Teal-800 mb-4">
                  Your Impact: ${getCurrentAmount()}
                  {watchedFrequency === 'monthly' && <span className="text-lg font-normal">/month</span>}
                </h3>
                <p className="text-Teal-700 text-lg leading-relaxed">
                  {getCurrentImpact()}
                </p>
              </div>

              {/* Impact Examples */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  How Your Donation Helps
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Educational Support</h4>
                      <p className="text-gray-600 text-sm">Tutoring, school supplies, and scholarship programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-Teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Mentorship Programs</h4>
                      <p className="text-gray-600 text-sm">One-on-one guidance and peer support groups</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Counseling Services</h4>
                      <p className="text-gray-600 text-sm">Professional therapy and emotional support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Home className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Family Support</h4>
                      <p className="text-gray-600 text-sm">Transportation for visits and family reunification</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Deductible Notice */}
              <div className="card bg-green-50 border-green-200">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Tax Deductible</h4>
                    <p className="text-green-700 text-sm">
                      Legacy of Hope is a 501(c)(3) nonprofit organization. 
                      Your donation is tax-deductible to the full extent allowed by law. 
                      You will receive a tax receipt via email.
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Ways to Give */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Other Ways to Give
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800">Mail a Check</h4>
                    <p className="text-gray-600">
                      Legacy of Hope<br />
                      123 Hope Street, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Corporate Matching</h4>
                    <p className="text-gray-600">
                      Many employers match charitable donations. Check with your HR department.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Planned Giving</h4>
                    <p className="text-gray-600">
                      Consider including Legacy of Hope in your will or estate planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;