import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Redux",
  "TypeScript",
  "AWS",
  "GCP",
  "Express",
  "Next.js",
  "PostgreSQL",
  "Vercel",
  "Python",
  "LLM",
  "Prisma",
  "Playwright",
  "React Native",
  "Langchain",
  "Python FastAPI",
  "Jest",
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };

  const loopingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  return (
    <section
      id="skills-section"
      className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Top <span className="text-primary">Skills</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card p-2 bg-gray-700 rounded-lg shadow-lg text-center text-primary font-medium text-md cursor-pointer"
              variants={skillVariants}
              whileHover="hover"
            >
              <motion.span
                className="inline-block"
                variants={loopingVariants}
                animate="animate"
              >
                {skill}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
