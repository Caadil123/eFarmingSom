import { Mail, Phone, Facebook, Instagram, Linkedin, Link2 } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
    return (
        <div className="bg-primary text-white py-2 text-sm hidden md:block">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Mail size={14} className="text-secondary" />
                        <span className="font-medium">efarmingsomalia@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-secondary" />
                        <span className="font-medium">
                            +252613233586</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://www.facebook.com/share/1AHJWpc7ke/?mibextid=wwXIfr" target="_blank" className="hover:text-secondary transition-colors"><Facebook size={16} /></Link>
                    <Link href="https://x.com/efarmingsomalia?s=21" target="_blank" className="hover:text-secondary transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                    <Link href="https://www.instagram.com/efarming_somalia?igsh=bzZ2MHp0czRlMHdy&utm_source=qr" target="_blank" className="hover:text-secondary transition-colors"><Instagram size={16} /></Link>
                    <Link href="https://www.linkedin.com/company/efarming-somalia/" target="_blank" className="hover:text-secondary transition-colors"><Linkedin size={16} /></Link>
                    <Link href="https://www.tiktok.com/@efarmingsomalia?_r=1&_t=ZM-935q3jHwaPE" target="_blank" className="hover:text-secondary transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                        </svg>
                    </Link>
                    <Link href="https://beacons.ai/efarmingsomalia" target="_blank" className="hover:text-secondary transition-colors"><Link2 size={16} /></Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
