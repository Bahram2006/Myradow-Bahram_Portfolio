import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCertificate,
  FaUsers
} from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FindMe({ dark }) {
  const navigate = useNavigate();

  const cardStyle = `p-6 rounded-xl border transition duration-300 hover:-translate-y-2 hover:shadow-lg
  ${
    dark
      ? "border-gray-700 bg-gray-900 text-gray-200"
      : "border-gray-200 bg-white text-gray-700"
  }`;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* Close Button */}
      <button
      onClick={() => navigate(-1)}
      className="absolute top-6 right-6 p-2 rounded-full transition
        hover:bg-gray-200 dark:hover:bg-gray-800">
          <X size={24} />
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Find Me
      </h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        Platforms where you can explore my coding activity,
        projects, certificates and community presence.
      </p>


      <div className="grid md:grid-cols-2 gap-8">

        {/* Coding Challenges */}
        <a
          href="#"
          target="_blank"
          className={cardStyle}
        >
          <FaCode className="text-3xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Coding Challenges
          </h3>
          <p className="text-gray-400 text-sm">
            My coding profiles on platforms where I solve algorithm
            and programming challenges.
          </p>
        </a>


        {/* App Stores */}
        <a
          href="#"
          target="_blank"
          className={cardStyle}
        >
          <FaMobileAlt className="text-3xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            App Stores
          </h3>
          <p className="text-gray-400 text-sm">
            Mobile applications that I have published
            on different app stores.
          </p>
        </a>


        {/* Certificates */}
        <a
          href="#"
          target="_blank"
          className={cardStyle}
        >
          <FaCertificate className="text-3xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Certificates
          </h3>
          <p className="text-gray-400 text-sm">
            Courses and certifications that helped me
            improve my technical skills.
          </p>
        </a>


        {/* Community */}
        <a
          href="#"
          target="_blank"
          className={cardStyle}
        >
          <FaUsers className="text-3xl text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Community
          </h3>
          <p className="text-gray-400 text-sm">
            My participation in developer communities
            and tech platforms.
          </p>
        </a>

      </div>

    </div>
  );
}