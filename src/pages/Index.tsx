import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;