import React, {useEffect, useRef} from "react";
import { dirtImage } from "../assets/index";
import { dirtSmall } from "../assets/imagesSmall/index";

function Dirt() {
 
  const dirtImgRef = useRef(null); 

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
    if (dirtImgRef.current) {
      applyBlurLoadEffect(dirtImgRef);
    }
  }, []);


  return (
    <section className="min-h-screen overflow-x-hidden bg-zinc-900 text-white relative flex gap-5 flex-col items-center justify-center max-[768px]:pt-[4rem]">
      <div className="relative max-[768px]:pb-[10rem] flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center gap-5 relative z-10">
          <h1 className="font-[minecraftTen] max-[500px]:w-screen max-[500px]:flex max-[500px]:flex-col max-[500px]:items-center max-[400px]:text-[5vh] relative z-10 xl:text-[20vh] lg:text-[18vh] md:text-[12vh] text-[6.5vh] capitalize md:w-[60%] leading-[1] md:text-center text-center">
            <span className="bg-gradient-to-b bg-clip-text from-white">
              The world is
            </span>
            <span className="bg-gradient-to-b bg-clip-text from-white">
              for the
            </span>
            <span className="bg-gradient-to-b bg-clip-text from-white">
              making
            </span>
          </h1>
          <div className="max-[768px]:hidden block absolute z-30">
            <canvas
              id="dirt"
              className="pointer-events-none"
              width="0"
              height="0"
              style={{ width: "500px", height: "500px" }}
            ></canvas>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center relative">
          <div className="md:w-[52%] w-[70%] md:h-[350px] h-[200px] bg-[#26d120] absolute blur-[100px] scale-[1.4] rounded-full"></div>

          <div className="blurImgContainer" ref={dirtImgRef}>
            <div
              className="blur-load"
              style={{ backgroundImage: `url(${dirtSmall})` }}
            >
              <img src={dirtImage} className="relative z-20 scale-[1]" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Dirt;
