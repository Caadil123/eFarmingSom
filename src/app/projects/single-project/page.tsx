import { PROJECTS_DATA } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import { Calendar, MapPin, User, CheckCircle2, ArrowRight, Maximize, Thermometer, Globe, Mountain, CloudSun, ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SingleProjectPage() {
    // For the "Single Project" page, we will use the first project as the showcase or a specific one.
    // Let's use the 'deyr-greenhouse' project as it has the most data populated.
    const project = PROJECTS_DATA.find((p) => p.id === 'deyr-greenhouse');

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />

            {/* Custom Hero Section */}
            <section className="relative w-full h-[600px] lg:h-[700px] flex items-center overflow-hidden bg-
            /90">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/dayr-greenhouse.jpeg"
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 max-w-xl rounded-3xl shadow-2xl animate-fade-in-up border border-gray-100">
                        <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-3 block">
                            Eco-friendly & Sustainable Project
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Experience the future of farming with our state-of-the-art greenhouse installation, designed for optimal yield and sustainability.
                        </p>
                        <button className="bg-primary hover:bg-emerald-800 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 flex items-center gap-2">
                            Learn More
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Specs / Basic Data Section */}
            <section className="py-20 relative bg-white bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: "url('/assets/Section.png')", backgroundSize: '80%' }}>
                <div className="absolute inset-0 bg-white/90"></div> {/* Subtle overlay to ensure text contrast if bg is busy */}

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4 block">BASIC DATA</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Deyr Greenhouse Specs
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto">
                        {/* Location */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-emerald-100/60 flex items-center justify-center mb-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <MapPin size={32} />
                            </div>
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">LOCATION</span>
                            <h4 className="text-2xl font-bold text-gray-900">{project.location.split(',')[0]}</h4>
                        </div>

                        {/* Longitude */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-emerald-100/60 flex items-center justify-center mb-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <Globe size={32} />
                            </div>
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">LONGITUDE</span>
                            <h4 className="text-2xl font-bold text-gray-900">106°57&apos;7.66&quot;E</h4>
                        </div>

                        {/* Altitude */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-emerald-100/60 flex items-center justify-center mb-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <ArrowUpDown size={32} />
                            </div>
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">ALTITUDE</span>
                            <h4 className="text-2xl font-bold text-gray-900">111&apos;</h4>
                        </div>

                        {/* Temperature */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-emerald-100/60 flex items-center justify-center mb-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <Thermometer size={32} />
                            </div>
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">TEMPERATURE</span>
                            <h4 className="text-2xl font-bold text-gray-900">26°</h4>
                        </div>

                        {/* Latitude */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-emerald-100/60 flex items-center justify-center mb-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <Globe size={32} />
                            </div>
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">LATITUDE</span>
                            <h4 className="text-2xl font-bold text-gray-900">6°13&apos;9.49&quot;S</h4>
                        </div>

                        {/* Climate */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-emerald-100/60 flex items-center justify-center mb-5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100">
                                <CloudSun size={32} />
                            </div>
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">CLIMATE</span>
                            <h4 className="text-2xl font-bold text-gray-900">Cool</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Body */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Content */}
                        <div className="w-full lg:w-2/3 space-y-12">
                            {/* Description */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                                <p className="text-gray-600 text-lg leading-loose">
                                    The Deyr Greenhouse Installation & Training Project is a large-scale, climate-smart greenhouse initiative by eFarming, focused on modern installation, farmer training, and high-efficiency production systems. The project boosts yields, reduces climate risk, and enables year-round commercial vegetable production through smart water and resource management.
                                </p>
                                <p className="text-gray-600 text-lg leading-loose">
                                    Our approach integrates traditional knowledge with modern agritech solutions.
                                    By working closely with local communities in {project.location}, we ensure that our interventions are culturally appropriate and sustainable in the long term.
                                </p>
                            </div>

                            {/* Challenges & Solutions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Farmers in this region have faced historically low yields due to unpredictable weather patterns, pests, and a lack of access to high-quality inputs and market data.
                                    </p>
                                </div>
                                <div className="bg-[#00703C]/5 p-8 rounded-2xl border border-[#00703C]/10">
                                    <h3 className="text-xl font-bold text-primary mb-4">Our Solution</h3>
                                    <ul className="space-y-3">
                                        {project.focusAreas.map((area, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                                                <span className="text-gray-800">{area}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (Right) - Simplified */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                                    Project Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <User size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium uppercase">Client</p>
                                            <p className="text-gray-900 font-semibold">{project.client || "eFarming Partner"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <Calendar size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium uppercase">Date</p>
                                            <p className="text-gray-900 font-semibold">{project.date || "Ongoing"}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-8 bg-primary hover:bg-emerald-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                                    Download Case Study
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
