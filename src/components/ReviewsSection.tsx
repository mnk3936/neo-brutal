import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStartup Co.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    review: "CUTFRAME turned our boring product demos into viral sensations. Our engagement went up 400% in the first month!",
    rating: 5,
    color: "bg-primary",
  },
  {
    name: "Marcus Johnson",
    role: "Content Director, EcoWear",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    review: "The speed and quality are unmatched. They understand viral content like no other team I've worked with.",
    rating: 5,
    color: "bg-secondary",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Lead, GadgetPro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    review: "Our launch video sold out our entire inventory. The ROI on their work was absolutely insane.",
    rating: 5,
    color: "bg-accent",
  },
  {
    name: "David Park",
    role: "Founder, ThinkTank Pod",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    review: "They took our 2-hour podcasts and created clips that outperformed our main content. Game changer!",
    rating: 5,
    color: "bg-primary",
  },
];

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ rotate: 0 }}
      className="brutal-card p-6 md:p-8 relative"
    >
      {/* Quote icon */}
      <div className={`${review.color} w-12 h-12 border-4 border-foreground flex items-center justify-center absolute -top-4 -right-4 shadow-brutal-sm`}>
        <Quote size={24} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" className="text-primary" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-lg md:text-xl mb-6 font-medium">
        "{review.review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 border-4 border-foreground overflow-hidden">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{review.name}</h4>
          <p className="text-muted-foreground">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="reviews" className="py-24 bg-muted relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-foreground/3 select-none whitespace-nowrap">
        REVIEWS
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="brutal-button bg-primary text-primary-foreground text-sm inline-block mb-6">
            ✦ TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            CLIENTS WHO
            <span className="block bg-accent inline-block px-4 mt-2 border-4 border-foreground shadow-brutal text-accent-foreground">
              LOVE US
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 brutal-card bg-foreground text-background p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary">150+</div>
              <div className="text-lg mt-2">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary">50M+</div>
              <div className="text-lg mt-2">Views Generated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent">48h</div>
              <div className="text-lg mt-2">Avg. Turnaround</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary">100%</div>
              <div className="text-lg mt-2">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
