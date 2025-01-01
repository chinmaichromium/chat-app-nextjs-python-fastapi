import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "./utils";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".experience-card",
      { opacity: 0, y: 100, rotateY: 20 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#experience-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience-section" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My <span className="text-primary">Experience</span>
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="experience-card bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpansion(index)}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-primary-foreground">
                    {experience.company}
                  </h3>
                  <p className="text-primary">{experience.role}</p>
                  <p className="text-gray-400">{experience.period}</p>
                </div>
                <motion.span
                  className="text-primary text-xl"
                  animate={{
                    rotate: expandedIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  ▼
                </motion.span>
              </div>
              <motion.div
                className="mt-4 text-primary-foreground"
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div
                  className="mt-2"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{
                    y: expandedIndex === index ? 0 : 10,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {experience.description}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
