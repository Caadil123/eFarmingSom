import { ArrowRight, CheckCircle2, Sprout, Tractor, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
    const services = [
        {
            title: "Agri-Input Supply",
            desc: "Certified seeds, fertilizers, and crop protection products that enhance yield and quality.",
            image: "/assets/our soultion image (1).png",
            link: "/services/inputs"
        },
        {
            title: "Digital Advisory",
            desc: "On-ground and online guidance offering crop-specific, soil, and farm management solutions.",
            image: "/assets/our soultion image (2).png",
            link: "/services/advisory"
        },
        {
            title: "Workshops & Capacity Building",
            desc: "Hands-on programs promoting youth and women participation in agri business.",
            image: "/assets/our soultion image (3).png",
            link: "/services/market"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900">OUR SOLUTIONS</h2>
                    <p>We deliver end-to-end agri solutions empowering Somali farmers with quality <br></br>
                        inputs, training, digital finance, and market access.</p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Feature Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    {/* Card 1 */}
                    <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center pb-12 group">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                            <Sprout className="text-white" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-4">Agri-Inputs & Market Linkages</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Providing farmers with certified seeds, fertilizers, and direct access to reliable markets for better prices and profits.
                        </p>
                        <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <ArrowRight className="text-gray-400" size={20} />
                        </div>
                    </div>

                    {/* Card 2 - Active/Highlighted */}
                    <div className="relative bg-gradient-to-b from-[#1a8f5a] to-[#006737] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center pb-12 transform md:-translate-y-4">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                            <Tractor className="text-primary" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Agri-Advisory & Training</h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-6">
                            Delivering expert guidance, digital tools, and workshops that strengthen farmer knowledge and productivity.
                        </p>
                        <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <ArrowRight className="text-gray-600" size={20} />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center pb-12 group">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                            <Leaf className="text-white" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-4">Agri-Fintech Solutions</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Offering digital credit scoring, crop insurance, and mobile-based financial tools to empower smallholder farmers.
                        </p>
                        <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <ArrowRight className="text-gray-400" size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
