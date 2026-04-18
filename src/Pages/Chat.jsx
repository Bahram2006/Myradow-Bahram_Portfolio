import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChatMe({ dark }) {
  const navigate = useNavigate();
  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      value: "youremail@example.com",
      link: "mailto:youremail@example.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      value: "linkedin.com/in/yourname",
      link: "https://linkedin.com/in/yourname",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      value: "github.com/yourname",
      link: "https://github.com/yourname",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      value: "@yourusername",
      link: "https://t.me/yourusername",
    },
  ];

  return (
    <section
      className={`min-h-screen px-6 py-24 transition-colors duration-300
      ${dark 
        ? "bg-gradient-to-br from-[#020617] to-[#0f172a] text-white" 
        : "bg-gradient-to-br from-gray-50 to-white text-gray-900"}
      `}
    >
      <div className="max-w-5xl mx-auto">

        {/* Close Button */}
        <button 
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 p-2 rounded-full transition
        hover:bg-gray-200 dark:hover:bg-gray-800">
          <X size={24} />
        </button>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Chat With Me</h1>
          <p className={`${dark ? "text-slate-400" : "text-gray-500"} mt-4`}>
            Let’s connect and build something great together 🚀
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[1px] rounded-2xl transition"
            >

              {/* gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent opacity-70 group-hover:opacity-100 blur-[1px]"></div>

              <div
                className={`relative flex items-center gap-5 p-6 rounded-2xl border backdrop-blur-xl transition
                ${dark 
                  ? "bg-slate-900/80 border-slate-800" 
                  : "bg-white/80 border-gray-200"}
                `}
              >

                {/* Icon */}
                <div className="text-2xl text-blue-500 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className={`${dark ? "text-slate-400" : "text-gray-500"} text-sm`}>
                    {item.value}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`ml-auto transition ${dark ? "text-slate-400" : "text-gray-400"} group-hover:text-blue-500`}>
                  →
                </div>

              </div>
            </a>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className={`${dark ? "text-slate-400" : "text-gray-500"} mb-4`}>
            Prefer email? Let’s talk directly.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="inline-block px-8 py-3 rounded-full font-medium
            bg-gradient-to-r from-blue-600 to-indigo-600 text-white
            hover:scale-105 hover:shadow-lg transition"
          >
            Send Message
          </a>
        </div>

      </div>
    </section>
  );
}