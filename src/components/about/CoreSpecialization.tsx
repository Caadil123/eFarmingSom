import {
    Sprout,
    FlaskConical,
    Smartphone,
    Lightbulb,
    GraduationCap,
    Store,
    CreditCard
} from "lucide-react";

const CoreSpecialization = ({
    showAll = false,
    isServicePage = false
}: {
    showAll?: boolean;
    isServicePage?: boolean;
}) => {
    const specializations = [
        {
            title: "Agricultural Inputs & Farm Supplies",
            desc: "We provide certified seeds, quality fertilizers, and effective crop protection products that help farmers increase productivity, improve soil health, and ensure better harvests.",
            icon: <Sprout />,
        },
        {
            title: "Soil Testing & Crop/Animal Health Services",
            desc: "Professional testing services for soil fertility, plus support in managing crop diseases and livestock production for healthier, more productive farms.",
            icon: <FlaskConical />,
        },
        {
            title: "Agricultural Technology & Advisory Services",
            desc: "Real-time advisory, weather insights, pest and disease monitoring, and digital extension services improve decision-making and yields.",
            icon: <Smartphone />,
        },
        {
            title: "Innovative Agribusiness Solutions",
            desc: "Scalable solutions for agribusinesses include digital supply chain management, aggregation systems, cold-chain coordination, farm-to-market optimization, and data driven production planning.",
            icon: <Lightbulb />,
        },
        {
            title: "Farmer Capacity Building",
            desc: "Hands-on training and practical workshops on modern farming practices, agribusiness, and digital tools tailored for farmers, youth, and women entrepreneurs",
            icon: <GraduationCap />,
        },
        {
            title: "Market Linkages & Produce Sales",
            desc: "We provide certified seeds, fertilizers, and crop protection products while connecting farmers directly to reliable markets, ensuring better pricing, reduced losses, and higher profits.",
            icon: <Store />,
        },
        {
            title: "Agri-Fintech Solutions",
            desc: "Access affordable financing, digital credit scoring, crop insurance, and mobile payment tools that empower smallholder farmers to invest and grow confidently.",
            icon: <CreditCard />,
        }
    ];

    const visibleItems = showAll ? specializations : specializations.slice(0, 3);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    {isServicePage ? (
                        <>
                            <h4 className="text-primary font-bold uppercase tracking-wider text-sm">What We Offer</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Services We’re offering</h2>
                        </>
                    ) : (
                        <>
                            <h2 className="text-4xl font-bold text-gray-900">Core Specialization</h2>
                            <div className="w-24 h-1 bg-[#006737] mx-auto rounded-full"></div>
                        </>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    {visibleItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-3xl p-8 pt-12 pb-12 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-green-600 hover:to-[#006737] flex flex-col items-center text-center"
                        >
                            {/* Icon Container */}
                            <div className="mb-6 w-20 h-20 rounded-full bg-[#006737] group-hover:bg-white flex items-center justify-center transition-colors duration-500 shadow-md">
                                <div className="text-white group-hover:text-[#006737] transition-colors duration-500">
                                    {/* Clone element to override default icon color props if needed, though class control is better */}
                                    <item.icon.type
                                        {...item.icon.props}
                                        className="w-10 h-10" // Force size
                                    // The original icon has className="text-white", we need to override it or control it via parent
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-[#006737] mb-4 group-hover:text-white transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-green-50 transition-colors duration-500 text-sm">
                                {item.desc}
                            </p>

                            {/* Floating Arrow Button */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-400 group-hover:text-[#006737] transition-colors duration-500"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreSpecialization;
