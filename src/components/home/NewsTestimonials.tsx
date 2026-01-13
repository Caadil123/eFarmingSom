"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        text: "eFarming's smart irrigation system has increased my crop yield by 40% while reducing water usage. It's been a game-changer for my farm.",
        author: "Ahmed Hassan",
        role: "TOMATO, L. SHABELLE",
        image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "The market access program connected me directly with buyers in Mogadishu. I now get fair prices for my produce and can plan my crops better.",
        author: "Fatima Ali",
        role: "VEG. FARMER, BAY REGION",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "The training programs taught me modern farming techniques. My income has doubled in just two years, and I can now support my family better.",
        author: "Omar Mohamed",
        role: "LIVESTOCK, GALGADUUD",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 4,
        text: "Thanks to the weather alerts, I planted my sorghum at the perfect time. This season's harvest was the best we've had in a decade.",
        author: "Yusuf Ibrahim",
        role: "GRAIN FARMER, BAKOOL",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 5,
        text: "The cooperative model helped us buy fertilizers in bulk. It significantly lowered our costs and improved our bargaining power.",
        author: "Amina Gedi",
        role: "CO-OP LEADER, JUBBALAND",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 6,
        text: "I used to struggle with pests destroying my mangoes. The advisory team diagnosed the issue remotely and saved my orchard.",
        author: "Hassan Nur",
        role: "FRUIT GROWER, HIRSHABELLE",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 7,
        text: "eFarming Som provided us with solar-powered cold storage, significantly reducing our post-harvest losses.",
        author: "Khadija Warsame",
        role: "DAIRY, BENADIR",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 8,
        text: "Their financial inclusion program allowed me to get a micro-loan to buy a tractor. It transformed my productivity overnight.",
        author: "Mustafa Abdi",
        role: "MAIZE, LOWER JUBA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 9,
        text: "Connecting with international exporters has opened new doors for our sesame business. We are now exporting globally.",
        author: "Leyla Hussein",
        role: "SESAME EXPORTER, MUDUG",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    }
];

const NewsTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Calculate total slides based on items per view
    const totalSlides = Math.ceil(testimonials.length / itemsPerView);

    // Responsive setup
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => {
                // Go to next slide, reset to 0 when at the end
                return (prevSlide + 1) % totalSlides;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    // Handle manual slide change
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    // Get testimonials for current slide
    const getCurrentTestimonials = () => {
        const startIndex = currentSlide * itemsPerView;
        return testimonials.slice(startIndex, startIndex + itemsPerView);
    };

    return (
        <section className="relative py-24 mb-20 mx-5 overflow-hidden">
            {/* Background Image with Green Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/testomonial.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/80"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-2">
                    <span className="text-white/80 font-bold tracking-[0.2em] text-sm uppercase">TESTIMONIAL</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">What they say about us</h2>
                </div>

                {/* Slides Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                            width: `${totalSlides * 100}%`
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                            const startIdx = slideIndex * itemsPerView;
                            const slideTestimonials = testimonials.slice(startIdx, startIdx + itemsPerView);

                            return (
                                <div
                                    key={slideIndex}
                                    className="w-full flex-shrink-0"
                                    style={{ width: `${100 / totalSlides}%` }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                                        {slideTestimonials.map((testimonial) => (
                                            <div
                                                key={testimonial.id}
                                                className="bg-white p-8 rounded-md shadow-2xl flex flex-col items-center text-center space-y-6 h-full border-t-8 border-transparent hover:border-secondary transition-all duration-300"
                                            >
                                                <p className="text-gray-500 italic leading-relaxed text-sm line-clamp-4">
                                                    "{testimonial.text}"
                                                </p>
                                                <div className="flex flex-col items-center space-y-3 mt-auto">
                                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.author}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-sm">{testimonial.author}</h4>
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                                            {testimonial.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-12 gap-2">
                    {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            suppressHydrationWarning={true}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsTestimonials;