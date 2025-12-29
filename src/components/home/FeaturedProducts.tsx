"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
    {
        id: 1,
        name: "Organic Tomatoes",
        price: "$2.50 / kg",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
        tag: "Best Seller",
    },
    {
        id: 2,
        name: "Fresh Spinach",
        price: "$1.80 / bunch",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800",
        tag: "Organic",
    },
    {
        id: 3,
        name: "Somali Bananas",
        price: "$1.20 / kg",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
        tag: "Local",
    },
    {
        id: 4,
        name: "Farm Eggs",
        price: "$4.00 / dozen",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Harvest</h2>
                        <p className="text-muted-foreground">Top quality picks from this week's harvest.</p>
                    </div>
                    <Link href="/shop" className="text-primary font-semibold hover:underline hidden md:block">
                        View All Products
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {product.tag && (
                                    <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {product.tag}
                                    </span>
                                )}
                                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                    <Heart size={18} />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-muted-foreground">{product.tag || "Fresh"}</span>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star size={16} fill="currentColor" />
                                        <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-primary">{product.price}</span>
                                    <button className="p-3 bg-primary text-primary-foreground rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/10 active:scale-95">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/shop" className="text-primary font-semibold hover:underline">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
