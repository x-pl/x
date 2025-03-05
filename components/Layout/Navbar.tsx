"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "#docs" },
    { name: "Community", href: "#community" },
    { name: "Benchmarks", href: "#benchmarks" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-gray-900/70"
          : "py-5 bg-transparent"
      } transition-all duration-300 px-4 md:px-6`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center hover:opacity-80 transition-opacity">
              <div className="relative h-9 w-9 mr-2">
                <div className="absolute inset-0 bg-blue-500 rounded-md blur-sm opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text rounded-md">
                  X
                </div>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Language
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              isActive={pathname === item.href}
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="https://github.com/WillKirkmanM/x-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 ml-4 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium transition-all text-sm flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://github.com/x-pl"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-2 rounded-full bg-gradient-to-r from-gray-800/80 via-gray-700/80 to-gray-800/80 border border-gray-700 hover:border-violet-500/50 hover:from-gray-700/80 hover:to-gray-600/80 text-sm flex items-center gap-1.5 transition-all duration-300"
          >
            <Image
              src="/Icons/x.png"
              alt="X Logo"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span className="text-gray-300">X Organisation</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 flex justify-center items-center"
          >
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden overflow-hidden">
          <div className="py-4 mt-3 border-t border-gray-800 backdrop-blur-xl bg-gray-900/80 rounded-b-2xl px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-white transition-colors hover:translate-x-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/WillKirkmanM/x-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-white hover:translate-x-1 transition-transform"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://github.com/x-pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-white hover:translate-x-1 transition-transform"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/Icons/x.png"
                alt="X Logo"
                width={18}
                height={18}
                className="rounded-full"
              />
              X Organisation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, isActive }: any) {
  return (
    <Link href={href}>
      <div className="px-4 py-2 relative group">
        <span className="relative z-10 text-sm font-medium transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
        <span
          className={`absolute bottom-0 left-0 h-0.5 ${
            isActive
              ? "bg-gradient-to-r from-violet-500 to-blue-500 w-full"
              : "bg-gray-700 w-0"
          } rounded-full z-0 transition-all duration-300 group-hover:w-full`}
        />
      </div>
    </Link>
  );
}
