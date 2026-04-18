import React from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="
      fixed bottom-8 right-8
      w-14 h-14
      bg-blue-600
      text-white
      rounded-xl
      shadow-lg
      flex items-center justify-center
      hover:bg-blue-700
      hover:scale-110
      transition-all duration-300
      "
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}