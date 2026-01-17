import React from "react";

const ProjectIntro = () => {
    return (
        <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        <h4 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
                            Our Project
                        </h4>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Driving Climate-Smart Agriculture Across Somalia
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        eFarming delivers impactful agritech and agribusiness projects that strengthen
                        food systems, empower farmers, and promote sustainable agriculture. Our projects
                        integrate greenhouse installation, digital advisory, training, market access,
                        and financial inclusion to create scalable, long-term impact across farming communities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectIntro;
