import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Package, Heart, Star, TrendingUp, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import bag1 from "@/assets/bag-1.jpg";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");

  const stats = [
    { icon: DollarSign, label: "Total Earnings", value: "$2,485" },
    { icon: Package, label: "Active Listings", value: "12" },
    { icon: Calendar, label: "Active Rentals", value: "3" },
    { icon: Star, label: "Avg Rating", value: "4.9" },
  ];

  const rentals = [
    { id: 1, title: "Navy Silk Evening Dress", image: dress1, status: "Active", dates: "Jun 20 – Jun 24", price: "$180" },
    { id: 2, title: "Designer Leather Tote", image: bag1, status: "Upcoming", dates: "Jul 2 – Jul 6", price: "$140" },
    { id: 3, title: "Blush Beaded Cocktail Dress", image: dress2, status: "Completed", dates: "May 18 – May 22", price: "$220" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Header />
      <main className="flex-1 py-10">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-1">Welcome back, Sarah</h1>
              <p className="text-muted-foreground">Here's what's happening with your wardrobe.</p>
            </div>
            <Link to="/list-item"><Button variant="hero">+ New Listing</Button></Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <Card key={s.label} className="p-5">
                <s.icon size={20} className="text-gold mb-3" />
                <div className="text-2xl font-serif font-semibold">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{s.label}</div>
              </Card>
            ))}
          </div>

          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="rentals">My Rentals</TabsTrigger>
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-semibold">Recent Activity</h3>
                  <TrendingUp size={18} className="text-gold" />
                </div>
                <div className="space-y-3">
                  {rentals.map((r) => (
                    <div key={r.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors">
                      <img src={r.image} alt={r.title} className="w-14 h-14 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="font-medium">{r.title}</div>
                        <div className="text-sm text-muted-foreground">{r.dates}</div>
                      </div>
                      <Badge variant={r.status === "Active" ? "default" : "secondary"}>{r.status}</Badge>
                      <div className="font-semibold">{r.price}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="rentals">
              <Card className="p-6 space-y-3">
                {rentals.map((r) => (
                  <div key={r.id} className="flex items-center gap-4 p-3 border-b border-border last:border-0">
                    <img src={r.image} alt={r.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-medium">{r.title}</div>
                      <div className="text-sm text-muted-foreground">{r.dates}</div>
                    </div>
                    <Badge variant="secondary">{r.status}</Badge>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                ))}
              </Card>
            </TabsContent>

            <TabsContent value="listings">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[dress1, dress2, bag1].map((img, i) => (
                  <Card key={i} className="overflow-hidden">
                    <img src={img} alt="Listing" className="w-full aspect-[3/4] object-cover" />
                    <div className="p-4">
                      <div className="font-medium mb-1">Listing #{i + 1}</div>
                      <div className="text-sm text-muted-foreground mb-3">12 views this week</div>
                      <Button variant="outline" size="sm" className="w-full">Edit</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="earnings">
              <Card className="p-8 text-center">
                <DollarSign size={32} className="mx-auto text-gold mb-3" />
                <div className="font-serif text-4xl font-semibold mb-2">$2,485.00</div>
                <p className="text-muted-foreground mb-6">Lifetime earnings — next payout Jun 28</p>
                <Button variant="hero">Withdraw to bank</Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
