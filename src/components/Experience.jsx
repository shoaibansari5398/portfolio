import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Marsh McLennan",
      role: "Production Support Engineer",
      period: "May 2022 - Present",
      description: [
        "Diagnose and resolve complex production incidents for high-availability systems, minimizing downtime.",
        "Proactively monitor application logs, APIs, and microservices to detect anomalies before impact.",
        "Spearhead end-to-end (E2E) Major Production PI Releases and critical hotfix deployments.",
        "Partner with engineering and product teams to implement permanent code fixes.",
        "Conduct deep-dive RCAs for critical failures and implement preventive measures.",
        "Author and maintain comprehensive internal documentation and troubleshooting runbooks."
      ]
    }
  ];

  return (
    <section id="experience" className="pt-12 pb-24 md:pt-16 md:pb-32 relative bg-japandi-cream">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-japandi-sage mb-4 block">Career</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-japandi-charcoal">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-japandi-white p-8 md:p-12 border border-japandi-beige shadow-soft">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-japandi-beige">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-japandi-charcoal mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-japandi-warm-gray text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-sm tracking-wide text-japandi-sage font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-japandi-warm-gray leading-relaxed">
                      <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-japandi-sage shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
