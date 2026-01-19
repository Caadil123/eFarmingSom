import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";

const NewsAndInsightsPage = () => {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="News & Insights" backgroundImage="/assets/newsHeros img.jpeg" />
            <div className="text-center mb-16 space-y-4 pt-8">
                <h2 className="text-4xl font-bold text-gray-900 group-hover:text-primary transition-colors">Latest News & Article</h2>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
            </div>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {newsArticles.map((article) => (
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
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {article.excerpt}
                                    </p>
                                    <Link
                                        href={`/pages/${article.id}`}
                                        className="mt-auto inline-flex items-center text-primary font-bold hover:text-emerald-700 transition-colors gap-1 group/btn"
                                    >
                                        Learn more
                                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default NewsAndInsightsPage;
