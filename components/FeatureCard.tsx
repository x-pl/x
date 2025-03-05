import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

export default function FeatureCard({ icon, title, description, index }: any) {
  return (
    <Tilt options={{ max: 10, scale: 1, glare: true, "max-glare": 0.1 }}>
      <motion.div
        className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-violet-500/40 transition-all h-full shadow-lg hover:shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{
          boxShadow: "0 25px 35px -5px rgba(139, 92, 246, 0.2)",
          y: -5,
        }}
      >
        <div className="relative mb-6 w-14 h-14">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 opacity-60 blur-sm" />

          <motion.div
            className="relative flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full text-3xl z-10"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
        </div>

        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed">{description}</p>

        <motion.div
          className="mt-5 inline-flex items-center text-violet-400 hover:text-violet-300 text-sm font-medium cursor-pointer group"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="border-b border-violet-500/30 group-hover:border-violet-500/70 transition-colors">
            Learn more
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}
