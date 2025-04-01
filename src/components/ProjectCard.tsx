import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used in development.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  liveUrl = "https://example.com",
  githubUrl = "https://github.com/username/repo",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-black border border-gray-800 hover:border-blue-600 transition-all duration-300">
        <div className="relative overflow-hidden aspect-video">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-mono font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                  onClick={() => window.open(liveUrl, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View live project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                  onClick={() => window.open(githubUrl, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View source code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
