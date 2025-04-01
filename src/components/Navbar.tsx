import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dark/light mode (for future implementation)
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black bg-opacity-90 backdrop-blur-sm",
        isScrolled ? "py-3 shadow-lg" : "py-5",
        className,
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-mono text-xl font-bold tracking-tight hover:text-blue-500 transition-colors"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            DEV<span className="text-blue-500">.</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/#work" label="Work" />
          <NavLink to="/#articles" label="Articles" />
          <NavLink to="/#contact" label="Contact" />

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black bg-opacity-95`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
          <MobileNavLink to="/#work" label="Work" onClick={toggleMenu} />
          <MobileNavLink
            to="/#articles"
            label="Articles"
            onClick={toggleMenu}
          />
          <MobileNavLink to="/#contact" label="Contact" onClick={toggleMenu} />

          {/* Theme toggle button for mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}</span>
            <span>Toggle Theme</span>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

// Desktop Nav Link component
interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => (
  <Link
    to={to}
    className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wider transition-colors duration-200"
  >
    {label}
  </Link>
);

// Mobile Nav Link component
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => (
  <Link
    to={to}
    className="text-gray-400 hover:text-white font-mono text-lg py-2 uppercase tracking-wider transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
