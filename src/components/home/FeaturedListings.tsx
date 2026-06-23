import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import suit1 from "@/assets/suit-1.jpg";

const listings = [
  {
    id: 1,
    title: "Navy Silk Evening Dress",
    brand: "Self-Portrait",
    price: 45,
    originalPrice: 450,
    size: "UK 10",
    rating: 4.9,
    reviews: 24,
    image: dress1,
    isNew: true,
    lender: {
      name: "Sarah M.",
      verified: true,
    },
  },
  {
    id: 2,
    title: "Blush Beaded Cocktail Dress",
    brand: "Needle & Thread",
    price: 55,
    originalPrice: 595,
    size: "UK 8",
    rating: 5.0,
    reviews: 18,
    image: dress2,
    isNew: false,
    lender: {
      name: "Emma L.",
      verified: true,
    },
  },
  {
    id: 3,
    title: "Black Velvet Gown",
    brand: "Reformation",
    price: 65,
    originalPrice: 680,
    size: "UK 12",
    rating: 4.8,
    reviews: 31,
    image: dress3,
    isNew: false,
    lender: {
      name: "Jessica R.",
      verified: true,
    },
  },
  {
    id: 4,
    title: "Navy Tailored Suit",
    brand: "Reiss",
    price: 75,
    originalPrice: 750,
    size: "UK 40",
    rating: 4.7,
    reviews: 12,
    image: suit1,
    isNew: true,
    lender: {
      name: "James T.",
      verified: true,
    },
  },
];

const FeaturedListings = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
              Trending Now
            </h2>
            <p className="text-muted-foreground">
              The most loved pieces from our community
            </p>
          </div>
          <Link to="/browse">
            <Button variant="outline">View All</Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/item/${listing.id}`}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 img-zoom card-hover bg-card">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {listing.isNew && (
                      <Badge className="bg-gold text-gold-foreground">New</Badge>
                    )}
                  </div>

                  {/* Favorite button */}
                  <button
                    className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle favorite
                    }}
                  >
                    <Heart size={18} />
                  </button>

                  {/* Quick view overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="secondary" size="sm" className="w-full">
                      Quick View
                    </Button>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {listing.brand}
                    </span>
                    <div className="flex items-center gap-1 text-xs">
                      <Star size={12} className="fill-gold text-gold" />
                      <span>{listing.rating}</span>
                      <span className="text-muted-foreground">({listing.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-medium text-sm line-clamp-1">{listing.title}</h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold">${listing.price}</span>
                      <span className="text-xs text-muted-foreground">/day</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{listing.size}</span>
                  </div>

                  <div className="flex items-center gap-1 pt-1">
                    <span className="text-xs text-muted-foreground">
                      by {listing.lender.name}
                    </span>
                    {listing.lender.verified && (
                      <Badge variant="secondary" className="h-4 text-[10px] px-1">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
