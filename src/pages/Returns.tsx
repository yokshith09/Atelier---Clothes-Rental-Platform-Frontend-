import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RotateCcw, CheckCircle2 } from "lucide-react";

const Returns = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <RotateCcw size={36} className="mx-auto text-gold mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Easy Returns</h1>
          <p className="text-muted-foreground text-lg">Returning your rental is effortless. Here's how it works.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-3xl mx-auto space-y-6">
          {[
            { t: "Pack it up", d: "Place the item back in the original reusable garment bag — no need to clean it." },
            { t: "Attach the label", d: "Use the prepaid return label included with your order." },
            { t: "Drop it off", d: "Drop at any local courier point by 6pm on the last day of your rental." },
            { t: "We handle the rest", d: "Professional dry cleaning and inspection. Your deposit is refunded within 5 business days." },
          ].map((s, i) => (
            <div key={s.t} className="flex gap-4 p-6 bg-card border border-border rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-semibold flex-shrink-0">{i + 1}</div>
              <div>
                <h3 className="font-semibold mb-1 flex items-center gap-2">{s.t} <CheckCircle2 size={16} className="text-gold" /></h3>
                <p className="text-muted-foreground text-sm">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Returns;
