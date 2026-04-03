"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AtSign, LogOut, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const UserIcon = () => {
  const { data } = useSession();
  const user = data?.user;

  const [imgError, setImgError] = useState(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const firstLetter = user?.name?.charAt(0).toUpperCase() || "U";

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user?.image && !imgError ? (
          <img
            src={user.image}
            alt={user?.name ?? "User"}
            height={32}
            width={32}
            className="rounded-full object-cover cursor-pointer select-none"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 text-black font-bold flex items-center justify-center cursor-pointer select-none">
            {firstLetter}
          </div>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col p-4 mr-6 mt-2">
        <DropdownMenuLabel className="text-sm font-semibold">
          Your Info
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-xs font-medium gap-2">
          <User className="text-black h-4 w-4" />
          {user?.name}
        </DropdownMenuItem>

        <DropdownMenuItem className="text-[0.65rem] leading-tight font-medium gap-2">
          <AtSign className="text-black h-4 w-4" />
          {user?.email}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-sm font-medium text-red-600 gap-2 hover:text-red-700 cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null;
};
