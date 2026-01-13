import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Project } from '@/data/projects';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-[420px] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Location with Icon */}
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-3">
                    <MapPin size={16} className="shrink-0" />
                    <span>{project.location}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Focus Areas */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.focusAreas.map((area, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
