import React from "react";
import { useState, useEffect } from "react";

export default function Navbar({ dark, setDark, setActive }) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
    });

    setActive(id);
  };

  const navStyle = `px-3 py-1 rounded-lg border transition duration-200
  ${
    dark
      ? "border-transparent hover:border-gray-600 hover:bg-gray-800"
      : "border-transparent hover:border-gray-300 hover:bg-gray-100"
  }`;

  return (
    <nav
  className={`sticky top-0 z-50 w-full border-b transition-all duration-300

  ${
    scrolled
      ? dark
        ? "bg-black border-gray-800 text-white"
        : "bg-white border-gray-200 text-black"
      : "bg-transparent border-transparent"
  }

`}
>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">

        {/* LEFT EMPTY */}
        <div className="w-24"></div>

        {/* CENTER MENU */}
        <div className="flex gap-8 text-lg font-semibold">

          <button onClick={() => scrollToSection("story")} className={navStyle}>
            Story
          </button>

          <button onClick={() => scrollToSection("journey")} className={navStyle}>
            Journey
          </button>

          <button onClick={() => scrollToSection("toolkit")} className={navStyle}>
            Toolkit
          </button>

          <button onClick={() => scrollToSection("workbench")} className={navStyle}>
            Workbench
          </button>

          <button onClick={() => scrollToSection("github")} className={navStyle}>
            GitHub
          </button>

          <button onClick={() => scrollToSection("findme")} className={`${navStyle} whitespace-nowrap`}>
            Find Me
          </button>

          <button onClick={() => scrollToSection("languages")} className={navStyle}>
            Languages
          </button>

          <button onClick={() => scrollToSection("learning")} className={navStyle}>
            Learning
          </button>

          <button onClick={() => scrollToSection("origins")} className={navStyle}>
            Origins
          </button>

          <button onClick={() => scrollToSection("chat")} className={navStyle}>
            ChatMe
          </button>

        </div>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDark(!dark)}
          className="border border-gray-600 px-3 py-1 rounded-lg hover:bg-gray-800 transition"
        >
          {dark ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}