import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Learning({ dark }) {
  const navigate = useNavigate();

  const certs = [
    {
      title: "User's First Touch",
      org: "Meta, IBM, Microsoft, Codecademy",
      count: "50+"
    },
    {
      title: "Behind the Curtain",
      org: "Meta, IBM, Microsoft, Packt",
      count: "40+"
    },
    {
      title: "The Whole Picture",
      org: "IBM, Meta, Microsoft",
      count: "25+"
    },
    {
      title: "Apps in Your Pocket",
      org: "Udemy, Packt",
      count: "8"
    },
    {
      title: "The Infrastructure",
      org: "AWS, IBM, Coursera",
      count: "15+"
    },
    {
      title: "The Future",
      org: "IBM, Scrimba, Coursera",
      count: "15+"
    },
    {
      title: "Making It Pretty",
      org: "Microsoft, Meta, IBM",
      count: "12"
    },
    {
      title: "The Swiss Army Knife",
      org: "Microsoft, IBM, Meta, edX",
      count: "15+"
    },
    {
      title: "Beyond Code",
      org: "Peking Uni, Arizona State, Alison",
      count: "10"
    }
  ];

  const cardStyle = `p-6 rounded-xl border transition hover:-translate-y-1 hover:shadow-lg
  ${
    dark
      ? "border-gray-700 bg-gray-900 text-gray-200"
      : "border-gray-200 bg-white text-gray-700"
  }`;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Close Button */}
      <button 
      onClick={() => navigate(-1)}
      className="absolute top-6 right-6 p-2 rounded-full transition
        hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <X size={24} />
        </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Learning
      </h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        From fundamentals to advanced — proof that I never stop learning.
      </p>

      {/* Certificate Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {certs.map((c, i) => (
          <div key={i} className={cardStyle}>

            <FaCertificate className="text-blue-500 text-2xl mb-4" />

            <h3 className="font-semibold text-lg mb-2">
              {c.title}
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              {c.org}
            </p>

            <span className="text-2xl font-bold text-blue-500">
              {c.count}
            </span>

          </div>
        ))}

      </div>

      {/* LinkedIn Section */}
      <div className="text-center mt-20">

        <p className="text-gray-400 mb-4">
          Want to see the full collection?
        </p>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          View all 200+ certificates on LinkedIn
          <FaExternalLinkAlt />
        </a>

      </div>

    </div>
  );
}