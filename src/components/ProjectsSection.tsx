import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";

export const projects = [
  {
    id: "viral-reels",
    title: "VIRAL REELS",
    category: "Social Media",
    client: "TechStartup Co.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
    color: "bg-primary",
    description: "A series of high-energy reels that generated over 2M views in the first week.",
  },
  {
    id: "brand-story",
    title: "BRAND STORY",
    category: "Documentary",
    client: "EcoWear Fashion",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    color: "bg-secondary",
    description: "An emotional brand documentary that tripled their conversion rate.",
  },
  {
    id: "product-launch",
    title: "PRODUCT LAUNCH",
    category: "Commercial",
    client: "GadgetPro",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600",
    color: "bg-accent",
    description: "Launch video that sold out their entire first batch in 24 hours.",
  },
  {
    id: "music-video",
    title: "MUSIC VIDEO",
    category: "Entertainment",
    client: "Rising Artist",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
    color: "bg-primary",
    description: "A visually stunning music video with 500K+ streams on YouTube.",
  },
  {
    id: "podcast-clips",
    title: "PODCAST CLIPS",
    category: "Content Repurposing",
    client: "ThinkTank Pod",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600",
    color: "bg-secondary",
    description: "Transformed long-form podcasts into viral short-form clips.",
  },
  {
    id: "event-highlight",
    title: "EVENT HIGHLIGHT",
    category: "Events",
    client: "Tech Conference",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    color: "bg-accent",
    description: "Dynamic event recap that captured the energy of 3000+ attendees.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/project/${project.id}`}>
        <div className="brutal-card group cursor-pointer overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="w-16 h-16 bg-primary border-4 border-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play size={28} fill="currentColor" className="ml-1" />
              </motion.div>
            </div>

            {/* Category tag */}
            <div className={`absolute top-4 left-4 ${project.color} border-4 border-foreground px-3 py-1`}>
              <span className="text-sm font-bold uppercase">{project.category}</span>
            </div>
          </div>

          <div className="p-6 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className={`${project.color} w-10 h-10 border-4 border-foreground flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`}>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="brutal-button bg-accent text-accent-foreground text-sm inline-block mb-6">
              ✦ SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              PROJECTS THAT
              <span className="block bg-secondary inline-block px-4 mt-2 border-4 border-foreground shadow-brutal text-secondary-foreground">
                SLAP
              </span>
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-md mt-6 md:mt-0"
          >
            Each project is a testament to our obsession with quality and impact.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
