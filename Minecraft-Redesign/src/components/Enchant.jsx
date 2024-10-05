import React, { useEffect, useRef } from "react";
import { enchantImg } from "../assets/index";
import "./spiderCursor/spiderCursor.css";
import {enchantSmall} from '../assets/imagesSmall/index'

function Enchant() {
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);

  // Spider Cursor animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    const ctx = canvas.getContext("2d");
    let dots = [];
    const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };

    const initializeDots = () => {
      dots = [];
      for (let index = 0; index < 50; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * 5)],
        });
      }
    };

    const drawDots = () => {
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      // Use clientX and clientY instead of pageX and pageY
      const mouse = {
        x: event.clientX - banner.getBoundingClientRect().left,
        y: event.clientY - banner.getBoundingClientRect().top,
      };

      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const handleResize = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      resizeCanvas();
      initializeDots();
      drawDots();
    };

    resizeCanvas();
    initializeDots();
    drawDots();

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners when component unmounts
    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lazy load image
  const enchantRef = useRef(null);

  useEffect(() => {
    // Helper function to apply blur-loading logic
    const applyBlurLoadEffect = (containerRef) => {
      const blurDivs =
        containerRef?.current?.querySelectorAll(".blur-load img");

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
    if (enchantRef.current) {
      applyBlurLoadEffect(enchantRef);
    }
  }, []);

  return (
    <>
      <section
        id="enchantSection"
        ref={bannerRef}
        className="banner w-full relative bg-zinc-900 z-40 flex flex-col items-center justify-center min-h-screen md:p-10 p-5"
      >
        <div className="flex items-center justify-center relative md:mt-0 mt-20">
          <h1
            id="enchantHeading"
            className="font-[minecraftTen] max-[350px]:text-[6vh] text-white relative z-10 md:-top-40 xl:text-[12vh] lg:text-[12vh] md:text-[8vh] text-[8vh] capitalize md:w-[60%] leading-[1] md:text-center text-left max-[400px]:text-[5vh]"
          >
            <span className="md:whitespace-nowrap">Keep imagining.</span>
            <span className="right">the end isn&apos;t the end</span>
          </h1>
          <div className="md:w-[52%] w-[70%] md:h-[350px] h-[200px] bg-[#9979cf] absolute z-30 md:top-20 top-[120%] blur-[100px] md:opacity-[0.7] rounded-full"></div>
        </div>

        <div className="md:block hidden z-30 h-[800px] w-[600px] pt-[5rem] absolute">
          <canvas
            id="enchant"
            width="660"
            height="792"
            style={{ display: "block", width: "100%", height: "100%" }}
          ></canvas>
        </div>

        <div className="blurImgContainer" ref={enchantRef}>
          <div
            className="blur-load"
            style={{ backgroundImage: `url(${enchantSmall})` }}
          >
            <img
              src={enchantImg}
              className="aspect-square object-cover md:hidden block relative scale-[1] z-30"
              alt=""
            />
          </div>
        </div>

        <canvas id="dotsCanvas" ref={canvasRef}></canvas>
      </section>
    </>
  );
}

export default Enchant;
