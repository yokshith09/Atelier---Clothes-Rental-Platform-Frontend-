import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, User, Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Women", href: "/browse?category=women" },
    { label: "Men", href: "/browse?category=men" },
    { label: "Accessories", href: "/browse?category=accessories" },
    { label: "Occasions", href: "/browse?occasion=all" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-xs text-muted-foreground border-b border-border">
          <span>Free shipping on rentals over $150</span>
          <div className="flex items-center gap-4">
            <Link to="/how-it-works" className="link-underline hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/help" className="link-underline hover:text-foreground transition-colors">
              Help & Support
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight">
              Atelier
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-medium text-sm tracking-wide transition-colors link-underline ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="hidden md:block overflow-hidden"
                >
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="h-9"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </motion.div>
              ) : (
                <button
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              )}
            </AnimatePresence>

            <Link
              to="/favorites"
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Favorites"
            >
              <Heart size={20} />
            </Link>



            <button
              className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
            </button>

            <Link to="/login">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Sign In
              </Button>
            </Link>

            <Link to="/list-item" className="hidden md:block">
              <Button variant="hero" size="sm">
                Rent Your Wardrobe
              </Button>
            </Link>

            <Link to="/dashboard" className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Dashboard">
              <User size={20} />
            </Link>

            <Link to="/login" className="md:hidden">
              <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                <User size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="container-wide py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-3 px-2 text-lg font-medium hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4 space-y-2">
                <Link to="/list-item" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Rent Your Wardrobe
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
