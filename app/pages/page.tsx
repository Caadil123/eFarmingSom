"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fetchPosts } from "@/lib/api-client";
import { NewsArticle } from "@/data/news";
import PartnersSection from "@/components/common/PartnersSection";

const NewsAndInsightsPage = () => {
    const [posts, setPosts] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error("Failed to load news posts", error);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <TopBar />
            <Navbar />
            <PageHero title="News & Insights" backgroundImage="/assets/newsHeros img.jpeg" />

            <div className="text-center mb-16 space-y-4 pt-8">
                <h2 className="text-4xl font-bold text-gray-900">Latest News & Article</h2>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            </div>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && posts.length === 0 && (
                        <div className="text-center py-10 mb-10 bg-white rounded-2xl shadow-sm p-8 max-w-2xl mx-auto">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Articles Yet</h3>
                            <p className="text-gray-500">We haven't published any news articles yet. Check back soon!</p>
                        </div>
                    )}

                    {!loading && posts.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {posts.map((article) => (
                                <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            unoptimized={article.image.startsWith('http')}
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-emerald-700 transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center text-xs text-gray-400 mb-4 space-x-2">
                                            <span>{article.date}</span>
                                            {article.comments && (
                                                <>
                                                    <span>•</span>
                                                    <span>{article.comments}</span>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
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
                    )}
                </div>
            </section>

            <PartnersSection />

            <Footer />
        </main>
    );
};

export default NewsAndInsightsPage;
