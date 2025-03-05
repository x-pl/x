"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-10 relative z-10 backdrop-blur-md bg-black/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="text-gray-400 mb-4 md:mb-0 flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mr-2 text-purple-500 text-2xl">X</div>
          <div>© {new Date().getFullYear()} X Programming Language</div>
        </motion.div>
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { text: "GitHub", href: "https://github.com/x-pl" },
            { text: "Documentation", href: "#" },
          ].map((link, i) => (
            <FooterLink
              key={i}
              href={link.href}
              text={link.text}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text, delay = 0 }: any) {
  return (
    <motion.a
      href={href}
      className="text-gray-400 hover:text-white transition-colors relative group"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ color: "#8B5CF6" }}
    >
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
    </motion.a>
  );
}
