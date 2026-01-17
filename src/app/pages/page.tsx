import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";

const NewsAndInsightsPage = () => {
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
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default NewsAndInsightsPage;
