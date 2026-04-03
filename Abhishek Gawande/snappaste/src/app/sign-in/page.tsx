"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { signIn, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { HiClipboardCopy, HiShare } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <HiClipboardCopy className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                SnapPaste
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-600">
              Sign in to continue sharing your code and text seamlessly
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6">
            <div className="text-center space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg mx-auto w-fit">
                <HiClipboardCopy className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Instant Copy</p>
            </div>
            <div className="text-center space-y-2">
              <div className="p-3 bg-green-50 rounded-lg mx-auto w-fit">
                <HiShare className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Quick Share</p>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <Button
                onClick={() => signIn("google")}
                variant="outline"
                size="lg"
                className="w-full h-12 text-base font-medium border-2 hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
              >
                <FaGoogle className="h-5 w-5 mr-3 text-red-500 group-hover:scale-110 transition-transform" />
                Continue with Google
              </Button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-3">
            <p className="text-sm font-medium text-gray-700">
              Join thousands of developers who trust SnapPaste
            </p>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <BsStars
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                4.9/5 from 2,000+ users
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-gray-900"></div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./login-page.png')",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="max-w-lg">
            <div className="mb-8">
              <BsStars className="h-8 w-8 text-blue-400 mb-4" />
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                &quot;At SnapPaste, we’ve revolutionized the way teams share
                code snippets. It’s like having a universal clipboard —
                seamless, instant, and across all your devices.&quot;
              </blockquote>
            </div>

            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">AG</span>
              </div>
              <div>
                <p className="font-semibold">Abhishek Gawande</p>
                <p className="text-blue-200 text-sm">Software Engineer</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-2xl font-bold text-blue-400">10k+</p>
                <p className="text-sm text-gray-300">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">99.9%</p>
                <p className="text-sm text-gray-300">Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">500ms</p>
                <p className="text-sm text-gray-300">Avg Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-5"></div>
    </div>
  );
};

export default SignInPage;
