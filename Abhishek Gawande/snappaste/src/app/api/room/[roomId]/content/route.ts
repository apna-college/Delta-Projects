import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ roomId: string }> }
) {
  const { roomId } = await context.params;

  try {
    const user = await prisma.user.findUnique({
      where: { roomId },
      select: { code: true, text: true },
    });

    if (!user) {
      return NextResponse.json({ message: "Room not found" }, { status: 404 });
    }

    return NextResponse.json({
      code: user.code ?? "",
      text: user.text ?? "",
    });
  } catch (error) {
    console.error("Failed to fetch room data:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
