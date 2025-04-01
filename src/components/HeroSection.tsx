import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title = "Frontend Developer",
  subtitle = "Crafting beautiful, responsive, and user-friendly web experiences with modern technologies and clean code.",
  ctaText = "View My Work",
  ctaLink = "#work",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center bg-black text-white px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-80"></div>

      {/* Content container */}
      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            {subtitle}
          </p>
          <div className="pt-4">
            <Button
              asChild
              className="group text-base px-6 py-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Device mockup */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            {/* Tilted device mockup */}
            <div className="relative transform rotate-6 hover:rotate-0 transition-all duration-500 shadow-2xl">
              <div className="bg-gray-800 rounded-xl overflow-hidden border-4 border-gray-700">
                {/* Device frame */}
                <div className="w-full h-6 bg-gray-900 flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>

                {/* Device screen content */}
                <div className="aspect-[16/10] bg-gray-900 overflow-hidden">
                  <img
                    src="blob:https://imgur.com/ff13db9e-1561-4e2e-869c-fb41c8135044"
                    alt="Featured project"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
