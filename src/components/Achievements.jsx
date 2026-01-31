import { motion } from "framer-motion";
import { FaTrophy, FaStar, FaBolt } from "react-icons/fa";

const Achievements = () => {
  const awards = [
    {
      title: "Catalyst of the Month",
      icon: <FaBolt className="text-japandi-terracotta text-2xl" />,
      description: "Recognized for rapid upskilling and impactful support contributions."
    },
    {
      title: "Star of the Month (x2)",
      icon: <FaStar className="text-japandi-terracotta text-2xl" />,
      description: "Awarded twice for successfully managing critical PI Release and automation initiatives."
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-japandi-white">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-japandi-beige" />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-japandi-sage mb-4 block">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-japandi-charcoal mb-4">
            Honors & Awards
          </h2>
          <div className="flex items-center justify-center gap-2 text-japandi-terracotta">
            <FaTrophy className="w-5 h-5" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="p-8 bg-japandi-white border border-japandi-beige shadow-soft hover:shadow-soft-lg transition-all duration-500 group"
                >
                    <div className="mb-6 w-14 h-14 bg-japandi-cream flex items-center justify-center border border-japandi-beige group-hover:border-japandi-terracotta/30 transition-colors duration-300">
                        {award.icon}
                    </div>
                    <h3 className="text-xl font-serif font-medium text-japandi-charcoal mb-3">
                        {award.title}
                    </h3>
                    <p className="text-japandi-warm-gray leading-relaxed">
                        {award.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
