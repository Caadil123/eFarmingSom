const StatsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Placeholder for Maps - using a colored block or placeholder image description */}
                    <div className="bg-emerald-50 rounded-3xl p-8 flex items-center justify-center min-h-[400px] border border-emerald-100 relative overflow-hidden">
                        <div className="text-emerald-800/40 font-bold text-2xl rotate-12">SOMALIA RAINFALL MAP DATA</div>
                        {/* In a real scenario, we'd use a real map image or SVG here */}
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e3/Somalia_location_map.svg')] bg-contain bg-no-repeat bg-center opacity-10 mix-blend-multiply"></div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">Data-Driven Agriculture</h3>
                        <p className="text-gray-600 text-lg">
                            We utilize satellite imagery and advanced analytics to monitor rainfall patterns, soil health, and crop performance across varying regions of Somalia.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-secondary">
                                <h4 className="font-bold text-gray-900">Precision Farming</h4>
                                <p className="text-sm text-gray-600">Optimizing resources for better yields.</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-secondary">
                                <h4 className="font-bold text-gray-900">Climate Resilience</h4>
                                <p className="text-sm text-gray-600">Adapting to changing weather patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 divide-x divide-gray-100 overflow-hidden">
                    {[
                        { label: "Regions Served", val: "6+" },
                        { label: "Farmers Empowered", val: "10K+" },
                        { label: "Yield Growth", val: "40%" },
                        { label: "Training Programs", val: "25+" }
                    ].map((stat, i) => (
                        <div key={i} className="p-8 text-center hover:bg-gray-50 transition-colors">
                            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.val}</div>
                            <div className="text-gray-500 font-medium uppercase text-xs tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
