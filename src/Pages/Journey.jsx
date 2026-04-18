import React from "react";
import { FaRocket, FaCode, FaReact, FaServer, FaGlobe } from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Journey({ dark }) {
  const navigate = useNavigate();
  const timelineItem = "flex items-start gap-4";

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* Close Button */}
      <button 
      onClick={() => navigate(-1)}
      className="absolute top-6 right-6 p-2 rounded-full transition
        hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <X size={24} />
        </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">My Journey</h1>

      {/* Intro */}
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        My journey into programming started with curiosity and grew into a
        passion for building real world applications and solving problems.
      </p>

      {/* Timeline */}
      <div className="border-l-2 border-blue-500 pl-6 space-y-12 mb-20">
        {/* 2021 */}
        <div className={timelineItem}>
          <FaRocket className="text-blue-500 text-xl mt-1" />
          <div>
            <span className="text-sm text-gray-400">2021</span>
            <h3 className="text-lg font-semibold">Started Programming</h3>
            <p className="text-gray-400 text-sm">
              Discovered programming and began learning the basics of web
              development.
            </p>
          </div>
        </div>

        {/* 2022 */}
        <div className={timelineItem}>
          <FaCode className="text-blue-500 text-xl mt-1" />
          <div>
            <span className="text-sm text-gray-400">2022</span>
            <h3 className="text-lg font-semibold">First Websites</h3>
            <p className="text-gray-400 text-sm">
              Built my first websites using HTML, CSS and JavaScript.
            </p>
          </div>
        </div>

        {/* 2023 */}
        <div className={timelineItem}>
          <FaReact className="text-blue-500 text-xl mt-1" />
          <div>
            <span className="text-sm text-gray-400">2023</span>
            <h3 className="text-lg font-semibold">Learning React</h3>
            <p className="text-gray-400 text-sm">
              Started building modern web apps using React and modern JS tools.
            </p>
          </div>
        </div>

        {/* 2024 */}
        <div className={timelineItem}>
          <FaServer className="text-blue-500 text-xl mt-1" />
          <div>
            <span className="text-sm text-gray-400">2024</span>
            <h3 className="text-lg font-semibold">Full Stack Development</h3>
            <p className="text-gray-400 text-sm">
              Expanded my skills into backend development and full stack
              applications.
            </p>
          </div>
        </div>

        {/* Today */}
        <div className={timelineItem}>
          <FaGlobe className="text-blue-500 text-xl mt-1" />
          <div>
            <span className="text-sm text-gray-400">Today</span>
            <h3 className="text-lg font-semibold">Building Real Projects</h3>
            <p className="text-gray-400 text-sm">
              Focused on creating useful products and improving my development
              skills.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Progress */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Skills Growth
        </h2>

        <div className="space-y-6">
          {/* HTML */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[95%]"></div>
            </div>
          </div>

          {/* CSS */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[90%]"></div>
            </div>
          </div>

          {/* JavaScript */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>JavaScript</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[85%]"></div>
            </div>
          </div>

          {/* React */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[80%]"></div>
            </div>
          </div>

          {/* Node */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Node.js</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[70%]"></div>
            </div>
          </div>

          {/* Php */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>PHP</span>
              <span>30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[30%]"></div>
            </div>
          </div>

          {/* git */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Git</span>
              <span>55%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[55%]"></div>
            </div>
          </div>

          {/* API */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Api</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-blue-500 h-2 rounded w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
