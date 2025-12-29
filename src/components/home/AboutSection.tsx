import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sprout, Tractor, Leaf, ArrowRight } from "lucide-react";

const AboutSection = () => {
    return (
        <>
            {/* Main About Section */}
            <section className="relative pt-48 pb-8 bg-white overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0 opacity-5">
                    <Image
                        src="/assets/Section.png"
                        alt="Background Pattern"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1 text-primary font-semibold text-base tracking-widest mb-2">
                                WHO WE ARE
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Driving Smart Agriculture <br /> Across Somalia.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                eFarming Somalia is transforming the nation's farming landscape through
                                innovation, technology, and inclusion.
                                We empower farmers with quality inputs, digital tools, and direct
                                market access — making agriculture more profitable, sustainable, and
                                future-ready.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {["Direct Market Access", "Fair Trade Practices", "Quality Assurance"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-semibold text-gray-800">
                                        <CheckCircle2 className="text-primary" size={24} />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Link href="/about" className="px-8 py-4 bg-primary text-white font-semibold rounded-full text-sm hover:bg-emerald-800 transition-colors">
                                    DISCOVER MORE
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            {/* Decorative Frame */}
                            <div className="absolute top-0 left-0 w-full h-full border-[12px] border-primary/10 rounded-3xl -translate-x-6 -translate-y-6 z-0"></div>

                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/AboutSection image.jpg"
                                    alt="Farmers using tablet"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary max-w-[200px]">
                                <p className="font-bold text-gray-900 text-4xl mb-1">10k+</p>
                                <p className="text-sm text-gray-500 font-medium">Farmers Empowered Since 2023</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                        {/* Card 1 */}
                        <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center pb-12 group">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                                <Sprout className="text-white" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">Agri-Inputs & Market Linkages</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Providing farmers with certified seeds, fertilizers, and direct access to reliable markets for better prices and profits.
                            </p>
                            <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <ArrowRight className="text-gray-400" size={20} />
                            </div>
                        </div>

                        {/* Card 2 - Active/Highlighted */}
                        <div className="relative bg-gradient-to-b from-[#1a8f5a] to-[#006737] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center pb-12 transform md:-translate-y-4">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                                <Tractor className="text-primary" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Agri-Advisory & Training</h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                Delivering expert guidance, digital tools, and workshops that strengthen farmer knowledge and productivity.
                            </p>
                            <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <ArrowRight className="text-gray-600" size={20} />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center pb-12 group">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                                <Leaf className="text-white" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">Agri-Fintech Solutions</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Offering digital credit scoring, crop insurance, and mobile-based financial tools to empower smallholder farmers.
                            </p>
                            <div className="absolute -bottom-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <ArrowRight className="text-gray-400" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability / Green Section - Updated with container for margins */}
            {/* Sustainability / Green Section - Boxed with margins */}
            <section className="pb-24 pt-4 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative rounded-3xl overflow-hidden h-[500px] flex items-center justify-center">
                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/assets/photo-1533460004989-cef01064af7e.jpg"
                                alt="Green Agriculture"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#006737]/85 mix-blend-multiply"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-4 md:px-12 text-center text-white max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Empowering farmers while <br /> protecting the planet.
                            </h2>
                            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
                                eFarming Somalia promotes climate-smart and environmentally responsible
                                farming. Through innovation and modern practices, we help farmers
                                increase yields, reduce waste, and strengthen resilience against
                                environmental challenges — for a greener,
                                more sustainable Somalia.
                            </p>
                            <Link
                                href="/sustainability"
                                className="inline-block px-10 py-4 bg-[#004d29] text-white font-semibold rounded-full text-sm hover:bg-white hover:text-[#006737] transition-all border border-green-800 hover:border-white shadow-xl transform hover:scale-105"
                            >
                                DISCOVER MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection; 