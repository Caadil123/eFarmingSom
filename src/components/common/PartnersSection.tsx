import React from "react";

const PartnersSection = () => {
    return (
        <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-10">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Trusted Partners & Supporters</h4>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {[
                    { name: "Deyr", logo: "/assets/parternships/deyr-logo-fixed-removebg-preview.png" },
                    { name: "LA", logo: "/assets/parternships/LA-01-removebg-preview.png" },
                    { name: "Clivate Hub", logo: "/assets/parternships/Logo Clivate hub.png" },
                    { name: "Miro Macan", logo: "/assets/parternships/Miro_macan_logo_-removebg-preview.png" }
                ].map((partner, idx) => (
                    <div key={idx} className="relative w-48 h-24 md:w-60 md:h-32">
                        {/* Use regular img tag for external images */}
                        <img
                            src={partner.logo}
                            alt={`${partner.name} Logo`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnersSection;
