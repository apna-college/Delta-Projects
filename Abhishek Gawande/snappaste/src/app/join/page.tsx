"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn, Shield, Users, Zap } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinRoom = () => {
    setIsLoading(true);
    redirect(`/join/${roomId}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleJoinRoom();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-8">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Join Room
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Enter a room ID to collaborate with others
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Room ID</label>
            <Input
              value={roomId}
              onChange={(e) => setRoomId(e.target.value.toUpperCase())}
              onKeyPress={handleKeyPress}
              placeholder="Enter room ID (e.g., ABC12)"
              className="text-center font-mono text-lg font-semibold"
              maxLength={8}
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <Zap className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Real-time</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Collaborate</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Shield className="h-5 w-5 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Secure</p>
            </div>
          </div>

          <Button
            onClick={handleJoinRoom}
            disabled={isLoading || !roomId.trim()}
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Joining Room...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <LogIn className="h-5 w-5" />
                <span>Join Room</span>
              </div>
            )}
          </Button>

          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => redirect("/")}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to Home Page
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>Ask the room creator for their Room ID</p>
            <p className="text-xs">Room IDs are case-insensitive</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
