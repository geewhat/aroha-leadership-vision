
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Video, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-aroha-900 opacity-0 animate-fade-up">
                Leadership Resources
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-up stagger-1">
                Free tools and resources to help you on your leadership journey. Explore materials
                that support your growth as a leader in business and life.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resource */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-aroha-50 rounded-xl shadow-lg overflow-hidden opacity-0 animate-fade-up stagger-1">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 bg-aroha-600 text-white py-10 px-6 flex flex-col justify-center items-center text-center">
                  <Video className="h-16 w-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Featured Masterclass</h3>
                  <p className="text-white/80">Free Leadership Training</p>
                </div>
                <div className="col-span-2 p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-4 text-aroha-900">
                    10X Ultimate Leader Business Leadership Programme Masterclass
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Watch this comprehensive masterclass to discover the leadership principles that 
                    can transform your business performance and help you achieve your boldest goals.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-aroha-600 hover:bg-aroha-700 text-white">
                      Watch Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-aroha-900 opacity-0 animate-fade-up">
              Explore Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Articles */}
              <Card className="border border-aroha-100 shadow-md overflow-hidden opacity-0 animate-fade-up stagger-1">
                <CardContent className="p-0">
                  <div className="bg-aroha-100 p-8 flex flex-col items-center">
                    <FileText className="h-16 w-16 text-aroha-600 mb-4" />
                    <h3 className="text-xl font-bold text-aroha-800">Leadership Articles</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">
                      Read insightful articles on leadership principles, team dynamics, 
                      and personal growth strategies.
                    </p>
                    <a href="#" className="text-aroha-600 font-medium hover:text-aroha-700 inline-flex items-center">
                      Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Videos */}
              <Card className="border border-aroha-100 shadow-md overflow-hidden opacity-0 animate-fade-up stagger-2">
                <CardContent className="p-0">
                  <div className="bg-aroha-100 p-8 flex flex-col items-center">
                    <Video className="h-16 w-16 text-aroha-600 mb-4" />
                    <h3 className="text-xl font-bold text-aroha-800">Video Library</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">
                      Watch leadership videos, tutorials, interviews, and short training sessions 
                      on various leadership topics.
                    </p>
                    <a href="#" className="text-aroha-600 font-medium hover:text-aroha-700 inline-flex items-center">
                      View Videos <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Downloads */}
              <Card className="border border-aroha-100 shadow-md overflow-hidden opacity-0 animate-fade-up stagger-3">
                <CardContent className="p-0">
                  <div className="bg-aroha-100 p-8 flex flex-col items-center">
                    <Download className="h-16 w-16 text-aroha-600 mb-4" />
                    <h3 className="text-xl font-bold text-aroha-800">Free Downloads</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">
                      Access workbooks, checklists, templates and guides to support your 
                      leadership development journey.
                    </p>
                    <a href="#" className="text-aroha-600 font-medium hover:text-aroha-700 inline-flex items-center">
                      Get Downloads <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up stagger-1">
              <h2 className="text-3xl font-serif font-bold mb-6 text-aroha-900">
                Get Leadership Insights Delivered
              </h2>
              <p className="text-lg text-gray-700 mb-10">
                Subscribe to receive leadership tips, new resource notifications, and inspiration 
                directly to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-md border border-aroha-200 focus:outline-none focus:ring-2 focus:ring-aroha-500"
                    required
                  />
                  <Button type="submit" className="bg-aroha-600 hover:bg-aroha-700 text-white whitespace-nowrap">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
