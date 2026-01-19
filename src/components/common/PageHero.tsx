"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
    title: string;
    backgroundImage?: string;
    className?: string;
    variant?: "default" | "article";
}

const PageHero = ({
    title,
    backgroundImage = "/assets/Hero Image.jpeg",
    className = "",
    variant = "default"
}: PageHeroProps) => {
    return (
        <section className={`relative w-full min-h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Standard overlay for both variants - Balanced for visibility */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${variant === 'article' ? 'bg-black/45' : 'bg-black/40'}`} />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                {variant === "article" ? (
                    /* Isolated Glass Block for Articles - Stronger blur to handle lighter backgrounds */
                    <div className="inline-block px-8 py-10 md:py-16 bg-black/40 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl max-w-4xl w-full hover:bg-black/50 transition-all duration-500">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-tight">
                            {title}
                        </h1>

                        <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base font-bold animate-slide-up drop-shadow-md">
                            <Link href="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                            <ChevronRight size={16} className="text-primary" />
                            <span className="text-primary brightness-150 uppercase tracking-widest">{title}</span>
                        </div>
                    </div>
                ) : (
                    /* Standard Clean Hero Style for main pages */
                    <>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in drop-shadow-md">
                            {title}
                        </h1>

                        <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base font-medium animate-slide-up">
                            <Link href="/" className="hover:text-primary transition-colors font-semibold">
                                Home
                            </Link>
                            <ChevronRight size={16} className="text-primary" />
                            <span className="text-primary font-semibold">{title}</span>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default PageHero;