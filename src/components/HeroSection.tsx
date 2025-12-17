import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary border-4 border-foreground rotate-12 opacity-50" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-secondary border-4 border-foreground -rotate-6 opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent border-4 border-foreground rotate-45 opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="brutal-button bg-accent text-accent-foreground text-sm">
                ✦ VIDEO EDITING STUDIO
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
              <span className="block">CUTS THAT</span>
              <span className="block text-stroke text-transparent">DEMAND</span>
              <span className="block bg-primary inline-block px-4 border-4 border-foreground shadow-brutal transform -rotate-1">
                ATTENTION
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg"
            >
              We transform raw footage into scroll-stopping content. Bold edits. 
              Viral potential. Zero compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects">
                <button className="brutal-button bg-secondary text-secondary-foreground flex items-center gap-2">
                  <Play size={20} fill="currentColor" />
                  See Our Work
                </button>
              </a>
              <a href="#hooks">
                <button className="brutal-button bg-background text-foreground">
                  Learn More
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="brutal-card p-2 bg-foreground">
              <div className="aspect-video relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    type="video/mp4"
                  />
                </video>
                
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                  <div className="w-20 h-20 bg-primary border-4 border-foreground flex items-center justify-center animate-float">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary border-4 border-foreground -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-accent border-4 border-foreground -z-20" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-8"
        >
          <a href="#hooks" className="brutal-button bg-background animate-bounce-slow">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
