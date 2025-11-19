import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const TECH_LIST = [
  "React.js (component-driven UI)",
  "Redux / Context API",
  "Tailwind CSS, Material UI, Bootstrap",
  "HTML5, CSS3, modern JavaScript (ES6+)",
  "Node.js & Express",
  "MongoDB & MySQL",
  "WordPress (themes/plugins) & Performance",
  "Authentication (JWT / OAuth)",
  "Git & GitHub, CI/CD, Deployment",
];

const EXPERIENCES = [
  {
    id: 1,
    year: "",
    role: "Freelance MERN Developer",
    company: "Self-Employed",
    bullets: [
      "Built production-ready full-stack apps with React, Node, Express and MongoDB.",
      "Delivered performance and UX improvements, accessibility fixes and responsive UI."
    ],
  },
  {
    id: 2,
    year: "",
    role: "Technical Support Specialist",
    company: "FlyingWeb, LLC",
    bullets: [
      "Debugged HTML, CSS, JS, and PHP errors to fix layout and functionality problems.",
      "Troubleshot plugin/theme conflicts, improved uptime and reduced load time.",
      "Implemented caching, CDN config and server-level performance tuning.",
    ],
  },
];

function TechChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 py-1 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
      <CheckIcon className="h-4 w-4 text-indigo-600" />
      {children}
    </span>
  );
}

export default function AboutSection() {
  const contactEmail = "sreemonkavungal@gmail.com";

  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20"
      style={{ paddingTop: "var(--nav-height, 5rem)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-start">
          {/* Left column: Intro (sticky on large screens) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">About Me</h2>
              <p className="text-lg text-gray-700">
                Hi, I’m <strong className="font-semibold">SREEMON K S</strong>, a self-taught MERN stack developer skilled in building fast, scalable, and user-focused web applications using React.js, Node.js, Express.js, and MongoDB. I also specialize in WordPress performance, optimization, and deep technical troubleshooting-debugging PHP/JS issues, improving site speed, and ensuring stable, high-quality deployments. I blend strong engineering fundamentals with a focus on clean UI/UX to deliver smooth, reliable, and maintainable web solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/sreemonkavungal/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <FaLinkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
                >
                  Contact
                </Link>
              </div>

              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-800">Open to</p>
                <p className="pt-2">Permanent roles • Remote opportunities • Freelance projects • Collaborations</p>
              </div>
            </div>
          </div>

          {/* Right column: Card with tech & experience */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              {/* Tech / Proficiency */}
              <div>
                <h3 className="text-base font-semibold text-gray-900">Technical Proficiency</h3>
                <p className="mt-2 text-sm text-gray-600">
                  I build production-ready systems and optimize for performance, stability and usability.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {TECH_LIST.map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </div>
              </div>

              {/* Experience timeline */}
              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <BriefcaseIcon className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-base font-semibold text-gray-900">Experience</h3>
                </div>

                <ol className="relative border-l border-gray-100">
                  {EXPERIENCES.map((exp) => (
                    <li key={exp.id} className="mb-8 ml-6">
                      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-gray-100">
                        <span className="h-2 w-2 rounded-full bg-indigo-600" />
                      </span>

                      <div className="flex items-baseline justify-between">
                        <p className="text-sm font-semibold text-gray-900">{exp.role}</p>
                        <time className="text-sm text-gray-500">{exp.year}</time>
                      </div>

                      <p className="mt-1 text-sm text-gray-600 font-medium">{exp.company}</p>

                      <ul className="mt-3 ml-0 list-inside list-disc space-y-1 text-sm text-gray-600">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Small CTA and note */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-sm text-gray-700">
                  Interested in working together? I’m available for freelance and full-time work. Send a message or
                  connect on LinkedIn.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@sreemonkavungal.dev"
                    className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
                  >
                    Email Me
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
