"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "eBeerSom has completely transformed how I manage my farm. The market access alone has doubled my income in just one season.",
        author: "Abdi Farah",
        location: "Lower Shabelle",
        role: "Farmer",
        image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "The training workshops were invaluable. I learned sustainable techniques that saved my crops during the dry season.",
        author: "Fartun Ahmed",
        location: "Hirst",
        role: "Agri-Entrepreneur",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "Reliable, professional, and truly impactful. This is the future of agriculture in our country.",
        author: "Mohamed Warsame",
        location: "Mogadishu",
        role: "Local Buyer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
];

const NewsTestimonials = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" alt="bg" fill className="object-cover opacity-10" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Testimonials Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What they say about us</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -top-6 left-8 w-12 h-12 bg-secondary text-primary flex items-center justify-center rounded-full shadow-lg">
                                <Quote size={24} fill="currentColor" />
                            </div>
                            <p className="text-gray-600 mt-6 mb-8 italic leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                                    <Image src={t.image} alt={t.author} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.author}</h4>
                                    <span className="text-xs text-primary font-bold uppercase tracking-wide">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* News Section */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-widest text-sm uppercase">UPDATES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Latest News & Articles</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-2xl overflow-hidden group">
                            <div className="relative h-56 overflow-hidden">
                                <Image src={`https://images.unsplash.com/photo-${item === 1 ? '1625246333195-58197bd47d26' : item === 2 ? '1542838132-92c53300491e' : '1500382017468-9049fed747ef'}?q=80&w=800&auto=format&fit=crop`} alt="News" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">2{item} DEC, 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                                    Sustainable farming practices adoption in rural Somalia reaches new heights.
                                </h3>
                                <a href="#" className="inline-block text-sm font-bold text-primary hover:underline mt-2">READ MORE</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsTestimonials;
