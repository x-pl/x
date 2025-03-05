import React, { useState, useEffect } from "react";
import { TbChartBar } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

interface LanguagePerformance {
  language: string;
  icon: React.ReactNode;
  color: string;
  executionTime: number;
  memoryUsage: number;
}

const PerformanceChart = () => {
  const [animate, setAnimate] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const performanceData: LanguagePerformance[] = [
    {
      language: "X",
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Image
            src="/Icons/x.png"
            alt="X Language"
            width={24}
            height={24}
            className="object-contain rounded-full"
          />
        </div>
      ),
      color: "#7C3AED",
      executionTime: 8,
      memoryUsage: 2,
    },
    {
      language: "Rust",
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Image
            src="/Icons/rust.png"
            alt="Rust Language"
            width={24}
            height={24}
            className="object-contain rounded-full invert"
          />
        </div>
      ),
      color: "#DEA584",
      executionTime: 12,
      memoryUsage: 4,
    },
    {
      language: "C++",
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Image
            src="/Icons/c++.png"
            alt="C++ Language"
            width={24}
            height={24}
            className="object-contain rounded-full"
          />
        </div>
      ),
      color: "#044F88",
      executionTime: 14,
      memoryUsage: 8,
    },
    {
      language: "TypeScript",
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Image
            src="/Icons/typescript.png"
            alt="TypeScript Language"
            width={24}
            height={24}
            className="object-contain rounded-full"
          />
        </div>
      ),
      color: "#3178C6",
      executionTime: 89,
      memoryUsage: 45,
    },
    {
      language: "Python",
      icon: (
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Image
            src="/Icons/python.png"
            alt="Python Language"
            width={24}
            height={24}
            className="object-contain rounded-full"
          />
        </div>
      ),
      color: "#4584B6",
      executionTime: 210,
      memoryUsage: 58,
    },
  ];

  const sortedData = [...performanceData].sort(
    (a, b) => a.executionTime - b.executionTime
  );
  const maxTime = Math.max(...performanceData.map((d) => d.executionTime));

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Tilt options={{ max: 5, scale: 1, glare: true, "max-glare": 0.1 }}>
      <div className="w-full p-8 bg-zinc-900/80 backdrop-blur-lg rounded-xl border border-zinc-800/60 shadow-2xl shadow-violet-900/20 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="p-2 rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 mr-3">
              <TbChartBar size={28} className="text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 text-transparent bg-clip-text">
              Language Performance Comparison
            </h2>
          </div>

          <div className="space-y-8">
            {sortedData.map((lang, i) => (
              <div
                key={lang.language}
                className="space-y-2"
                onMouseEnter={() => setHoveredBar(lang.language)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div
                      className={`p-1 rounded-lg ${
                        lang.language === "X"
                          ? "bg-gradient-to-r from-violet-500/20 to-blue-500/20"
                          : ""
                      } mr-2`}
                    >
                      {lang.icon}
                    </div>
                    <span
                      className={`text-white font-medium ${
                        lang.language === "X"
                          ? "bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text"
                          : ""
                      }`}
                    >
                      {lang.language}
                    </span>
                    {lang.language === "X" && (
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-white shadow-lg shadow-violet-600/20">
                        Fastest
                      </span>
                    )}
                  </div>
                  <motion.span
                    className={`text-sm font-mono ${
                      lang.language === "X"
                        ? "text-white font-semibold"
                        : "text-zinc-400"
                    }`}
                    animate={{ scale: hoveredBar === lang.language ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {lang.executionTime} ms
                  </motion.span>
                </div>

                <div className="h-10 w-full bg-zinc-800/60 backdrop-blur-sm rounded-lg overflow-hidden relative shadow-inner">
                  {lang.language === "X" && (
                    <motion.div
                      className="absolute inset-0 opacity-30 z-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredBar === lang.language ? 0.4 : 0.15,
                      }}
                    >
                      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500 via-transparent to-transparent opacity-60"></div>
                    </motion.div>
                  )}
                  <motion.div
                    className={`h-full rounded-lg absolute left-0 top-0 z-10 ${
                      lang.language === "X"
                        ? "bg-gradient-to-r from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20"
                        : ""
                    }`}
                    style={{
                      backgroundColor:
                        lang.language !== "X" ? lang.color : undefined,
                    }}
                    initial={{ width: 0 }}
                    animate={
                      animate
                        ? {
                            width: `${(lang.executionTime / maxTime) * 100}%`,
                            filter:
                              hoveredBar === lang.language
                                ? "brightness(1.2)"
                                : "brightness(1)",
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                </div>

                <div className="flex justify-between text-xs">
                  <span
                    className={`${
                      lang.language === "X"
                        ? "text-violet-400"
                        : "text-zinc-500"
                    }`}
                  >
                    Memory: {lang.memoryUsage} MB
                  </span>
                  <span className="text-zinc-500">
                    Benchmark: Binary tree traversal
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800/60">
            <p className="text-xs text-zinc-500">
              Lower execution time is better. Benchmark performed on equivalent
              implementations.
            </p>
            <div className="flex items-center justify-end mt-2">
              <div className="flex items-center text-xs text-violet-400/70">
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-blue-500 mr-1"></div>
                <span>Optimized for performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default PerformanceChart;
