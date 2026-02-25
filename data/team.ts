export interface TeamMember {
    id: string;
    name: string;
    title: string;
    description: string;
    imageUrl?: string;
    type: "TEAM" | "ADVISOR";
    isActive: boolean;
}

export const TEAM_DATA: TeamMember[] = [
    {
        id: "cmlm88g3n0000upmcxni7ycaq",
        name: "Eng Yasin",
        title: "Director",
        description: "Eng. Yasin serves as the Director of eFarmingsom, where he spearheads the integration of innovative technology into the agricultural sector. With a deep commitment to food security and sustainable development, he leads strategic initiatives that empower local farmers through digital solutions. Eng. Yasin’s leadership is defined by a unique blend of engineering precision and a forward-thinking approach to modernizing the Somali agricultural landscape.",
        imageUrl: "/assets/team/eng-yasin.png",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm8xww20002upmco63aaqbl",
        name: "Eng ZamZam",
        title: "Deputy Director",
        description: "The Deputy Director at eFarmingsom serves as the primary bridge between executive strategy and departmental execution. Responsible for overseeing the day-to-day internal workflows, they ensure that the company’s AgTech projects are delivered on time and within budget. With a keen eye for organizational health, the Deputy Director optimizes resource allocation and strengthens team synergy, allowing the organization to scale its impact across the agricultural value chain.",
        imageUrl: "/assets/team/eng-zamzam.jpeg",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm8uj5l0001upmcga2tavaa",
        name: "Eng Mohamed Ali",
        title: "Technical Operations Director",
        description: "In his role as Technical Operations Director, Eng. Mohamed Ali manages the physical and digital infrastructure of eFarmingsom. He bridges the gap between field hardware and cloud software, ensuring that every technical deployment is robust, scalable, and weather-resilient. His leadership ensures that the company’s mission is backed by unwavering technical reliability",
        imageUrl: "/assets/team/eng-mohamed-ali.jpeg",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm9eaiy0005upmca8wv4ui7",
        name: "Arjun Mehta",
        title: "Sustainable Finance Advisor",
        description: "An expert in \"Green FinTech\" from Singapore, Mr. Mehta assists eFarmingsom in developing micro-financing models for smallholder farmers, ensuring the business remains socially impactful and financially viable.",
        imageUrl: "/assets/team/arjun-mehta.png",
        type: "ADVISOR",
        isActive: true
    },
    {
        id: "cmlm9dlkn0004upmckuom4gcy",
        name: "Hiroshi Tanaka",
        title: "Strategic Technology Consultant",
        description: "Based in Tokyo, Mr. Tanaka brings 20 years of experience in Precision Robotics. He advises the team on integrating automated drone technology and AI sensors into the eFarmingsom platform.",
        imageUrl: "/assets/team/hiroshi-tanaka.png",
        type: "ADVISOR",
        isActive: true
    },
    {
        id: "cmlm97z910003upmczylx7du4",
        name: "Dr. Elena Vance",
        title: "Senior Ag-Policy Advisor",
        description: "A former consultant for European agricultural unions, Dr. Vance provides guidance on international food safety standards and export-import compliance, helping eFarmingsom align with global markets.",
        imageUrl: "/assets/team/dr-elena.png",
        type: "ADVISOR",
        isActive: true
    }
];
