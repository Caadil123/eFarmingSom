import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const partners = await prisma.partner.findMany({
            where: { isDeleted: false },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(partners);
    } catch (error: any) {
        console.error("GET partners error:", error);
        return NextResponse.json({ error: "Failed to fetch partners" }, { status: 500 });
    }
}
