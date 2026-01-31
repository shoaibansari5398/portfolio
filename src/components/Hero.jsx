import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-japandi-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-japandi-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-japandi-terracotta/5 rounded-full blur-3xl" />
      
      {/* Minimalist geometric accent */}
      <div className="absolute top-32 left-16 w-px h-32 bg-japandi-beige" />
      <div className="absolute top-32 left-16 w-32 h-px bg-japandi-beige" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase text-japandi-sage border border-japandi-sage/30 rounded-full">
            Production Support Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-serif font-medium text-japandi-charcoal mb-6 leading-[1.1] tracking-tight"
        >
          Hi, I'm <span className="text-japandi-sage">Shoaib Ansari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-japandi-warm-gray mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Award-winning engineer with over 3 years of experience at Marsh McLennan.
          Specializing in enhancing system reliability, critical PI releases, and rapid technical upskilling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-japandi-charcoal text-japandi-white font-medium hover:bg-japandi-black transition-colors duration-300 w-full sm:w-auto tracking-wide"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-japandi-charcoal text-japandi-charcoal font-medium hover:bg-japandi-charcoal hover:text-japandi-white transition-all duration-300 w-full sm:w-auto tracking-wide"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-japandi-taupe">Scroll</span>
        <div className="w-px h-12 bg-japandi-beige relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-japandi-sage"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
