"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import PartnersSection from "@/components/common/PartnersSection";
import Image from "next/image";
import { Send, Users, Sprout, TrendingUp, BookOpen, CloudSun, ShieldCheck } from "lucide-react";
import { useState } from "react";
import StatsSection from "@/components/home/StatsSection";

export default function FarmerPortalPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;
        const companyEmail = "efarmingsomalia@gmail.com";
        const emailSubject = encodeURIComponent(subject || `Farmer Portal Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${emailSubject}&body=${body}`;
        window.open(gmailUrl, '_blank');

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="Farmers' Portal" backgroundImage="/assets/farmerPortal img.jpeg" />

            {/* Inquiry Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                    <div className="text-center mb-10 space-y-2">
                        <p className="text-primary font-bold tracking-widest text-sm uppercase">Have Questions?</p>
                        <h2 className="text-4xl font-bold text-gray-900">Farmers' Portal</h2>
                    </div>

                    <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {showSuccess && (
                            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <p className="font-medium text-sm">Thank you! Your message has been prepared. We will respond to you immediately.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={6}
                                required
                                value={formData.message}
                                onChange={handleChange}
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
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
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
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-gray-100">
                            <video
                                src="/assets/video/White and Green Minimalist Modern Agriculture Video.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
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
