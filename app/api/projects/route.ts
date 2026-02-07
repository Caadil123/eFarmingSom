import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            where: { isDeleted: false, status: "PUBLISHED" },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(projects);
    } catch (error: any) {
        console.error("GET projects error:", error);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}
