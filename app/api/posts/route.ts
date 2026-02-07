import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            where: { isDeleted: false, status: "PUBLISHED" },
            include: { author: { select: { name: true } } },
            orderBy: { publishedAt: "desc" },
        });
        return NextResponse.json(posts);
    } catch (error: any) {
        console.error("GET posts error:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}
