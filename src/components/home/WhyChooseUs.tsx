import Image from "next/image";
import { Leaf, Users, Lightbulb, Sprout } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: Leaf,
            title: "Farmer First",
            desc: "We prioritize the needs, voices, and dignity of farmers in everything we do."
        },
        {
            icon: Users,
            title: "Inclusivity",
            desc: "We ensure equitable access and opportunities for women, youth, and marginalized communities."
        },
        {
            icon: Lightbulb,
            title: "Innovation with Impact",
            desc: "We use smart technology and data-driven tools to solve real agricultural challenges."
        },
        {
            icon: Sprout,
            title: "Sustainability",
            desc: "We promote climate-smart and environmentally responsible farming practices"
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Green Background Shape */}
                        <div className="absolute top-4 -left-4 w-full h-full bg-primary/20 rounded-3xl -z-10 translate-y-4 -translate-x-4"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-[102%] bg-primary rounded-3xl -z-20"></div>

                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl bg-[#006737]">
                            <Image
                                src="/assets/why choose img.png"
                                alt="Farmer checking cucumber crops in a greenhouse"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-primary font-bold uppercase tracking-wider text-sm">WHY CHOOSE US</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Empowering farmers, <br />
                                nurturing sustainability.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At eFarming Somalia, we combine innovation, inclusivity, and sustainability to transform agriculture across the country.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-start space-y-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary mb-2">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
