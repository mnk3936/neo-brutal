import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="brutal-card bg-primary text-primary-foreground p-8 md:p-12 mb-16 border-background">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-2">
                READY TO GO VIRAL?
              </h3>
              <p className="text-xl opacity-80">
                Let's create something that breaks the internet.
              </p>
            </div>
            <a href="mailto:hello@cutframe.studio">
              <button className="brutal-button bg-background text-foreground border-background whitespace-nowrap">
                Get Started
              </button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="bg-primary border-4 border-background p-3 inline-block mb-6 transform -rotate-2">
              <span className="text-2xl font-bold text-primary-foreground">
                CUT<span className="text-secondary">FRAME</span>
              </span>
            </div>
            <p className="text-lg text-background/80 max-w-md mb-6">
              Bold video editing that cuts through the noise. We craft scroll-stopping 
              content that demands attention.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-background text-foreground border-4 border-background flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-background text-foreground border-4 border-background flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-background text-foreground border-4 border-background flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-secondary inline-block px-3 py-1 text-secondary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="/#projects" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="/#hooks" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#reviews" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-accent inline-block px-3 py-1 text-accent-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <a href="mailto:hello@cutframe.studio" className="hover:text-primary transition-colors">
                  shadillalle@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +91 95623 01314
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span>Mavoor Road<br />Calicut, Kerala 670602</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60">
            © 2026 CUTFRAME. All rights reserved.
          </p>
          <div className="flex gap-6 text-background/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
