"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "The freshness is unmatched! I love knowing exactly where my food comes from. eFarmingSom has changed how we eat.",
        author: "Fatima Ali",
        role: "Mother & Chef",
    },
    {
        text: "As a restaurant owner, consistent quality is key. This platform delivers premium organic produce every single time.",
        author: "Ahmed Hassan",
        role: "Restaurant Owner",
    },
    {
        text: "Great support for local farmers. It's amazing to see technology bridging the gap between farms and the city.",
        author: "Dr. Yasin Mohamed",
        role: "Agricultural Expert",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 p-12 opacity-10">
                <Quote size={200} />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Community Says</h2>
                    <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied customers and farmers building a healthier future together.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="mb-6 text-secondary">
                                <Quote size={40} />
                            </div>
                            <p className="text-lg text-emerald-50 mb-6 leading-relaxed italic">"{t.text}"</p>
                            <div>
                                <h4 className="font-bold text-xl">{t.author}</h4>
                                <span className="text-sm text-emerald-300">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
