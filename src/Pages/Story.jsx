import React from "react";
import {
  FaUser,
  FaRocket,
  FaBullseye,
  FaCertificate,
  FaCode,
  FaHeart
} from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Story({ dark }) {
  const navigate = useNavigate();

  const cardStyle = `p-6 rounded-xl border transition duration-300 hover:-translate-y-1 hover:shadow-lg
  ${
    dark
      ? "border-gray-700 bg-gray-900 text-gray-200"
      : "border-gray-200 bg-white text-gray-700"
  }`;

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-20">

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
        My Story
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        I'm Bahram Myradow, a passionate Full Stack JavaScript Developer
        from Turkmenistan. I enjoy building modern web applications and
        constantly improving my skills.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">

        <div className={cardStyle}>
          <FaUser className="text-2xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
          <p className="text-gray-400 text-sm">
            A developer passionate about modern technologies and clean UI.
          </p>
        </div>

        <div className={cardStyle}>
          <FaRocket className="text-2xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">What I Do</h3>
          <p className="text-gray-400 text-sm">
            Building full stack web applications using React and Node.js.
          </p>
        </div>

        <div className={cardStyle}>
          <FaBullseye className="text-2xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">My Goal</h3>
          <p className="text-gray-400 text-sm">
            Create scalable products that solve real world problems.
          </p>
        </div>

        <div className={cardStyle}>
          <FaCertificate className="text-2xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Certificates</h3>
          <p className="text-gray-400 text-sm">
            Courses and certifications that helped improve my skills.
          </p>
        </div>

        <div className={cardStyle}>
          <FaCode className="text-2xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
          <p className="text-gray-400 text-sm">
            Practical applications and real world projects I have built.
          </p>
        </div>

        <div className={cardStyle}>
          <FaHeart className="text-2xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">My Passion</h3>
          <p className="text-gray-400 text-sm">
            I enjoy turning people's ideas into real projects and building
            solutions that make life easier and more efficient.
          </p>
        </div>

      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">

        <h2 className="text-2xl font-semibold mb-10 text-center">
          My Journey
        </h2>

        <div className="space-y-8 border-l-2 border-blue-500 pl-6">

          <div>
            <span className="text-sm text-gray-400">2021</span>
            <p className="font-medium">Started learning programming</p>
          </div>

          <div>
            <span className="text-sm text-gray-400">2022</span>
            <p className="font-medium">Built my first websites</p>
          </div>

          <div>
            <span className="text-sm text-gray-400">2023</span>
            <p className="font-medium">Learned React and backend development</p>
          </div>

          <div>
            <span className="text-sm text-gray-400">2024</span>
            <p className="font-medium">Building full stack applications</p>
          </div>

        </div>

      </div>

    </div>
  );
}