"use client";

import Image from "next/image";
import { Suspense, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import NoiseTexture from "@/components/NoiseTexture";
import { Tilt } from "react-tilt";
import { TypeAnimation } from "react-type-animation";
import Footer from "@/components/Layout/Footer";
import { Highlight, themes } from "prism-react-renderer";

import XLogo from "@/components/XLogo";
import ParticleField from "@/components/ParticleField";
import FeatureCard from "@/components/FeatureCard";
import PerformanceChart from "@/components/PerformanceChart";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const codeOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const codeScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCodeHovered, setIsCodeHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const codeExample = `fn bubble_sort(arr) {
    let n = 5;
    let i = 0;
    
    while i < n {
        let j = 0;
        while j < n - i - 1 {
            if arr[j] > arr[j + 1] {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            j = j + 1;
        }
        i = i + 1;
    }
}`;
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden font-inter">
      <NoiseTexture />

      <div className="fixed inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 10], fov: 65 }}>
          <ambientLight intensity={0.15} />
          <ParticleField />
          <Stars
            radius={120}
            depth={60}
            count={7000}
            factor={5}
            saturation={0.2}
            fade
            speed={0.8}
          />
        </Canvas>
      </div>

      <div
        className="fixed w-[45vw] h-[45vw] rounded-full bg-gradient-radial from-violet-600/30 via-indigo-600/10 to-transparent blur-3xl z-0"
        style={{
          left: `calc(${mousePosition.x * 25}% + 50%)`,
          top: `calc(${mousePosition.y * 25}% + 30%)`,
          transform: "translate(-50%, -50%)",
          transition:
            "left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
      <div
        className="fixed w-[30vw] h-[30vw] rounded-full bg-gradient-radial from-blue-600/15 via-cyan-600/5 to-transparent blur-3xl z-0"
        style={{
          left: `calc(${mousePosition.x * -18}% + 30%)`,
          top: `calc(${mousePosition.y * -18}% + 60%)`,
          transform: "translate(-50%, -50%)",
          transition:
            "left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      <div className="min-h-screen flex items-center relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-5/12 mb-10 lg:mb-0">
              <motion.div
                className="relative mb-6 h-36 w-36"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  duration: 0.8,
                }}
              >
                <Canvas>
                  <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                  <ambientLight intensity={0.5} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                  />
                  <spotLight
                    position={[-10, -10, -10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={0.5}
                  />
                  <Suspense fallback={null}>
                    <XLogo />
                    <Environment preset="city" />
                  </Suspense>
                </Canvas>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl font-bold mb-5 bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                The X Programming Language
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl font-light mb-8 text-gray-300 tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                A modern systems programming language
              </motion.h2>

              <motion.div
                className="text-xl text-gray-300/90 mb-10 h-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <TypeAnimation
                  sequence={[
                    "Compiled for performance.",
                    1000,
                    "JIT executed for flexibility.",
                    1000,
                    "Interpreted for rapid development.",
                    1000,
                    "Zero-cost abstractions for efficiency.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-light italic"
                />
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-5 mb-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Tilt options={{ max: 5, scale: 1.05 }}>
                  <motion.a
                    href="#"
                    className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium transition-all shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/30 flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Get Started</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.a>
                </Tilt>
                <Tilt options={{ max: 15, scale: 1.05 }}>
                  <motion.a
                    href="#"
                    className="px-8 py-4 rounded-lg border border-gray-700 hover:border-violet-500/50 backdrop-blur-sm bg-gray-800/30 transition-all flex items-center justify-center"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Documentation</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </motion.a>
                </Tilt>
              </motion.div>
            </div>

            <motion.div
              className="lg:w-6/12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Tilt
                options={{ max: 5, scale: 1, glare: true, "max-glare": 0.05 }}
              >
                <div
                  className="rounded-xl overflow-hidden shadow-2xl shadow-violet-900/20 relative transition-all duration-300"
                  style={{
                    boxShadow: isCodeHovered
                      ? "0 25px 40px -10px rgba(139, 92, 246, 0.35), 0 10px 20px -5px rgba(59, 130, 246, 0.35)"
                      : "0 15px 30px -10px rgba(139, 92, 246, 0.25)",
                  }}
                  onMouseEnter={() => setIsCodeHovered(true)}
                  onMouseLeave={() => setIsCodeHovered(false)}
                >
                  {isCodeHovered && (
                    <motion.div
                      className="absolute inset-0 border-2 border-violet-500/40 rounded-xl z-10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  )}
                  <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <Image
                      src="/Icons/x.png"
                      alt="X Icon"
                      width={20}
                      height={20}
                      className="rounded-full ml-2"
                    />
                    <span className="text-gray-400 text-sm ml- font-mono">
                      bubble_sort.x
                    </span>
                  </div>
                  <div className="bg-[#0D1117] p-4 font-mono text-sm sm:text-base overflow-auto">
                    <Highlight
                      theme={{
                        ...themes.nightOwl,
                        plain: {
                          ...themes.nightOwl.plain,
                          backgroundColor: "transparent",
                        },
                        styles: [
                          ...themes.nightOwl.styles,
                          {
                            types: ["keyword", "builtin"],
                            style: { color: "#c678dd" },
                          },
                          {
                            types: ["class-name", "function"],
                            style: { color: "#61afef" },
                          },
                          {
                            types: ["string", "attr-name"],
                            style: { color: "#98c379" },
                          },
                          {
                            types: ["comment"],
                            style: { color: "#7d8799", fontStyle: "italic" },
                          },
                        ],
                      }}
                      code={codeExample}
                      language="rust"
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={className}
                          style={{ ...style, background: "transparent" }}
                        >
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              <span className="text-gray-500 mr-4">
                                {i + 1}
                              </span>
                              {line.map((token, key) => (
                                <span
                                  key={key}
                                  {...getTokenProps({ token, key })}
                                />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-24 px-4 relative z-10" id="features">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block mb-3"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20">
                <div className="p-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600">
                  <Image
                    src="/Icons/x.png"
                    height={20}
                    width={20}
                    alt="X Programming Language Icon"
                    className="rounded-full "
                  />
                </div>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-500 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Powerful Features
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              X language combines modern syntax with performance-critical
              systems programming, giving you the best of both worlds.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "High Performance",
                description:
                  "Built on LLVM with Rust-inspired optimizations for blazing fast execution and minimal memory footprint.",
              },
              {
                icon: "🛠️",
                title: "Multi-paradigm",
                description:
                  "Supports compiled, JIT, and interpreted modes for maximum flexibility across different use cases and environments.",
              },
              {
                icon: "📦",
                title: "Zero-Cost Abstractions",
                description:
                  "Write high-level code with abstractions that compile away completely, giving you bare-metal performance.",
              },
              {
                icon: "🔄",
                title: "Modern Syntax",
                description:
                  "Clean, intuitive syntax with powerful features like lambdas and structs.",
              },
              {
                icon: "🧩",
                title: "Advanced Type System",
                description:
                  "Strong dynamic typing with powerful type inference and compile-time guarantees.",
              },
              {
                icon: "🚀",
                title: "Growing Ecosystem",
                description:
                  "A rapidly expanding collection of libraries, tools, and frameworks for web, systems, and application development.",
              },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Performance Benchmarks
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <PerformanceChart />
        </div>
      </div>
      <Footer />
    </div>
  );
}
