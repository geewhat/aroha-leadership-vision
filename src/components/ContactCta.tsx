
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactCta = () => {
  return (
    <section className="py-24 bg-aroha-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Leadership?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            If you're curious about what is possible for you, and to see whether we're a good 
            match to work together, I'd love to connect.
          </p>
          
          <a 
            href="mailto:christine@arohaleadership.com" 
            className="inline-flex items-center bg-white text-aroha-600 hover:bg-aroha-50 px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" /> Email Christine
          </a>
          
          <p className="mt-10 text-white/80">
            Or schedule a free Breakthrough Session to map out your vision and create a customized game plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
