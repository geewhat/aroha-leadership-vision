
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-up stagger-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-aroha-900">Transformational Programs</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Proven leadership programs designed to help you overcome challenges, realize your potential, 
            and achieve measurable positive lasting change in all areas of your business and life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <Card className="border border-aroha-100 shadow-lg overflow-hidden opacity-0 animate-fade-up stagger-2">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Business Leadership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-aroha-600 text-white px-4 py-1 text-sm rounded-full">Business</span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-aroha-900">10X Ultimate Leader Business Leadership Programme</h3>
              <p className="text-muted-foreground mb-6">
                A comprehensive program designed for business leaders ready to overcome challenges, 
                maximize potential, and create measurable positive transformation across your organization.
              </p>
              <Link to="/programs">
                <Button className="w-full bg-aroha-600 hover:bg-aroha-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border border-aroha-100 shadow-lg overflow-hidden opacity-0 animate-fade-up stagger-3">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1529634806980-85c3375bc3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Marriage Leadership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-aroha-600 text-white px-4 py-1 text-sm rounded-full">Relationships</span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-aroha-900">Million Dollar Marriage Leadership Programme</h3>
              <p className="text-muted-foreground mb-6">
                Apply powerful leadership principles to transform your marriage, strengthen communication, 
                deepen connection, and build a relationship that thrives through all of life's challenges.
              </p>
              <Link to="/programs">
                <Button className="w-full bg-aroha-600 hover:bg-aroha-700 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center opacity-0 animate-fade-up stagger-4">
          <Link to="/contact">
            <Button variant="outline" className="border-aroha-600 text-aroha-600 hover:bg-aroha-50">
              Schedule a Free Breakthrough Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
