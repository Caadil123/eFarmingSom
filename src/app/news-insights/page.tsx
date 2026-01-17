import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import { newsArticles } from "@/data/news";

export const metadata = {
    title: "News & Insights | eBeer Somalia",
    description: "Stay updated with the latest news and insights in the Somali agriculture sector.",
};

const NewsInsightsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <PageHero
                title="News & Insights"
                backgroundImage="/assets/newsHero .jpeg"
            />

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsArticles.map((article) => (
                            <div
                                key={article.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h2>

                                    <div className="flex items-center text-sm text-gray-500 mb-6 space-x-3">
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                            {article.date}
                                        </span>
                                        <span className="text-gray-300">|</span>
                                        <span className="flex items-center">
                                            {article.comments}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
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

export default NewsInsightsPage;
