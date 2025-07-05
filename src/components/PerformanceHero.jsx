'use client';
import React from 'react';

const PerformanceHero = () => {
  return (
    <section className="lg:h-screen min-h-[450px] ">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='/assets/automotive.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='bg-black/60 inset-0 absolute'>
      </div>
      <div className='w-full flex flex-col items-center justify-center text-center px-4 inset-0 absolute'>
        <div className="text-white text-[22px] font-normal leading-relaxed max-w-[800px]">
          Driven By Performance
        </div>
        <div className="text-white text-5xl font-semibold mt-4">
          Soft Trims and NVH Solutions </div>
        <div className="text-white text-5xl font-light">
          for seamless rides
        </div>
      </div>
    </section>
  );
};

export default PerformanceHero;
