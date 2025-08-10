'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabaseClient'

import emailjs from '@emailjs/browser';

export default function CarSellForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleOdometer: '',
    vehicleCondition: '',
    vehicleDescription: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 30}, (_, i) => currentYear - i);

  const carMakes = [
    'Toyota', 'Holden', 'Ford', 'Mazda', 'Hyundai', 'Nissan', 'Honda', 
    'Volkswagen', 'Mitsubishi', 'Subaru', 'BMW', 'Mercedes-Benz', 'Audi',
    'Kia', 'Isuzu', 'Jeep', 'Land Rover', 'Volvo', 'Peugeot', 'Lexus',
    'Infiniti', 'Jaguar', 'Porsche', 'Tesla', 'MG', 'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Prepare data for Supabase
    const supabaseData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      enquiry_type: 'sell',
      vehicle_make: formData.vehicleMake,
      vehicle_model: formData.vehicleModel,
      vehicle_year: formData.vehicleYear,
      vehicle_odometer: formData.vehicleOdometer,
      vehicle_condition: formData.vehicleCondition,
      vehicle_description: formData.vehicleDescription,
      message: formData.message || `Quote request for ${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}`,
      budget: "",
      preferred_location: formData.postcode,
    };

    // Insert into Supabase
    const { error: supabaseError } = await supabase.from('inquiries').insert([supabaseData]);
    if (supabaseError) {
      setError('Failed to save your quote request. Please try again.');
      setLoading(false);
      setTimeout(() => {
        if (feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return;
    }

    // Send via EmailJS
    try {
      console.log('EmailJS payload:', supabaseData);
      await emailjs.send(
          'service_vgr4wb8',
          'template_9tsmw4s',
          supabaseData,
          'J4nc-QtmOnFVrHKM7'
      );
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        vehicleOdometer: '',
        vehicleCondition: '',
        vehicleDescription: '',
        message: ''
      });
      setTimeout(() => {
        if (feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
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

  return (
      <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get Your Free Quote
        </h2>
        <p className="text-gray-600 mb-8">
          Takes less than 2 minutes • Get your quote in 30 minutes • No obligations
        </p>

        <div ref={feedbackRef} />
        {loading && (
            <div className="bg-blue-100 border border-blue-200 text-blue-800 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                <span><strong className="font-bold">Processing...</strong> Getting your quote ready.</span>
              </div>
              <button onClick={() => setLoading(false)} className="ml-4 text-blue-800 hover:text-blue-900 font-bold text-xl leading-none">×</button>
            </div>
        )}
        {success && (
            <div className="bg-emerald-100 border border-emerald-200 text-emerald-800 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span><strong className="font-bold">Quote Submitted!</strong> We&apos;ll contact you within 30 minutes with your offer.</span>
              </div>
              <button onClick={() => setSuccess(false)} className="ml-4 text-emerald-800 hover:text-emerald-900 font-bold text-xl leading-none">×</button>
            </div>
        )}
        {error && (
            <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded relative mb-4 flex items-center justify-between" role="alert">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong className="font-bold">Error!</strong> {error}</span>
              </div>
              <button onClick={() => setError(null)} className="ml-4 text-red-800 hover:text-red-900 font-bold text-xl leading-none">×</button>
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vehicle Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🚗 Vehicle Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="e.g., Camry, Commodore, Focus"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                      <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="vehicleOdometer" className="block text-sm font-medium text-gray-700 mb-2">
                  Odometer (km) *
                </label>
                <input
                    type="number"
                    id="vehicleOdometer"
                    name="vehicleOdometer"
                    required
                    value={formData.vehicleOdometer}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="150000"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="vehicleCondition" className="block text-sm font-medium text-gray-700 mb-2">
                Condition *
              </label>
              <select
                  id="vehicleCondition"
                  name="vehicleCondition"
                  required
                  value={formData.vehicleCondition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                <option value="">Select condition</option>
                <option value="excellent">Excellent - Like new, no issues</option>
                <option value="good">Good - Minor wear, runs well</option>
                <option value="fair">Fair - Some issues, needs minor repairs</option>
                <option value="poor">Poor - Major issues, needs significant repairs</option>
                <option value="damaged">Damaged/Not Running</option>
              </select>
            </div>

            <div>
              <label htmlFor="vehicleDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Vehicle Details
              </label>
              <textarea
                  id="vehicleDescription"
                  name="vehicleDescription"
                  rows={3}
                  value={formData.vehicleDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                  placeholder="Any damage, modifications, service history, or other details that might affect the value..."
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              👤 Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="0400 000 000"
                />
              </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="2000"
                />
              </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                  placeholder="Any questions or special requirements..."
              />
            </div>
          </div>

          <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full cursor-pointer bg-emerald-600 text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Getting Your Quote...' : 'Get My Free Quote Now'}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            🔒 Your information is secure and will not be shared with third parties
          </p>
          <p className="text-sm text-gray-500 mt-1">
            ⚡ We&apos;ll contact you within 30 minutes with your competitive offer
          </p>
        </div>
      </motion.div>
  )
}