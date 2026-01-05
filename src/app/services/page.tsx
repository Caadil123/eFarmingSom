import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import CoreSpecialization from "@/components/about/CoreSpecialization";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsTestimonials from "@/components/home/NewsTestimonials";
import PartnersSection from "@/components/common/PartnersSection";
import ServiceOverview from "./ServiceOverview";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="Services" backgroundImage="/assets/our soultion image (1).png" />

            {/* Service Overview */}
            <ServiceOverview />

            {/* Core Specialization Section */}
            <CoreSpecialization showAll={true} />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Testimonials Section */}
            <NewsTestimonials />

            {/* Trusted Partnership Section */}
            <section className="container mx-auto px-4 py-20">
                <PartnersSection />
            </section>

            <Footer />
        </main>
    );
}
