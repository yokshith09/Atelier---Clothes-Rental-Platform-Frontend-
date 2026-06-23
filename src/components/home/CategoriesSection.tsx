import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dress1 from "@/assets/dress-1.jpg";
import suit1 from "@/assets/suit-1.jpg";
import bag1 from "@/assets/bag-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";

const categories = [
  {
    id: 1,
    name: "Dresses",
    count: "2,450+ items",
    image: dress1,
    href: "/browse?category=dresses",
  },
  {
    id: 2,
    name: "Suits & Blazers",
    count: "890+ items",
    image: suit1,
    href: "/browse?category=suits",
  },
  {
    id: 3,
    name: "Bags",
    count: "1,200+ items",
    image: bag1,
    href: "/browse?category=bags",
  },
  {
    id: 4,
    name: "Jewelry",
    count: "750+ items",
    image: jewelry1,
    href: "/browse?category=jewelry",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect piece for any occasion from our curated collection
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="group block relative aspect-[3/4] rounded-xl overflow-hidden img-zoom card-hover"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {category.count}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
