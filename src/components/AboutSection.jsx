import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { BriefcaseIcon } from "@heroicons/react/24/outline";


const TECH_LIST = [
    "Front-End & Back-End",
    "Database Management",
    "State Management (Redux / Context)",
    "Version Control (Git/GitHub)",
    "Deployment & Hosting",
    "Authentication (JWT / OAuth)",
];

const EXPERIENCES = [
    {
        id: 1,
        year: "2022 – Present",
        role: "Freelance MERN Developer",
        company: "Self-Employed",
        bullets: [
            "Built full-stack apps (React + Node + Express + MongoDB) for small businesses",
        ],
    },
    {
        id: 2,
        year: "2020 – Present",
        role: "",
        company: "",
        bullets: [
            "Debugged HTML, CSS, JS, and PHP errors to fix layout and functionality problems",
            "Troubleshot plugin/theme conflicts, improved uptime and reduced load time",
            "Implemented caching, CDN config and server-level performance tuning",
            "Assisted users with CDN/DNS configuration and hosting-related issues",
        ],
    },
    // Add or edit experience entries as needed
];

function TechChip({ children }) {
    return (
        <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-100">
            <CheckIcon className="mr-2 h-4 w-4 text-indigo-600" />
            {children}
        </span>
    );
}

export default function AboutSection() {
    return (
        <section id="about" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-start">
                    {/* Intro / Bio */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
                            <p className="text-lg text-gray-700">
                                Hi, I’m <span className="font-semibold">SREEMON KS</span>, a self-taught MERN stack developer skilled in building fast, scalable, and user-focused web applications using React.js, Node.js, Express.js, and MongoDB.
                                I also specialize in WordPress performance, optimization, and deep technical troubleshooting-debugging PHP/JS issues, improving site speed, and ensuring stable, high-quality deployments.
                                I blend strong engineering fundamentals with a focus on clean UI/UX to deliver smooth, reliable, and maintainable web solutions.
                            </p>


                            {/* LinkedIn Button And Contact Button */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://www.linkedin.com/in/sreemonkavungal/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                >
                                    Connect on LinkedIn
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                                >
                                    Contact Me
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Main card: Bio + Tech list + Experience */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">


                            {/* Technical proficiency chips */}
                            <div className="mb-6">
                                <h3 className="text-base font-semibold text-gray-900">Technical Proficiency</h3>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {TECH_LIST.map((t) => (
                                        <TechChip key={t}>{t}</TechChip>
                                    ))}
                                </div>
                            </div>

                            {/* Experience timeline */}
                            <div>
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

                            {/* small CTA at bottom */}
                            <div className="mt-6 border-t-[0.5px] border-gray-200 pt-5">
                                <p className="text-sm text-gray-600">
                                    Interested in collaborating? I’m open to freelance and full-time opportunities, feel free to{" "}
                                    <a href="/contact" className="font-medium text-indigo-600 hover:pointer">
                                        Get In Touch
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
