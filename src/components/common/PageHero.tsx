"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
    title: string;
    backgroundImage?: string;
    className?: string;
}

const PageHero = ({ title, backgroundImage = "/assets/Hero Image.jpeg", className = "" }: PageHeroProps) => {
    return (
        <section className={`relative w-full min-h-[70vh] flex items-center justify-center bg-gray-00 overflow-hidden ${className}`}>
            {/* Background Image with forced aspect ratio */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover opacity-80"
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                    {title}
                </h1>

                <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base font-medium animate-slide-up">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight size={16} className="text-primary" />
                    <span className="text-primary">{title}</span>
                </div>
            </div>
        </section>
    );
};

export default PageHero;