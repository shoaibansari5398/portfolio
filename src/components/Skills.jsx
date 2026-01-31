import { motion } from "framer-motion";

const Skills = () => {
    const skillCategories = [
        {
          title: "Languages & Frameworks",
          skills: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "HTML5", "CSS3", "SQL", "MongoDB"]
        },
        {
          title: "Tools & Platforms",
          skills: ["Git", "GitHub", "Postman", "LogRocket", "Unqork", "ServiceNow", "JIRA"]
        },
        {
          title: "Production Support",
          skills: ["Incident Management", "Root Cause Analysis (RCA)", "Log Analysis", "API Debugging", "System Monitoring"]
        }
      ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-japandi-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-japandi-sage mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-japandi-charcoal">
            Technical Proficiency
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="bg-japandi-white p-8 border border-japandi-beige shadow-soft"
                >
                    <h3 className="text-lg font-medium text-japandi-charcoal mb-6 pb-4 border-b border-japandi-beige tracking-wide">
                        {category.title}
                    </h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                    >
                        {category.skills.map((skill, sIdx) => (
                            <motion.span
                                key={sIdx}
                                variants={item}
                                className="px-4 py-2 bg-japandi-cream text-japandi-charcoal text-sm border border-japandi-beige hover:border-japandi-sage hover:text-japandi-sage transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
