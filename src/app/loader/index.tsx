"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + 3;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/Intro_bg.jpg')", zIndex: 99999 ,}}
    >
      {/* Background Sweep (beige) */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-[#e4d5d4] z-0 bg-cover"
        animate={{ width: `${percentage}%` }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
         style={{ backgroundImage: "url('/Relaam_bg.png')"}}
      />

      {/* Percentage counter */}
      <motion.div
        className="absolute bottom-5 text-[120px] font-normal z-10 mix-blend-difference pr-20"
        animate={{ left: `${percentage}%` }}
        transition={{ ease: "linear", duration: 0.2 }}
        style={{
          transform: "translateX(-100%)",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
      >
        {percentage}
      </motion.div>
    </div>
  );
};

export default Loader;