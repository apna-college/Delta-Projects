import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await auth();
  const { roomId } = await req.json();
  if (!session?.user?.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { roomId },
    });

    return NextResponse.json({ success: true, roomCode: updatedUser.roomId });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update room code" },
      { status: 500 }
    );
  }
}
