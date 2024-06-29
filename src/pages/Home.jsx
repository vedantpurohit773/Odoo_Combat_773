import DeliveryPartners from "../components/DeliveryPartners";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter"; // Correct import
import ServicesSection from "../components/ServicesSection"; 

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ServicesSection />
      <DeliveryPartners />
      <NewsLetter /> {/* Use NewsLetter component */}
    </>
  );
};

export default Home;
