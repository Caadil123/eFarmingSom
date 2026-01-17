import Image from "next/image";
import Link from "next/link";
import PartnersSection from "../common/PartnersSection";
import { newsArticles } from "@/data/news";

const NewsArticles = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <Link href="/pages" className="group block">
                        <h2 className="text-4xl font-bold text-gray-900 group-hover:text-primary transition-colors">Latest News & Article</h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {newsArticles.map((article) => (
                        <Link href="/pages" key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
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
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mb-20">
                    <Link
                        href="/pages"
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        View All Insights
                        <span className="text-xl">→</span>
                    </Link>
                </div>

                {/* Partners Section */}
                <PartnersSection />
            </div>
        </section>
    );
};

export default NewsArticles;