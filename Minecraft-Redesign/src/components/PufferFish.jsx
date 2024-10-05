import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import {axe, pickaxe, shovel, sword} from '../assets/index'

const EndScrollSec = () => {


  useGSAP(() => {
    let pufferTl = gsap.timeline()

    pufferTl.fromTo(".feature1", 
      {
        opacity: 0
      }, 
      {
        opacity: 1,
        x: "-35rem",
        y: "-20rem",
        scrollTrigger: {
          trigger: "#endScrollSec",
          // markers: true,
          start: "top 60%",
          end: "top 0%",
          scrub: 2,
        }
      }, "puff")

      pufferTl.fromTo(".feature2", 
        {
          opacity: 0
        }, 
        {
          opacity: 1,
          x: "35rem",
          y: "-20rem",
          scrollTrigger: {
            trigger: "#endScrollSec",
            // markers: true,
            start: "top 60%",
            end: "top 0%",
            scrub: 2,
          }
        }, "puff")

        pufferTl.fromTo(".feature3", 
          {
            opacity: 0
          }, 
          {
            opacity: 1,
            x: "-35rem",
            y: "20rem",
            scrollTrigger: {
              trigger: "#endScrollSec",
              // markers: true,
              start: "top 60%",
              end: "top 0%",
              scrub: 2,
            }
          }, "puff")
          pufferTl.fromTo(".feature4", 
            {
              opacity: 0
            }, 
            {
              opacity: 1,
              x: "35rem",
              y: "20rem",
              scrollTrigger: {
                trigger: "#endScrollSec",
                // markers: true,
                start: "top 60%",
                end: "top 0%",
                scrub: 2,
              }
            }, "puff")



  }, [])

  useGSAP(() => {
    document.querySelector(".feature1").addEventListener("mouseover", () => {
      gsap.fromTo(".feature1 img", 
        {
          rotate: 0
        }, 
        {
          rotate: 30,
          yoyo: true,
          repeat: 1,
        }
      )
    })

    document.querySelector(".feature2").addEventListener("mouseover", () => {
      gsap.fromTo(".feature2 img", 
        {
          rotate: "-180"
        }, 
        {
          rotate: "-220",
          yoyo: true,
          repeat: 1,
        }
      )

    })

    document.querySelector(".feature3").addEventListener("mouseover", () => {
      gsap.fromTo(".feature3 img", 
        {
          x: 0,
          y: 0,
        }, 
        {
          x: 15,
          y: -10,
          // rotate: 30,
          yoyo: true,
          repeat: 1,
        }
      )
    })
    document.querySelector(".feature4").addEventListener("mouseover", () => {
      gsap.fromTo(".feature4 img", 
        {
          x: 0,
          y: 0,
        }, 
        {
          x: -15,
          y: -10,
          // rotate: 30,
          yoyo: true,
          repeat: 1,
        }
      )
    })
  }, [])

  return (
    <section
      id="endScrollSec"
      className="min-h-screen flex justify-center items-center bg-zinc-900 relative z-30 max-[1000px]:hidden"
    >
      <h1 className="font-[anton] text-[#ffffff11] drop-shadow-[10px_10px_10px_black] text-[6vw]">
        MAKE YOUR OWN WORLD
      </h1>

      <div className="feature1 font-[anton] absolute text-white w-[300px]">
        <div className="flex items-center gap-3">
          <h2 className="text-[2.5vw] uppercase">Crafting</h2>
          <div className="py-2 px-6 bg-purple-700 rounded-[20px]">
            <img className="w-[40px]" src={axe} alt="Axe" />
          </div>
        </div>
        <p>Players can craft tools and items, such as containers and weapons</p>
      </div>

      <div className="feature2 font-[anton] absolute text-white w-[300px]">
        <div className="flex items-center gap-3 justify-end">
          <div className="py-2 px-6 bg-purple-700 rounded-[20px]">
            <img className="w-[40px] scale-x-[-1]" src={pickaxe} alt="Pickaxe" />
          </div>
          <h2 className="text-[2.5vw] uppercase">Building</h2>
        </div>
        <p className="text-end">Players can construct structures like cities, castles, and houses</p>
      </div>

      <div className="feature3 font-[anton] absolute text-white w-[300px]">
        <div className="flex items-center gap-3">
          <h2 className="text-[2.5vw] uppercase">Fighting</h2>
          <div className="py-2 px-6 bg-purple-700 rounded-[20px]">
            <img className="w-[40px]" src={sword} alt="Sword" />
          </div>
        </div>
        <p>Players can fight computer-controlled mobs, or enemies.</p>
      </div>

      <div className="feature4 font-[anton] absolute text-white w-[300px]">
        <div className="flex items-center gap-3 justify-end">
          <div className="py-2 px-6 bg-purple-700 rounded-[20px]">
            <img className="w-[40px]" src={shovel} alt="Shovel" />
          </div>
          <h2 className="text-[2.5vw] uppercase">Sharing</h2>
        </div>
        <p className="text-end">Players can share their creations with other players or play in community worlds.</p>
      </div>

      <canvas id="pufferFish" className="absolute"></canvas>
    </section>

  );
};

export default EndScrollSec;
