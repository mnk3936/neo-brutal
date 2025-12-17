import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/components/ProjectsSection";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="brutal-button bg-primary inline-block">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/#projects" className="brutal-button bg-muted inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className={`${project.color} inline-block px-4 py-2 border-4 border-foreground mb-4`}>
              <span className="font-bold uppercase">{project.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </motion.div>

          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="brutal-card p-2 bg-foreground relative">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                  <button className="w-24 h-24 bg-primary border-4 border-foreground flex items-center justify-center animate-float shadow-brutal">
                    <Play size={40} fill="currentColor" className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project details */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="brutal-card p-8">
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.client} came to us with a challenge: create content that would 
                  cut through the noise in an oversaturated market. They needed something 
                  bold, something different, something that would make people stop scrolling 
                  and pay attention.
                </p>
              </div>

              <div className="brutal-card p-8">
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We dove deep into their brand identity and target audience. Every edit, 
                  every transition, every sound was carefully crafted to maximize engagement 
                  and emotional impact. We experimented with unconventional techniques and 
                  pushed creative boundaries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result? Content that not only met their goals but exceeded all 
                  expectations. The videos went viral, engagement skyrocketed, and the 
                  brand saw real, measurable growth.
                </p>
              </div>

              <div className="brutal-card p-8">
                <h2 className="text-3xl font-bold mb-6">The Results</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-primary border-4 border-foreground p-4">
                    <div className="text-3xl font-bold">2M+</div>
                    <div className="text-sm font-medium">Views</div>
                  </div>
                  <div className="bg-secondary border-4 border-foreground p-4">
                    <div className="text-3xl font-bold text-secondary-foreground">45%</div>
                    <div className="text-sm font-medium text-secondary-foreground">Engagement</div>
                  </div>
                  <div className="bg-accent border-4 border-foreground p-4">
                    <div className="text-3xl font-bold text-accent-foreground">10x</div>
                    <div className="text-sm font-medium text-accent-foreground">ROI</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="brutal-card p-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-bold">{project.client}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary border-2 border-foreground flex items-center justify-center">
                      <Tag size={20} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Category</div>
                      <div className="font-bold">{project.category}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent border-2 border-foreground flex items-center justify-center">
                      <Calendar size={20} className="text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-bold">2 weeks</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="brutal-card p-6 bg-foreground text-background">
                <h3 className="text-xl font-bold mb-4">Want similar results?</h3>
                <p className="text-background/80 mb-4">
                  Let's discuss how we can help your brand stand out.
                </p>
                <a href="mailto:hello@cutframe.studio">
                  <button className="brutal-button bg-primary text-primary-foreground border-background w-full">
                    Get in Touch
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Other projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              More <span className="bg-accent px-2">Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((proj) => (
                <Link key={proj.id} to={`/project/${proj.id}`}>
                  <div className="brutal-card group cursor-pointer overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute top-4 left-4 ${proj.color} border-4 border-foreground px-3 py-1`}>
                        <span className="text-xs font-bold uppercase">{proj.category}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{proj.title}</h3>
                      <p className="text-muted-foreground text-sm">{proj.client}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
