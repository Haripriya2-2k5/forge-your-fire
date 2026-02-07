import { motion } from "framer-motion";
import { Star, QrCode, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    transformation: "Lost 25kg in 6 months",
    quote: "He didn't just change my body, he changed my entire mindset. The discipline I learned extends to every area of my life now.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    transformation: "Competition Ready in 8 months",
    quote: "From someone who never stepped in a gym to standing on stage — that's the transformation he made possible.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    transformation: "Gained 15kg lean muscle",
    quote: "The most dedicated trainer I've ever met. His own journey is the biggest motivation. No shortcuts, pure discipline.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative section-padding bg-charcoal">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
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
          <h2 className="text-5xl md:text-7xl font-bebas text-foreground mb-4">
            <span className="text-gradient-red">TRANSFORMATION</span> STORIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people. Real results. Zero excuses.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-card border border-border p-8 hover:border-primary transition-all duration-300"
            >
              {/* Quote icon */}
              <MessageSquare className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bebas text-xl text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.transformation}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-card border-2 border-primary p-8 inline-block mb-6">
            <QrCode className="w-32 h-32 text-primary" />
          </div>
          <h3 className="text-2xl font-bebas text-foreground mb-2">
            SHARE YOUR TRANSFORMATION
          </h3>
          <p className="text-muted-foreground max-w-md">
            Scan to submit your success story and inspire others on their journey
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
