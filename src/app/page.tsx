"use client";

import ExperienceSection from "./_common/components/HomePage/Experience";
import Footer from "./_common/components/HomePage/Footer";
import HeroSection from "./_common/components/HomePage/HeroSection";
import SkillsSection from "./_common/components/HomePage/Skills";
import ThemeSwitcher from "./_common/components/Theme";
import { ThemeWrapper } from "./_common/components/Theme/ThemeWrapper";

export default function Home() {
  return (
    <ThemeWrapper>
      <div className="relative w-full h-screen">
        <ThemeSwitcher />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </ThemeWrapper>
  );
}
