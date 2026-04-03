"use client";

import { CodeOrText } from "@/components/code-or-text";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserIcon } from "@/components/user-icon";
import { useHandPose } from "@/hooks/useHandPose";
import { Copy, Users } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const contentTypes = [
  { id: "code", label: "Code" },
  { id: "text", label: "Text" },
];

const Page = () => {
  const params = useParams();
  const roomId = params.roomId as string;

  const [selectedType, setSelectedType] = useState<"code" | "text">("code");
  const [content, setContent] = useState("");

  const [gestureSignal, setGestureSignal] = useState<"copy" | "paste" | null>(
    null
  );

  useHandPose((gesture) => {
    if (gesture === "grab") {
      setGestureSignal("copy");
    }
  });

  useEffect(() => {
    if (gestureSignal) {
      const timeout = setTimeout(() => {
        setGestureSignal(null);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [gestureSignal]);

  const handleCopyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy room ID");
    }
  };

  const updateroomId = async (code: string) => {
    try {
      const response = await fetch("/api/user/room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId: code }),
      });

      if (!response.ok) throw new Error("Failed to update room code");
      const data = await response.json();
    } catch (err) {
      console.error("Error updating room:", err);
    }
  };

  useEffect(() => {
    if (roomId && roomId.trim() !== "") {
      updateroomId(roomId);
    }
  }, [roomId]);

  return (
    <>
      <div className="h-screen flex flex-col bg-white">
        <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Room: {roomId}
                </h1>
                <p className="text-sm text-gray-600">
                  Share content with everyone
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyRoomId}
                className="flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>Copy ID</span>
              </Button>
              <UserIcon />
            </div>
          </div>

          <Tabs
            value={selectedType}
            onValueChange={(value) => setSelectedType(value as "code" | "text")}
          >
            <TabsList className="h-auto">
              {contentTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex-1">
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1">
          <CodeOrText
            type={selectedType}
            content={content}
            onChange={setContent}
            gestureSignal={gestureSignal ?? undefined}
            roomId={roomId}
            setContent={setContent}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
