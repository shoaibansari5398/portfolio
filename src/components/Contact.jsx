import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-japandi-cream">
      <div className="max-w-4xl mx-auto px-6">

        {/* Education Section */}
        <div className="mb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <span className="text-xs tracking-[0.2em] uppercase text-japandi-sage mb-4 block">Background</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-japandi-charcoal">
                    Education
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-japandi-white p-8 md:p-10 border border-japandi-beige shadow-soft flex flex-col md:flex-row items-center gap-6"
            >
                <div className="w-16 h-16 bg-japandi-cream flex items-center justify-center border border-japandi-beige shrink-0">
                    <FaGraduationCap className="text-japandi-sage text-2xl" />
                </div>
                <div className="text-center md:text-left flex-grow">
                    <h3 className="text-xl font-serif font-medium text-japandi-charcoal mb-1">
                        Bachelor of Technology
                    </h3>
                    <p className="text-japandi-warm-gray mb-1">Government Engineering College Ajmer</p>
                    <p className="text-japandi-taupe text-sm">Electronics And Communication Engineering</p>
                </div>
                <div className="text-sm tracking-wide text-japandi-sage font-medium">
                    2017 - 2021
                </div>
            </motion.div>
        </div>


        {/* Contact Footer */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <span className="text-xs tracking-[0.2em] uppercase text-japandi-sage mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-japandi-charcoal mb-6">
                Let's Connect
            </h2>
            <p className="text-japandi-warm-gray mb-12 max-w-xl mx-auto leading-relaxed">
                Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex justify-center items-center gap-8 mb-16">
                <a 
                    href="mailto:shoaib.ansari5398@gmail.com" 
                    className="group flex flex-col items-center gap-3"
                >
                    <div className="w-14 h-14 bg-japandi-white border border-japandi-beige flex items-center justify-center group-hover:border-japandi-sage group-hover:bg-japandi-cream transition-all duration-300">
                        <FaEnvelope className="text-xl text-japandi-charcoal group-hover:text-japandi-sage transition-colors duration-300" />
                    </div>
                    <span className="text-xs tracking-wide text-japandi-taupe group-hover:text-japandi-charcoal transition-colors duration-300">Email</span>
                </a>
                <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col items-center gap-3"
                >
                    <div className="w-14 h-14 bg-japandi-white border border-japandi-beige flex items-center justify-center group-hover:border-japandi-sage group-hover:bg-japandi-cream transition-all duration-300">
                        <FaLinkedin className="text-xl text-japandi-charcoal group-hover:text-japandi-sage transition-colors duration-300" />
                    </div>
                    <span className="text-xs tracking-wide text-japandi-taupe group-hover:text-japandi-charcoal transition-colors duration-300">LinkedIn</span>
                </a>
                <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col items-center gap-3"
                >
                    <div className="w-14 h-14 bg-japandi-white border border-japandi-beige flex items-center justify-center group-hover:border-japandi-sage group-hover:bg-japandi-cream transition-all duration-300">
                        <FaGithub className="text-xl text-japandi-charcoal group-hover:text-japandi-sage transition-colors duration-300" />
                    </div>
                    <span className="text-xs tracking-wide text-japandi-taupe group-hover:text-japandi-charcoal transition-colors duration-300">GitHub</span>
                </a>
            </div>

            <div className="pt-8 border-t border-japandi-beige">
                <p className="text-japandi-taupe text-sm tracking-wide">
                    © {new Date().getFullYear()} Shoaib Ansari. Built with React & Tailwind.
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
