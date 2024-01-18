import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className=" flex justify-start md:grid md:grid-cols-2 md:gap-8">

              <div>
                <h4 className="text-lg leading-5 font-semibold tracking-wider text-black uppercase">
                  Explore
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/" className="text-base leading-6 text-gray-900 hover:text-gray-900">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-base leading-6 text-gray-900 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/skills" className="text-base leading-6 text-gray-900 hover:text-gray-900">
                      Skills
                    </a>
                  </li>

                  <li>
                    <a href="/projects" className="text-base leading-6 text-gray-900 hover:text-gray-900">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base leading-6 text-gray-900 hover:text-gray-900">
                      Contact
                    </a>
                  </li>


                </ul>
              </div>
              {/* Add more sections as needed */}
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <h4 className="text-lg leading-5 font-semibold tracking-wider text-black uppercase">
              Connect
            </h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <a href="https://github.com/sreemonkavungal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 flex items-center text-base">

                  <svg
                    aria-hidden="true"
                    height="26" viewBox="0 0 16 16"
                    version="1.1" width="26"
                    data-view-component="true"
                    class="octicon octicon-mark-github mr-2">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                    </path>
                  </svg>
                  <span>
                    GitHub
                  </span>
                </a>
                {/* Add more social media links as needed */}

              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="/privacy-policy"
              className="text-gray-900 hover:none">
              Privacy Policy
            </a>
            <a href="/terms-of-service"
              className="text-gray-900 hover:none">
              Terms of Service
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-900 md:mt-0 md:order-1">
            &copy;  2023 SREEMON KS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
