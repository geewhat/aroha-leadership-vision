
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aroha-50 text-foreground py-12 border-t border-aroha-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-aroha-700 flex items-center mb-4">
              <span className="text-3xl mr-1">❀</span> Aroha Leadership
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Helping leaders become their best authentic selves to create positive lasting change. 
              Changing lives, changing relationships, changing organisations, changing our world for good.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-aroha-700 hover:text-aroha-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-aroha-700 hover:text-aroha-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-aroha-700 hover:text-aroha-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-aroha-600">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-aroha-600">About Christine</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-aroha-600">Programs</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-aroha-600">Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-aroha-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Havelock North, New Zealand</li>
              <li><a href="mailto:christine@arohaleadership.com" className="text-aroha-600 hover:text-aroha-800">christine@arohaleadership.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-aroha-100 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Aroha Leadership. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
