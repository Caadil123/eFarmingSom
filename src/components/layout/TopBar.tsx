import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
    return (
        <div className="bg-primary text-white py-2 text-sm hidden md:block">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Mail size={14} className="text-secondary" />
                        <span className="font-medium">info@ebersom.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-secondary" />
                        <span className="font-medium">+252 61 276 7693</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={16} /></Link>
                    <Link href="#" className="hover:text-secondary transition-colors"><Twitter size={16} /></Link>
                    <Link href="#" className="hover:text-secondary transition-colors"><Instagram size={16} /></Link>
                    <Link href="#" className="hover:text-secondary transition-colors"><Youtube size={16} /></Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
