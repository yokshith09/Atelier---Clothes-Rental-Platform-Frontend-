import { motion } from "framer-motion";
import { Search, CalendarCheck, Package, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Explore thousands of designer pieces from verified lenders in your area.",
  },
  {
    icon: CalendarCheck,
    title: "Book Your Dates",
    description: "Select your rental dates and complete secure checkout with buyer protection.",
  },
  {
    icon: Package,
    title: "Receive & Wear",
    description: "Your item arrives freshly cleaned and ready to wear for your special occasion.",
  },
  {
    icon: RotateCcw,
    title: "Return & Repeat",
    description: "Simply send it back in the prepaid packaging. No dry cleaning needed!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Renting designer fashion has never been easier. Get started in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-border" />
              )}

              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6 relative z-10">
                  <step.icon size={32} className="text-gold" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-semibold text-sm z-20">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
