import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Journey", href: "#story" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Apparel", href: "#apparel" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Undefeated Champions" className="h-10 md:h-14" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-oswald text-sm tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#story"
              className="px-6 py-2 border border-primary text-primary font-oswald text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Start Your Journey
            </a>
            <a
              href="#training"
              className="px-6 py-2 bg-primary text-primary-foreground font-oswald text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              Join Training
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-charcoal border-t border-border"
      >
        <div className="container-custom px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-oswald text-lg tracking-wider text-foreground hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#story"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-3 border border-primary text-primary font-oswald tracking-wider uppercase"
          >
            Start Your Journey
          </a>
          <a
            href="#training"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-oswald tracking-wider uppercase"
          >
            Join Training
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
