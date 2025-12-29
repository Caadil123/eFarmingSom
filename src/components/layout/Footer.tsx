import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="pt-20 bg-primary text-white">
            {/* Contact Form Section Overlay */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-32 mb-16">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    <div className="p-10 md:p-14">
                        <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">CONTACT US</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary text-gray-900" />
                                <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary text-gray-900" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary text-gray-900" />
                                <input type="text" placeholder="Subject" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary text-gray-900" />
                            </div>
                            <textarea placeholder="Write your message here..." rows={4} className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-primary text-gray-900 resize-none"></textarea>
                            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-emerald-800 transition-colors w-full md:w-auto">
                                GET IN TOUCH
                            </button>
                        </form>
                    </div>

                    <div className="bg-gray-900 p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-full text-secondary"><MapPin size={20} /></div>
                                <div>
                                    <span className="block text-gray-400 text-sm">Location</span>
                                    <span className="font-semibold">Mogadishu, Somalia</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-full text-secondary"><Phone size={20} /></div>
                                <div>
                                    <span className="block text-gray-400 text-sm">Call Us</span>
                                    <span className="font-semibold">+252 61 276 7693</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-full text-secondary"><Mail size={20} /></div>
                                <div>
                                    <span className="block text-gray-400 text-sm">Email Us</span>
                                    <span className="font-semibold">info@ebersom.com</span>
                                </div>
                            </li>
                        </ul>

                        {/* Decorative Wheat Image Placeholder */}
                        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                            {/* SVG or Image would go here */}
                            <div className="w-40 h-40 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative h-20 w-64">
                                <img src="/logo.png" alt="Efarming Logo" className="object-contain h-full w-full object-left" />
                            </div>
                        </Link>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Innovating for a better agricultural future. Connecting farmers, markets, and communities.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-secondary hover:text-primary transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            {["About Us", "Our Services", "Our Projects", "Farmers", "Contact"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full"></div> {item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            {["Agri-Input Supply", "Market Linkage", "Digital Advisory", "Farm Management", "Logistics"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full"></div> {item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-300 text-sm mb-4">Subscribe to get the latest news and updates.</p>
                        <div className="relative">
                            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border-none rounded-full py-3 px-4 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-secondary" />
                            <button className="absolute right-1 top-1 bg-secondary text-primary p-2 rounded-full hover:bg-white transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Efarming. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
