"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "Project", href: "/project", hasDropdown: true },
        { name: "Contact us", href: "/contact" },
        { name: "Pages", href: "/pages", hasDropdown: true },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm relative z-50">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo - Medium size with overflow */}
                <Link href="/" className="flex items-center group">
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Efarming Logo"
                            className="h-50 w-auto object-contain -my-2 transform hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                </Link>

                {/* Desktop Nav - Search bar removed */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                        return (
                            <div key={link.name} className="relative group/idx flex items-center gap-1 cursor-pointer">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "font-medium text-sm transition-colors tracking-wide",
                                        isActive ? "text-primary" : "text-gray-800 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                                {link.hasDropdown && <ChevronDown size={14} className="text-gray-400 group-hover/idx:text-primary" />}
                            </div>
                        )
                    })}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-primary hover:bg-emerald-800 text-white text-xs font-bold rounded-full transition-all tracking-wide shadow-md hover:shadow-lg"
                    >
                        GET STARTED
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-fade-in pb-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-800 py-2.5 border-b border-gray-50 flex justify-between items-center hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={16} />}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="mt-3 w-full py-3 text-center bg-primary text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors shadow-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        GET STARTED
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;