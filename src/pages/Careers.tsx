import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const roles = [
  { title: "Senior Product Designer", team: "Design", location: "London / Remote", type: "Full-time" },
  { title: "Full-Stack Engineer", team: "Engineering", location: "London / Remote", type: "Full-time" },
  { title: "Community Manager", team: "Marketing", location: "London", type: "Full-time" },
  { title: "Operations Associate", team: "Operations", location: "London", type: "Full-time" },
  { title: "Customer Experience Lead", team: "Support", location: "Remote", type: "Full-time" },
];

const Careers = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <div className="text-gold text-sm uppercase tracking-wider mb-3">Careers</div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Build the future of fashion with us.</h1>
          <p className="text-muted-foreground text-lg">We're a small, ambitious team building something the industry needs. If that excites you, we'd love to meet.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold mb-8">Open roles</h2>
          <div className="space-y-3">
            {roles.map((r) => (
              <div key={r.title} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card border border-border rounded-xl hover:border-gold transition-colors">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{r.team}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {r.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {r.type}</span>
                  </div>
                </div>
                <Button variant="outline">Apply</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers;
