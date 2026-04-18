import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Languages({ dark }) {
  const navigate = useNavigate();

  const languages = [
    {
      name: "Turkmen",
      level: "Native",
      percent: "100%",
      flag: "https://flagcdn.com/w40/tm.png"
    },
    {
      name: "Turkish",
      level: "Native",
      percent: "100%",
      flag: "https://flagcdn.com/w40/tr.png"
    },
    {
      name: "Russian",
      level: "C1",
      percent: "85%",
      flag: "https://flagcdn.com/w40/ru.png"
    },
    {
      name: "English",
      level: "B2",
      percent: "70%",
      flag: "https://flagcdn.com/w40/gb.png"
    },
    {
      name: "Arabic",
      level: "A1",
      percent: "30%",
      flag: "https://flagcdn.com/w40/sa.png"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

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
        Languages
      </h1>

      <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">
        Languages I use for communication and collaboration.
      </p>


      <div className="space-y-8">

        {languages.map((lang, i) => (

          <div key={i}>

            <div className="flex items-center justify-between mb-2">

              <div className="flex items-center gap-3">

                {/* Flag */}
                <img
                  src={lang.flag}
                  className="w-7 h-5 object-cover rounded"
                />

                <span className="font-semibold">
                  {lang.name}
                </span>

              </div>

              <span className="text-gray-400 text-sm">
                {lang.level}
              </span>

            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-200 rounded">

              <div
                className="h-3 bg-blue-500 rounded"
                style={{ width: lang.percent }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}