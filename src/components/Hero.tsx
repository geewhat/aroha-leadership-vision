
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-pattern min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 opacity-0 animate-fade-up stagger-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-aroha-950 mb-6 leading-tight">
              Become Your Best <span className="text-aroha-600">Authentic</span> Self
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Helping leaders and teams create positive lasting change through proven leadership tools and practices. Transform your business, relationships, and life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-aroha-600 hover:bg-aroha-700 text-white px-6 py-6 text-lg">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-aroha-600 text-aroha-600 hover:bg-aroha-50 px-6 py-6 text-lg">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 opacity-0 animate-fade-up stagger-2">
            <div className="bg-white p-3 rounded-lg shadow-lg transform md:rotate-2">
              <img 
                src="/lovable-uploads/37c3e9e6-e878-4def-a240-b927b10327a0.png"
                alt="Christine Wattie, Leadership Coach" 
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
