import { useEffect, useState } from "react";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects.json", err));
  }, []);

  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Dive into My Creations!
          </p>
        </div>

    <div className="mt-2 p-5 sm:p-5 lg:flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-2 lg:w-full lg:max-w-md mx-auto items-center justify-center">
              <div className="mx-auto max-w-xs px-8 text-center">
                <p className="text-base font-semibold text-gray-600">
                  {project.title}
                </p>

    {/* Image Container */}
        <div className="mb-6">
        <img
            src={`/images/${project.image}`}
            alt={`${project.title}-IMG`}
            className="w-full h-40 object-cover rounded-md mt-5"
        />
        </div>

    {/* Visit Site Button */}
        <a
        href={project.siteLink}
        target="_blank"
        rel="noreferrer"
        className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600 hover:text-white"
        >
        Visit Site
        </a>

    {/* GitHub Button */}
        <a
        href={project.githubLink}
        target="_blank"
        rel="noreferrer"
        className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600 hover:text-white"
        >
        GitHub Link
        </a>

    {/* Description */}
        <p className="mt-6 text-xs leading-5 text-gray-600">
        {project.description}
        </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
