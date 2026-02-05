import React from "react";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import PartnersSection from "@/components/common/PartnersSection";
import ContactSection from "@/components/home/ContactSection";

import ProjectIntro from "@/components/projects/ProjectIntro";

import ImpactSection from "@/components/projects/ImpactSection";
import NewsTestimonials from "@/components/home/NewsTestimonials";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <PageHero
                title="Our Projects"
                backgroundImage="/assets/projectHero img.jpeg" // Using existing asset as placeholder
            />

            {/* Project Intro Section */}
            <ProjectIntro />

            {/* Projects Grid Section */}
            <ProjectsGrid />

            {/* Impact Section */}
            <ImpactSection />

            {/* Testimonials Section */}
            <NewsTestimonials />

            <Footer />
        </main>
    );
}
