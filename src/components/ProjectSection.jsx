import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectData } from "../data/ProjectData.js";


export default function ProjectSection() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Project Highlights
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
          Showcasing full-stack apps, UX-focused interfaces, and WordPress performance works.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectData.map((project, idx) => {
            // safe defaults
            const {
              title = "Untitled Project",
              description = "",
              image = null,
              siteLink = "#",
              githubLink = "",
              tags = [],
            } = project;

            return (
              <article
                key={idx}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative w-full flex-shrink-0">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-gray-50">
                    {image ? (
                      <img
                        src={`/images/${image}`}
                        alt={`${title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        No image
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  </div>

                  {tags && tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-4 text-sm text-gray-600 flex-1">{description}</p>

                  {/* actions */}
                  <div className="mt-5 flex w-full gap-3">
                    <a
                      href={siteLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live site for ${title}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Live Site
                    </a>

                    {githubLink ? (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repo for ${title}`}
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
                        title="No GitHub link"
                      >
                        <FaGithub className="h-4 w-4" />
                        GitHub
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
