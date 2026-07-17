import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Workbench({ dark }) {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Clinik",
      desc: "Lukmançylyk merkezleri üçin dolandyryş ulgamy. Patient management, appointment booking we real-time hasabatlar.",
      tech: ["React", "Laravel", "MySQL"],
      image: "/projects/clinik.png", // Bu ýerde suratyňyzy goýarsyňyz
      github: "https://github.com/Bahram2006/clinik", // Proýektiňiziň hakyky linki
      live: "#" // Eger varsa goşuň
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20"> {/* Max-width-i azaldyp, merkezleşdirdim */}

      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <X size={24} />
      </button>

      <h1 className="text-4xl font-bold text-center mb-6">Workbench</h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        Build, learn, and scale. These are my main projects.
      </p>

      <div className="flex justify-center"> {/* Clinik tanyş bolany üçin merkezde durar */}
        {projects.map((p, i) => (
          <div
            key={i}
            className={`w-full max-w-md rounded-xl border overflow-hidden transition duration-300 hover:shadow-2xl
            ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}
          >
            <img src={p.image} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, index) => (
                  <span key={index} className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={p.live} className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Live Demo</a>
                <a href={p.github} className="px-4 py-2 text-sm border border-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}