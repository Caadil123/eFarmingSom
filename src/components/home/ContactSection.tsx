
import Image from "next/image";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="relative py-20 bg-[#F3F5F7] overflow-hidden mb-16">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side - Contact Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                            <div className="mb-8">
                                <span className="text-[#00703C] font-semibold text-sm tracking-widest uppercase">HAVE QUESTIONS?</span>
                                <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Send us a Message</h2>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-gray-50 border border-transparent focus:border-secondary focus:bg-white focus:ring-0 text-gray-900 rounded-lg px-6 py-4 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full bg-gray-50 border border-transparent focus:border-secondary focus:bg-white focus:ring-0 text-gray-900 rounded-lg px-6 py-4 outline-none transition-all placeholder:text-gray-400"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full bg-gray-50 border border-transparent focus:border-secondary focus:bg-white focus:ring-0 text-gray-900 rounded-lg px-6 py-4 outline-none transition-all placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tell Us About Project *"
                                        rows={6}
                                        className="w-full bg-gray-50 border border-transparent focus:border-secondary focus:bg-white focus:ring-0 text-gray-900 rounded-lg px-6 py-4 outline-none transition-all resize-none placeholder:text-gray-400"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="bg-[#00703C] hover:bg-[#005a30] text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                                >
                                    <Send size={18} />
                                    Get In Touch
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side - Information */}
                    <div className="w-full lg:w-5/12 pt-8 lg:pt-12">
                        <div className="relative mb-8">
                            <h2 className="text-4xl font-extrabold text-gray-900">
                                Contact <span className="relative inline-block">
                                    Information
                                    <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#00703C]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-500 mb-12 leading-relaxed text-lg">
                            We'd love to hear from you. Whether you're a farmer, investor,
                            or partner, reach out to learn how we can grow together
                            through technology-driven agriculture.
                        </p>

                        <div className="space-y-10">
                            {/* Phone */}
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-full bg-[#00703C] flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-emerald-900/10">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                                    <p className="text-gray-600 font-medium">+252 612 767 693</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-full bg-[#00703C] flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-emerald-900/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        KM5-Zoobe Road, Hodan District
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-full bg-[#00703C] flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-emerald-900/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">Official Email</h4>
                                    <p className="text-gray-600 font-medium">info@ebeersom.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wheat Image Decoration */}
            <div className="absolute bottom-24 right-0 w-[380px] h-[380px] pointer-events-none z-0 opacity-90">
                <Image
                    src="/assets/contact-wheat.png"
                    alt="Wheat decoration"
                    width={380}
                    height={380}
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default ContactSection;
