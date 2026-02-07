import { motion } from "framer-motion";
import trainerGym from "@/assets/trainer-gym.png";

const timelineData = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Started with no support, no money — only belief. Walked into the gym not knowing if I'd make it.",
  },
  {
    year: "2018",
    title: "First Breakthrough",
    description: "Won my first local competition. The struggle started to make sense.",
  },
  {
    year: "2020",
    title: "The Dark Phase",
    description: "Pandemic hit. Lost everything. But I trained harder than ever in my small room.",
  },
  {
    year: "2022",
    title: "Rising Champion",
    description: "Multiple competition wins. Started transforming others who believed in the journey.",
  },
  {
    year: "2024",
    title: "Undefeated Champion",
    description: "8 years of pure discipline. Now helping hundreds achieve what they thought was impossible.",
  },
];

const StorySection = () => {
  return (
    <section id="story" className="relative section-padding overflow-hidden">
      {/* Floating background words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="floating-word top-[20%] -left-[10%] text-accent/3">FOCUS</span>
        <span className="floating-word bottom-[30%] -right-[15%] text-primary/3">GRIND</span>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bebas text-gradient-gold glow-gold mb-4">
            8 YEARS OF PURE GRIND
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every scar tells a story. Every rep has a purpose. This is my journey from nothing to champion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
            <img
              src={trainerGym}
              alt="Training in the gym"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
          </motion.div>

          {/* Timeline */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_hsl(var(--gold)/0.5)]" />
                  
                  <div className="group">
                    <span className="text-primary font-bebas text-2xl tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bebas text-foreground mt-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
