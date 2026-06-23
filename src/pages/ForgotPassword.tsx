import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Header from "@/components/layout/Header";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Reset link sent — check your inbox.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-elevated p-8">
          <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft size={14} /> Back to sign in</Link>
          <h1 className="font-serif text-2xl font-semibold mb-2">Reset your password</h1>
          <p className="text-muted-foreground mb-6">Enter your email and we'll send you a link to reset your password.</p>

          {sent ? (
            <div className="p-4 bg-gold/10 border border-gold/20 rounded-lg text-sm">Check your inbox at <strong>{email}</strong> for a reset link.</div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" placeholder="you@example.com" />
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Send reset link</Button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
