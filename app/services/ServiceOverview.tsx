import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const ServiceOverview = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-left">
                        <div className="inline-block px-4 py-1 text-primary font-semibold text-base tracking-widest mb-2 bg-green-50 rounded-full">
                            OUR SERVICES
                        </div>
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Empowering Farmers with <br /> Innovative Agricultural Solutions
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            eFarming delivers technology-driven agritech and agribusiness solutions that empower farmers to increase yields, reduce costs, and build climate-resilient farming systems. Our smart agriculture services combine digital innovation, data analytics, and sustainable practices to support food security and long-term agricultural growth.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            resource efficiency, and inclusive farmer support, ensuring sustainable impact across the agricultural value chain.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative">

                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/serviceoverview.png"
                                alt="Farmers using tablet"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
