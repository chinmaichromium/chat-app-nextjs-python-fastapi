import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const skillRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const context = gsap.context(() => {
      // Parallax effect for skills
      skillRefs.current.forEach((skill, index) => {
        if (skill) {
          gsap.fromTo(
            skill,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: skill,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Background parallax effect
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          backgroundPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="skills-section"
      ref={sectionRef}
      className="py-16 px-6 bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Top <span className="text-primary">Skills</span>
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card p-4 bg-secondary-foreground rounded-lg shadow-lg text-center text-primary font-medium text-md cursor-pointer"
              ref={(el) => {
                skillRefs.current[index] = el!;
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {skill}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
