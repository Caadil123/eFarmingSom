import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
    const services = [
        {
            title: "Agri-Input Supply",
            desc: "Providing high-quality seeds, fertilizers, and tools directly to farmers at affordable rates.",
            image: "https://images.unsplash.com/photo-1615811361523-6bd03c770b31?auto=format&fit=crop&q=80&w=800",
            link: "/services/inputs"
        },
        {
            title: "Digital Advisory",
            desc: "Smart farming tips, weather forecasts, and market data delivered via mobile app and SMS.",
            image: "https://images.unsplash.com/photo-1592982537447-684748cf8721?auto=format&fit=crop&q=80&w=800",
            link: "/services/advisory"
        },
        {
            title: "Market Linkage",
            desc: "Connecting farmers directly with buyers, retailers, and exporters to maximize profits.",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
            link: "/services/market"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">What We Offer</span>
                    <h2 className="text-4xl font-bold text-gray-900">OUR SOLUTIONS</h2>
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

                                <Link href={service.link} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-emerald-800 transition-colors">
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
