import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LogoSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bebas text-primary whitespace-nowrap">
          UNDEFEATED
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={logo}
              alt="Undefeated Champions Logo"
              className="relative z-10 w-48 md:w-64 lg:w-80 h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl font-oswald tracking-[0.2em] text-muted-foreground uppercase"
          >
            Built by Struggle • Driven by Discipline
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;
