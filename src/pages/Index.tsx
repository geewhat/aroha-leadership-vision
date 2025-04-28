
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import ContactCta from "@/components/ContactCta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Programs />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
};

export default Index;
