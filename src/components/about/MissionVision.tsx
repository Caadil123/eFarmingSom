import { Eye, Target } from "lucide-react";

const MissionVision = () => {
    return (
        <section className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Our Vision & Mission</h1>
                <p className="text-gray-600 text-lg leading-relaxed text-center mb-8">Revolutionising Agriculture for a Sustainable Future</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <div className="bg-white p-10 rounded-3xl shadow-lg border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become Somalia’s leading agritech and agribusiness solutions company, delivering end-to-end support and digital-first solutions that make agriculture profitable, sustainable, and attractive for future generations.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-10 rounded-3xl shadow-lg border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower Somali farmers through technology-driven and data-informed solutions, providing access to quality agri-inputs, personalized advisory, financial services, and direct market linkages, enabling farmers to increase productivity, improve incomes, and build resilient, sustainable livelihoods.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
