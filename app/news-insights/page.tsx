"use client";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/data/news";
import React, { useState, useEffect } from "react";
import { fetchPosts } from "@/lib/api-client";

const NewsInsightsPage = () => {
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
        <main className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <PageHero
                title="News & Insights"
                backgroundImage="/assets/newsHero .jpeg"
            />

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && posts.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                            <div className="bg-emerald-50 p-6 rounded-full mb-6">
                                <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No News Yet</h3>
                            <p className="text-gray-500 max-w-md mx-auto">
                                We haven't published any news articles yet. Check back soon for updates on our latest activities and insights.
                            </p>
                        </div>
                    )}

                    {/* Posts Grid */}
                    {!loading && posts.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
                                >
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            unoptimized={article.image.startsWith('http')}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h2>

                                        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-3">
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                                {article.date}
                                            </span>
                                            {article.comments && (
                                                <>
                                                    <span className="text-gray-300">|</span>
                                                    <span className="flex items-center">
                                                        {article.comments}
                                                    </span>
                                                </>
                                            )}
                                        </div>

                                        <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-6">
                                            {article.excerpt}
                                        </p>

                                        <Link
                                            href={`/news-insights/${article.id}`}
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
            <Footer />
        </main>
    );
};

export default NewsInsightsPage;
