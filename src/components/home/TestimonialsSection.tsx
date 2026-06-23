import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "I rented a gorgeous Reformation dress for my friend's wedding and received so many compliments! The whole process was seamless and the dress arrived in perfect condition.",
    author: "Emily Chen",
    role: "Wedding Guest",
    rating: 5,
    avatar: "EC",
  },
  {
    id: 2,
    content:
      "As a lender, I've earned over $2,000 renting out pieces I rarely wear. It's amazing to give my wardrobe a second life while making extra income.",
    author: "Sophie Williams",
    role: "Verified Lender",
    rating: 5,
    avatar: "SW",
  },
  {
    id: 3,
    content:
      "The quality of service is outstanding. Every item I've rented has been impeccably maintained. This is truly the future of sustainable fashion.",
    author: "Marcus Johnson",
    role: "Regular Renter",
    rating: 5,
    avatar: "MJ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Loved by Thousands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of fashion lovers making sustainable choices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft"
            >
              <Quote size={32} className="text-gold mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-semibold text-gold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
