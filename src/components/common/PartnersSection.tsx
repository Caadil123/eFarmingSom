"use client";

import React, { useEffect, useState } from "react";
import { fetchPartners, AdminPartner } from "@/lib/api-client";

const PartnersSection = () => {
    const [partners, setPartners] = useState<AdminPartner[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPartners() {
            try {
                const data = await fetchPartners();
                setPartners(data);
            } catch (error) {
                console.error("Failed to fetch partners:", error);
            } finally {
                setLoading(false);
            }
        }
        loadPartners();
    }, []);

    if (loading) {
        return (
            <div className="py-16 flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    if (partners.length === 0) {
        return null;
    }

    return (
        <div className="border-t border-gray-200 pt-16 pb-12">
            <div className="text-center mb-10 px-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Trusted Partners & Supporters</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto px-4">
                {partners.map((partner) => {
                    const Content = (
                        <div className="relative group/partner flex items-center justify-center p-4 transition-all duration-300 transform hover:scale-110">
                            <div className="relative w-40 h-20 md:w-48 md:h-24 opacity-70 grayscale group-hover/partner:opacity-100 group-hover/partner:grayscale-0 transition-all duration-500">
                                <img
                                    src={partner.imageUrl || "/assets/parternships/placeholder.png"}
                                    alt={`${partner.name} Logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    );

                    if (partner.url && partner.url.trim() !== "") {
                        return (
                            <a
                                key={partner.id}
                                href={partner.url.startsWith('http') ? partner.url : `https://${partner.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {Content}
                            </a>
                        );
                    }

                    return <div key={partner.id}>{Content}</div>;
                })}
            </div>
        </div>
    );
};

export default PartnersSection;
