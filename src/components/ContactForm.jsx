// 'use client'
// import React from 'react';

// const ContactForm = () => {
//     return (
//         <section className="bg-[#0067B1] text-white py-16 ">
//             <div className="lg:w-[1362px] py-36 px-4 lg:px-0 mx-auto grid md:grid-cols-2">
//                 {/* Left Side - Contact Info */}
//                 <div className=''>
//                     <div>
//                         <h2 className="text-5xl font-semibold">Get in touch</h2>
//                         <hr className='w-12 bg-white h-0.5 my-8'></hr>
//                     </div>
//                     <p className="text-2xl font-normal mb-8">For general enquiries</p>
//                     <div className='mb-4'>
//                         <div className='text-xl font-semibold'>Address:</div><div className='text-xl font-normal'>110, 16th Road Chembur, Mumbai - 400071</div>
//                     </div>
//                     <div className='mb-4'>
//                         <div className='text-xl font-semibold'>Phone:</div><div className='text-xl font-normal'>+91 22 25208822</div>
//                     </div>
//                     <div className='mb-4'>
//                         <div className='text-xl font-semibold'>Email:</div><div className='text-xl font-normal'>info@supremegroup.co.in</div>
//                     </div>
//                 </div>

//                 {/* Right Side - Form */}
//                 <form noValidate className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4 ">
//                     <div className="relative">
//                         <input
//                             id="name"
//                             name="name"
//                             placeholder="Full name"
//                             className="sg-translate text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-gray-400 border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-xl placeholder:text-white font-semibold bg-transparent outline-none focus-visible:outline-none focus-visible:border-white"
//                         />
//                     </div>

//                     <div className="relative">
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             inputMode="email"
//                             placeholder="Email"
//                             className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-gray-400 focus-visible:border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-xl placeholder:text-white font-semibold bg-transparent outline-none focus-visible:outline-none"
//                         />
//                     </div>

//                     <div className="relative">
//                         <input
//                             type="text"
//                             id="company"
//                             name="company"
//                             inputMode="text"
//                             placeholder="Company"
//                             className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-gray-400 focus-visible:border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-xl placeholder:text-white font-semibold bg-transparent outline-none focus-visible:outline-none"
//                         />
//                     </div>

//                     <div>
//                         <textarea
//                             id="message"
//                             name="message"
//                             rows="3"
//                             placeholder="Message"
//                             className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-gray-400 focus-visible:border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-xl placeholder:text-white font-semibold bg-transparent outline-none focus-visible:outline-none"
//                         ></textarea>
//                     </div>

//                     <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
//                         <button
//                             type="submit"
//                             className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold hover:border-transparent border border-white lg:text-base text-sm px-8 md:px-12 py-3"
//                         >
//                             Send
//                         </button>
//                     </div>
//                 </form>

//             </div>
//         </section>
//     );
// };

// export default ContactForm;


'use client';
import React from 'react';


const ContactForm = () => {
    const inputBase =
      'text-white placeholder:text-white placeholder:text-opacity-90 font-normal md:font-semibold bg-transparent border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-xl border-gray-400 border-opacity-40 transition-all duration-200 tracking-wide ease-in-out focus-visible:outline-none focus-visible:border-white';
    const informationArray = [
            { label: 'Address', value: '110, 16th Road Chembur, Mumbai - 400071' },
            { label: 'Phone', value: '+91 22 25208822' },
            { label: 'Email', value: 'info@supremegroup.co.in' },
          ]
  return (
    <section className="bg-[#0067B1] text-white py-16">
      <div className="xl:w-[1362px] py-36 px-4 xl:px-0 mx-auto grid md:grid-cols-2">
        {/* Left Side - Contact Info */}
        <div>
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
        <form noValidate className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4 order-1 md:order-2">
          <input id="name" name="name" placeholder="Full name" className={inputBase} />
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            placeholder="Email"
            className={inputBase}
          />
          <input
            id="company"
            name="company"
            type="text"
            inputMode="text"
            placeholder="Company"
            className={inputBase}
          />
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
            className={inputBase}
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
    </section>
  );
};

export default ContactForm;
