import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const AboutOverview = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-left">
                        <div className="inline-block px-4 py-1 text-primary font-semibold text-base tracking-widest mb-2 bg-green-50 rounded-full">
                            WHO WE ARE
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Innovating Somali <br /> Agricultural Growth Solutions
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            eFarming Somalia is a First Leading agritech and agribusiness solutions company driving the transformation of Somalia’s agriculture through technology, innovation, and farmer-first solutions.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We empower farmers with verified inputs, smart digital advisory, reliable market access, financial inclusion opportunities, and capacity-building support—delivering seamless, end-to-end solutions that boost productivity, resilience, and long-term growth across the agricultural sector.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                "Sustainable Practices",
                                "Digital Inclusion",
                                "Market Connectivity",
                                "Community Growth"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 font-medium text-gray-800">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="text-primary" size={16} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">

                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/AboutSection image.jpg"
                                alt="Farmers using tablet"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl border-t-4 border-l-4 border-primary hidden md:block">
                            <p className="font-bold text-gray-900 text-5xl mb-1">2+</p>
                            <p className="text-sm text-gray-500 font-medium">Years of Experience <br /> in Agriculture</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOverview;
