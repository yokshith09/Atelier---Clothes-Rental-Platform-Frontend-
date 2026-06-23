import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Truck, Clock, Globe, Package } from "lucide-react";

const Shipping = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Shipping & Delivery</h1>
          <p className="text-muted-foreground text-lg">Fast, tracked, carbon-neutral delivery wherever you are.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { icon: Truck, t: "Free standard shipping", d: "On all rentals over $150. Arrives 1 day before your rental starts." },
            { icon: Clock, t: "Express options", d: "Need it sooner? Next-day delivery available at checkout." },
            { icon: Globe, t: "International", d: "We ship across the UK, EU, and US, with more regions coming soon." },
            { icon: Package, t: "Reusable packaging", d: "Garment bags and prepaid return labels are included with every order." },
          ].map((s) => (
            <div key={s.t} className="p-6 bg-card border border-border rounded-2xl">
              <s.icon size={28} className="text-gold mb-3" />
              <h3 className="font-semibold mb-1">{s.t}</h3>
              <p className="text-muted-foreground text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto prose prose-neutral">
          <h2 className="font-serif text-2xl font-semibold mb-4">Delivery times</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• UK Standard — 2 business days (free over $150)</li>
            <li>• UK Express — Next business day ($9.95)</li>
            <li>• EU Standard — 3–5 business days ($14.95)</li>
            <li>• US Standard — 4–6 business days ($19.95)</li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Shipping;
