import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, Smartphone } from "lucide-react";

const IntegratedFuture = () => {
    const highlights = [
        {
            text: "Real-time farm visibility through connected devices",
            icon: <Zap className="text-white" size={20} />
        },
        {
            text: "24/7 monitoring with actionable recommendations",
            icon: <ShieldCheck className="text-white" size={20} />
        },
        {
            text: "Mobile-friendly access—manage farms anytime, anywhere",
            icon: <Smartphone className="text-white" size={20} />
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row shadow-emerald-100/50">

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Our Integrated Vision</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                                Simple, Smart, and Sustainable
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We are bridging the gap between traditional farming and modern innovation, providing tools that are as easy to use as they are powerful.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 group">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <p className="text-gray-800 font-medium text-lg leading-tight pt-1">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <div className="inline-flex items-center gap-3 p-4 px-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-emerald-800 font-medium animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                eFarming is building the future of smart, sustainable, and inclusive agriculture.
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
                        <Image
                            src="/assets/simple img.jpeg"
                            alt="Sustainable Green Agriculture Platform"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Subtle Overlay for Content Legibility if needed */}
                        <div className="absolute inset-0 bg-black/5 opacity-10" />

                        {/* Floating Metric Card - Moved and styled for new image context */}
                        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 hidden md:block animate-fade-in">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase">System Status</p>
                                    <p className="text-lg font-bold text-gray-900 leading-none">Fully Integrated</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntegratedFuture;
