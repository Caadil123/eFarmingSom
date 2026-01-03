import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="pt-20 bg-primary text-white">

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative h-20 w-64 ">
                                <img src="/logo.png" alt="Efarming Logo" className="h-50 w-auto object-contain -my-20 transform hover:scale-105 transition-transform duration-200" />
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
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            {["Weather Updates", "Agri-Advisory", "Market Linkages", "Workshops & Training", "Green House", "Fertilizers"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-secondary transition-colors block">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            {["About us", "Services", "Projects", "News", "Contact"].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-secondary transition-colors block">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Signup our newsletter to get update information, news, insight or promotions.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-[#f3f4f6] border-none rounded-full py-3 px-6 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-secondary outline-none"
                            />
                            <button className="w-full bg-~[#4ade80] hover:bg-[#22c55e] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors uppercase text-sm tracking-wider">
                                <Mail size={18} />
                                SIGN UP
                            </button>
                        </form>
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
