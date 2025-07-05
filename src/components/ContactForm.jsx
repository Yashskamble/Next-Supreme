'use client'
import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const inputBase =
    'text-white placeholder:text-white placeholder:text-opacity-90 font-normal md:font-semibold bg-transparent border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-xl border-gray-400 border-opacity-40 transition-all duration-200 tracking-wide ease-in-out focus-visible:outline-none focus-visible:border-white';
  const informationArray = [
    { label: 'Address', value: '110, 16th Road Chembur, Mumbai - 400071' },
    { label: 'Phone', value: '+91 22 25208822' },
    { label: 'Email', value: 'info@supremegroup.co.in' },
  ]


  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid Email Address';
    if (!formData.company) newErrors.company = 'Company is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    }
  };
  return (
    <section className="bg-[#0067B1] text-white py-16">
      <div className="xl:w-[1362px] py-36 px-4 xl:px-0 mx-auto grid md:grid-cols-2">
        {/* Left Side - Contact Info */}
        <div className='order-2 md:order-1'>
          <div>
            <h2 className="text-2xl md:text-5xl font-semibold">Get in touch</h2>
            <hr className="w-12 bg-white h-0.5 my-4 md:my-8" />
          </div>
          <p className="text-[16px] md:text-2xl font-normal mb-8">For general enquiries</p>
          {informationArray.map((item) => (
            <div className="mb-4" key={item.label}>
              <div className="text-[18px] font-medium md:text-xl font-semibold">{item.label}:</div>
              <div className="text-[14px] md:text-xl md:font-normal">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4 order-1 md:order-2">
          <div><input
            id="name"
            name="name"
            placeholder="Full name"
            className={inputBase}
            value={formData.name}
            onChange={handleChange}
          />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div>
            <input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              placeholder="Email"
              className={inputBase}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div>
            <input
              id="company"
              name="company"
              type="text"
              inputMode="text"
              placeholder="Company"
              className={inputBase}
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <span className="text-red-500 text-sm">{errors.company}</span>}
          </div>
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
            className={inputBase}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
            <button
              type="submit"
              className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold hover:border-transparent border border-white lg:text-base text-sm px-8 md:px-12 py-3"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="justify-items-center">
          <div className="relative bg-[#0067B1] border-2 border-white text-white px-6 pt-2 pb-4 rounded-lg w-80 text-center shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white hover:text-black text-xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <p className="mb-4 font-semibold text-lg">Form submitted successfully!</p>
            <div className="w-full bg-blue-900 rounded-full h-0.5 overflow-hidden">
              <div
                className="bg-white h-0.5 rounded-full animate-progress-bar"
                style={{ animationDuration: '3s' }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
  @keyframes progress-bar {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
  .animate-progress-bar {
    animation: progress-bar 3s linear forwards;
  }
`}</style>
    </section>
  );
};

export default ContactForm;
