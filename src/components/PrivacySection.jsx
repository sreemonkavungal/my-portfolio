import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  const effectiveDate = "November 20, 2025"; 
  const contactEmail = "sreemonkavungal@gmail.com";

  return (
    <main className="bg-white min-h-screen pt-20 py-12 px-6 sm:py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">
            Effective date: <strong>{effectiveDate}</strong>
          </p>
        </header>

        <article className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            <p className="mt-2">
              Your privacy matters. This Privacy Policy explains what information I (SREEMON KS) collect through this website, how it is used, when it is shared, and the choices you have about your information.
              By using this website, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Information I collect</h3>
            <p className="mt-2">
              I collect only the information that you voluntarily provide when you contact me (for example, via the contact form), sign up for a newsletter, or otherwise interact with the site. Typical data includes:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Contact details (name, email, phone number, company)</li>
              <li>Message content you provide in forms</li>
              <li>Technical data automatically collected (IP address, browser type, device, OS, referring pages) via server logs and analytics</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">How I use your information</h3>
            <p className="mt-2">I use the information for purposes including:</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Responding to contact requests and inquiries</li>
              <li>Delivering services or information you request</li>
              <li>Improving the website, analyzing usage and performance</li>
              <li>Sending occasional service-related messages (not promotional unless you opt-in)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Cookies and tracking</h3>
            <p className="mt-2">
              I use cookies and similar tracking technologies to understand site usage and improve performance. Cookies may be set by the site or by third-party services (analytics, embeds).
              You may control cookies through your browser settings. Disabling cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Third-party services</h3>
            <p className="mt-2">
              I may use third-party services (e.g., Google Analytics, Formspree, GitHub, hosting/CDN providers) which may collect and process personal data according to their own privacy policies.
              When you interact with embedded content (e.g., GitHub links, videos), that third party may collect data directly. Please review those providers' privacy policies for details.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">How I protect your data</h3>
            <p className="mt-2">
              I take reasonable measures to protect your personal data against loss, theft, and unauthorized access. However, no transmission over the internet is completely secure-use caution when transmitting sensitive information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Data retention</h3>
            <p className="mt-2">
              I retain personal information only for as long as necessary to provide services, respond to inquiries, or comply with legal obligations. If you would like your data deleted sooner, contact me (see “Contact” below).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Your rights</h3>
            <p className="mt-2">
              Depending on your jurisdiction, you may have rights such as: accessing the personal data I hold about you, requesting corrections, requesting deletion, or objecting to certain processing. If you are located in the European Economic Area (EEA), these rights are subject to applicable law (e.g., GDPR).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Children</h3>
            <p className="mt-2">
              This site is not intended for children under 13 (or the minimum age in your country). I do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Links to other websites</h3>
            <p className="mt-2">
              The site may link to other websites. This policy does not apply to third-party sites — please review their privacy notices before sharing personal information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Changes to this policy</h3>
            <p className="mt-2">
              I may update this policy occasionally. The “Effective date” at the top shows when the policy was last updated. Major changes will be highlighted on the site when practical.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <p className="mt-2">
              If you have questions about this Privacy Policy, requests about your personal data, or wish to request deletion or correction, please contact:
            </p>
            <p className="mt-3 text-sm text-gray-700">
              Email: <a href={`mailto:${contactEmail}`} className="text-indigo-600">{contactEmail}</a>
            </p>
          </section>

          <footer className="pt-4">
            <p className="text-sm text-gray-600">
              For the Terms & Conditions, see <Link to="/terms-of-service" className="text-indigo-600">Terms of Service</Link>.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
