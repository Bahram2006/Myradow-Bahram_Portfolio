import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaMapMarkerAlt,
} from "react-icons/fa";
export default function Hero({ dark }) {
  const base = import.meta.env.BASE_URL;
  const resumeUrl = `${base}resume.pdf`;
  const logos = [
    { src: `${base}logos/skill-icons--flutter-dark.svg`, name: "Flutter" },
    { src: `${base}logos/skill-icons--htmx-dark.svg`, name: "HTMX" },
    { src: `${base}logos/skill-icons--linkedin.svg`, name: "LinkedIn" },
    {
      src: `${base}logos/skill-icons--powershell-dark.svg`,
      name: "PowerShell",
    },
    { src: `${base}logos/skill-icons--vscode-dark.svg`, name: "VS Code" },
    { src: `${base}logos/skill-icons--typescript.svg`, name: "TypeScript" },
    { src: `${base}logos/skill-icons--vite-dark.svg`, name: "Vite" },
    { src: `${base}logos/skill-icons--mysql-dark.svg`, name: "MySQL" },
    { src: `${base}logos/skill-icons--npm-dark.svg`, name: "NPM" },
    { src: `${base}logos/skill-icons--nodejs-dark.svg`, name: "Node.js" },
    { src: `${base}logos/skill-icons--github-light.svg`, name: "GitHub" },
    { src: `${base}logos/skill-icons--git.svg`, name: "Git" },
    { src: `${base}logos/skill-icons--bootstrap.svg`, name: "Bootstrap" },
    { src: `${base}logos/skill-icons--php-dark.svg`, name: "PHP" },
    { src: `${base}logos/skill-icons--postman.svg`, name: "Postman" },
    { src: `${base}logos/skill-icons--mongodb.svg`, name: "MongoDB" },
    {
      src: `${base}logos/skill-icons--androidstudio-dark.svg`,
      name: "Android Studio",
    },
    { src: `${base}logos/skill-icons--react-dark.svg`, name: "React" },
    { src: `${base}logos/skill-icons--javascript.svg`, name: "JavaScript" },
    {
      src: `${base}logos/skill-icons--tailwindcss-light.svg`,
      name: "Tailwind",
    },
    { src: `${base}logos/skill-icons--css.svg`, name: "CSS3" },
    { src: `${base}logos/skill-icons--html.svg`, name: "HTML5" },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      {/* Profile Image */}
      <div className="group">
        <img
          src={`${import.meta.env.BASE_URL}my-image.png`}
          alt="profile"
          className="w-40 h-40 object-cover rounded-full border-2 border-gray-400 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl font-bold mt-6">Bahram Myradow</h1>

      {/* Title */}
      <p className="mt-3 text-lg text-gray-500 italic">
        Full Stack JavaScript Engineer & React Native App Developer
      </p>

      {/* Social buttons */}
      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <a
          href="mailto:yardam034@gmail.com"
          className={`flex items-center justify-center w-12 h-12 rounded-xl border transition
${
  dark
    ? "border-gray-700 bg-gray-800 text-gray-300 hover:bg-yellow-600 hover:text-white"
    : "border-gray-300 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-yellow-600"
}`}
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/Bahram2006"
          target="_blank"
          className={`flex items-center justify-center w-12 h-12 rounded-xl border transition
${
  dark
    ? "border-gray-700 bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
    : "border-gray-300 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
}`}
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className={`flex items-center justify-center w-12 h-12 rounded-xl border transition
${
  dark
    ? "border-gray-700 bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
    : "border-gray-300 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
}`}
        >
          <FaLinkedin />
        </a>

        <a
          href={resumeUrl}
          className={`flex items-center justify-center w-12 h-12 rounded-xl border transition
${
  dark
    ? "border-gray-700 bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
    : "border-gray-300 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-red-600"
}`}
        >
          <FaFilePdf />
        </a>

        <div className="relative group">
          <div
            className={`flex items-center gap-2 px-4 h-12 rounded-xl border whitespace-nowrap
    ${
      dark
        ? "border-gray-700 bg-gray-800 text-gray-300"
        : "border-gray-300 bg-gray-100 text-gray-700"
    }`}
          >
            <FaMapMarkerAlt className="text-red-500 text-sm" />
            <span>Turkmenistan, Mary</span>
          </div>

          {/* Tooltip */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-8 
  bg-black text-white text-xs px-2 py-1 rounded 
  opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
          >
            Bayramaly.S
          </div>
        </div>
      </div>

      {/* Location */}

      {/* Tech Logos */}
      <div className="relative mt-10 w-full overflow-hidden">
        <div className="flex gap-12 items-center animate-marquee hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="group flex flex-col items-center">
              <img
                src={logo.src}
                className="
      w-12 h-12 object-contain opacity-80
      transition-all duration-300
      group-hover:-translate-y-2
      group-hover:opacity-100
      "
              />

              <span
                className="
      text-xs mt-1 text-gray-400
      opacity-0 group-hover:opacity-100
      transition duration-300
      "
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
