
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-aroha-900 opacity-0 animate-fade-up">
                Transformational Leadership Programs
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-up stagger-1">
                Designed for leaders ready to overcome challenges, transform potential, and achieve
                measurable positive lasting change in all areas of business and life.
              </p>
            </div>
          </div>
        </section>

        {/* Business Leadership Program */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="opacity-0 animate-fade-up stagger-1">
                <img
                  src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="10X Ultimate Leader Business Leadership Programme"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="opacity-0 animate-fade-up stagger-2">
                <div className="bg-aroha-50 text-aroha-600 text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
                  Business Leadership
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-aroha-900">
                  10X Ultimate Leader Business Leadership Programme
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  A comprehensive program designed for business leaders ready to overcome anxiety, 
                  fear and overwhelm, transform potential, and achieve measurable positive lasting 
                  change as a leader in all areas of your business.
                </p>
                
                <h3 className="text-xl font-bold mb-4 text-aroha-800">Key Benefits:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Develop authentic leadership skills",
                    "Improve team performance and cohesion",
                    "Master strategic decision-making",
                    "Create sustainable business growth",
                    "Achieve greater work-life integration"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-aroha-600 mr-2 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button className="bg-aroha-600 hover:bg-aroha-700 text-white">
                    Watch Masterclass <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marriage Leadership Program */}
        <section className="py-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1 opacity-0 animate-fade-up stagger-1">
                <div className="bg-white text-aroha-600 text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
                  Relationship Leadership
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-aroha-900">
                  Million Dollar Marriage Leadership Programme
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  A transformational program applying leadership principles to strengthen marriages 
                  and relationships. Designed for couples ready to overcome challenges and create 
                  deeper, more fulfilling connections.
                </p>
                
                <h3 className="text-xl font-bold mb-4 text-aroha-800">Key Benefits:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Improve communication and understanding",
                    "Build deeper emotional connection",
                    "Resolve conflicts constructively",
                    "Create shared vision and goals",
                    "Balance individual needs with relationship priorities"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-aroha-600 mr-2 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button className="bg-aroha-600 hover:bg-aroha-700 text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2 opacity-0 animate-fade-up stagger-2">
                <img
                  src="https://images.unsplash.com/photo-1529634806980-85c3375bc3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Million Dollar Marriage Leadership Programme"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up stagger-1">
              <h2 className="text-3xl font-serif font-bold mb-6 text-aroha-900">
                Ready to Begin Your Leadership Journey?
              </h2>
              <p className="text-lg text-gray-700 mb-10">
                Schedule a free Breakthrough Session to map out your vision and create a 
                customized game plan with the exact steps to achieve your biggest boldest goals.
              </p>
              <Link to="/contact">
                <Button className="bg-aroha-600 hover:bg-aroha-700 text-white px-8 py-6 text-lg">
                  Book Your Free Breakthrough Session
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Programs;
