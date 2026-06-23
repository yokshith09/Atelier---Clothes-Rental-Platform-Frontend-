import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  const stats = [
    { value: "50K+", label: "Active Members" },
    { value: "100K+", label: "Items Available" },
    { value: "4.9★", label: "Average Rating" },
  ];

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12 lg:py-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm text-gold mb-6">
              <Sparkles size={16} />
              <span className="font-medium">Fashion without the footprint</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
              Rent Designer
              <br />
              <span className="text-gradient-gold">Fashion</span>
              <br />
              From Real People
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Access thousands of designer pieces for a fraction of the price. 
              Rent for any occasion, from weddings to work events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/browse">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Start Browsing
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/list-item">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Rent Your Wardrobe
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-gold" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf size={18} className="text-gold" />
                <span>Sustainable Fashion</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-elevated"
          >
            <img
              src={heroImage}
              alt="Fashion rental showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
