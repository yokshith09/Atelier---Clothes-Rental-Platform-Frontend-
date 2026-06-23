import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, Grid3X3, LayoutList, Heart, Star, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import suit1 from "@/assets/suit-1.jpg";
import bag1 from "@/assets/bag-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";

const allListings = [
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
    category: "dresses",
    occasion: "evening",
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
    category: "dresses",
    occasion: "party",
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
    category: "dresses",
    occasion: "evening",
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
    category: "suits",
    occasion: "work",
  },
  {
    id: 5,
    title: "Designer Leather Tote",
    brand: "Mulberry",
    price: 35,
    originalPrice: 895,
    size: "One Size",
    rating: 4.9,
    reviews: 45,
    image: bag1,
    category: "bags",
    occasion: "everyday",
  },
  {
    id: 6,
    title: "Crystal Statement Necklace",
    brand: "Swarovski",
    price: 25,
    originalPrice: 280,
    size: "One Size",
    rating: 4.8,
    reviews: 22,
    image: jewelry1,
    category: "jewelry",
    occasion: "party",
  },
  {
    id: 7,
    title: "Emerald Silk Wrap Dress",
    brand: "Ghost",
    price: 40,
    originalPrice: 320,
    size: "UK 8",
    rating: 4.7,
    reviews: 19,
    image: dress2,
    category: "dresses",
    occasion: "wedding",
  },
  {
    id: 8,
    title: "Ivory Lace Midi Dress",
    brand: "Self-Portrait",
    price: 50,
    originalPrice: 480,
    size: "UK 10",
    rating: 4.9,
    reviews: 28,
    image: dress1,
    category: "dresses",
    occasion: "wedding",
  },
  {
    id: 9,
    title: "Charcoal Three-Piece Suit",
    brand: "Paul Smith",
    price: 85,
    originalPrice: 980,
    size: "UK 42",
    rating: 4.9,
    reviews: 16,
    image: suit1,
    category: "suits",
    occasion: "wedding",
  },
  {
    id: 10,
    title: "Quilted Crossbody Bag",
    brand: "Chanel",
    price: 60,
    originalPrice: 1200,
    size: "One Size",
    rating: 5.0,
    reviews: 52,
    image: bag1,
    category: "bags",
    occasion: "evening",
  },
  {
    id: 11,
    title: "Pearl Drop Earrings",
    brand: "Tiffany & Co.",
    price: 20,
    originalPrice: 350,
    size: "One Size",
    rating: 4.9,
    reviews: 38,
    image: jewelry1,
    category: "jewelry",
    occasion: "wedding",
  },
  {
    id: 12,
    title: "Sequin Mini Dress",
    brand: "Rixo",
    price: 48,
    originalPrice: 395,
    size: "UK 8",
    rating: 4.6,
    reviews: 21,
    image: dress3,
    category: "dresses",
    occasion: "party",
  },
  {
    id: 13,
    title: "Cream Wool Blazer",
    brand: "Max Mara",
    price: 55,
    originalPrice: 720,
    size: "UK 12",
    rating: 4.8,
    reviews: 14,
    image: suit1,
    category: "suits",
    occasion: "work",
  },
  {
    id: 14,
    title: "Structured Top Handle Bag",
    brand: "Loewe",
    price: 70,
    originalPrice: 1450,
    size: "One Size",
    rating: 4.9,
    reviews: 33,
    image: bag1,
    category: "bags",
    occasion: "work",
  },
  {
    id: 15,
    title: "Rose Gold Tennis Bracelet",
    brand: "Astrid & Miyu",
    price: 18,
    originalPrice: 220,
    size: "One Size",
    rating: 4.7,
    reviews: 27,
    image: jewelry1,
    category: "jewelry",
    occasion: "everyday",
  },
  {
    id: 16,
    title: "Burgundy Velvet Tuxedo",
    brand: "Tom Ford",
    price: 95,
    originalPrice: 1500,
    size: "UK 40",
    rating: 5.0,
    reviews: 9,
    image: suit1,
    category: "suits",
    occasion: "evening",
  },
];

const categories = ["All", "Dresses", "Suits", "Bags", "Jewelry", "Accessories"];
const sizes = ["UK 6", "UK 8", "UK 10", "UK 12", "UK 14", "UK 16"];
const priceRanges = ["Under $30", "$30-$50", "$50-$100", "Over $100"];
const occasions = ["Evening", "Party", "Work", "Wedding", "Casual", "Everyday"];

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredListings = allListings.filter((item) => {
    if (selectedCategory !== "All" && item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    return true;
  });

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasion)
        ? prev.filter((o) => o !== occasion)
        : [...prev, occasion]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedSizes([]);
    setSelectedOccasions([]);
    setPriceRange("");
  };

  const activeFiltersCount =
    (selectedCategory !== "All" ? 1 : 0) +
    selectedSizes.length +
    selectedOccasions.length +
    (priceRange ? 1 : 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Page header */}
        <div className="bg-secondary py-8 md:py-12">
          <div className="container-wide">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
              Browse Collection
            </h1>
            <p className="text-muted-foreground">
              {filteredListings.length} items available to rent
            </p>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Size</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {sizes.map((size) => (
                      <label
                        key={size}
                        className={`flex items-center justify-center px-3 py-2 rounded-md text-sm cursor-pointer transition-colors border ${
                          selectedSizes.includes(size)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "hover:bg-secondary border-border"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => toggleSize(size)}
                          className="sr-only"
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Price per day</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() =>
                          setPriceRange(priceRange === range ? "" : range)
                        }
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          priceRange === range
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Occasions */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Occasion</h4>
                  <div className="space-y-2">
                    {occasions.map((occasion) => (
                      <label
                        key={occasion}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedOccasions.includes(occasion)}
                          onCheckedChange={() => toggleOccasion(occasion)}
                        />
                        <span className="text-sm">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-4 mb-6">
                {/* Mobile filter button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <Filter size={18} />
                      Filters
                      {activeFiltersCount > 0 && (
                        <Badge className="ml-1 bg-gold text-gold-foreground">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* Same filters as desktop */}
                      <div>
                        <h4 className="text-sm font-medium mb-3">Category</h4>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                selectedCategory === category
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-secondary"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <div className="flex items-center gap-3 ml-auto">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View toggle */}
                  <div className="hidden sm:flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${
                        viewMode === "grid"
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <Grid3X3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list"
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <LayoutList size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active filters */}
              {activeFiltersCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCategory !== "All" && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory("All")}>
                        <X size={14} />
                      </button>
                    </Badge>
                  )}
                  {selectedSizes.map((size) => (
                    <Badge key={size} variant="secondary" className="gap-1">
                      {size}
                      <button onClick={() => toggleSize(size)}>
                        <X size={14} />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              {/* Listings grid */}
              <div
                className={`grid gap-4 md:gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredListings.map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <Link
                      to={`/item/${listing.id}`}
                      className={`block ${
                        viewMode === "list" ? "flex gap-6" : ""
                      }`}
                    >
                      <div
                        className={`relative rounded-xl overflow-hidden mb-3 img-zoom card-hover bg-card ${
                          viewMode === "list"
                            ? "w-40 h-52 flex-shrink-0 mb-0"
                            : "aspect-[3/4]"
                        }`}
                      >
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <Heart size={18} />
                        </button>
                      </div>

                      <div className={viewMode === "list" ? "flex-1 py-2" : ""}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground uppercase tracking-wide">
                            {listing.brand}
                          </span>
                          <div className="flex items-center gap-1 text-xs">
                            <Star size={12} className="fill-gold text-gold" />
                            <span>{listing.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-medium text-sm line-clamp-1 mb-1">
                          {listing.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="font-semibold">${listing.price}</span>
                            <span className="text-xs text-muted-foreground">
                              /day
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {listing.size}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
