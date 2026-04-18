import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Workbench({ dark }) {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind", "Vite"],
      image: "/projects/portfolio.png",
      github: "https://github.com/yourrepo",
      live: "#"
    },
    {
      title: "Task Manager",
      desc: "A simple productivity app for managing daily tasks.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/projects/task.png",
      github: "#",
      live: "#"
    },
    {
      title: "Weather App",
      desc: "Weather forecast application using external API.",
      tech: ["JavaScript", "API", "CSS"],
      image: "/projects/weather.png",
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce UI",
      desc: "Modern shopping interface design.",
      tech: ["React", "Tailwind"],
      image: "/projects/shop.png",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* ❌ CLOSE BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 p-2 rounded-full transition
        hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <X size={24} />
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Workbench
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        A collection of projects where I experiment, learn and build real applications.
      </p>

      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((p, i) => (
          <div
            key={i}
            className={`rounded-xl border overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl
            ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}
          >

            {/* Image */}
            <img
              src={p.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {p.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <a
                  href={p.live}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Live
                </a>

                <a
                  href={p.github}
                  className="px-4 py-2 text-sm border border-gray-400 rounded-lg hover:bg-gray-200"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}