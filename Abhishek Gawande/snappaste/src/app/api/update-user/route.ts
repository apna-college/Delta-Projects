import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { code, text } = body;
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const updatedFields: Record<string, string> = {};
    if (code && code.trim() !== "") updatedFields.code = code;
    if (text && text.trim() !== "") updatedFields.text = text;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: updatedFields,
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
