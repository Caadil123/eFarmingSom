import React from "react";

const PartnersSection = () => {
    return (
        <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-10">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Trusted Partners & Supporters</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 max-w-6xl mx-auto">
                {[
                    { name: "Deyr", logo: "/assets/parternships/deyr-logo-fixed-removebg-preview.png" },
                    { name: "LA", logo: "/assets/parternships/LA-01-removebg-preview.png" },
                    { name: "Clivate Hub", logo: "/assets/parternships/Logo Clivate hub.png" },
                    { name: "Miro Macan", logo: "/assets/parternships/Miro_macan_logo_-removebg-preview.png" },
                    { name: "INBAT AGROVATE", logo: "/assets/parternships/IMG_0762.png" }
                ].map((partner, idx) => (
                    <div key={idx} className={`relative flex items-center justify-center p-4 ${idx === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}`}>
                        <div className={`relative ${['Deyr', 'LA'].includes(partner.name) ? 'w-56 h-28 md:w-64 md:h-32 scale-110' : 'w-40 h-20 md:w-48 md:h-24'}`}>
                            <img
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnersSection;
