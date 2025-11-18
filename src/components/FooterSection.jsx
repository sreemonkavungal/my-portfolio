import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Branding / short */}
          <div>
            <a href="/" className="inline-block text-sm font-semibold text-gray-900">
              SREEMON - Portfolio
            </a>


            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/sreemonkavungal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub — Sreemon"
                className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/sreemonkavungal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn — Sreemon"
                className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-indigo-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email Sreemon"
                className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation / Sitemap */}
          <nav aria-label="Footer Navigation" className="sm:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Legal & small CTA */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Connect</h4>

            <p className="mt-4 text-sm text-gray-600">
              Want to collaborate or talk about a project? Reach out on LinkedIn or send a quick message.
            </p>

            {/* Footer Button */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">

              <a
                href="https://www.linkedin.com/in/sreemonkavungal/"
                target="_blank"
                rel="noopener noreferrer"
                className="
      inline-flex items-center justify-center
      rounded-md bg-indigo-600 
      px-4 py-2 text-sm font-semibold text-white 
      hover:bg-indigo-700 
      focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
      w-[170px] mx-0                /* mobile width */
      sm:w-auto sm:px-4 sm:py-2     /* normal width on tablet+ */
    "
              >
                Connect on LinkedIn
              </a>

              <a
                href="/contact"
                className="
      inline-flex items-center justify-center
      rounded-md border border-gray-200 
      px-4 py-2 text-sm text-gray-800 hover:bg-gray-50
      w-[120px]                      /* mobile width */
      sm:w-auto sm:px-4 sm:py-2      /* normal width on tablet+ */
    "
              >
                Contact
              </a>

            </div>



          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-10 border-t-[0.5px] border-gray-200 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-gray-600">
              &copy; {year} SREEMON KS. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
