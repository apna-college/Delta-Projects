"use client";

import { CodeOrText } from "@/components/code-or-text";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserIcon } from "@/components/user-icon";
import { useHandPose } from "@/hooks/useHandPose";
import { ArrowLeft, Loader2, Users } from "lucide-react";
import { redirect, useParams } from "next/navigation";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isValidRoom, setIsValidRoom] = useState(true);

  const [gestureSignal, setGestureSignal] = useState<"copy" | "paste" | null>(
    null
  );

  useEffect(() => {
    const joinRoom = async () => {
      if (!roomId) return;

      try {
        setIsLoading(true);

        const res = await fetch(`/api/room/${roomId}/content`);
        if (!res.ok) {
          setIsValidRoom(false);
          throw new Error("Room not found");
        }

        const data = await res.json();
        setContent(data[selectedType]);
        toast.success(`Successfully joined room ${roomId.toUpperCase()}!`);
      } catch (err) {
        console.error("Error joining room:", err);
        toast.error("Room not found or invalid room ID");
        setIsValidRoom(false);
        setTimeout(() => {
          redirect("/join");
        }, 2000);
      } finally {
        setIsLoading(false);
      }
    };

    joinRoom();
  }, [roomId]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(`/api/room/${roomId}/content`);
        if (!res.ok) return;

        const data = await res.json();
        setContent(data[selectedType]);
      } catch (err) {
        console.error("Failed to update content on tab switch:", err);
      }
    };

    if (isValidRoom) {
      fetchContent();
    }
  }, [selectedType]);

  const handleLeaveRoom = () => {
    redirect("/");
  };

  useHandPose((gesture) => {
    if (gesture === "open") {
      setGestureSignal("paste");
      setTimeout(() => {
        setGestureSignal(null);
      }, 5000);
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="p-4 bg-blue-50 rounded-full w-fit mx-auto">
            <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Joining Room
            </h2>
            <p className="text-gray-600">
              Connecting to room {roomId?.toUpperCase()}...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isValidRoom) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md">
          <div className="p-4 bg-red-50 rounded-full w-fit mx-auto">
            <Users className="h-8 w-8 text-red-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Room Not Found
            </h2>
            <p className="text-gray-600">
              The room &quot;{roomId}&quot; doesn&apos;t exist or has expired.
            </p>
          </div>
          <Button onClick={() => redirect("/join")} className="mt-4">
            Try Another Room
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="p-4 border-b bg-gradient-to-r from-green-50 to-blue-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Room: {roomId.toUpperCase()}
              </h1>
              <p className="text-sm text-gray-600">
                Connected and ready to collaborate
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLeaveRoom}
              className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Leave Room</span>
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
  );
};

export default Page;
