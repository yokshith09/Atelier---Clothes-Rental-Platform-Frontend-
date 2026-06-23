import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroImg from "@/assets/hero-fashion.jpg";

const stats = [
  { value: "50K+", label: "Active Members" },
  { value: "120K", label: "Pieces Rented" },
  { value: "85%", label: "CO₂ Reduction" },
  { value: "4.9", label: "Average Rating" },
];

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img src={heroImg} alt="Atelier" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative text-center max-w-2xl px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">Fashion, Shared.</h1>
          <p className="text-lg md:text-xl text-white/80">A community-driven wardrobe built on style, trust, and a love for the planet.</p>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="text-gold text-sm uppercase tracking-wider mb-3">Our Story</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Designed for a circular wardrobe.</h2>
            <p className="text-muted-foreground mb-4">Atelier was born from a simple idea: the most beautiful clothes are the ones that get worn — again and again. We connect people who love designer fashion with those who already own it.</p>
            <p className="text-muted-foreground">Every rental extends a garment's life, replaces a fast-fashion purchase, and reduces waste in an industry that desperately needs to slow down.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-6 bg-secondary rounded-2xl text-center">
                <div className="font-serif text-3xl md:text-4xl font-semibold text-gold mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <div className="text-gold text-sm uppercase tracking-wider mb-3">Our Values</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10">What we stand for.</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { t: "Sustainability", d: "Every rental is a vote for a slower, kinder fashion industry." },
              { t: "Community", d: "Real wardrobes, real people, real connections over style." },
              { t: "Craft", d: "We celebrate quality pieces designed to last for decades." },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="font-serif text-xl font-semibold mb-2">{v.t}</h3>
                <p className="text-muted-foreground text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
