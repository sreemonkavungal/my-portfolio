import React from "react";
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiWordpress,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import HeroImage from "../assets/images/SREEMON KS.jpg";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="bg-white pt-16 sm:pt-12 md:pt-10 lg:pt-20"
        >
            <div className="mx-auto max-w-7xl px-6 pb-12 lg:pb-20">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                    {/* LEFT SIDE — TEXT CONTENT */}
                    <div className="order-1 lg:order-1 mt-5">
                        <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-0.5 sm:py-1 text-sm font-medium text-indigo-600">
                            Welcome to my portfolio
                        </p>

                        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-3xl">
                            Full-Stack Developer (MERN) & WordPress Performance Specialist
                        </h1>

                        {/* MOBILE IMAGE ONLY */}
                        <div className="mt-6 block lg:hidden">
                            <img
                                src={HeroImage}
                                alt="HomePage-Image"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                className="w-full rounded-2xl object-contain"
                                style={{ WebkitUserDrag: "none" }}
                            />
                        </div>

                        {/* INTRO PARAGRAPH */}
                        <div className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 space-y-4">
                            <p>
                                I’m a self-taught developer with strong expertise in building fast,
                                scalable, and user-centric web applications using the MERN stack,
                                while also specializing in WordPress performance optimization and
                                deep technical troubleshooting.
                            </p>
                            <p>
                                I aim to create digital solutions that not only work flawlessly but
                                deliver measurable performance, clarity, and long-term maintainability.
                            </p>
                        </div>

                        {/* TECH CHIPS */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 py-1.5 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-100">
                                <SiReact className="h-4 w-4 text-blue-500" /> React
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 py-1.5 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-100">
                                <SiNodedotjs className="h-4 w-4 text-green-600" /> Node.js
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 py-1.5 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-100">
                                <SiMongodb className="h-4 w-4 text-green-700" /> MongoDB
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 py-1.5 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-100">
                                <SiExpress className="h-4 w-4 text-gray-800" /> Express
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 py-1.5 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-100">
                                <SiWordpress className="h-4 w-4 text-sky-600" /> WordPress
                            </span>
                        </div>

                        {/* BUTTONS */}
                        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                            <a
                                href="https://www.linkedin.com/in/sreemonkavungal/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                            >
                                <FaLinkedin className="h-4 w-4" /> Connect on LinkedIn
                            </a>
                            {/* GitHub Button */}
                            <a
                                href="https://github.com/sreemonkavungal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                            >
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    width="16"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
               0-.19-.01-.82-.01-1.49-2.01.37-2.69-.49-2.85-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.66-.52
               -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64
               -.88-3.64-3.95 0-.88.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82A7.65 7.65 0 0 1 
               8 4.84c.69 0 1.38.09 2.02.27 1.53-1.04 2.2-.82 
               2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 
               2.15 0 3.07-1.86 3.75-3.65 3.95.29.25.54.73.54 
               1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
               8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
                                </svg>
                                GitHub
                            </a>


                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            Available for freelance & collaboration • Open to remote roles
                        </p>
                    </div>

                    {/* RIGHT SIDE — DESKTOP IMAGE ONLY */}
                    <div className="order-2 lg:order-2 hidden lg:flex items-start justify-center">
                        <div className="relative w-full max-w-2xl h-[300px] sm:h-[380px] md:h-[430px] lg:h-[520px] xl:h-[600px] flex items-center justify-center">
                            <img
                                src={HeroImage}
                                alt="Sreemon portrait"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                className="w-full h-full rounded-2xl object-contain"
                                style={{ WebkitUserDrag: "none" }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Tailwind chip style */}
            <style>{`
        .chip {
          @apply inline-flex items-center gap-2 rounded-full bg-gray-50 py-1.5 px-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200;
        }
      `}</style>
        </section>
    );
}
