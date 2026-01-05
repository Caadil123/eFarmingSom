import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
    title: string;
    backgroundImage?: string;
}

const PageHero = ({ title, backgroundImage = "/assets/Hero Image.jpeg" }: PageHeroProps) => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
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
