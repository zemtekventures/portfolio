import React from 'react';
export const ContactCTA = () => {
  return <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Japanese-style pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="inline-block text-red-400 text-sm mb-2">
              CONTACT US
            </span>
            <span className="block">
              Let's collaborate to bring your ideas to life
            </span>
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-red-500"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology
            solutions? Contact us today to discuss how we can help you achieve
            your goals.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <div className="mt-1">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm bg-gray-800 border-gray-700 rounded-sm text-white focus:ring-red-500 focus:border-red-500" />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <div className="mt-1">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm bg-gray-800 border-gray-700 rounded-sm text-white focus:ring-red-500 focus:border-red-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm bg-gray-800 border-gray-700 rounded-sm text-white focus:ring-red-500 focus:border-red-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <div className="mt-1">
                <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm bg-gray-800 border-gray-700 rounded-sm text-white focus:ring-red-500 focus:border-red-500"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-gray-900">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>;
};