"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Share2, Users, Zap } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const generateRoomId = (): string => {
  return uuidv4().slice(0, 8).toUpperCase();
};

const Page = () => {
  const [generatedRoomId] = useState<string>(generateRoomId());

  const handleCreateRoom = () => {
    if (generatedRoomId) {
      redirect(`/share/${generatedRoomId}`);
    }
  };

  const handleCopyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(generatedRoomId);
      toast.success("Room ID copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy room ID");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-8">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit">
            <Share2 className="h-8 w-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Create Room
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Share code and text with everyone around you
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Your Room ID
            </label>
            <div className="relative">
              <Input
                value={generatedRoomId}
                readOnly
                className="pr-12 font-mono text-center text-lg font-semibold bg-gray-50"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyRoomId}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Instant Sync</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Multi-User</p>
            </div>
          </div>

          <Button
            onClick={handleCreateRoom}
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <div className="flex items-center space-x-2">
              <Share2 className="h-5 w-5" />
              <span>Create & Share Room</span>
            </div>
          </Button>

          <div className="text-center text-sm text-gray-500">
            <p>Others can join using your Room ID</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
