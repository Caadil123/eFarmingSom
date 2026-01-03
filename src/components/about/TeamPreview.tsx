import { Users } from "lucide-react";
import Image from "next/image";

const TeamPreview = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-block px-4 py-1 text-primary font-semibold text-base tracking-widest mb-2 bg-green-50 rounded-full">
                    OUR EXPERTS
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-16">Meet Our Leadership</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group relative overflow-hidden rounded-3xl cursor-pointer">
                            <div className="aspect-[3/4] relative bg-gray-200">
                                {/* Placeholder for team images */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                                    <Users size={48} className="opacity-20" />
                                </div>
                                {/* Ideally real images here */}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold">Team Member {i}</h3>
                                <p className="text-white/80 text-sm">Position Title</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamPreview;
