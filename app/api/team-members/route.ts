import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const members = await prisma.teamMember.findMany({
            where: { isDeleted: false, isActive: true },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(members);
    } catch (error: any) {
        console.error("GET team members error:", error);
        return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 });
    }
}
