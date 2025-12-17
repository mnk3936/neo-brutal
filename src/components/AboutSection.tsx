import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Rocket, Heart, Zap } from "lucide-react";

const AboutSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const values = [
    { icon: Zap, title: "Speed", description: "We move fast without breaking things" },
    { icon: Rocket, title: "Innovation", description: "Always pushing creative boundaries" },
    { icon: Heart, title: "Passion", description: "We love what we do, and it shows" },
    { icon: Users, title: "Collaboration", description: "Your vision, our expertise" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/20 border-4 border-foreground rotate-45 translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-secondary/20 border-4 border-foreground -rotate-12 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="brutal-button bg-secondary text-secondary-foreground text-sm inline-block mb-6">
            ✦ ABOUT US
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            THE TEAM BEHIND
            <span className="block bg-primary inline-block px-4 mt-2 border-4 border-foreground shadow-brutal">
              THE MAGIC
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={contentRef}>
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="brutal-card p-4 bg-foreground">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team working"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent border-4 border-foreground -z-10" />
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-primary border-4 border-foreground p-4 shadow-brutal"
            >
              <span className="text-2xl font-bold">EST. 2020</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl leading-relaxed">
              We're a <span className="bg-primary px-2 font-bold">tight-knit crew</span> of editors, 
              motion designers, and creative strategists who believe every frame counts.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Founded in a garage with nothing but passion and a pirated copy of Premiere 
              (we're legal now, promise), CUTFRAME has grown into a studio trusted by brands 
              who refuse to blend in.
            </p>

            <p className="text-lg text-muted-foreground">
              We've edited everything from TikTok ads that broke the internet to documentaries 
              that made people cry. Whatever your vision, we've got the skills to make it reality.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="brutal-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-accent border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <value.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
