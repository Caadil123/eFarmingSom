"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { newsArticles } from "@/data/news";

const NewsArticles = () => {
    const posts = newsArticles;

    // Get latest 3 posts
    const displayedPosts = posts.slice(0, 3);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <Link href="/pages" className="group block">
                        <h2 className="text-4xl font-bold text-gray-900 group-hover:text-primary transition-colors">Latest News & Article</h2>
                        <p className="text-gray-600 text-sm">Discover how Somali farmers are using eFarming’s smart agriculture and IoT solutions to transform farming, increase yields, and grow profits</p>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4 group-hover:w-24 transition-all duration-300"></div>
                    </Link>
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="text-center py-10 mb-10 bg-white rounded-2xl shadow-sm p-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">No Articles Yet</h3>
                        <p className="text-gray-500">Stay tuned! We will be publishing news and insights soon.</p>
                    </div>
                )}

                {posts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {displayedPosts.map((article) => (
                            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        unoptimized={true}
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
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
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

                <div className="flex justify-center mb-20">
                    <Link
                        href="/pages"
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        View All Insights
                        <span className="text-xl">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsArticles;
