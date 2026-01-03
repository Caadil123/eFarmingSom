import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";
import AboutOverview from "@/components/about/AboutOverview";
import MissionVision from "@/components/about/MissionVision";
import CoreSpecialization from "@/components/about/CoreSpecialization";
import PerfectChain from "@/components/about/PerfectChain";
import TeamPreview from "@/components/about/TeamPreview";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="About Us" />
            <AboutOverview />
            <MissionVision />
            <CoreSpecialization />
            <PerfectChain />
            <StatsSection />
            <TeamPreview />
            <WhyChooseUs />
            <Footer />
        </main>
    );
}
