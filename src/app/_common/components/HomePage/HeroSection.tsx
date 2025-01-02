import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const highlightVariants = {
    hidden: { scale: 1, opacity: 0 },
    visible: {
      scale: 1.1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 1.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center relative">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, I’m{" "}
          <span
            className="text-primary cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Chinmai
          </span>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="absolute left-1/2 transform -translate-x-1/2 top-[-100]"
            >
              <Image
                src="/images/photo.jpeg"
                alt="Chinmai"
                height={"100"}
                width={"100"}
                style={{
                  borderRadius: "100px",
                }}
              />
            </motion.div>
          )}
        </h1>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Building Scalable, Impactful Solutions.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
          className="text-lg md:text-2xl text-gray-300 mb-8"
        >
          Full-stack engineer with 4+ years of experience, leading development
          at Aglint Inc. Specializing in{" "}
          <motion.span
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            className="text-primary font-semibold"
          >
            Next.js
          </motion.span>
          ,{" "}
          <motion.span
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            className="text-primary font-semibold"
          >
            TypeScript
          </motion.span>
          , and{" "}
          <motion.span
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
            className="text-primary font-semibold"
          >
            Python FastAPI
          </motion.span>{" "}
          to deliver modern, user-focused applications.
        </motion.p>
        <Link
          to="experience-section"
          smooth={true}
          duration={800}
          offset={-70}
          className="cursor-pointer"
        >
          <motion.button whileHover={{ scale: 1.1 }}>
            <Button size={"lg"} className="text-lg font-semibold">
              Explore My Work
            </Button>
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
