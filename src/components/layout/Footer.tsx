import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, ArrowRight, Linkedin, Link2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1AHJWpc7ke/?mibextid=wwXIfr" },
        {
            icon: () => (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            href: "https://x.com/efarmingsomalia?s=21"
        },
        { icon: Instagram, href: "https://www.instagram.com/efarming_somalia?igsh=bzZ2MHp0czRlMHdy&utm_source=qr" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/efarming-somalia/" },
        {
            icon: () => (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
            ),
            href: "https://www.tiktok.com/@efarmingsomalia?_r=1&_t=ZM-935q3jHwaPE"
        },
        { icon: Link2, href: "https://beacons.ai/efarmingsomalia" },
    ];

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
                            {socialLinks.map((social, i) => (
                                <Link key={i} href={social.href} target="_blank" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-secondary hover:text-primary transition-all">
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            {[
                                "Agricultural Inputs & Farm Supplies",
                                "Soil Testing & Crop/Animal Health Services",
                                "Agricultural Technology & Advisory Services",
                                "Innovative Agribusiness Solutions",
                                "Farmer Capacity Building",
                                "Market Linkages & Produce Sales",
                                "Agri-Fintech Solutions"
                            ].map((item) => (
                                <li key={item}><Link href="/services" className="hover:text-secondary transition-colors block">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            {["About us", "Services", "Projects", "News & insight", "Contact"].map((item) => (
                                <li key={item}><Link href={`/${item.toLowerCase() === 'about us' ? 'about' : item.toLowerCase() === 'news & insight' ? 'pages' : item.toLowerCase()}`} className="hover:text-secondary transition-colors block">{item}</Link></li>
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
                                suppressHydrationWarning={true}
                                className="w-full bg-[#f3f4f6] border-none rounded-full py-3 px-6 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-secondary outline-none"
                            />
                            <Link
                                href="/contact"
                                className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors uppercase text-sm tracking-wider"
                            >
                                <Mail size={18} />
                                SIGN UP
                            </Link>
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
