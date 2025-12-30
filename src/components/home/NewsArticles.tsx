import Image from "next/image";
import Link from "next/link";

const NewsArticles = () => {
    const articles = [
        {
            id: 1,
            image: "/assets/news img (2).png",
            title: "Smart Farming Solutions Workshop",
            date: "October 10, 2025",
            comments: "No Comments",
            excerpt: "Join experts and farmers to explore cutting-edge IoT tools and automated systems designed to boost productivity while conserving vital resources."
        },
        {
            id: 2,
            image: "/assets/news img (1).png",
            title: "Building Climate-Smart Agriculture for the Future",
            date: "September 22, 2025",
            comments: "No Comments",
            excerpt: "Discover strategies for adapting to changing climates, focusing on sustainable practices that ensure long-term food security and environmental health."
        },
        {
            id: 3,
            image: "/assets/news img (3).png",
            title: "Digital Advisory Platforms Transform Rural Farming",
            date: "August 30, 2025",
            comments: "No Comments",
            excerpt: "Learn how mobile technology is bridging the gap by providing real-time weather data, pest advice, and direct market access to remote communities."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900">Latest News & Article</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                                    {article.title}
                                </h3>
                                <div className="flex items-center text-xs text-gray-400 mb-4 space-x-2">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.comments}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners Section */}
                <div className="border-t border-gray-200 pt-16">
                    <div className="text-center mb-10">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Trusted Partners & Supporters</h4>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {[
                            { name: "FAO", logo: "https://placehold.co/200x80/f3f4f6/374151?text=FAO&font=montserrat" },
                            { name: "USAID", logo: "https://placehold.co/200x80/f3f4f6/374151?text=USAID&font=montserrat" },
                            { name: "WFP", logo: "https://placehold.co/200x80/f3f4f6/374151?text=WFP&font=montserrat" },
                            { name: "IBS Bank", logo: "https://placehold.co/200x80/f3f4f6/374151?text=IBS+Bank&font=montserrat" },
                            { name: "Gargaara", logo: "https://placehold.co/200x80/f3f4f6/374151?text=Gargaara&font=montserrat" }
                        ].map((partner, idx) => (
                            <div key={idx} className="relative w-32 h-16 md:w-40 md:h-20">
                                {/* Use regular img tag for external images */}
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} Logo`}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsArticles;