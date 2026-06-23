import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import bag1 from "@/assets/bag-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";

const favorites = [
  { id: 1, title: "Navy Silk Evening Dress", brand: "Self-Portrait", price: 45, image: dress1 },
  { id: 2, title: "Blush Beaded Cocktail Dress", brand: "Needle & Thread", price: 55, image: dress2 },
  { id: 5, title: "Designer Leather Tote", brand: "Mulberry", price: 35, image: bag1 },
  { id: 6, title: "Crystal Statement Necklace", brand: "Swarovski", price: 25, image: jewelry1 },
];

const Favorites = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 container-wide py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-1">Your Favorites</h1>
          <p className="text-muted-foreground">{favorites.length} pieces saved</p>
        </div>
        <Link to="/browse"><Button variant="outline">Continue browsing</Button></Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {favorites.map((f) => (
          <Link key={f.id} to={`/item/${f.id}`} className="group">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden img-zoom mb-3">
              <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
              <button className="absolute top-3 right-3 p-2 bg-background/90 rounded-full">
                <Heart size={16} className="fill-rose text-rose" />
              </button>
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">{f.brand}</div>
            <div className="font-medium text-sm line-clamp-1">{f.title}</div>
            <div className="text-sm"><span className="font-semibold">${f.price}</span><span className="text-muted-foreground">/day</span></div>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Favorites;
