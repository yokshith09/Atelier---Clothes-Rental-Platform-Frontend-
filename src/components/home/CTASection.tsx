import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-sm text-gold mb-6">
            <Sparkles size={16} />
            <span className="font-medium">Start earning today</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Your Wardrobe Could Be
            <br />
            <span className="text-gold">Worth Thousands</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Turn your closet into cash. The average lender earns $500 per month
            renting pieces they rarely wear. Join 50,000+ members today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/list-item">
              <Button variant="gold" size="xl" className="w-full sm:w-auto group">
                List Your First Item
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="goldOutline" size="xl" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-serif font-semibold text-gold">
                $2.5M+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Paid to Lenders
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-semibold text-gold">
                50K+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Active Lenders
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-semibold text-gold">
                98%
              </div>
              <div className="text-sm text-primary-foreground/70">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
