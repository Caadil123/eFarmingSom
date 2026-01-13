"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '@/data/projects';

const ProjectsGrid = () => {
    // Optional: Filter logic could be added here later
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Sustainability", "Community", "Education", "Technology", "Innovation"];

    const filteredProjects = activeCategory === "All"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === activeCategory);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Growing Impact in Every Area</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h3>
                    <p className="text-gray-600 text-lg">
                        At eFarming, we implement farmer-first projects that improve productivity, resilience, and income. Each project is designed to address real challenges in Somalia’s agriculture through technology, training, and inclusive market solutions.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsGrid;
