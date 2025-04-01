import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
}

interface ProjectShowcaseProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  categories?: string[];
}

const ProjectShowcase = ({
  title = "My Work",
  subtitle = "A collection of my recent projects showcasing my skills and expertise in frontend development.",
  projects = [
    {
      id: "1",
      title: "E-Commerce Dashboard",
      description:
        "A responsive dashboard for managing online store inventory, orders, and customer data with real-time analytics.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      category: "Web App",
    },
    {
      id: "2",
      title: "Travel Blog Platform",
      description:
        "A modern blog platform for travel enthusiasts with rich media support, interactive maps, and social sharing features.",
      imageUrl:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      liveUrl: "https://example.com/travelblog",
      githubUrl: "https://github.com/username/travel-blog",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Mapbox"],
      category: "Full Stack",
    },
    {
      id: "3",
      title: "Fitness Tracker App",
      description:
        "A mobile-first application for tracking workouts, nutrition, and progress with customizable goals and data visualization.",
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      liveUrl: "https://example.com/fitness",
      githubUrl: "https://github.com/username/fitness-tracker",
      technologies: ["React Native", "Firebase", "Redux", "D3.js"],
      category: "Mobile App",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description:
        "A dark-themed, minimalist portfolio website with smooth animations and responsive design for showcasing creative work.",
      imageUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/username/portfolio",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      category: "Web App",
    },
    {
      id: "5",
      title: "Weather Forecast App",
      description:
        "A sleek weather application with 7-day forecasts, location-based services, and dynamic backgrounds based on weather conditions.",
      imageUrl:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/username/weather-app",
      technologies: ["React", "OpenWeather API", "Styled Components"],
      category: "Web App",
    },
    {
      id: "6",
      title: "Task Management System",
      description:
        "A collaborative task management tool with drag-and-drop interfaces, team assignments, and progress tracking features.",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/username/task-manager",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
    },
  ],
  categories = ["All", "Web App", "Full Stack", "Mobile App"],
}: ProjectShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-black text-white" id="work">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`
                ${
                  activeCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-transparent border-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                }
                transition-colors font-mono
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
