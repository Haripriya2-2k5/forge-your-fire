import { motion } from "framer-motion";
import trainerHero from "@/assets/trainer-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial">
      {/* Floating background words */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="floating-word top-[10%] left-[-5%] animate-slide-right text-primary/5">
          DISCIPLINE
        </span>
        <span className="floating-word top-[40%] right-[-10%] animate-slide-left text-accent/5">
          HUSTLE
        </span>
        <span className="floating-word bottom-[15%] left-[10%] animate-slide-right text-primary/5" style={{ animationDelay: "3s" }}>
          STRENGTH
        </span>
      </div>

      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />

      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-oswald tracking-[0.3em] text-sm md:text-base uppercase mb-4"
          >
            8 Years of Pure Dedication
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bebas leading-none mb-6"
          >
            <span className="text-foreground">I DON'T TRAIN</span>
            <br />
            <span className="text-gradient-gold glow-gold">BODIES</span>
            <br />
            <span className="text-foreground">I TRANSFORM</span>
            <br />
            <span className="text-gradient-red glow-red">MINDSETS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-8"
          >
            Built by struggle. Driven by discipline. Every rep I teach today was earned through pain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#story"
              className="px-8 py-4 bg-primary text-primary-foreground font-oswald text-lg tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)]"
            >
              My Journey
            </a>
            <a
              href="#testimonials"
              className="px-8 py-4 border-2 border-primary text-primary font-oswald text-lg tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Success Stories
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent blur-3xl" />
            
            <motion.img
              src={trainerHero}
              alt="Champion Athlete"
              className="relative z-10 w-full max-w-lg mx-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Decorative elements */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
