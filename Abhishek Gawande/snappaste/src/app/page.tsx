"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { HiShare } from "react-icons/hi";
import { RiUserReceivedLine } from "react-icons/ri";

const Page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          <Button
            onClick={() => redirect("/share")}
            className="cursor-pointer group relative h-80 w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-3xl overflow-hidden"
            variant="ghost"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
              <div className="p-6 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <HiShare className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Share</h2>
            </div>
          </Button>

          <Button
            onClick={() => redirect("/join")}
            className="cursor-pointer group relative h-80 w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-3xl overflow-hidden"
            variant="ghost"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
              <div className="p-6 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <RiUserReceivedLine className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Receive</h2>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
