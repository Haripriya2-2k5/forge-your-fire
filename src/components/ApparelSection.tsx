import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import apparelJacket from "@/assets/apparel-jacket.png";
import apparelTee from "@/assets/apparel-tee.png";
import apparelPolo from "@/assets/apparel-polo.png";

const products = [
  {
    name: "Undefeated Stealth Jacket",
    price: "₹4,999",
    tag: "COMING SOON",
    color: "Black / Reflective",
    image: apparelJacket,
    description:
      "Tactical windbreaker with 'CHAMPION' sleeve print and 'UNDEFEATED' back strip. Built for warriors who train in any weather.",
  },
  {
    name: "CHAMP Oversized Tee",
    price: "₹1,499",
    tag: "COMING SOON",
    color: "Black / Grey",
    image: apparelTee,
    description:
      "Premium heavyweight cotton tee with bold vertical CHAMP print. Made for those who wear their mindset.",
  },
  {
    name: "Lion Crest Polo",
    price: "₹1,999",
    tag: "COMING SOON",
    color: "White / Black",
    image: apparelPolo,
    description:
      "Athletic-fit polo with winged lion shield emblem. Represent the Undefeated Champions legacy on and off the field.",
  },
];

const ApparelSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section id="apparel" className="relative section-padding overflow-hidden">
      {/* Background word */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="floating-word top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/[0.02]">
          WEAR
        </span>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 border border-primary text-primary text-sm font-oswald tracking-wider mb-4">
            COMING SOON
          </span>
          <h2 className="text-5xl md:text-7xl font-bebas text-foreground mb-4">
            WEAR THE <span className="text-gradient-gold">DISCIPLINE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apparel for those who don't just talk about the grind — they live it.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProduct(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Product image */}
              <div className="relative aspect-square bg-charcoal border border-border overflow-hidden mb-4 group-hover:border-primary transition-colors">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-oswald tracking-wider">
                    {product.tag}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-6 py-3 border-2 border-primary text-primary font-oswald tracking-wider text-lg">
                    VIEW DETAILS
                  </span>
                </div>
              </div>

              {/* Product info */}
              <h3 className="text-xl font-bebas text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.color}</p>
              <p className="text-lg font-oswald text-primary mt-2">{product.price}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-oswald text-lg tracking-wider hover:gap-4 transition-all group"
          >
            GET EARLY ACCESS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Expanded Product Modal */}
      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full bg-charcoal border border-border overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/50 backdrop-blur-sm border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <motion.div
                className="md:w-1/2 aspect-square md:aspect-auto"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <img
                  src={products[selectedProduct].image}
                  alt={products[selectedProduct].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Details */}
              <motion.div
                className="md:w-1/2 p-8 flex flex-col justify-center"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <span className="inline-block w-fit px-3 py-1 bg-primary text-primary-foreground text-xs font-oswald tracking-wider mb-4">
                  {products[selectedProduct].tag}
                </span>
                <h3 className="text-4xl font-bebas text-foreground mb-2">
                  {products[selectedProduct].name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {products[selectedProduct].color}
                </p>
                <p className="text-2xl font-oswald text-primary mb-6">
                  {products[selectedProduct].price}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {products[selectedProduct].description}
                </p>
                <button className="w-full py-4 bg-primary text-primary-foreground font-oswald tracking-widest text-lg hover:bg-primary/90 transition-colors">
                  NOTIFY ME ON LAUNCH
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ApparelSection;
