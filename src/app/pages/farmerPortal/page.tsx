"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import PartnersSection from "@/components/common/PartnersSection";
import Image from "next/image";
import { Send, Users, Sprout, TrendingUp, BookOpen, CloudSun, ShieldCheck } from "lucide-react";
import StatsSection from "@/components/home/StatsSection";

export default function FarmerPortalPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="Farmers' Portal" />

            {/* Inquiry Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                    <div className="text-center mb-10 space-y-2">
                        <p className="text-primary font-bold tracking-widest text-sm uppercase">Have Questions?</p>
                        <h2 className="text-4xl font-bold text-gray-900">Farmers' Portal</h2>
                    </div>

                    <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                            ></textarea>

                            <div className="flex justify-center">
                                <button type="submit" className="px-10 py-3 bg-primary hover:bg-emerald-800 text-white font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-primary/30">
                                    <Send size={18} />
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Informational Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Inspiring healthy, whole, and abundant life to build community.
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in the power of connection—bringing farmers, markets, and communities together to create a thriving agricultural ecosystem. Through education, innovation, and shared resources, we are cultivating a future where every farmer has the tools to succeed and every community has access to fresh, healthy produce.
                            </p>
                            <ul className="space-y-3 pt-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    <span>Community-driven agricultural support</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    <span>Sustainable farming practices education</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    <span>Direct market access for local growers</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                            <Image
                                src="/assets/gallary img (1).png"
                                alt="Farmer Community"
                                fill
                                className="object-cover"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <StatsSection />

            <PartnersSection />
            <Footer />
        </main>
    );
}
