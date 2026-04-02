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
        title: "Founder and Director",
        description: "As the Founder and Director of eFarming Somalia, Yassin provides strategic leadership and vision for the agritech and agribusiness ecosystem. With a strong background in agricultural science and digital innovation, he oversees all platform operations and fosters partnerships to drive climate-smart farming and market-driven solutions across Somalia and beyond.",
        imageUrl: "/assets/team/yasin.jpeg",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm8xww20002upmco63aaqbl",
        name: "Eng Abdisamad Ahmed",
        title: "Co–Founder",
        description: "Abdisamad Ahmed serves as Co-Founder and oversees operations at eFarming Somalia. With exceptional organizational skills and strategic thinking, he ensures the smooth functioning of all platform activities while supporting the implementation of the founder's vision and leading key operational initiatives to scale digital agribusiness solutions across the region.",
        imageUrl: "/assets/team/Abdisamad.jpeg",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm8uj5l0001upmcga2tavaa",
        name: "Eng Maryam Da’ud",
        title: "Content Creator",
        description: "Maryam Da’ud serves as a Content Creator and oversees digital storytelling at eFarming Somalia. With exceptional creative skills and strategic thinking, she ensures the smooth production of all platform media while supporting the implementation of the founder's vision and leading key communication initiatives to engage and educate the agricultural community.",
        imageUrl: "/assets/team/maryan.jpeg",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm9eaiy0005upmca8wv4ui7",
        name: "Eng Ismail",
        title: "Farm and Field Operations Manager",
        description: "Ismail Adam serves as the Farm and Field Operations Manager and oversees all onsite activities at eFarming Somalia. With exceptional organizational skills and strategic thinking, he ensures the smooth functioning of all agricultural operations while supporting the implementation of the director’s vision and leading key field initiatives to improve farmer productivity and crop management",
        imageUrl: "/assets/team/ismail.jpeg",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm9dlkn0004upmckuom4gcy",
        name: "Eng Salman Mohamed",
        title: "Research and Data Insights Manager",
        description: "Salman Mohamed serves as the Research and Data Insights Manager and oversees all data-driven strategies at eFarming Somalia. With exceptional analytical skills and strategic thinking, he ensures the smooth collection and evaluation of agricultural data while supporting the implementation of the founder's vision and leading key research initiatives to provide farmers with actionable insights for better decisionmaking.",
        imageUrl: "",
        type: "TEAM",
        isActive: true
    },
    {
        id: "cmlm97z910003upmczylx7du4",
        name: "Eng Sharmarke Mohamed",
        title: "Technical Advisor",
        description: "Sharmarke Mohamed serves as the Technical Advisor and oversees the integration of advanced technologies at eFarming Somalia. With exceptional technical skills and strategic thinking, he ensures the smooth functioning of the platform’s digital infrastructure while supporting the implementation of the founder's vision and leading key advisory initiatives to drive innovation in the agricultural sector.",
        imageUrl: "/assets/team/sharmake.jpeg",
        type: "ADVISOR",
        isActive: true
    },
    {
        id: "cmlma11110000upmcxni7ycaq",
        name: "Abdirisack Ali",
        title: "Senior Ag-Policy Advisor",
        description: "Abdirisack Ali serves as the Senior Ag-Policy Advisor and oversees the strategic alignment of agricultural policies at eFarming Somalia. With exceptional analytical skills and strategic thinking, he ensures the smooth integration of regulatory frameworks while supporting the implementation of the founder's vision and leading key policy init",
        type: "ADVISOR",
        isActive: true
    },
    {
        id: "cmlmb22220000upmcxni7ycaq",
        name: "Mohamed Hassan",
        title: "Climate & Sustainability Advisor",
        description: "Mohamed Hassan serves as the Climate and Sustainability Advisor and oversees the integration of eco-friendly farming practices at eFarming Somalia. With exceptional analytical skills and strategic thinking, he ensures the smooth implementation of climate-smart initiatives while supporting the implementation of the founder's vision and leading key sustainability strategies to protect the environment and enhance long-term food security",
        type: "ADVISOR",
        isActive: true
    }
];
