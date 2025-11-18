import React from "react";
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiTailwindcss,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { CodeBracketIcon } from "@heroicons/react/24/outline";


const SKILL_CARDS = [
  {
    id: "frontend",
    title: "Front-end Development",
    desc:
      "Responsive, accessible, high-performance UIs using component-first architecture.",
    icon: SiReact,
    chips: ["React", "Redux / Context", "Tailwind", "Material UI", "HTML", "CSS", "JS"],
    proficiency: 88,
    color: "text-blue-500",
  },
  {
    id: "backend",
    title: "Back-end & APIs",
    desc:
      "Server-side logic, RESTful APIs and secure authentication workflows (JWT, OAuth).",
    icon: SiNodedotjs,
    chips: ["Node.js", "Express", "JWT", "REST APIs", "Third-party APIs"],
    proficiency: 82,
    color: "text-green-600",
  },
  {
    id: "databases",
    title: "Databases & Modeling",
    desc:
      "NoSQL and relational design, schema modelling, and performant queries.",
    icon: SiMongodb,
    chips: ["MongoDB", "Mongoose", "MySQL"],
    proficiency: 80,
    color: "text-green-700",
  },
  {
    id: "wordpress",
    title: "WordPress & Optimization",
    desc:
      "Plugin/theme customization, debugging, caching and server/CDN tuning for speed.",
    icon: SiWordpress,
    chips: ["PHP", "Theme Dev", "Caching", "CDN", "Speed Tuning"],
    proficiency: 90,
    color: "text-indigo-600",
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    desc:
      "Source control, API testing, monitoring, and strong documentation habits.",
    icon: SiGithub,
    chips: ["Git/GitHub", "VS Code", "Postman", "GTmetrix", "UptimeRobot"],
    proficiency: 86,
    color: "text-gray-700",
  },
];

function TechChip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-50">
      {children}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-start">
          {/* Intro */}
          <div className="lg:col-span-1">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Technical Proficiencies
              </h2>
              <p className="mt-4 text-lg text-gray-700">
              Building optimized, scalable, and user-focused web solutions across the MERN stack and WordPress ecosystem.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <CodeBracketIcon className="h-5 w-5 text-indigo-600 flex-none" />
                  <span>
                    Clean code, reusable components and docs-first approach.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <SiPostman className="h-5 w-5 text-orange-500 flex-none" />
                  <span>API testing & integration (Postman).</span>
                </li>
                <li className="flex items-start gap-3">
                  <SiTailwindcss className="h-5 w-5 text-sky-500 flex-none" />
                  <span>Design-first UI with Tailwind / component libraries.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {SKILL_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.id}
                    className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                    aria-labelledby={`skill-${card.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 ${card.color}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3
                          id={`skill-${card.id}`}
                          className="text-base font-semibold text-gray-900"
                        >
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{card.desc}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {card.chips.map((t) => (
                            <TechChip key={t}>{t}</TechChip>
                          ))}
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs font-medium text-gray-600">
                            <span>Proficiency</span>
                            <span>{card.proficiency}%</span>
                          </div>
                          <div
                            className="relative mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-100"
                            aria-hidden="true"
                          >
                            <div
                              className="absolute left-0 top-0 h-full rounded-full bg-indigo-600 transition-all"
                              style={{ width: `${card.proficiency}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
