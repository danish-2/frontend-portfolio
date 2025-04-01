import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectShowcase from "./ProjectShowcase";
import ContactSection from "./ContactSection";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  // Animation variants for page sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Sample articles data
  const articles = [
    {
      id: "1",
      title: "Modern CSS Techniques Every Frontend Developer Should Know",
      date: "June 15, 2023",
      excerpt:
        "Exploring the latest CSS features that can enhance your web development workflow and create better user experiences.",
      imageUrl:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
      readMoreUrl: "/articles/modern-css-techniques",
    },
    {
      id: "2",
      title: "Building Accessible Web Applications",
      date: "May 22, 2023",
      excerpt:
        "A comprehensive guide to creating web applications that are accessible to all users, including those with disabilities.",
      imageUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      readMoreUrl: "/articles/accessible-web-applications",
    },
    {
      id: "3",
      title: "React Performance Optimization Strategies",
      date: "April 10, 2023",
      excerpt:
        "Learn how to identify and fix performance bottlenecks in your React applications for a smoother user experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
      readMoreUrl: "/articles/react-performance",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSection />
        </motion.section>

        {/* Project Showcase */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectShowcase />
        </motion.section>

        {/* Articles Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-gray-900"
          id="articles"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
                Articles & Insights
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Thoughts, tutorials, and insights on frontend development,
                design, and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-blue-400 text-sm font-mono mb-2">
                      {article.date}
                    </p>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a
                      href={article.readMoreUrl}
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 font-medium transition-colors"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactSection />
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-gray-950 text-gray-400"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-mono font-bold text-white mb-2">
                  Thank You for Visiting
                </h3>
                <p className="max-w-md">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                &copy; {new Date().getFullYear()} Frontend Developer Portfolio.
                All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Home;
