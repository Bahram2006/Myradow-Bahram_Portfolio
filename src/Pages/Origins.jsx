import { FaFlag, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Origins({ dark }) {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FaFlag />,
      title: "The Beginning",
      text: "Born in Mary, Turkmenistan. My curiosity for technology started early when I first discovered how software can solve real-world problems."
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning the Fundamentals",
      text: "I began studying programming and computer science fundamentals, exploring JavaScript, web technologies, and problem solving."
    },
    {
      icon: <FaCode />,
      title: "Building Real Projects",
      text: "I started building real applications — from web apps to mobile experiences — turning ideas into functional software."
    },
    {
      icon: <FaRocket />,
      title: "The Future",
      text: "My goal is to build scalable products that help people and create meaningful impact through technology."
    }
  ];

  const cardStyle = `p-6 rounded-xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl
  ${
    dark
      ? "border-gray-700 bg-gray-900 text-gray-200"
      : "border-gray-200 bg-white text-gray-700"
  }`;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

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
        Origins
      </h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        Every developer has a starting point. This is the journey that shaped
        who I am today.
      </p>


      {/* Timeline */}
      <div className="space-y-10">

        {steps.map((step, i) => (

          <div key={i} className="flex items-start gap-6">

            {/* Icon */}
            <div className="text-blue-500 text-2xl mt-1">
              {step.icon}
            </div>

            {/* Card */}
            <div className={cardStyle}>

              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {step.text}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* Quote */}
      <div className="mt-20 text-center">

        <p className="italic text-lg text-gray-400 max-w-xl mx-auto">
          “Great software starts with curiosity, grows through persistence,
          and succeeds by helping people.”
        </p>

      </div>

    </div>
  );
}