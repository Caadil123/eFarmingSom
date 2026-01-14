export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    description: string;
    fullDescription?: string; // For the detail page
    image: string;
    focusAreas: string[];
    client?: string;
    date?: string;
    results?: { label: string; value: string }[];
    galleryImages?: string[];
}

export const PROJECTS_DATA: Project[] = [
    {
        id: 'deyr-greenhouse',
        title: 'Deyr Greenhouse Installation & Training Project',
        category: 'Sustainability',
        location: 'Garasbaley, Benadir Region',
        description: 'A large-scale, climate-smart greenhouse project focused on modern installation and hands-on farmer training. The project supports year-round vegetable production, water efficiency, and improved farmer income.',
        fullDescription: 'The Deyr Greenhouse Installation & Training Project addresses the critical need for sustainable vegetable production in the Benadir Region. By deploying modern greenhouse structures and drip irrigation systems, we have enabled local farmers to grow crops year-round, independent of erratic rainfall patterns. The project also included intensive hands-on training sessions, empowering farmers with the skills to manage greenhouse environments, pest control, and post-harvest handling.',
        image: '/assets/project-1-new.jpg',
        focusAreas: ['Greenhouse installation', 'Drip irrigation', 'Farmer training'],
        client: 'Ministry of Agriculture',
        date: 'October 2025',
        results: [
            { label: 'Farmers Trained', value: '150+' },
            { label: 'Yield Increase', value: '45%' },
            { label: 'Water Saved', value: '60%' }
        ],
        galleryImages: ['/assets/our soultion image (1).png', '/assets/testomonial.png', '/assets/wheat.png']
    },
    {
        id: 'smart-irrigation',
        title: 'Smart Irrigation & Precision Farming Project',
        category: 'Technology',
        location: 'Middle Shabelle',
        description: 'This project deploys smart irrigation systems and digital advisory tools to optimize water use, monitor soil moisture, and improve crop productivity in water-scarce environments.',
        fullDescription: 'Facing severe water scarcity, the Middle Shabelle region required an innovative solution. Our Smart Irrigation & Precision Farming Project introduced IoT-based soil moisture sensors and automated irrigation controls. Farmers can now monitor their field conditions remotely via a mobile app, ensuring precise water delivery only when needed. This has significantly reduced water wastage and operational costs while boosting crop health.',
        image: '/assets/project-2-new.jpg',
        focusAreas: ['Precision farming', 'IoT monitoring', 'Climate adaptation'],
        client: 'Somali Innovation Fund',
        date: 'August 2025',
        results: [
            { label: 'Farms Connected', value: '75' },
            { label: 'Water Efficiency', value: '35%' }
        ],
        galleryImages: ['/assets/simple img.jpeg', '/assets/map_img.png.png']
    },
    {
        id: 'digital-advisory',
        title: 'Digital Advisory & Farmer Training Program',
        category: 'Education',
        location: 'Nationwide',
        description: 'A digital agriculture initiative providing farmers with real-time agronomic advice, climate alerts, and best-practice guidance through mobile-friendly platforms and on-ground extension support.',
        image: '/assets/project-3-new.jpg',
        focusAreas: ['Digital advisory', 'Capacity building', 'Climate-smart farming']
    },
    {
        id: 'market-access',
        title: 'Market Access & Value Chain Linkage Project',
        category: 'Community',
        location: 'Mogadishu & Key Production Areas',
        description: 'This project connects farmers directly with buyers, aggregators, and markets—improving price transparency, reducing post-harvest losses, and increasing farmer incomes.',
        image: '/assets/project-4-new.jpg',
        focusAreas: ['Market linkage', 'Fair pricing', 'Quality grading']
    },
    {
        id: 'access-finance',
        title: 'Access to Finance & Agricultural Insurance Project',
        category: 'Innovation',
        location: 'Selected Farming Communities',
        description: 'A farmer-focused financial inclusion project providing access to microloans, input financing, and weather-indexed insurance through trusted partners using farm performance data.',
        image: '/assets/project 5.jpeg',
        focusAreas: ['Agricultural finance', 'Microinsurance', 'Risk management']
    },
    {
        id: 'youth-women',
        title: 'Youth & Women Agribusiness Capacity Building Project',
        category: 'Community',
        location: 'Urban & Peri-Urban Areas',
        description: 'A skills-development and entrepreneurship project empowering youth and women to participate in agribusiness through training, mentorship, and practical farming programs.',
        image: '/assets/project-6-new.jpg',
        focusAreas: ['Capacity building', 'Youth & women inclusion', 'Agribusiness']
    }
];
