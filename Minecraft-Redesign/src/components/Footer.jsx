import React from 'react';
import { mojang } from '../assets/index';

const Footer = () => {
  return (
    <footer className="bg-[#bb252d] flex flex-col md:gap-20 gap-10 items-center justify-center relative z-30 md:p-10 p-5">
      <div className="grid md:grid-cols-5 grid-cols-4 md:gap-20 gap-10">
        <div className="flex items-center justify-center w-full md:col-span-1 col-span-5">
          <img
            src="https://www.minecraft.net/content/dam/games/minecraft/logos/Logo_%20Xbox_Game_Studio.png"
            alt="Minecraft Logo"
          />
        </div>
        <div className="md:block hidden"></div>

        <div className="flex flex-col gap-5 md:col-span-1 col-span-2">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-[minecraftSeven] tracking-wider leading-[1] text-white text-2xl">
              GAMES
            </h2>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Dungeons
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Legends
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Education
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-[minecraftSeven] tracking-wider leading-[1] text-white text-2xl">
              COMMUNITY
            </h2>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Dungeons
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Legends
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Education
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:col-span-1 col-span-2">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-[minecraftSeven] tracking-wider leading-[1] text-white text-2xl">
              SHOP
            </h2>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Marketplace
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Minecraft Shop
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-[minecraftSeven] tracking-wider leading-[1] text-white text-2xl">
              SUPPORT
            </h2>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Tips for Beginners
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Discussions & Help
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Feedback
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Site Map
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Download
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Contact us
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-[minecraftSeven] tracking-wider leading-[1] text-white text-2xl">
              ACCOUNT
            </h2>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Profile
            </span>
            <span className="text-md font-[helvetica] hover:underline cursor-pointer text-white/80 leading-[1]">
              Redeem
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:col-span-1 col-span-5">
          <img
            src="https://www.minecraft.net/content/dam/games/minecraft/logos/esrb_2021.svg"
            alt="ESRB Logo"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <img
          src="https://ik.imagekit.io/talib/minecraft%20assets%20/gallery/full%20mogang.svg?updatedAt=1719747041882"
          className="md:block hidden w-full h-full"
          alt="Mojang Logo Full"
        />
        <img
          src={mojang}
          className="md:hidden block w-full h-full"
          alt="Mojang Logo"
        />
        <span className="text-white text-md font-[helvetica]">
          © 2024 Mojang AB. TM Microsoft Corporation.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
