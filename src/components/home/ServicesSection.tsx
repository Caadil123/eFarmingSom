import { ArrowRight } from "lucide-react";
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>

                            <div className="p-8 relative">
                                {/* Icon Placeholder or Decorative Element could go here */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>

                                <Link href={service.link} className="inline-flex items-center px-4 py-2 text-sm text-white bg-[#006737] rounded-full py-2 px-6 hover:bg-emerald-600 transition-colors">
                                    LEARN MORE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
