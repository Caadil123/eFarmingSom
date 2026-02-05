"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/home/ContactSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero
                title="Contact Us"
                backgroundImage="/assets/contactHero img.jpeg" // Using default or specific contact hero if available
            />

            <div className="py-20">
                {/* Reusing existing ContactSection as a base/placeholder */}
                <ContactSection />
            </div>

            <Footer />
        </main>
    );
}
