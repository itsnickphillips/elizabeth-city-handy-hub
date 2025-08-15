import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index page rendering");
  
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;