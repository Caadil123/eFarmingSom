"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
    name: string;
    href: string;
    hasDropdown?: boolean;
    submenu?: { name: string; href: string }[];
}

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    const navLinks: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Services", href: "/services" },
        {
            name: "Project",
            href: "/projects", // Clicking main Project still goes to Projects grid, but user said "if click dropdown I see only single project link"
            hasDropdown: true,
            submenu: [
                { name: "Single Project", href: "/projects/single-project" } // Dedicated independent page
            ]
        },
        {
            name: "Pages",
            href: "/pages",
            hasDropdown: true,
            submenu: [
                { name: "Farmer Portal", href: "/pages/farmerPortal" },
                { name: "Academy", href: "/pages/academy" },
                { name: "Efarming Connect", href: "/pages/efarmingConnect" },
            ]
        },
        { name: "Contact us", href: "/contact" }
    ];

    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm relative z-50">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Efarming Logo"
                            className="h-50 w-auto object-contain -my-2 transform hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                        return (
                            <div key={link.name} className="relative group/idx flex items-center gap-1 cursor-pointer h-full">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "font-medium text-sm transition-colors tracking-wide flex items-center gap-1",
                                        isActive ? "text-primary" : "text-gray-800 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className="text-gray-400 group-hover/idx:text-primary transition-transform group-hover/idx:rotate-180" />}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.hasDropdown && link.submenu && (
                                    <div className="absolute top-12 left-0 w-48 bg-white rounded-xl shadow-xl shadow-gray-100 border border-gray-100 opacity-0 invisible group-hover/idx:opacity-100 group-hover/idx:visible transition-all duration-300 transform translate-y-4 group-hover/idx:translate-y-0 z-50">
                                        <div className="p-2 space-y-1">
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-primary hover:bg-emerald-50 rounded-lg transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-fade-in pb-6 h-[calc(100vh-80px)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-gray-800 py-2.5 border-b border-gray-50 flex justify-between items-center hover:text-primary transition-colors"
                                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>

                            {/* Mobile Submenu - Render directly below if needed, simplified for mobile */}
                            {link.hasDropdown && link.submenu && (
                                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 ml-2">
                                    {link.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block py-2 text-sm text-gray-500 hover:text-primary"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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