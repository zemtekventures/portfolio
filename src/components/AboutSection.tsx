import React from 'react';
export const AboutSection = () => {
  return <section id="about" className="py-16 md:py-24 bg-white relative">
      {/* Japanese-style decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-red-700"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-red-700"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="ZemTek team collaboration" className="object-cover w-full h-full" />
              </div>
              {/* Japanese-style decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-red-700"></div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              <span className="inline-block text-red-700 text-sm mb-2">
                ABOUT US
              </span>
              <span className="block">About Us</span>
            </h2>
            <div className="mt-2 w-12 h-1 bg-red-700"></div>
            <p className="mt-6 text-lg text-gray-600">
              With over 5 years of professional experience in software
              development, our team is passionate about turning complex
              challenges into practical, high-performing solutions. We work
              closely with clients to understand their unique needs and deliver
              results that matter.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-600">
                  To create innovative software solutions that solve real-world
                  problems with precision and care.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-gray-600">
                  To be recognized as a trusted partner that consistently
                  delivers exceptional technology solutions.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-700 hover:bg-red-800 transition-colors">
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};