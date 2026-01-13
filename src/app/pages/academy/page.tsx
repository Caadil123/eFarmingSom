"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Leaf, Target, Award, Users, Globe, BookOpen } from "lucide-react";
import MissionVision from "@/components/about/MissionVision";

export default function AcademyPage() {
    const specializations = [
        "Precision Farming Technologies",
        "Agricultural Drone Applications",
        "Smart Farming Systems",
        "Data Analytics & GIS in Agriculture",
        "Sustainable & Climate-Smart Agriculture",
        "Digital Transformation in Agriculture"
    ];

    const courses = [
        {
            id: 1,
            title: "Youth AgriChampions Program",
            image: "/assets/agritech-future.png",
            description: "A leadership and skills-building program empowering young farmers and agripreneurs with modern agricultural knowledge, digital tools, and innovation skills to lead change in their communities.",
            link: "#"
        },
        {
            id: 2,
            title: "The NextGen of Agriculture Fellowship",
            image: "/assets/news img (1).png",
            description: "A competitive fellowship designed to prepare the next generation of agricultural leaders through advanced training in agritech, agribusiness, climate resilience, and value-chain development.",
            link: "#"
        },
        {
            id: 3,
            title: "eFarming Agri Youth Mentorship Program",
            image: "/assets/our soultion image (1).png",
            description: "A structured mentorship initiative connecting youth with experienced agronomists, technologists, and agribusiness leaders to support skills transfer, career development, and enterprise growth.",
            link: "#"
        },
        {
            id: 4,
            title: "Climate-Smart Agriculture Program",
            image: "/assets/agritech-green-future.png",
            description: "A specialized program promoting sustainable and climate-resilient farming practices, including soil conservation, water management, efficient input use, and climate risk mitigation.",
            link: "#"
        },
        {
            id: 5,
            title: "GIS in Agriculture Program",
            image: "/assets/map_img.png.png",
            description: "A technology-focused program introducing Geographic Information Systems (GIS) for agriculture, covering farm mapping, land-use planning, crop monitoring, and precision decision-making.",
            link: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="eFarming Precision Academy" backgroundImage="/assets/academyHero.jpeg" />

            {/* About & Who We Are */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 space-y-6">
                            <div className="inline-block px-3 py-1 bg-emerald-100 text-primary text-xs font-bold rounded-full tracking-wider uppercase mb-2">
                                About Us
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                The First Precision Agriculture Academy under eFarming Somalia
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                eFarming Precision Academy is the first specialized precision agriculture and digital farming academy established under <span className="font-bold text-primary">eFarming Somalia</span>. The Academy equips farmers, youth, and agribusiness professionals with modern agricultural skills, precision technologies, and climate-smart practices that improve productivity, resilience, and market readiness.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                                <h3 className="font-bold text-gray-900 mb-2">Who We Are</h3>
                                <p className="text-gray-600">
                                    We are a farmer-focused, technology-driven training initiative bringing together agronomists, digital agriculture experts, and innovation partners to build a skilled and future-ready agricultural workforce.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/photo-1533460004989-cef01064af7e.jpg"
                                alt="Students in field"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialization Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Areas of Specialization</h2>
                        <p className="text-gray-600">We deliver practical, industry-aligned training in key areas of modern agriculture.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 border border-gray-100">
                                <div className="p-2 bg-emerald-50 text-primary rounded-lg shrink-0">
                                    <CheckCircle size={20} />
                                </div>
                                <span className="font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 space-y-2">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Curriculum</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Programs & Training Pathways</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {courses.map((course) => (
                            <div key={course.id} className="group bg-primary rounded-2xl overflow-hidden shadow-lg border border-emerald-800/20 hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="relative h-64 md:h-72 overflow-hidden bg-white">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-200 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-emerald-100/90 text-sm leading-relaxed mb-8 flex-grow">
                                        {course.description}
                                    </p>
                                    <Link
                                        href={course.link}
                                        className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-emerald-200 transition-colors mt-auto group/btn"
                                    >
                                        Enroll Today
                                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <MissionVision />

            {/* Certifications & Recognition */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications, Partners & Recognition</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                eFarming Precision Academy collaborates with trusted institutions, technology providers, universities, and development partners to deliver high-quality, industry-aligned training.
                            </p>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Users size={20} className="text-primary" />
                                    Affiliations & Partners
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "Agritech and drone technology providers",
                                        "Universities and research institutions",
                                        "Development organizations and NGOs",
                                        "Private sector agribusinesses",
                                        "Innovation hubs and training networks"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primary text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                                    <div className="text-sm text-gray-600 font-medium">Learners Trained</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primary text-center">
                                    <div className="text-2xl font-bold text-primary mb-2">Multiple</div>
                                    <div className="text-sm text-gray-600 font-medium">Regions Reached</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primary text-center">
                                    <Globe size={32} className="mx-auto text-primary mb-2" />
                                    <div className="text-sm text-gray-600 font-medium">Global Partnerships</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primary text-center">
                                    <BookOpen size={32} className="mx-auto text-primary mb-2" />
                                    <div className="text-sm text-gray-600 font-medium">Inclusive Programs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner With Us</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you are a development organization, university, agribusiness, donor, or impact investor, we welcome collaboration. Together, we can scale precision agriculture, digital skills, and climate-smart solutions that drive sustainable agricultural transformation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-emerald-800 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Contact Us to Partner
                        <ArrowRight size={20} />
                    </Link>
                    <p className="mt-8 text-primary font-medium italic">
                        "Building Skills for a Smarter, Climate-Resilient Agricultural Future"
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
