import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, DollarSign, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const steps = ["Photos", "Details", "Pricing", "Review"];

const ListItem = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ title: "", brand: "", category: "", size: "", description: "", price: "", deposit: "", retail: "" });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const submit = () => toast.success("Listing submitted for review!");

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-1 py-12">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">List Your Item</h1>
            <p className="text-muted-foreground">Earn from your wardrobe in 4 simple steps.</p>
          </div>

          <div className="flex items-center justify-between mb-10 max-w-2xl mx-auto">
            {steps.map((label, i) => (
              <div key={label} className="flex-1 flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${i <= step ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground"}`}>
                  {i < step ? <Check size={16} /> : i + 1}
                </div>
                {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-gold" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-elevated p-8">
            {step === 0 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-2">Add Photos</h2>
                <p className="text-muted-foreground mb-6">Upload 3–8 clear photos. Natural light works best.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <label key={i} className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-gold cursor-pointer flex flex-col items-center justify-center text-muted-foreground">
                      <Camera size={24} />
                      <span className="text-xs mt-2">Photo {i + 1}</span>
                      <input type="file" accept="image/*" className="hidden" />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-semibold">Item Details</h2>
                <div><Label>Title</Label><Input placeholder="Navy Silk Evening Dress" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1" /></div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div><Label>Brand</Label><Input placeholder="Self-Portrait" value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="mt-1" /></div>
                  <div>
                    <Label>Category</Label>
                    <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Pick one" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dresses">Dresses</SelectItem>
                        <SelectItem value="suits">Suits</SelectItem>
                        <SelectItem value="bags">Bags</SelectItem>
                        <SelectItem value="jewelry">Jewelry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label>Size</Label><Input placeholder="UK 10" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="mt-1" /></div>
                <div><Label>Description</Label><Textarea rows={4} placeholder="Tell renters about the piece, condition, and any styling tips." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1" /></div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-semibold">Pricing</h2>
                <div className="grid md:grid-cols-3 gap-5">
                  <div><Label>Retail Price</Label><div className="relative mt-1"><DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" type="number" value={form.retail} onChange={(e) => setForm({ ...form, retail: e.target.value })} /></div></div>
                  <div><Label>Daily Rate</Label><div className="relative mt-1"><DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></div></div>
                  <div><Label>Deposit</Label><div className="relative mt-1"><DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" type="number" value={form.deposit} onChange={(e) => setForm({ ...form, deposit: e.target.value })} /></div></div>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-sm text-muted-foreground">
                  Tip: We recommend setting your daily rate to 8–12% of retail value.
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-6">Review & Publish</h2>
                <div className="space-y-3 text-sm">
                  {Object.entries(form).map(([k, v]) => (
                    <div key={k} className="flex justify-between p-3 bg-secondary rounded-lg">
                      <span className="capitalize text-muted-foreground">{k}</span>
                      <span className="font-medium">{v || "—"}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button variant="ghost" onClick={back} disabled={step === 0}><ArrowLeft size={16} /> Back</Button>
              {step < steps.length - 1 ? (
                <Button variant="hero" onClick={next}>Continue <ArrowRight size={16} /></Button>
              ) : (
                <Button variant="gold" onClick={submit}>Publish listing <Upload size={16} /></Button>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListItem;
