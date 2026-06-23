import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = { title: string; updated: string; sections: { h: string; p: string }[] };

const LegalLayout = ({ title, updated, sections }: Props) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-wide max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">{title}</h1>
          <p className="text-muted-foreground text-sm">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-wide max-w-3xl mx-auto space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-2xl font-semibold mb-3">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export const Terms = () => (
  <LegalLayout
    title="Terms of Service"
    updated="June 1, 2026"
    sections={[
      { h: "1. Acceptance of Terms", p: "By accessing and using Atelier, you accept and agree to be bound by the terms and conditions of this agreement." },
      { h: "2. Membership", p: "Members must be 18 or older and provide accurate information. You are responsible for maintaining the security of your account." },
      { h: "3. Rentals", p: "Renters agree to return items in the same condition as received, accounting for normal wear. Damage beyond fair use may incur charges up to the security deposit." },
      { h: "4. Lender Responsibilities", p: "Lenders confirm that listed items are authentic, clean, and accurately described. Atelier reserves the right to remove listings that violate platform standards." },
      { h: "5. Payments & Fees", p: "Atelier collects a service fee on every transaction. Lender payouts are issued within 48 hours of successful return." },
      { h: "6. Cancellations", p: "Cancellation refunds follow the policy outlined at checkout. Refunds are processed within 5 business days." },
      { h: "7. Limitation of Liability", p: "Atelier acts as a marketplace and is not liable for disputes between members beyond what is covered by our protection policies." },
    ]}
  />
);

export const Privacy = () => (
  <LegalLayout
    title="Privacy Policy"
    updated="June 1, 2026"
    sections={[
      { h: "Information We Collect", p: "We collect information you provide directly (name, email, payment info) and information automatically (device, browser, usage data) to operate the service." },
      { h: "How We Use Information", p: "To process rentals, communicate with you, improve the platform, personalize your experience, and comply with legal obligations." },
      { h: "Sharing", p: "We share information only with service providers needed to operate Atelier (payments, shipping, dry cleaning) and never sell your personal data." },
      { h: "Your Rights", p: "You can access, correct, export, or delete your personal data at any time from your account settings or by contacting us." },
      { h: "Security", p: "We use industry-standard encryption and access controls. No system is 100% secure, but we work hard to protect your information." },
      { h: "Contact", p: "Questions about privacy? Email privacy@atelier.co." },
    ]}
  />
);

export const Cookies = () => (
  <LegalLayout
    title="Cookie Policy"
    updated="June 1, 2026"
    sections={[
      { h: "What are cookies?", p: "Cookies are small text files stored on your device that help websites remember information about your visit." },
      { h: "How we use them", p: "Essential cookies enable core functionality. Analytics cookies help us understand usage. Marketing cookies personalize recommendations." },
      { h: "Managing cookies", p: "You can adjust cookie preferences in your browser settings or via the cookie banner. Disabling essential cookies may break parts of the site." },
    ]}
  />
);

export default Terms;
