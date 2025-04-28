
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center opacity-0 animate-fade-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-aroha-900">My Vision</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-700">
            "To inspire leaders to become their best authentic selves so together we can create positive lasting change. 
            Changing lives, changing relationships, changing organisations, changing our world for good through great leadership; 
            <span className="italic text-aroha-600"> one leader at a time.</span>"
          </p>
          
          <div className="border-t border-aroha-100 pt-12 mt-12">
            <h3 className="text-2xl font-serif font-bold mb-6 text-aroha-800">Are you ready to create Your Extraordinary Second Act?</h3>
            <Link to="/contact" className="inline-flex items-center text-aroha-600 font-semibold hover:text-aroha-700 transition-colors">
              Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
