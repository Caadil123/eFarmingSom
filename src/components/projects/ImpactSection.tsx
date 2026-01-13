import React from 'react';
import Image from 'next/image';
import { Leaf, Map, Users, TrendingUp, GraduationCap } from 'lucide-react';

const ImpactSection = () => {
    const stats = [
        {
            value: "6+",
            label: "Regions Served",
            icon: <Map className="text-white" size={24} />,
            image: "/assets/sixRegion.png"
        },
        {
            value: "10K+",
            label: "Farmers Empowered",
            icon: <Users className="text-white" size={24} />,
            image: "/assets/photo-1533460004989-cef01064af7e.jpg"
        },
        {
            value: "40%+",
            label: "Yield Growth",
            icon: <TrendingUp className="text-white" size={24} />,
            image: "/assets/our soultion image (1).png"
        },
        {
            value: "25+",
            label: "Training Programs",
            icon: <GraduationCap className="text-white" size={24} />,
            image: "/assets/testomonial.png"
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Text Column */}
                    <div className="w-full lg:w-5/12 space-y-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-500 font-bold uppercase tracking-widest text-sm">
                            <Leaf size={16} />
                            <span>Impact</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                            Our Growing Impact
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            We empower Somali farmers through climate-smart agriculture, digital advisory, and market access—driving sustainable yields, income growth, and resilient food systems.
                        </p>
                    </div>

                    {/* Stats Column */}
                    <div className="w-full lg:w-7/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Floating Icon */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform group-hover:scale-110 duration-300">
                                        {stat.icon}
                                    </div>

                                    {/* Circle Container */}
                                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-emerald-100">
                                        {/* Background Image */}
                                        <Image
                                            src={stat.image}
                                            alt={stat.label}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Dark Overlay */}
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pt-8 text-white z-10">
                                            <span className="text-3xl font-bold mb-1">{stat.value}</span>
                                            <span className="text-xs font-medium uppercase tracking-wide opacity-90">{stat.label}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
