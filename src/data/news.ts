export interface NewsArticle {
    id: number;
    image: string;
    title: string;
    date: string;
    comments: string;
    excerpt: string;
}

export const newsArticles: NewsArticle[] = [
    {
        id: 1,
        image: "/assets/news img (2).png",
        title: "Smart Farming Solutions Workshop",
        date: "October 10, 2025",
        comments: "No Comments",
        excerpt: "Join experts and farmers to explore cutting-edge IoT tools and automated systems designed to boost productivity while conserving vital resources."
    },
    {
        id: 2,
        image: "/assets/news img (1).png",
        title: "Building Climate-Smart Agriculture for the Future",
        date: "September 22, 2025",
        comments: "No Comments",
        excerpt: "Discover strategies for adapting to changing climates, focusing on sustainable practices that ensure long-term food security and environmental health."
    },
    {
        id: 3,
        image: "/assets/news img (3).png",
        title: "Digital Advisory Platforms Transform Rural Farming",
        date: "August 30, 2025",
        comments: "No Comments",
        excerpt: "Learn how mobile technology is bridging the gap by providing real-time weather data, pest advice, and direct market access to remote communities."
    }
];
