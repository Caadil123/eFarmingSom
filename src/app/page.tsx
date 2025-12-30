import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsTestimonials from "@/components/home/NewsTestimonials";
import NewsArticles from "@/components/home/NewsArticles";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <NewsTestimonials />
      <NewsArticles />
      <ContactSection />
      <Footer />
    </main>
  );
}
