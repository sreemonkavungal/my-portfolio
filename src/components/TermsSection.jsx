import React from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  const effectiveDate = "November 20, 2025";
  const contactEmail = "sreemonkavungal@gmail.com";

  return (
    <main
      className="bg-white min-h-screen py-12 px-6 sm:py-20 sm:px-8 lg:px-16"
      style={{ paddingTop: "var(--nav-height, 5rem)" }}
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 id="terms" className="text-3xl sm:text-3xl font-bold text-gray-900 scroll-mt-24">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Effective date: <strong>{effectiveDate}</strong>
          </p>
        </header>

        <article className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            <p className="mt-2">
              These Terms of Service ("Terms") govern your access to and use of the website and services provided by
              SREEMON KS (the "Site" / "Services"). By using the Site, you agree to these Terms. If you do not agree,
              please do not use the Site.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Acceptable Use</h3>
            <p className="mt-2">
              You agree to use the Site for lawful purposes only. You must not use the Site in any way that is illegal,
              abusive, harmful to others, or that could damage, disable or impair the Site’s operation.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Services & Engagements</h3>
            <p className="mt-2">
              Any professional services (development, consulting, performance optimization, etc.) described on the Site
              require a separate agreement or statement of work. Descriptions on the Site do not constitute an offer or
              a binding commitment to perform services unless a separate written agreement is executed.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">User Content</h3>
            <p className="mt-2">
              If you submit content via contact forms or other inputs, you represent that you own or have the right to
              share that content. By submitting, you grant SREEMON KS a non-exclusive, worldwide, royalty-free license
              to use and display that content for the purpose of providing Services and improving the Site.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Intellectual Property</h3>
            <p className="mt-2">
              All Site content (text, images, design, code, logos) is owned by SREEMON KS or used under license and is
              protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative
              works without prior written consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Third-Party Services</h3>
            <p className="mt-2">
              The Site may link to or integrate with third-party providers (e.g., analytics, hosting, Formspree, GitHub).
              Those providers have their own terms and privacy policies; SREEMON KS is not responsible for their actions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Disclaimer of Warranties</h3>
            <p className="mt-2">
              THE SITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
              IMPLIED. TO THE EXTENT PERMITTED BY LAW, SREEMON KS DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Limitation of Liability</h3>
            <p className="mt-2">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SREEMON KS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE. SREEMON KS' AGGREGATE LIABILITY FOR
              DIRECT DAMAGES IS LIMITED TO AMOUNTS PAID FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM (IF ANY).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Indemnification</h3>
            <p className="mt-2">
              You agree to indemnify and hold harmless SREEMON KS and its affiliates from claims, losses, liabilities,
              and expenses (including reasonable attorneys’ fees) arising out of your breach of these Terms or your use
              of the Site.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Termination</h3>
            <p className="mt-2">
              SREEMON KS may suspend or terminate access to the Site or Services at any time for any reason, including
              if you violate these Terms. Termination does not relieve you of obligations that accrued prior to
              termination.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Governing Law</h3>
            <p className="mt-2">
              These Terms are governed by the laws of the jurisdiction in which SREEMON KS operates. Any disputes shall
              be resolved in the appropriate courts of that jurisdiction, unless otherwise required by applicable law.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Changes to the Terms</h3>
            <p className="mt-2">
              SREEMON KS may update these Terms periodically. The "Effective date" at the top indicates when these Terms
              were last updated. Continued use of the Site after notice of changes constitutes acceptance of the updates.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <p className="mt-2">
              Questions about these Terms or requests related to legal matters may be sent to:
            </p>
            <p className="mt-3 text-sm text-gray-700">
              Email :{" "}
              <a href={`mailto:${contactEmail}`} className="text-indigo-600">
                {contactEmail}
              </a>
            </p>
          </section>

          <footer className="pt-4 text-sm text-gray-600">
            <p>
              These Terms constitute the entire agreement between you and SREEMON KS regarding the Site and supersede
              prior agreements.
            </p>
            <p className="mt-4">
              Return to <Link to="/" className="text-indigo-600">Home</Link> or view our{" "}
              <Link to="/privacy-policy" className="text-indigo-600">Privacy Policy</Link>.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
