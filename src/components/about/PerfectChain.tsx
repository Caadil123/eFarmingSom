import {
    Package,
    ShieldCheck,
    MessageSquareText,
    Tractor,
    HeartHandshake,
    Store,
    CreditCard,
    ArrowRight
} from "lucide-react";

const PerfectChain = () => {
    const steps = [
        { title: "Agri-Input", icon: Package, desc: "Premium Seeds & Supplies" },
        { title: "Quality Control", icon: ShieldCheck, desc: "Rigorous Testing" },
        { title: "Advisory", icon: MessageSquareText, desc: "Expert Guidance" },
        { title: "Production", icon: Tractor, desc: "Efficient Farming" },
        { title: "Support", icon: HeartHandshake, desc: "Ongoing Assistance" },
        { title: "Market", icon: Store, desc: "Direct Access" },
        { title: "Payment", icon: CreditCard, desc: "Secure Transactions" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900">The Perfect Chain</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our seamless end-to-end value chain ensures quality, efficiency, and success at every stage of the agricultural journey.
                    </p>
                    <div className="w-24 h-1 bg-[#006737] mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-1 bg-gray-100 -z-10">
                        <div className="h-full bg-gradient-to-r from-green-500/20 via-[#006737]/20 to-green-500/20 w-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group flex flex-col items-center">
                                {/* Icon Circle */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center group-hover:border-[#006737] group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg z-20 relative">
                                        <step.icon
                                            size={32}
                                            className="text-gray-400 group-hover:text-[#006737] transition-colors duration-300"
                                        />
                                    </div>

                                    {/* Arrow icon between steps (Desktop) */}
                                    {idx < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-[60%] transform -translate-y-1/2 text-gray-300 z-0">
                                            <ArrowRight size={20} />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#006737] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet Connector Hint */}
                    <div className="mt-12 lg:hidden flex justify-center text-gray-400 text-sm italic">
                        <p>Scroll or follow steps from left to right</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfectChain;
