import { PROJECTS_DATA } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import { Calendar, MapPin, User, CheckCircle2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return PROJECTS_DATA.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = PROJECTS_DATA.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />

            <PageHero
                title={project.title}
                backgroundImage="/assets/servicehero.jpeg"
            />

            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* Main Content (Left) */}
                        <div className="w-full lg:w-2/3 space-y-12">
                            {/* Main Image */}
                            <div className="relative w-full h-[300px] md:h-[650px] rounded-3xl overflow-hidden shadow-xl shadow-emerald-100 bg-gray-50 border border-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                                <p className="text-gray-600 text-lg leading-loose">
                                    {project.fullDescription || project.description}
                                </p>
                                <p className="text-gray-600 text-lg leading-loose">
                                    Our approach integrates traditional knowledge with modern agritech solutions.
                                    By working closely with local communities in {project.location}, we ensure that our interventions are culturally appropriate and sustainable in the long term.
                                </p>
                            </div>

                            {/* Key Challenges & Solutions (Mock Content for layout) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Farmers in this region have faced historically low yields due to unpredictable weather patterns, pests, and a lack of access to high-quality inputs and market data.
                                    </p>
                                </div>
                                <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                                    <h3 className="text-xl font-bold text-emerald-800 mb-4">Our Solution</h3>
                                    <ul className="space-y-3">
                                        {project.focusAreas.map((area, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                                                <span className="text-emerald-900">{area}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Results / Impact */}
                            {project.results && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-900">Impact & Results</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                        {project.results.map((res, idx) => (
                                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                                                <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{res.value}</p>
                                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{res.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar (Right) */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            {/* Info Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                                    Project Information
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <User size={20} className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium uppercase">Client</p>
                                            <p className="text-gray-900 font-semibold">{project.client || "eFarming Partner"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <MapPin size={20} className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium uppercase">Location</p>
                                            <p className="text-gray-900 font-semibold">{project.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <Calendar size={20} className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium uppercase">Date</p>
                                            <p className="text-gray-900 font-semibold">{project.date || "Ongoing"}</p>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <p className="text-sm text-gray-400 font-medium uppercase mb-3">Category</p>
                                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-bold rounded-full text-sm">
                                            {project.category}
                                        </span>
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
