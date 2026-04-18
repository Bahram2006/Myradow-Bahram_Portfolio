import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAndroid,
} from "react-icons/fa";

import React from "react";

import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
  SiFlutter,
  SiNpm,
} from "react-icons/si";

import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Toolkit({ dark }) {
  const navigate = useNavigate();

  const card =
    "flex flex-col items-center justify-center p-6 rounded-xl border transition duration-300 hover:-translate-y-2 hover:shadow-lg";

  const style = dark
    ? "border-gray-700 bg-gray-900 text-gray-200"
    : "border-gray-200 bg-white text-gray-700";

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
      <h1 className="text-4xl font-bold text-center mb-6">My Toolkit</h1>

      {/* Intro */}
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        Technologies and tools I use to build modern web and mobile
        applications.
      </p>

      {/* FRONTEND */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Frontend</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`${card} ${style}`}>
            <FaHtml5 className="text-4xl text-orange-500 mb-3" />
            HTML5
          </div>

          <div className={`${card} ${style}`}>
            <FaCss3Alt className="text-4xl text-blue-500 mb-3" />
            CSS3
          </div>

          <div className={`${card} ${style}`}>
            <FaJs className="text-4xl text-yellow-400 mb-3" />
            JavaScript
          </div>

          <div className={`${card} ${style}`}>
            <FaReact className="text-4xl text-cyan-400 mb-3" />
            React
          </div>

          <div className={`${card} ${style}`}>
            <SiTailwindcss className="text-4xl text-sky-400 mb-3" />
            Tailwind
          </div>

          <div className={`${card} ${style}`}>
            <SiBootstrap className="text-4xl text-purple-500 mb-3" />
            Bootstrap
          </div>
        </div>
      </div>

      {/* BACKEND */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Backend</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`${card} ${style}`}>
            <FaNodeJs className="text-4xl text-green-500 mb-3" />
            Node.js
          </div>
        </div>
      </div>

      {/* DATABASE */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Database</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`${card} ${style}`}>
            <SiMongodb className="text-4xl text-green-600 mb-3" />
            MongoDB
          </div>

          <div className={`${card} ${style}`}>
            <SiMysql className="text-4xl text-blue-600 mb-3" />
            MySQL
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Tools</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`${card} ${style}`}>
            <FaGitAlt className="text-4xl text-orange-600 mb-3" />
            Git
          </div>

          <div className={`${card} ${style}`}>
            <FaGithub className="text-4xl mb-3" />
            GitHub
          </div>

          <div className={`${card} ${style}`}>
            <SiPostman className="text-4xl text-orange-500 mb-3" />
            Postman
          </div>

          <div className={`${card} ${style}`}>
            <SiVite className="text-4xl text-purple-500 mb-3" />
            Vite
          </div>

          <div className={`${card} ${style}`}>
            <SiNpm className="text-4xl text-red-500 mb-3" />
            NPM
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Mobile</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`${card} ${style}`}>
            <FaReact className="text-4xl text-cyan-400 mb-3" />
            React Native
          </div>

          <div className={`${card} ${style}`}>
            <SiFlutter className="text-4xl text-blue-400 mb-3" />
            Flutter
          </div>

          <div className={`${card} ${style}`}>
            <FaAndroid className="text-4xl text-green-500 mb-3" />
            Android Studio
          </div>
        </div>
      </div>
    </div>
  );
}
