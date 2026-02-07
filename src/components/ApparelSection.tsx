import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Discipline Hoodie",
    price: "₹2,499",
    tag: "BESTSELLER",
    color: "Black / Gold",
  },
  {
    name: "No Excuses Tee",
    price: "₹999",
    tag: "NEW",
    color: "Charcoal / Red",
  },
  {
    name: "Champion Tank",
    price: "₹799",
    tag: "",
    color: "Black / White",
  },
];

const ApparelSection = () => {
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
              className="group relative"
            >
              {/* Product placeholder */}
              <div className="relative aspect-square bg-charcoal border border-border overflow-hidden mb-4 group-hover:border-primary transition-colors">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
                </div>
                
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-oswald tracking-wider">
                    {product.tag}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 bg-primary text-primary-foreground font-oswald tracking-wider">
                    NOTIFY ME
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
    </section>
  );
};

export default ApparelSection;
