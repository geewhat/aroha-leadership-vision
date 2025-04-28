
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-aroha-900 opacity-0 animate-fade-up">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-up stagger-1">
                If you're curious about what is possible for you, and to see whether we're a good match to work together, 
                please reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="lg:col-span-2 opacity-0 animate-fade-up stagger-1">
                <Card className="p-6 md:p-8 border border-aroha-100 shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-aroha-900">Send a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-aroha-200 rounded-md focus:outline-none focus:ring-2 focus:ring-aroha-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-aroha-200 rounded-md focus:outline-none focus:ring-2 focus:ring-aroha-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-aroha-200 rounded-md focus:outline-none focus:ring-2 focus:ring-aroha-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-aroha-200 rounded-md focus:outline-none focus:ring-2 focus:ring-aroha-500"
                        >
                          <option value="">Select an option</option>
                          <option value="Business Leadership">Business Leadership</option>
                          <option value="Marriage/Relationship">Marriage/Relationship</option>
                          <option value="Free Breakthrough Session">Free Breakthrough Session</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-aroha-200 rounded-md focus:outline-none focus:ring-2 focus:ring-aroha-500"
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      disabled={loading}
                      className="bg-aroha-600 hover:bg-aroha-700 text-white flex items-center"
                    >
                      {loading ? "Sending..." : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="opacity-0 animate-fade-up stagger-2">
                <Card className="p-6 md:p-8 border border-aroha-100 shadow-md h-full">
                  <h2 className="text-2xl font-bold mb-6 text-aroha-900">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-aroha-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-aroha-800 mb-1">Email</h3>
                        <a href="mailto:christine@arohaleadership.com" className="text-aroha-600 hover:underline">
                          christine@arohaleadership.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-aroha-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-aroha-800 mb-1">Location</h3>
                        <p className="text-gray-700">
                          Havelock North, New Zealand
                        </p>
                        <p className="text-gray-700 mt-1">
                          Available for virtual sessions worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-aroha-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium text-aroha-800 mb-1">Session Types</h3>
                        <p className="text-gray-700">
                          Individual sessions, team facilitation, workshops, virtual coaching
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-aroha-100">
                    <h3 className="font-medium text-aroha-800 mb-3">Connect With Me</h3>
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
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
