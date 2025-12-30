import Image from "next/image";

const StatsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Predict. Plan. Protect. Prosper.
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                    We offer localized weather insights to guide planting, irrigation, and
                    harvesting—helping farmers plan smarter and protect crops.
                </p>

                <div className="relative w-full h-[400px] md:h-[600px] mt-12 mb-16 rounded-2xl overflow-hidden bg-white">
                    <Image
                        src="/assets/map_img.png.png"
                        alt="Somalia Rainfall Map and Weather Insights"
                        fill
                        className="object-contain"
                    />
                </div>

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
