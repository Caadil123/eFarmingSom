import { Carrot, Apple, Milk, Wheat, Beef, Fish } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
    { name: "Vegetables", icon: Carrot, color: "bg-green-100 text-green-600", href: "/shop/vegetables" },
    { name: "Fruits", icon: Apple, color: "bg-red-100 text-red-600", href: "/shop/fruits" },
    { name: "Dairy", icon: Milk, color: "bg-blue-100 text-blue-600", href: "/shop/dairy" },
    { name: "Grains", icon: Wheat, color: "bg-yellow-100 text-yellow-600", href: "/shop/grains" },
    { name: "Livestock", icon: Beef, color: "bg-orange-100 text-orange-600", href: "/shop/livestock" },
    { name: "Seafood", icon: Fish, color: "bg-cyan-100 text-cyan-600", href: "/shop/seafood" },
];

const Categories = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Browse Categories</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need, directly from the source. Explore our wide range of fresh farm products.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, idx) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className={cn("p-4 rounded-full mb-4 transition-colors", cat.color, "group-hover:scale-110 duration-300")}>
                                <cat.icon size={32} />
                            </div>
                            <span className="font-semibold text-lg text-foreground">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
