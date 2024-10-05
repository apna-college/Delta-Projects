import React from "react";
import {android, apple, chrome, computer, fire, playStation, xbox, nintendo, blackArrow,} from '../assets/index'

function PlatformSupport() {
  return (
    <section className="min-h-screen bg-zinc-900 relative z-20 w-full flex items-center justify-center flex-col md:p-10 p-2">
      <div className="xl:w-[80%] lg:[70%] h-full relative z-30 md:p-10 flex flex-col items-center justify-center md:gap-10 gap-5 ">
        <div className="flex flex-row items-center justify-center md:gap-5 gap-3 max-[500px]:self-start">
          <h1 className="font-[minecraftTen] md:text-[8vh] self text-white text-[4vh] leading-[1] sm:text-[6vh] ">
            Platform Support
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:w-[70%]">
          <p className="font-[helvetica] text-neutral-200 md:text-lg text-md text-center max-[500px]:text-start">
            Buy Minecraft: Java & Bedrock Edition* and get both versions of the
            game for the price of one. You can easily switch between games using
            the unified launcher and cross-play with any current edition of
            Minecraft, including consoles and mobile.
          </p>
          <p className="font-[helvetica] text-white text-lg md:text-center">
            *Mac and Linux are compatible with Java Edition only.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 grid-rows-3 gap-x-5 w-full border-t-2 border-neutral-400 pt-5">
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={computer}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">
                WINDOWS/MAC/LINUX*
              </span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={nintendo}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">NINTENDO</span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={chrome}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">CHROMEBOOK</span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={xbox}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">XBOX</span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={fire}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">
                AMAZON FIRE/public
              </span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              className="invert-[1]"
              src={apple}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">IOS</span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={playStation}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">PLAYSTATION</span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
          <div className="md:p-5 p-3 flex gap-5 items-center justify-start">
            <img
              loading="lazy"
              src={android}
              width="50"
              height="50"
              alt=""
            />
            <div className="md:flex hidden flex-row gap-2">
              <span className="font-[minecraftSeven] text-white text-xl">ANDROID</span>
              <img
                loading="lazy"
                src={blackArrow}
                width="20"
                height="20"
                className="-rotate-45 invert"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformSupport;
