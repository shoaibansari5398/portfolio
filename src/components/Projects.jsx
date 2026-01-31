import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "Smart Expense Tracker",
            subtitle: "Personal Finance Management App",
            stack: ["React", "Firebase", "Chart.js", "Tailwind CSS"],
            description: "A comprehensive expense tracking application with real-time data synchronization, interactive charts for spending visualization, budget management, and expense categorization. Features Firebase authentication and cloud storage.",
            links: { git: "https://github.com/shoaibansari5398/Smart-Expense-Tracker", demo: "https://expense-tracker-371a7.web.app/" }
        },
        {
            title: "Credit Card Analyzer",
            subtitle: "Financial Insights Dashboard",
            stack: ["React", "Data Visualization", "Vercel", "Tailwind CSS"],
            description: "An intuitive credit card analysis tool that provides detailed spending insights, transaction categorization, and financial recommendations. Features interactive dashboards and comprehensive spending reports.",
            links: { git: "https://github.com/shoaibansari5398/Credit-Card-Analyzer", demo: "https://creditcardinsights.vercel.app/" }
        },
        {
            title: "CureConnect",
            subtitle: "Doctor Appointment Booking System",
            stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            description: "Built a full-stack appointment booking system enabling patients to book, manage, and cancel appointments. Features role-based dashboards, REST APIs for authentication/payments, and real-time data sync.",
            links: { git: "https://github.com/shoaibansari5398/CureConnect", demo: "https://cureconnect0.netlify.app/" }
        },
        {
            title: "Scriblio",
            subtitle: "AI-Powered Blog App",
            stack: ["MERN Stack", "Google Gemini API", "ImageKit", "Tailwind CSS"],
            description: "Created a full-stack blog platform that generates AI-written content using Google Gemini API. Includes admin dashboard, CRUD functionality, secure login, and image optimization.",
            links: { git: "https://github.com/shoaibansari5398/Scriblio", demo: "https://scriblio-uamh.vercel.app/" }
        }
    ];

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-japandi-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-japandi-sage mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-japandi-charcoal">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="group bg-japandi-white border border-japandi-beige shadow-soft hover:shadow-soft-lg transition-all duration-500"
                >
                    <div className="p-8 md:p-10 h-full flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif font-medium text-japandi-charcoal mb-2 group-hover:text-japandi-sage transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-japandi-sage text-sm font-medium tracking-wide">
                                {project.subtitle}
                            </p>
                        </div>
                        
                        <p className="text-japandi-warm-gray leading-relaxed mb-8 flex-grow">
                            {project.description}
                        </p>

                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map((tech, i) => (
                                    <span 
                                        key={i} 
                                        className="text-xs px-3 py-1.5 bg-japandi-cream text-japandi-charcoal border border-japandi-beige tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 pt-6 border-t border-japandi-beige">
                                <a 
                                    href={project.links.git}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-japandi-warm-gray hover:text-japandi-charcoal transition-colors duration-300 text-sm"
                                >
                                    <FaGithub className="w-4 h-4" /> 
                                    <span className="tracking-wide">View Code</span>
                                </a>
                                <a 
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-japandi-warm-gray hover:text-japandi-charcoal transition-colors duration-300 text-sm"
                                >
                                    <FaExternalLinkAlt className="w-4 h-4" /> 
                                    <span className="tracking-wide">Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
