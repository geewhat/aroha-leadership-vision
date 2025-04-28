
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 nav-glass shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-aroha-700 flex items-center">
          <span className="text-3xl mr-1">❀</span> Aroha Leadership
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-aroha-600 transition-colors">Home</Link>
          <Link to="/about" className="text-foreground hover:text-aroha-600 transition-colors">About</Link>
          <Link to="/programs" className="text-foreground hover:text-aroha-600 transition-colors">Programs</Link>
          <Link to="/resources" className="text-foreground hover:text-aroha-600 transition-colors">Resources</Link>
          <Link to="/contact">
            <Button className="bg-aroha-600 hover:bg-aroha-700 text-white">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 nav-glass absolute w-full py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-aroha-600 transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-aroha-600 transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className="text-foreground hover:text-aroha-600 transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/resources" 
              className="text-foreground hover:text-aroha-600 transition-colors py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-aroha-600 hover:bg-aroha-700 text-white">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
