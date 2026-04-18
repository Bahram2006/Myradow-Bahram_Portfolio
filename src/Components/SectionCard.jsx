import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaFolderOpen,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function SectionCard({
  id,
  title,
  subtitle,
  link,
  dark,
  active,
}) {
  const navigate = useNavigate();

  const iconMap = {
    story: <FaGraduationCap />,
    journey: <FaGraduationCap />,
    toolkit: <FaCode />,
    workbench: <FaFolderOpen />,
    github: <FaGithub />,
    findme: <FaGlobe />,
    languages: <MdLanguage />,
    learning: <FaCode />,
    origins: <FaGraduationCap />,
    resume: <FaFolderOpen />,
  };

  return (
    <div
      onClick={() => navigate(link)}
      className={`group p-6 rounded-xl border cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg

      ${
        dark
          ? "border-gray-700 hover:border-gray-500 hover:bg-gray-900"
          : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
      }

      ${active ? "ring-2 ring-blue-500" : ""}
      `}
    >
      <div className="flex items-center gap-4">
        {/* ICON */}
        <div
          className={`text-2xl transition-colors duration-300
  ${
    dark
      ? "text-white group-hover:text-blue-400"
      : "text-gray-500 group-hover:text-blue-600"
  }`}
        >
          {iconMap[id]}
        </div>

        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
