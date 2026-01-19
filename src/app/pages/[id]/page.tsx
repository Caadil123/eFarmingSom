import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import { notFound } from "next/navigation";
import { Calendar, User, MessageCircle, ArrowLeft, Clock, Tag, Target, MapPin, Users, Building2 } from "lucide-react";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const NewsDetailPage = async ({ params }: Props) => {
    const { id } = await params;
    const article = newsArticles.find((a) => a.id === parseInt(id));

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />

            <PageHero
                title={article.category || "News Details"}
                backgroundImage={article.image}
                variant="article"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <Link
                            href="/pages"
                            className="inline-flex items-center gap-2 text-primary hover:text-emerald-700 font-bold mb-8 transition-colors group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to News
                        </Link>

                        {/* Article Header */}
                        <div className="mb-12">
                            {article.category && (
                                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                                    {article.category}
                                </span>
                            )}
                            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-[1.2]">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-gray-500 text-sm md:text-base border-y border-gray-100 py-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-primary" />
                                    <span className="font-medium">{article.date}</span>
                                </div>
                                {article.readingTime && (
                                    <div className="flex items-center gap-2 border-l border-gray-200 pl-8 hidden md:flex">
                                        <Clock size={18} className="text-primary" />
                                        <span className="font-medium">{article.readingTime}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2 md:border-l md:border-gray-200 md:pl-8">
                                    <MessageCircle size={18} className="text-primary" />
                                    <span className="font-medium">{article.comments}</span>
                                </div>
                            </div>
                        </div>

                        {/* Topics Section */}
                        {article.topics && (
                            <div className="flex flex-wrap items-center gap-3 mb-10">
                                <Tag size={16} className="text-gray-400" />
                                {article.topics.map((topic, i) => (
                                    <span key={i} className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Article Image - Featured Image */}
                        <div className="relative h-[300px] md:h-[550px] rounded-[2rem] overflow-hidden mb-16 shadow-2xl ring-1 ring-gray-200">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <article className="max-w-none">
                            {article.content ? (
                                article.content.map((para, index) => {
                                    if (para.startsWith("##")) {
                                        return (
                                            <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                                                <div className="w-2 h-8 bg-primary rounded-full"></div>
                                                {para.replace("## ", "")}
                                            </h2>
                                        );
                                    }
                                    if (para.startsWith("___")) {
                                        return <hr key={index} className="my-12 border-gray-100" />;
                                    }

                                    // Detect metadata lines (e.g. **Label:** Value)
                                    const metadataMatch = para.match(/^\*\*(.*?):\*\*\s*(.*)$/);
                                    if (metadataMatch) {
                                        const label = metadataMatch[1].trim();
                                        const value = metadataMatch[2].trim();

                                        let Icon = Target;
                                        if (label.toLowerCase().includes("location")) Icon = MapPin;
                                        if (label.toLowerCase().includes("participants")) Icon = Users;
                                        if (label.toLowerCase().includes("organized")) Icon = Building2;
                                        if (label.toLowerCase().includes("focus")) Icon = Target;

                                        return (
                                            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-2xl mb-4 border border-gray-100 hover:bg-emerald-50/30 transition-colors">
                                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                                                    <Icon size={24} />
                                                </div>
                                                <div className="pt-1">
                                                    <span className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">{label}</span>
                                                    <span className="text-gray-900 font-semibold text-lg">{value}</span>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <p key={index} className="mb-6 text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                                            {para}
                                        </p>
                                    );
                                })
                            ) : (
                                <p className="text-xl text-gray-600 leading-relaxed">{article.excerpt}</p>
                            )}
                        </article>

                        {/* Call to Action */}
                        <div className="mt-20 relative rounded-[2.5rem] overflow-hidden bg-gray-900 p-8 md:p-16 text-center text-white">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                                Ready to Transform Your Farm?
                            </h3>
                            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                                Join eFarming Somalia and access the latest IoT and AI tools designed specifically for smallholder resilience and productivity.
                            </p>
                            <Link
                                href="/contact"
                                className="relative z-10 inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1"
                            >
                                Get Started Now
                            </Link>
                        </div>

                        {/* Footer Spacer */}
                        <div className="h-20"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default NewsDetailPage;
