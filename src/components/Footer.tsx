export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img
                src="/zemtek.jpg"
                alt="ZemTek Ventures Logo"
                className="h-8 w-8 mr-2 object-contain"
              />
              <span className="text-xl font-bold tracking-tight">
                ZemTek Ventures
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Innovating tomorrow with AI, Cloud, and Care. We deliver tailored
              software solutions designed to meet your business objectives.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Chatbots & LLM Integration
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Mobile & Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-400 hover:text-white"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#tools" className="text-gray-400 hover:text-white">
                  Tools & Methodologies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ZemTek Ventures. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.upwork.com/agencies/zemtekventures"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Upwork</span>
              <svg
                id="Layer_1"
                viewBox="0 0 56.7 56.7"
                xmlSpace="preserve"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  
                  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  
                  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  
                  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z"/>
              </svg>
            </a>

            <a
              href="https://x.com/zemtekventures"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">X</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.53 3H20.5l-6.68 7.63L21 21h-5.92l-4.64-6.08L5.36 21H2.39l7.16-8.19L3 3h6.05l4.21 5.73L17.53 3zm-2.1 16h1.16L8.62 5h-1.2l8.01 14z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/zemtekventures"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://github.com/zemtekventures"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
