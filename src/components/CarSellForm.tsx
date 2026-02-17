'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabaseClient'


const australianStates = [
  { value: 'NSW', label: 'NSW' },
  { value: 'VIC', label: 'VIC' },
  { value: 'QLD', label: 'QLD' },
  { value: 'SA', label: 'SA' },
  { value: 'WA', label: 'WA' },
  { value: 'TAS', label: 'TAS' },
  { value: 'NT', label: 'NT' },
  { value: 'ACT', label: 'ACT' },
];

const carMakes = [
  'Toyota', 'Holden', 'Ford', 'Mazda', 'Hyundai', 'Nissan', 'Honda',
  'Volkswagen', 'Mitsubishi', 'Subaru', 'BMW', 'Mercedes-Benz', 'Audi',
  'Kia', 'Isuzu', 'Jeep', 'Land Rover', 'Volvo', 'Peugeot', 'Lexus',
  'Infiniti', 'Jaguar', 'Porsche', 'Tesla', 'MG', 'Other'
];

export default function CarSellForm() {
  const [step, setStep] = useState(1);
  const [manualEntry, setManualEntry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vinOrReg: '',
    state: '',
    postcode: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleBadge: '',
    vehicleYear: '',
    vehicleDescription: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 30}, (_, i) => currentYear - i);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    if (!manualEntry && (!formData.vinOrReg || !formData.state)) {
      setError('Please enter your registration/VIN and select your state.');
      setLoading(false);
      return;
    }

    // Save lead to Supabase
    const leadData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      vin_or_reg: formData.vinOrReg || 'manual_entry',
      enquiry_type: 'lead_capture',
      created_at: new Date().toISOString(),
    };

    const { error: supabaseError } = await supabase.from('leads').insert([leadData]);
    if (supabaseError) {
      console.error('Lead save error:', supabaseError);
    }

    // Move to step 2
    setStep(2);
    setLoading(false);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const supabaseData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      enquiry_type: 'sell',
      vehicle_make: formData.vehicleMake,
      vehicle_model: formData.vehicleModel,
      vehicle_year: formData.vehicleYear,
      vehicle_odometer: '',
      vehicle_condition: '',
      vehicle_description: formData.vehicleDescription || `${formData.vehicleBadge ? 'Badge: ' + formData.vehicleBadge : ''}`,
      message: formData.message || `Quote request for ${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}${formData.vehicleBadge ? ' ' + formData.vehicleBadge : ''}`,
      budget: "",
      preferred_location: formData.postcode,
      vin_or_reg: formData.vinOrReg,
    };

    const { error: supabaseError } = await supabase.from('inquiries').insert([supabaseData]);
    if (supabaseError) {
      setError('Failed to save your quote request. Please try again.');
      setLoading(false);
      setTimeout(() => {
        if (feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return;
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supabaseData),
      });
      if (!res.ok) throw new Error('Email send failed');
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vinOrReg: '',
        state: '',
        postcode: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleBadge: '',
        vehicleYear: '',
        vehicleDescription: '',
        message: ''
      });
      setManualEntry(false);
      setStep(1);
      setTimeout(() => {
        if (feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch {
      setError('Your quote request was saved, but email notification failed.');
      setLoading(false);
      setTimeout(() => {
        if (feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Step 1: Contact info + Rego/VIN or Manual entry option
  if (step === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get Your Free Car Valuation
        </h2>
        <p className="text-gray-600 mb-8">
          Takes less than 1 minute &bull; Get your quote in 30 minutes &bull; No obligations
        </p>

        <div ref={feedbackRef} />
        {error && (
          <div className="bg-blue-100 border border-blue-200 text-blue-600 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span><strong className="font-bold">Error!</strong> {error}</span>
            </div>
            <button onClick={() => setError(null)} className="ml-4 text-blue-600 hover:text-blue-700 font-bold text-xl leading-none">&times;</button>
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span><strong className="font-bold">Quote Submitted!</strong> We&apos;ll contact you within 30 minutes with your offer.</span>
            </div>
            <button onClick={() => setSuccess(false)} className="ml-4 text-green-800 hover:text-green-900 font-bold text-xl leading-none">&times;</button>
          </div>
        )}

        <form onSubmit={handleLeadSubmit} className="space-y-6">
          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                placeholder="0400 000 000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Identification</h3>

            {!manualEntry ? (
              <>
                {/* Rego/VIN + State */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="vinOrReg" className="block text-sm font-medium text-gray-700 mb-2">
                      Registration or VIN *
                    </label>
                    <input
                      type="text"
                      id="vinOrReg"
                      name="vinOrReg"
                      required={!manualEntry}
                      value={formData.vinOrReg}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                      placeholder="e.g. ABC123 or 17-digit VIN"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      required={!manualEntry}
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select</option>
                      {australianStates.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setManualEntry(true)}
                  className="mt-3 text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer transition-colors"
                >
                  Or enter car details manually
                </button>
              </>
            ) : (
              <>
                {/* Manual Entry: Make, Model, Badge, Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-2">
                      Make *
                    </label>
                    <select
                      id="vehicleMake"
                      name="vehicleMake"
                      required
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select Make</option>
                      {carMakes.map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      required
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                      placeholder="e.g. Camry, Commodore"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleBadge" className="block text-sm font-medium text-gray-700 mb-2">
                      Badge
                    </label>
                    <input
                      type="text"
                      id="vehicleBadge"
                      name="vehicleBadge"
                      value={formData.vehicleBadge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                      placeholder="e.g. SX, SR5, Ascent"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <select
                      id="vehicleYear"
                      name="vehicleYear"
                      required
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year.toString()}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setManualEntry(false)}
                  className="mt-3 text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer transition-colors"
                >
                  Use registration/VIN instead
                </button>
              </>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full cursor-pointer bg-blue-600 text-white py-4 px-6 rounded-lg text-xl font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Finding Your Car...' : manualEntry ? 'Get My Free Quote' : 'Find My Car'}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is secure and will not be shared with third parties
          </p>
          <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            We&apos;ll contact you within 30 minutes with your competitive offer
          </p>
        </div>
      </motion.div>
    );
  }

  // Step 2: Confirm car or enter details manually
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
    >
      {/* Step indicator */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setStep(1)}
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <span className="text-sm font-medium text-gray-700">Vehicle Details</span>
          </div>
        </div>
      </div>

      <div ref={feedbackRef} />
      {loading && (
        <div className="bg-gradient-to-br from-white via-blue-200 to-blue-400 border border-blue-200 text-blue-800 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            <span><strong className="font-bold">Processing...</strong> Getting your quote ready.</span>
          </div>
          <button onClick={() => setLoading(false)} className="ml-4 text-blue-800 hover:text-blue-900 font-bold text-xl leading-none">&times;</button>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span><strong className="font-bold">Error!</strong> {error}</span>
          </div>
          <button onClick={() => setError(null)} className="ml-4 text-red-800 hover:text-red-900 font-bold text-xl leading-none">&times;</button>
        </div>
      )}

      {/* If user came via Rego/VIN lookup (not manual), show confirmation prompt */}
      {!manualEntry && formData.vinOrReg && !formData.vehicleMake ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Tell us about your car
          </h2>
          <p className="text-gray-600 mb-6">
            Enter your vehicle details below so we can give you the most accurate quote for <strong>{formData.vinOrReg}</strong> ({formData.state}).
          </p>

          <form onSubmit={handleFullSubmit} className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Your Vehicle Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-2">
                    Make *
                  </label>
                  <select
                    id="vehicleMake"
                    name="vehicleMake"
                    required
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Make</option>
                    {carMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    required
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    placeholder="e.g. Camry, Commodore"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleBadge" className="block text-sm font-medium text-gray-700 mb-2">
                    Badge
                  </label>
                  <input
                    type="text"
                    id="vehicleBadge"
                    name="vehicleBadge"
                    value={formData.vehicleBadge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    placeholder="e.g. SX, SR5, Ascent"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <select
                    id="vehicleYear"
                    name="vehicleYear"
                    required
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Year</option>
                    {years.map(year => (
                      <option key={year} value={year.toString()}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Postcode & Message */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    placeholder="2000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Any additional details..."
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full cursor-pointer bg-blue-600 text-white py-4 px-6 rounded-lg text-xl font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Getting Your Quote...' : 'Get My Free Quote Now'}
            </motion.button>
          </form>
        </div>
      ) : (
        // Manual entry flow (user already entered Make/Model/Badge/Year in step 1)
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Confirm Your Details
          </h2>
          <p className="text-gray-600 mb-6">
            Almost done! Just add your location and any extra info.
          </p>

          {/* Show entered vehicle summary */}
          {formData.vehicleMake && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                    {formData.vehicleBadge ? ` ${formData.vehicleBadge}` : ''}
                  </p>
                  {formData.vinOrReg && (
                    <p className="text-sm text-gray-500 mt-1">Rego/VIN: {formData.vinOrReg}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer"
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleFullSubmit} className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                    placeholder="2000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Any additional details..."
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full cursor-pointer bg-blue-600 text-white py-4 px-6 rounded-lg text-xl font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Getting Your Quote...' : 'Get My Free Quote Now'}
            </motion.button>
          </form>
        </div>
      )}

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your information is secure and will not be shared with third parties
        </p>
        <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          We&apos;ll contact you within 30 minutes with your competitive offer
        </p>
      </div>
    </motion.div>
  );
}
