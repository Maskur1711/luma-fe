import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <SpecialOffers />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
