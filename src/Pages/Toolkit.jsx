import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAndroid, FaPhp, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiVite, SiFlutter, SiNpm, SiNextdotjs, SiNestjs, SiGo, SiPostgresql, SiLaravel } from "react-icons/si";

export default function Toolkit({ dark }) {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "SASS", icon: <FaCss3Alt className="text-pink-500" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
        { name: "Go", icon: <SiGo className="text-cyan-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "NPM", icon: <SiNpm className="text-red-500" /> }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <button onClick={() => navigate(-1)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
        <X size={24} />
      </button>

      <h1 className="text-4xl font-bold text-center mb-6">My Toolkit</h1>
      <p className="text-center text-gray-500 mb-16">Technologies and tools I use.</p>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">{section.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {section.skills.map((skill, i) => (
              <div key={i} className={`flex flex-col items-center p-4 rounded-xl border transition hover:-translate-y-2 ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
                <div className="text-4xl mb-3">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}