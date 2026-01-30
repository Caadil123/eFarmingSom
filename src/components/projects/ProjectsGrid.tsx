"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '@/data/projects';

const ProjectsGrid = () => {
    // State for projects and loading status
    const [liveProjects, setLiveProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Sustainability", "Community", "Education", "Technology", "Innovation"];

    // Fetch projects on component mount
    React.useEffect(() => {
        async function loadProjects() {
            try {
                // Import the fetcher dynamically to avoid server-side issues if any
                const { fetchProjects } = await import('@/lib/api-client');
                const data = await fetchProjects();
                setLiveProjects(data);
            } catch (error) {
                console.error("Failed to load live projects", error);
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, []);

    // Combine static and live projects
    // We only use live projects now as requested
    const allProjects = [...liveProjects];

    const filteredProjects = activeCategory === "All"
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

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

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                    </div>
                )}

                {/* Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            // Using index as fallback key because explicit IDs might strictly overlap in rare dev cases
                            <ProjectCard key={project.id || index} project={project} />
                        ))}
                    </div>
                )}

                {!loading && filteredProjects.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                        <div className="bg-emerald-50 p-6 rounded-full mb-6">
                            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Projects Coming Soon</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">
                            We are currently working on adding new impactful projects to this category. Please check back later for updates.
                        </p>
                        <button
                            onClick={() => setActiveCategory("All")}
                            className="text-emerald-600 font-semibold hover:text-emerald-700 underline underline-offset-4"
                        >
                            View All Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsGrid;
