import { X, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ResumeCV({ dark }) {
  const navigate = useNavigate();
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <div
      className={`min-h-screen px-6 py-16 ${
        dark ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 right-6 p-2 rounded-full z-50 hover:bg-gray-200 dark:hover:bg-slate-800 transition"
      >
        <X size={26} />
      </button>

      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight">
            Resume CV
          </h1>
          <p className={dark ? "text-slate-400 mt-3" : "text-gray-500 mt-3"}>
            A quick overview of my experience, skills, and projects
          </p>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {/* PREVIEW */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-full border font-medium transition hover:scale-105 ${
              dark
                ? "border-slate-700 hover:bg-slate-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            Preview
          </a>

          {/* DOWNLOAD */}
          <a
            href={resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 hover:shadow-lg transition"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* PDF VIEWER */}
        <div
          className={`rounded-2xl overflow-hidden border ${
            dark
              ? "border-slate-800 bg-slate-900/60"
              : "border-gray-200 bg-white"
          }`}
        >
          <iframe
            src={resumeUrl}
            title="Resume"
            className="w-full h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}