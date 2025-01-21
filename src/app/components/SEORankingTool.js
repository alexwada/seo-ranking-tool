import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const SEORankingTool = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    websiteUrl: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Email validation
    if (name === 'email') {
      setEmailTouched(true);
      setEmailError(value.includes('@') ? '' : 'Input a valid email address');
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.businessName || !formData.businessType) {
          toast.error('Please fill in all fields');
          return false;
        }
        break;
      case 2:
        if (!formData.address || !formData.city || !formData.state || !formData.zip) {
          toast.error('Please fill in all fields');
          return false;
        }
        break;
      case 3:
        if (!formData.firstName || !formData.lastName || 
            !formData.email || !formData.phone || 
            !formData.email.includes('@')) {
          toast.error('Please fill in all fields correctly');
          return false;
        }
        break;
    }
    return true;
  };

  const inputClasses = "mt-1 block w-full rounded-md border-2 border-[#ECE6E5] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-[#333333] px-4 py-2 bg-[#F8F8F8] text-sm";
  const labelClasses = "block text-lg font-semibold text-gray-700 mb-1";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border-2 border-[#4E6E57] flex flex-col min-h-[500px]">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-[#4E6E57] rounded transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Centered content container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">
                    Want To See How Your Business Ranks Online In Your City?
                    <br />
                    You're At The Right Place
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 text-left">
                    Enter Some Information About Your Business And Receive Insights Into Your Business For FREE
                  </p>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 font-['Montserrat']">Tell us about your business</h2>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClasses}>What's your business called?</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Johnny's Landscaping"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>What type of business is it?</label>
                      <input
                        type="text"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        placeholder="e.g., HVAC, Painter, Roofing"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Website URL</label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        placeholder="https://www.yourwebsite.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 font-['Montserrat']">Where is your business located?</h2>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClasses}>Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Company Ave"
                        className={inputClasses}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Companyville"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="IL"
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClasses}>ZIP Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        placeholder="12345"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 font-['Montserrat']">Before we get your results, what's the best way to reach you?</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Johnny"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Smith"
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClasses}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johnny@landscaping.com"
                        className={inputClasses}
                      />
                      {emailTouched && emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                      )}
                    </div>
                    <div>
                      <label className={labelClasses}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800 font-['Montserrat']">Analysis Results</h2>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-center text-[#333333]">
                      Analyzing your business rankings...
                    </p>
                    {/* Results will be populated here */}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        {step > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 font-semibold"
          >
            Previous
          </button>
        )}
        {step < 4 && (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-[#4E6E57] text-white rounded hover:bg-[#3d5745] ml-auto font-semibold w-48"
          >
            {step === 0 ? 'Get Started' : 'Continue'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SEORankingTool;