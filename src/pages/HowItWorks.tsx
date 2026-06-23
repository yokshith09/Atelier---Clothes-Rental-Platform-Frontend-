import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Calendar, Truck, RotateCcw, Sparkles, Shield, Heart, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const renterSteps = [
  { icon: Search, title: "Browse & Discover", desc: "Explore thousands of curated designer pieces from our community of lenders." },
  { icon: Calendar, title: "Pick Your Dates", desc: "Choose your rental period and request to book directly with the lender." },
  { icon: Truck, title: "Wear & Enjoy", desc: "Your piece arrives fresh and ready, delivered straight to your door." },
  { icon: RotateCcw, title: "Return Easily", desc: "Pop it back in the prepaid package and we'll handle the dry cleaning." },
];

const lenderSteps = [
  { icon: Sparkles, title: "List Your Wardrobe", desc: "Upload photos, set your prices, and add details about your designer pieces." },
  { icon: Heart, title: "Receive Requests", desc: "Approve rentals from verified members of the Atelier community." },
  { icon: Shield, title: "Ship Securely", desc: "Use our prepaid labels and insurance to send pieces with confidence." },
  { icon: DollarSign, title: "Earn Income", desc: "Get paid into your account once each rental is complete. Simple." },
];

const HowItWorks = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">How Atelier Works</h1>
          <p className="text-muted-foreground text-lg">Rent designer pieces from real wardrobes, or earn from your own. It's fashion, reimagined.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-semibold mb-12 text-center">For Renters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renterSteps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <s.icon size={28} />
                </div>
                <div className="text-xs uppercase tracking-wider text-gold mb-2">Step {i + 1}</div>
                <h3 className="font-serif text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/browse"><Button variant="hero" size="lg">Start Browsing</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide">
          <h2 className="font-serif text-3xl font-semibold mb-12 text-center">For Lenders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lenderSteps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon size={28} />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Step {i + 1}</div>
                <h3 className="font-serif text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/list-item"><Button variant="gold" size="lg">List Your First Item</Button></Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HowItWorks;
