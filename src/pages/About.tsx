
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-aroha-900 opacity-0 animate-fade-up">
                About Christine Wattie
              </h1>
              <p className="text-lg text-gray-700 mb-8 opacity-0 animate-fade-up stagger-1">
                Leadership coach dedicated to helping individuals and teams transform their potential.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-up stagger-1">
                <img
                  src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Christine Wattie, Leadership Coach"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="opacity-0 animate-fade-up stagger-2">
                <h2 className="text-3xl font-serif font-bold mb-6 text-aroha-900">My Journey</h2>
                <p className="text-lg text-gray-700 mb-6">
                  I help leaders and their teams lead happier, more successful businesses and lives they love.
                  My vision is to inspire leaders to become their best authentic selves so together we can 
                  create positive lasting change.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether your challenge is in your relationships, team performance, workplace conflict, 
                  marriage or mental health, with our simple, proven leadership tools and practices, 
                  together we can create measurable positive lasting change that will transform your 
                  performance in all areas of business and life.
                </p>
                <p className="text-lg text-aroha-700 font-medium">
                  You will become more and achieve more without doing more. Every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-aroha-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-up stagger-1">
              <h2 className="text-3xl font-serif font-bold mb-6 text-aroha-900">My Approach</h2>
              <p className="text-lg text-gray-700">
                I work with individuals, teams, organisations, couples and families to transform businesses, 
                relationships and lives. My clients continue to demonstrate that the exact same leadership 
                principles are effective across all areas of their business and personal lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-up stagger-2">
                <h3 className="text-xl font-bold mb-4 text-aroha-800">Customized Solutions</h3>
                <p className="text-gray-700">
                  My work is customised to achieve your measurable positive change outcomes. 
                  To transform your business and life.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-up stagger-3">
                <h3 className="text-xl font-bold mb-4 text-aroha-800">Global Reach</h3>
                <p className="text-gray-700">
                  Our sessions take place both virtually and in person. We can work together 
                  regardless of where we both are in the world.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-up stagger-4">
                <h3 className="text-xl font-bold mb-4 text-aroha-800">Lasting Partnership</h3>
                <p className="text-gray-700">
                  While some clients engage for a single session, many work with me 
                  over 12-24 months to ensure sustainable positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
};

export default About;
