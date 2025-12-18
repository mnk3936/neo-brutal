import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/#projects" },
    { name: "Hooks", href: "/#hooks" },
    { name: "Reviews", href: "/#reviews" },
    { name: "About", href: "/#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Disproportionately large */}
          <Link 
            to="/" 
            className="absolute left-4 md:left-8 -top-2 z-10"
          > 
            <div className="bg-primary border-4 border-foreground p-3 md:p-4 shadow-brutal transform -rotate-3 hover:rotate-0 transition-transform">
              <span className="text-2xl md:text-4xl font-bold tracking-tighter text-primary-foreground">
                LENS<span className="text-secondary">IFY</span>
              </span>
            </div>
          </Link>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="brutal-button bg-background text-foreground hover:bg-primary text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block absolute right-4 md:right-8">
            <Link to="/#contact">
              <button className="brutal-button bg-secondary text-secondary-foreground">
                Let's Talk
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 brutal-button bg-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t-4 border-foreground">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="brutal-button bg-muted text-foreground text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/#contact" onClick={() => setIsOpen(false)}>
              <button className="brutal-button bg-secondary text-secondary-foreground w-full">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
