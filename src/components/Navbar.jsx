import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-japandi-white/90 backdrop-blur-md border-b border-japandi-beige"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-serif font-medium text-japandi-charcoal hover:text-japandi-sage transition-colors duration-300 tracking-tight"
        >
          SA.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-japandi-warm-gray hover:text-japandi-charcoal text-sm font-medium transition-colors duration-300 relative group tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-japandi-sage transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-japandi-taupe hover:text-japandi-charcoal transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-japandi-taupe hover:text-japandi-charcoal transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:shoaib.ansari5398@gmail.com" 
            className="text-japandi-taupe hover:text-japandi-charcoal transition-colors duration-300"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
