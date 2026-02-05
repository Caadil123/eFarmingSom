"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Sprout, Users, ShoppingBag, Briefcase, MapPin, BookOpen, MessageCircle, Star, Rocket, CheckCircle, Handshake } from "lucide-react";

export default function EFarmingConnectPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="lg:w-1/2 text-white space-y-6">
                            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm bg-secondary px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm self-start">
                                <Sprout size={16} className="text-primary" />
                                <span>eFarming AgriConnect</span>
                            </div>

                            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight">
                                Somalia’s Integrated <br />
                                <span className="text-secondary">Digital Agriculture Platform</span>
                            </h1>

                            <p className="text-lg text-white/90 leading-relaxed max-w-xl opacity-90">
                                Welcome to eFarming AgriConnect — Somalia’s premier
                                digital platform connecting farmers, buyers, agribusinesses,
                                and agricultural professionals across the country.
                                Grow your farm, access markets, discover opportunities, and
                                be part of a connected agricultural ecosystem built for Somali
                                farmers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href="/marketplace"
                                    className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Explore Marketplace
                                    <ArrowRight size={20} />
                                </Link>
                                <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/30 transition-all border border-white/30 shadow-lg group">
                                    <Bot size={20} className="group-hover:scale-110 transition-transform" />
                                    Ask AI Assistant
                                </button>
                            </div>
                        </div>

                        {/* Right Image Card */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-primary/20 backdrop-blur-sm">
                                <Image
                                    src="/assets/photo-1533460004989-cef01064af7e.jpg"
                                    alt="Farmers connecting in the field"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growing Together Section */}
            <section className="py-16 lg:py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 text-primary font-bold bg-secondary/30 px-4 py-1.5 rounded-full">
                            <Sprout size={18} />
                            <span className="uppercase tracking-wide text-sm">Growing Together, Thriving Together</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl leading-tight">
                            Welcome to a platform designed by farmers, for farmers
                        </h2>
                    </div>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Whether you&apos;re a smallholder farmer looking to sell your produce, an
                        agricultural professional seeking new opportunities, or someone
                        eager to learn modern farming techniques, you&apos;ve found your home in our community.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-primary to-[#004d29] py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Reach & Impact</h2>
                        <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <Users size={40} className="mx-auto text-secondary mb-4" />
                            <div className="text-3xl md:text-4xl font-bold">10,000+</div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Farmers Connected</div>
                        </div>
                        <div className="space-y-2">
                            <ShoppingBag size={40} className="mx-auto text-secondary mb-4" />
                            <div className="text-3xl md:text-4xl font-bold">6,000+</div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Products & Produce Listings</div>
                        </div>
                        <div className="space-y-2">
                            <Briefcase size={40} className="mx-auto text-secondary mb-4" />
                            <div className="text-3xl md:text-4xl font-bold">3,000+</div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Market & Job Opportunities</div>
                        </div>
                        <div className="space-y-2">
                            <MapPin size={40} className="mx-auto text-secondary mb-4" />
                            <div className="text-3xl md:text-4xl font-bold">Multiple</div>
                            <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Regions Across Somalia Covered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Succeed in Agriculture
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our platform provides end-to-end digital solutions to support
                            farming, agribusiness, and market access.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {/* Marketplace Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                <ShoppingBag className="text-primary group-hover:text-white transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Marketplace</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Buy and sell crops, inputs, and agricultural products directly—
                                ensuring fair prices and transparent transactions.
                            </p>
                        </div>

                        {/* Market & Buyer Linkages Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                <Handshake className="text-primary group-hover:text-white transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Market & Buyer Linkages</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Connect farmers with traders, wholesalers, processors, and
                                agribusiness partners across Somalia.
                            </p>
                        </div>

                        {/* Job & Opportunity Board Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                <Briefcase className="text-primary group-hover:text-white transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Job & Opportunity Board</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Find agricultural jobs, internships, field assignments, or hire
                                skilled farmers and professionals.
                            </p>
                        </div>

                        {/* Learning & Advisory Hub Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                <BookOpen className="text-primary group-hover:text-white transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Learning & Advisory Hub</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Access digital advisory, farming guides, climate insights, and
                                best practices to improve productivity.
                            </p>
                        </div>

                        {/* Community & Knowledge Exchange Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                                <MessageCircle className="text-primary group-hover:text-white transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Community & Knowledge Exchange</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Engage with fellow farmers, ask questions, share experiences,
                                and learn from the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our Community Says
                        </h2>
                        <p className="text-gray-600">
                            Real stories from real farmers and agricultural professionals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="border border-gray-100 p-8 rounded-2xl shadow-sm bg-gray-50/50">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <h4 className="font-bold text-lg text-primary mb-1">Ahmed Hassan</h4>
                            <p className="text-secondary-foreground/70 text-xs font-semibold mb-4 uppercase">Lower Shabelle</p>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                &quot;AgriConnect helped me link directly with buyers. I sold my harvest faster and at better prices.&quot;
                            </p>
                        </div>

                        <div className="border border-gray-100 p-8 rounded-2xl shadow-sm bg-gray-50/50">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <h4 className="font-bold text-lg text-primary mb-1">Ayaan Mohamed</h4>
                            <p className="text-secondary-foreground/70 text-xs font-semibold mb-4 uppercase">Banadir Region</p>
                            <p className="text-gray-600 text-sm leading-relaxed italic">
                                &quot;I found training opportunities and market information that helped me grow my agribusiness.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-r from-primary to-[#004d29] py-20 text-white text-center relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Rocket size={48} className="mx-auto mb-6 text-white/90" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Farming Journey?
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join thousands of farmers and agribusiness professionals
                        already using eFarming AgriConnect to grow smarter, access
                        markets, and build sustainable livelihoods.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/register"
                            className="bg-secondary text-primary px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg"
                        >
                            Get Started Today
                            <CheckCircle size={18} />
                        </Link>
                        <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/30 transition-colors shadow-lg">
                            <MessageCircle size={18} />
                            Try AI Assistant
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
