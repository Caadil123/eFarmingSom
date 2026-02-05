"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Users, X } from "lucide-react";
import { fetchTeamMembers, AdminTeamMember } from "@/lib/api-client";

const TeamPreview = () => {
    const [members, setMembers] = useState<AdminTeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"TEAM" | "ADVISOR">("TEAM");
    const [selectedMember, setSelectedMember] = useState<AdminTeamMember | null>(null);

    useEffect(() => {
        async function loadMembers() {
            try {
                const data = await fetchTeamMembers();
                // Filter only active members? The user didn't specify, but usually yes.
                // Admin dashboard allows setting isActive.
                setMembers(data.filter(m => m.isActive));
            } catch (error) {
                console.error("Failed to load team members", error);
            } finally {
                setLoading(false);
            }
        }
        loadMembers();
    }, []);

    const filteredMembers = members.filter(m => (m.type || "TEAM") === activeTab);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-block px-4 py-1 text-primary font-semibold text-base tracking-widest mb-2 bg-green-50 rounded-full uppercase">
                    Our Experts
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900">Meet Our Leadership</h2>

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
                        {/* Gliding Background (Optional simplified version) */}
                        <button
                            onClick={() => setActiveTab("TEAM")}
                            className={`relative z-10 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeTab === "TEAM"
                                ? "bg-white text-primary shadow-md"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Our Team
                        </button>
                        <button
                            onClick={() => setActiveTab("ADVISOR")}
                            className={`relative z-10 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${activeTab === "ADVISOR"
                                ? "bg-white text-primary shadow-md"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Our Advisors
                        </button>
                    </div>
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                    </div>
                ) : filteredMembers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredMembers.map((member) => (
                            <div
                                key={member.id}
                                onClick={() => setSelectedMember(member)}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 flex flex-col h-full text-left"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] w-full bg-gray-100">
                                    {member.imageUrl ? (
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top"
                                            unoptimized={member.imageUrl.startsWith('http')}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400">
                                            <Users size={48} className="opacity-40" />
                                        </div>
                                    )}
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-primary-dark text-gray-900 mb-1 leading-tight">
                                        {member.name}
                                    </h3>
                                    <p className="text-emerald-700 font-medium text-sm mb-3">
                                        {member.title}
                                    </p>
                                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-gray-500 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                        <p className="text-lg">No {activeTab === "TEAM" ? "Team activeMembers" : "Advisors"} found.</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:h-[600px] animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Side (Left) */}
                        <div className="relative w-full md:w-5/12 h-64 md:h-full bg-gray-200 shrink-0">
                            {selectedMember.imageUrl ? (
                                <Image
                                    src={selectedMember.imageUrl}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover"
                                    unoptimized={selectedMember.imageUrl.startsWith('http')}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                    <Users size={64} className="text-gray-400" />
                                </div>
                            )}
                            {/* Name Overlay on Image (Bottom Left) */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-3xl font-bold text-white leading-tight">
                                    {selectedMember.name}
                                </h3>
                                {/* <p className="text-emerald-400 font-medium mt-1">{selectedMember.title}</p> */}
                            </div>
                        </div>

                        {/* Content Side (Right) */}
                        <div className="flex-1 p-8 md:p-12 overflow-y-auto relative bg-white text-left">
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mt-4 md:mt-10">
                                <span className="inline-block px-3 py-1 bg-green-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                    {selectedMember.title}
                                </span>

                                <h4 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
                                    About
                                </h4>

                                <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                    <p className="whitespace-pre-line">
                                        {selectedMember.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TeamPreview;
