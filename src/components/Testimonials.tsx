
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Christine transformed not just my leadership approach, but my entire perspective on work-life integration. I'm now able to lead with authenticity and confidence.",
      name: "Sarah Johnson",
      title: "CEO, Tech Innovations Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The Million Dollar Marriage program rescued our relationship. We learned leadership principles that helped us communicate better and reconnect on a deeper level.",
      name: "Michael & Lisa Chen",
      title: "Business Owners",
      image: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Christine helped our executive team break through long-standing barriers and align on our vision. Our company culture and performance have never been stronger.",
      name: "David Williams",
      title: "Managing Director, Global Services Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-aroha-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-aroha-900">Client Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from clients who have experienced measurable positive change through our leadership coaching programs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-up stagger-2">
          <Card className="border border-aroha-100 shadow-lg bg-white">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="mx-auto h-10 w-10 text-aroha-300 mb-6" />
              
              <p className="text-xl md:text-2xl mb-8 text-aroha-900 font-serif">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h4 className="font-bold text-aroha-800">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-aroha-600 w-6" : "bg-aroha-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
