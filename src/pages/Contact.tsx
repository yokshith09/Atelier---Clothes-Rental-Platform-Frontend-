import { useState } from "react";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Get in touch</h1>
            <p className="text-muted-foreground text-lg">We typically respond within 24 hours.</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-wide grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: Mail, t: "Email", v: "hello@atelier.co" },
                { icon: Phone, t: "Phone", v: "+44 20 7946 0000" },
                { icon: MessageSquare, t: "Live chat", v: "Mon–Fri, 9am–6pm" },
                { icon: MapPin, t: "Studio", v: "55 Shoreditch High St, London" },
              ].map((c) => (
                <div key={c.t} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="font-medium">{c.t}</div>
                    <div className="text-muted-foreground text-sm">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={submit} className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">Send message</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
