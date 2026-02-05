import React from "react";
import { Cpu, BarChart3, LayoutDashboard } from "lucide-react";

const PlatformFeatures = () => {
    const features = [
        {
            title: "IoT Sensors",
            description: "Real-time monitoring of soil health, water usage, and pest pressure for data-driven decisions and efficient resource use.",
            icon: <Cpu className="w-8 h-8 text-primary" />,
            color: "bg-green-50"
        },
        {
            title: "Data Analytics",
            description: "Advanced algorithms analyze farm data to generate climate-resilient advisories, risk profiles, and crop planning insights.",
            icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
            color: "bg-emerald-50"
        },
        {
            title: "User Dashboard",
            description: "A simple digital interface connecting farmers, buyers, insurers, and lenders for seamless data sharing and decision-making.",
            icon: <LayoutDashboard className="w-8 h-8 text-teal-600" />,
            color: "bg-teal-50"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Platform Innovations</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Features of the eFarming Platform
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our platform integrates IoT devices, advanced analytics, and a user-friendly dashboard to deliver profitable and sustainable agriculture.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
                        >
                            <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Accent Line */}
                            <div className="w-0 group-hover:w-16 h-1 bg-primary mt-8 rounded-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformFeatures;
