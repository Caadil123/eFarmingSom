import { Project } from '@/data/projects';

// Define the API base URL - using environment variable or default to localhost
// Note: In Next.js, environment variables prefixed with NEXT_PUBLIC_ are available in the browser
const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'https://dashboard.efarmingsom.com/api';

/**
 * Interface representing the Project structure from the Admin API (Prisma model)
 */
export interface AdminProject {
    id: string;
    title: string;
    slug?: string;
    summary?: string;
    description: string;
    location?: string;
    category?: string;
    focusAreas: string[];
    status: 'DRAFT' | 'PUBLISHED';
    coverImageUrl?: string;
    startDate?: string;
    endDate?: string;
    createdAt: string;
    updatedAt: string;
}

/**
 * Interface representing the Post structure from the Admin API (Prisma model)
 */
export interface AdminPost {
    id: string;
    title: string;
    slug?: string;
    excerpt?: string;
    content?: string;
    contentSections?: any; // JSON
    status: 'DRAFT' | 'PUBLISHED';
    featuredImage?: string;
    author: { name: string | null };
    publishedAt?: string;
    createdAt: string;
}

/**
 * Fetches all posts from the Admin Dashboard API
 */
import { NewsArticle } from '@/data/news';

export async function fetchPosts(): Promise<NewsArticle[]> {
    try {
        console.log(`Fetching posts from: ${API_BASE_URL}`);
        const response = await fetch(`${API_BASE_URL}/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            console.error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
            return [];
        }

        const adminPosts: AdminPost[] = await response.json();
        console.log(`Successfully fetched ${adminPosts.length} posts`);
        return adminPosts.map(transformAdminToClientPost);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

function transformAdminToClientPost(adminPost: AdminPost): NewsArticle {
    // Fix image URL for local uploads
    let imageUrl = adminPost.featuredImage || '/assets/news-placeholder.jpg';
    if (imageUrl.startsWith('/')) {
        const origin = API_BASE_URL.replace('/api', '');
        imageUrl = `${origin}${imageUrl}`;
    }

    // Convert API contentSections (JSON) to string array if it exists
    let contentArray: string[] = [];
    if (Array.isArray(adminPost.contentSections)) {
        adminPost.contentSections.forEach((s: any) => {
            // If the section has a subtitle, add it as a separate "line" with ## prefix
            // This matches the frontend renderer's expectation for headers
            if (s.subtitle && s.subtitle.trim() !== "") {
                contentArray.push(`## ${s.subtitle}`);
            }
            // Add the main content paragraph
            if (s.content && s.content.trim() !== "") {
                contentArray.push(s.content);
            }
        });
    } else if (adminPost.content) {
        contentArray = [adminPost.content];
    }

    return {
        id: adminPost.id as unknown as number, // We might need to handle string IDs in the frontend eventually, casting for now or generating numeric ID
        // Note: The frontend uses numeric IDs for static data, but database uses strings (CUID). 
        // We really should update NewsArticle ID to string, but to avoid breaking changes now we can cast or keep it string if components allow.
        // Actually, let's fix the interface in a separate step if needed. For now assume components handle string or we hash it.
        // To be safe against type errors if components expect numbers:
        // We will keep ID as string in the transformed object and update the Interface in the data file OR cast it.
        // Let's coerce to any to bypass strict type check for now or ideally update the interface. 
        // Better plan: I'll update the NewsArticle interface next to accept string | number.

        image: imageUrl,
        title: adminPost.title,
        date: adminPost.publishedAt ? new Date(adminPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : new Date(adminPost.createdAt).toLocaleDateString(),
        comments: "No Comments", // Placeholder
        excerpt: adminPost.excerpt || "",
        category: "News", // Default
        readingTime: "5 min read", // Estimate
        topics: [],
        author: adminPost.author?.name || "eFarming",
        content: contentArray
    } as unknown as NewsArticle; // Temporary casting until we update the ID type
}

/**
 * Fetches a single news post by ID
 */
export async function fetchPost(id: string | number): Promise<NewsArticle | null> {
    try {
        // Fetch all posts (since our simple API doesn't support get-by-id yet)
        const allPosts = await fetchPosts();

        // Find the match
        // We compare as strings to handle both numeric and string IDs gracefully
        const match = allPosts.find(p => String(p.id) === String(id));
        return match || null;
    } catch (error) {
        console.error("Error fetching single post:", error);
        return null;
    }
}
export async function fetchProjects(): Promise<Project[]> {
    try {
        console.log(`Fetching projects from: ${API_BASE_URL}/projects`);
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // Setup revalidation for ISR (Incremental Static Regeneration) or use 'no-store' for dynamic
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!response.ok) {
            // If the server is down or returns an error, we can fallback to empty or handle it
            console.error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
            return [];
        }

        const adminProjects: AdminProject[] = await response.json();
        console.log(`Successfully fetched ${adminProjects.length} projects`);

        // Transform Admin Projects to Client Project Interface
        return adminProjects.map(transformAdminToClientProject);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

/**
 * Fetches a single project by ID or Slug
 * Note: Our current admin API currently supports get by ID. 
 * We might need to add get-by-slug to the admin API later for prettier URLs.
 */
export async function fetchProject(id: string): Promise<Project | null> {
    try {
        // NOTE: The current simple admin route only returns ALL projects.
        // We will filter client-side for now, but ideally the API should support /api/projects/:id
        const allProjects = await fetchProjects();
        return allProjects.find(p => p.id === id) || null;
    } catch (error) {
        console.error("Error fetching single project:", error);
        return null;
    }
}

/**
 * Helper to Transform Admin Data Shape -> Client Data Shape
 */
function transformAdminToClientProject(adminProject: AdminProject): Project {
    // Fix image URL: If it's a relative path from the admin (local upload), prepend the admin URL
    let imageUrl = adminProject.coverImageUrl || '/assets/project-placeholder.jpg';
    if (imageUrl.startsWith('/')) {
        // Remove '/api' from the base URL to get just the origin (e.g., http://localhost:3000)
        const origin = API_BASE_URL.replace('/api', '');
        imageUrl = `${origin}${imageUrl}`;
    }

    return {
        id: adminProject.id,
        title: adminProject.title,
        category: adminProject.category || 'General', // Default if missing
        location: adminProject.location || 'Somalia', // Default if missing
        // Use summary for short desc if available, else truncate description
        description: adminProject.summary || adminProject.description.substring(0, 150) + '...',
        fullDescription: adminProject.description,
        image: imageUrl,
        focusAreas: adminProject.focusAreas || [],
        date: adminProject.startDate ? new Date(adminProject.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : undefined,
        // These fields might not exist in Admin yet, so we leave them optional/undefined or dummy
        client: undefined,
        results: [],
        galleryImages: []
    };
}

/**
 * Interface representing the Team Member structure from the Admin API
 */
export interface AdminTeamMember {
    id: string;
    name: string;
    title: string;
    description: string;
    imageUrl?: string;
    type: string; // "TEAM" | "ADVISOR"
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

/**
 * Fetches all team members from the Admin Dashboard API
 */
export async function fetchTeamMembers(): Promise<AdminTeamMember[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/team-members`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            console.error('Failed to fetch team members:', response.statusText);
            return [];
        }

        const members: AdminTeamMember[] = await response.json();

        // Transform members (fix image URLs)
        return members.map(m => {
            let imageUrl = m.imageUrl || '';
            if (imageUrl.startsWith('/')) {
                const origin = API_BASE_URL.replace('/api', '');
                imageUrl = `${origin}${imageUrl}`;
            }
            return { ...m, imageUrl };
        });
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}

/**
 * Interface representing the Partner structure from the Admin API
 */
export interface AdminPartner {
    id: string;
    name: string;
    imageUrl?: string;
    url?: string;
    createdAt: string;
    updatedAt: string;
}

/**
 * Fetches all partners from the Admin Dashboard API
 */
export async function fetchPartners(): Promise<AdminPartner[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/partners`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            console.error('Failed to fetch partners:', response.statusText);
            return [];
        }

        const partners: AdminPartner[] = await response.json();

        // Transform partners (fix image URLs)
        return partners.map(p => {
            let imageUrl = p.imageUrl || '';
            if (imageUrl.startsWith('/')) {
                const origin = API_BASE_URL.replace('/api', '');
                imageUrl = `${origin}${imageUrl}`;
            }
            return { ...p, imageUrl };
        });
    } catch (error) {
        console.error('Error fetching partners:', error);
        return [];
    }
}
