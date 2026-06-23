import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Leaf, Recycle, Droplets, Wind } from "lucide-react";

const impacts = [
  { icon: Leaf, value: "82%", label: "Fewer emissions per wear vs new" },
  { icon: Droplets, value: "2,700L", label: "Water saved per dress shared" },
  { icon: Recycle, value: "120K", label: "Garments kept in circulation" },
  { icon: Wind, value: "100%", label: "Carbon-neutral shipping" },
];

const Sustainability = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <div className="text-gold text-sm uppercase tracking-wider mb-3">Sustainability</div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Slow fashion, scaled.</h1>
          <p className="text-muted-foreground text-lg">Renting is one of the most impactful changes we can make. Here's the difference our community is making, together.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {impacts.map((i) => (
            <div key={i.label} className="p-8 bg-card border border-border rounded-2xl text-center">
              <i.icon size={32} className="mx-auto mb-4 text-gold" />
              <div className="font-serif text-3xl font-semibold mb-2">{i.value}</div>
              <p className="text-muted-foreground text-sm">{i.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl font-semibold">Our commitments</h2>
          <div className="space-y-6">
            {[
              { t: "Carbon-neutral logistics", d: "Every shipment is offset through verified reforestation partners." },
              { t: "Eco dry-cleaning", d: "We partner with cleaners that use non-toxic, water-saving processes." },
              { t: "Recyclable packaging", d: "All our garment bags and labels are reusable or fully recyclable." },
              { t: "Lifecycle tracking", d: "We measure the impact of every piece on our platform and report annually." },
            ].map((c) => (
              <div key={c.t} className="border-l-2 border-gold pl-6">
                <h3 className="font-semibold mb-1">{c.t}</h3>
                <p className="text-muted-foreground text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sustainability;
