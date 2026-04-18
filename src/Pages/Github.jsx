import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Github({ dark }) {
  const navigate = useNavigate();

  const username = "Bahram2006";

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
        GitHub Activity
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        My open source activity, contributions and repositories.
      </p>


      <div className="flex flex-col items-center gap-12">

        {/* GitHub Stats */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
        />

        {/* Contribution Streak */}
        <img
          src={`https://streak-stats.demolab.com?user=${username}&theme=radical`}
        />

        {/* Most Used Languages */}
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
        />

        {/* Contribution Calendar */}
        <img
          src={`https://ghchart.rshah.org/${username}`}
          className="w-full"
        />

      </div>


      {/* Popular Repositories */}
      <div className="mt-20">

        <h2 className="text-2xl font-semibold mb-10 text-center">
          Popular Repositories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Repo 1 */}
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=github&theme=radical`}
          />

          {/* Repo 2 */}
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=Portföy&theme=radical`}
          />

          {/* Repo 3 */}
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=HTML-CSS-JS-PORTFOLYO&theme=radical`}
          />

          {/* Repo 4 */}
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=Portföyum&theme=radical`}
          />

        </div>

      </div>

    </div>
  );
}