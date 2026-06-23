import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqs = [
  { q: "How do rentals work?", a: "Browse the collection, pick your dates, and request to rent. Once approved, your piece is shipped to arrive the day before your rental begins." },
  { q: "What if an item doesn't fit?", a: "We offer a fit guarantee — let us know within 24 hours of delivery and we'll arrange a free return and refund." },
  { q: "Who handles cleaning?", a: "We do. Just send the item back in the prepaid packaging and we take care of professional dry-cleaning." },
  { q: "What if something gets damaged?", a: "Every rental includes minor damage protection. Major damage is covered by your refundable security deposit." },
  { q: "How do I list my wardrobe?", a: "Click 'Rent Your Wardrobe' in the header, upload photos, set your price, and you're live." },
  { q: "When do lenders get paid?", a: "Payouts are released within 48 hours of a successful return." },
  { q: "Can I cancel a booking?", a: "Yes — full refund up to 7 days before, 50% refund within 7 days, no refund within 48 hours of pickup." },
  { q: "Do you ship internationally?", a: "Currently UK, EU, and US. More markets coming soon." },
];

const Help = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">How can we help?</h1>
          <p className="text-muted-foreground mb-8">Find answers below or <Link to="/contact" className="text-gold underline">contact us</Link>.</p>
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-12 h-12 bg-card" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold mb-6">Frequently asked</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5">
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Help;
