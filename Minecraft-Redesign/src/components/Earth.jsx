import React, { useEffect, useRef } from "react";
import { earth } from "../assets/index";
import {earthSmall} from '../assets/imagesSmall/index'

function Earth() {
  // Code for lazy lod image
  const earthRef = useRef(null);  
  useEffect(() => {
    // Helper function to apply blur-loading logic
    const applyBlurLoadEffect = (containerRef) => {
      const blurDivs = containerRef?.current?.querySelectorAll(".blur-load img");

      blurDivs.forEach((img) => {
        const blurDiv = img.parentElement;

        function loaded() {
          blurDiv.classList.add("loaded");
        }

        if (img.complete) {
          loaded();
        } else {
          img.addEventListener("load", loaded);
        }
      });
    };

    // Apply blur load effect to both Home and About containers
    if (earthRef.current) {
      applyBlurLoadEffect(earthRef);
    } 
  }, []);


  useEffect(() => {
    const sdklfjlk = document.getElementById("kljdfslkj");
    const kdfjldkf = 50;
    const sjfdlkjs = window.innerWidth;
    const sdlfkjlksj = window.innerHeight;
    const kdflkjdf = Math.ceil(sjfdlkjs / kdfjldkf);
    const sdfkjsld = Math.ceil(sdlfkjlksj / kdfjldkf);
    const sdlfkjlk = kdflkjdf * sdfkjsld;

    function aslkdjflkj() {
      for (let i = 0; i < sdlfkjlk; i++) {
        const lkjsdflk = document.createElement("div");
        lkjsdflk.classList.add("lksdjflkjsd");
        lkjsdflk.dataset.index = i;
        lkjsdflk.addEventListener("mousemove", sdlkfjslkj);
        sdklfjlk.appendChild(lkjsdflk);
      }
    }

    function sdlkfjslkj() {
      const lkjsdfkl = parseInt(this.dataset.index);
      const lkjsdflkj = [
        lkjsdfkl - 1,
        lkjsdfkl + 1,
        lkjsdfkl - kdflkjdf,
        lkjsdfkl + kdflkjdf,
        lkjsdfkl - kdflkjdf - 1,
        lkjsdfkl - kdflkjdf + 1,
        lkjsdfkl + kdflkjdf - 1,
        lkjsdfkl + kdflkjdf + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < sdlfkjlk &&
          Math.abs((i % kdflkjdf) - (lkjsdfkl % kdflkjdf)) <= 1
      );

      this.classList.add("lkjsdflkjsdf");
      setTimeout(() => {
        this.classList.remove("lkjsdflkjsdf");
      }, 500);

      asdlfkjlkj(lkjsdflkj)
        .slice(0, 1)
        .forEach((sdkjflkj) => {
          const slkdfjlks = sdklfjlk.children[sdkjflkj];
          if (slkdfjlks) {
            slkdfjlks.classList.add("lkjsdflkjsdf");
            setTimeout(() => {
              slkdfjlks.classList.remove("lkjsdflkjsdf");
            }, 500);
          }
        });
    }

    function asdlfkjlkj(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    aslkdjflkj();

    // Clean up function to remove event listeners when the component unmounts
    return () => {
      sdklfjlk.innerHTML = ""; // Clear the added elements
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <section className="md:max-h-screen bg-zinc-900 h-full w-full relative z-[32] overflow-hidden">
      <div className="grid md:grid-cols-2 grid-row-2 gap-5 min-h-screen">
        <div className="relative z-10 flex flex-col items-start justify-between max-[500px]:justify-center gap-5 w-full h-full md:p-10 p-3">
          <div className="w-full justify-center max-[400px]:flex">
            <h1 className="font-[minecraftTen] text-white md:text-[15vh] text-[8vh] max-[400px]:text-[5vh]  leading-[1] ">
              Explore minecraft
            </h1>
          </div>
          <p className="font-[helvetica] md:text-xl text-sm text-justify w-[93%] text-neutral-400">
            Minecraft is a game made up of blocks, creatures, and community.
            Blocks can be used to reshape the world or build fantastical
            creations. Creatures can be battled or befriended, depending on your
            playstyle. Experience epic adventures solo or with friends, there’s
            no wrong way to play.
          </p>
        </div>

        {/* Earth png */}
        <div
          id="hello"
          className="gradient-earth-bg relative z-[32] flex items-center justify-center overflow-hidden w-full h-full"
        >
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute top-0 left-0"></div>
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute top-0 left-0 md:mt-[100px] mt-[60px]"></div>
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute top-0 left-0 md:ml-[150px] ml-[60px]"></div>
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute top-0 right-0"></div>
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute top-0 right-0 mr-[100px]"></div>
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute bottom-0 right-0 mr-[100px]"></div>
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] bg-zinc-900 absolute bottom-0 left-0"></div>

          <div className="fjslkfjslk md:flex hidden">
            <div id="kljdfslkj"></div>
          </div>
          <div className="blurImgContainer w-[500px] max-[500px]:w-[350px] max-[400px]:w-[240px]" ref={earthRef}>
            <div
              className="blur-load"
              style={{ backgroundImage: `url(${earthSmall})` }}
            >
              <img
                loading="lazy"
                src={earth}
                className="w-full block  pointer-events-none"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earth;
