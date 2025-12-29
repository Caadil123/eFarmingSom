"use client";

import { Sprout, Droplet, Hourglass, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative">
            <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-gray-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/assets/Hero image.jpeg"
                        alt="Green Agriculture Field"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center h-full pb-32">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-5xl animate-fade-in">
                        Innovating Somali <br /> Agricultural Growth Solutions
                    </h1>

                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in delay-100">
                        Connecting farmers, markets, and innovation through digital tools, quality inputs, and
                        real-time support for sustainable growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
                        <Link
                            href="/about"
                            className="px-8 py-3 bg-[#006737] hover:bg-emerald-800 text-white font-semibold rounded-full text-sm tracking-wide transition-all"
                        >
                            ABOUT US
                        </Link>
                        <Link
                            href="/work"
                            className="px-8 py-3 bg-white hover:bg-gray-100 text-[#006737] font-semibold rounded-full text-sm tracking-wide transition-all"
                        >
                            OUR WORK
                        </Link>
                    </div>
                </div>
            </section>

            {/* Floating Features - Responsive Positioning */}
            {/* Mobile/Tablet: Static gray block below hero */}
            {/* Desktop: Absolute overlapping centered on bottom edge */}
            <div className="bg-gray-100 py-12 lg:bg-transparent lg:py-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:translate-y-1/2 z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard icon={Sprout} title="FARMER FIRST" />
                        <FeatureCard icon={Droplet} title="TECH-DRIVEN" />
                        <FeatureCard icon={Hourglass} title="SUSTAINABLE IMPACT" />
                        <FeatureCard icon={TrendingUp} title="INCLUSIVE GROWTH" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex flex-col items-center justify-center text-center group">
        <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2">
            <Icon size={32} className="text-[#006737]" />
        </div>
        <h3 className="font-bold text-gray-900 text-sm tracking-widest uppercase">
            {title}
        </h3>
    </div>
);

export default Hero;