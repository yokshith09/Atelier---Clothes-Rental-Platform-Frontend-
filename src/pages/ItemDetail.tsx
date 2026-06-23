import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";

const itemData = {
  id: 1,
  title: "Navy Silk Evening Dress",
  brand: "Self-Portrait",
  price: 45,
  originalPrice: 450,
  deposit: 100,
  size: "UK 10",
  rating: 4.9,
  reviews: 24,
  images: [dress1, dress2, dress3],
  description:
    "Stunning navy silk evening dress featuring a flattering A-line silhouette with delicate lace detailing. Perfect for formal events, galas, and special occasions.",
  condition: "Excellent",
  timesRented: 8,
  measurements: {
    bust: "36 inches",
    waist: "28 inches",
    hips: "38 inches",
    length: "54 inches",
  },
  careInstructions: "Dry clean only. Store on padded hanger.",
  lender: {
    name: "Sarah Mitchell",
    avatar: "SM",
    rating: 4.9,
    reviews: 156,
    responseTime: "Within 1 hour",
    verified: true,
    memberSince: "2023",
  },
};

const ItemDetail = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [isFavorited, setIsFavorited] = useState(false);

  const calculateDays = () => {
    if (dateRange.from && dateRange.to) {
      const diffTime = Math.abs(
        dateRange.to.getTime() - dateRange.from.getTime()
      );
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    }
    return 0;
  };

  const totalPrice = calculateDays() * itemData.price;

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === itemData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? itemData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container-wide py-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/browse" className="hover:text-foreground">
                  Browse
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">{itemData.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary mb-4">
                <img
                  src={itemData.images[selectedImageIndex]}
                  alt={itemData.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
                  {selectedImageIndex + 1} / {itemData.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {itemData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-24 rounded-lg overflow-hidden transition-all ${
                      selectedImageIndex === index
                        ? "ring-2 ring-gold"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Item Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {itemData.brand}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      className={`p-2 rounded-full transition-colors ${
                        isFavorited
                          ? "bg-rose/20 text-rose"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      <Heart
                        size={20}
                        className={isFavorited ? "fill-current" : ""}
                      />
                    </button>
                    <button className="p-2 bg-secondary rounded-full hover:bg-secondary/80">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-3">
                  {itemData.title}
                </h1>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="fill-gold text-gold" />
                    <span className="font-medium">{itemData.rating}</span>
                    <span className="text-muted-foreground">
                      ({itemData.reviews} reviews)
                    </span>
                  </div>
                  <Badge variant="secondary">{itemData.condition}</Badge>
                  <span className="text-muted-foreground text-sm">
                    Rented {itemData.timesRented} times
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="p-6 bg-secondary rounded-xl">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-serif font-semibold">
                    ${itemData.price}
                  </span>
                  <span className="text-muted-foreground">/day</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  RRP ${itemData.originalPrice} • Save{" "}
                  {Math.round(
                    ((itemData.originalPrice - itemData.price) /
                      itemData.originalPrice) *
                      100
                  )}
                  %
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-lg">
                  {itemData.size}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <h3 className="font-medium mb-3">Select Rental Dates</h3>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12"
                    >
                      <Calendar size={18} className="mr-2" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {dateRange.from.toLocaleDateString()} -{" "}
                            {dateRange.to.toLocaleDateString()}
                          </>
                        ) : (
                          dateRange.from.toLocaleDateString()
                        )
                      ) : (
                        "Pick your dates"
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="range"
                      selected={dateRange}
                      onSelect={(range) =>
                        setDateRange({
                          from: range?.from,
                          to: range?.to,
                        })
                      }
                      numberOfMonths={2}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Price Summary */}
              {calculateDays() > 0 && (
                <div className="p-4 bg-secondary/50 rounded-xl space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      ${itemData.price} × {calculateDays()} days
                    </span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Refundable deposit</span>
                    <span>${itemData.deposit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service fee</span>
                    <span>${Math.round(totalPrice * 0.1)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>
                      ${totalPrice + itemData.deposit + Math.round(totalPrice * 0.1)}
                    </span>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button variant="hero" size="xl" className="w-full">
                  Request to Rent
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <MessageCircle size={18} />
                  Message Lender
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="p-3 bg-secondary rounded-lg">
                  <Shield size={20} className="mx-auto mb-1 text-gold" />
                  <span>Secure Payment</span>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <Truck size={20} className="mx-auto mb-1 text-gold" />
                  <span>Free Shipping</span>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <RotateCcw size={20} className="mx-auto mb-1 text-gold" />
                  <span>Easy Returns</span>
                </div>
              </div>

              <Separator />

              {/* Lender Info */}
              <div>
                <h3 className="font-medium mb-4">Meet the Lender</h3>
                <Link
                  to={`/lender/${itemData.lender.name}`}
                  className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center font-semibold text-gold text-lg">
                    {itemData.lender.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{itemData.lender.name}</span>
                      {itemData.lender.verified && (
                        <Badge className="bg-gold/20 text-gold border-0">
                          <Check size={12} className="mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-gold text-gold" />
                        <span>{itemData.lender.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{itemData.lender.reviews} reviews</span>
                      <span>•</span>
                      <span>Responds {itemData.lender.responseTime}</span>
                    </div>
                  </div>
                </Link>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="font-medium mb-3">Description</h3>
                <p className="text-muted-foreground">{itemData.description}</p>
              </div>

              {/* Measurements */}
              <div>
                <h3 className="font-medium mb-3">Measurements</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(itemData.measurements).map(([key, value]) => (
                    <div key={key} className="p-3 bg-secondary rounded-lg">
                      <span className="text-xs text-muted-foreground capitalize">
                        {key}
                      </span>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Care Instructions */}
              <div>
                <h3 className="font-medium mb-3">Care Instructions</h3>
                <p className="text-muted-foreground">
                  {itemData.careInstructions}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItemDetail;
