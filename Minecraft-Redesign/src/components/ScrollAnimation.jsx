import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './ScrollAnimation/scrollAnimation.css'
import {creeper, dragon, endImg, mcAll, mcImg, skeleten, steve} from '../assets/index'
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollWrapper = () => {
  
  useGSAP(() => {
    const sections = gsap.utils.toArray(".scrollSection");
    let scrollXtl = gsap.timeline();

    const page1Animation = () => {
      scrollXtl.fromTo(
        sections,
        {
          scale: 0.8,
          width: "60vw",
          borderRadius: "20px",
          // duration: 2,
        },
        {
          borderRadius: "0",
          scale: 1,
          width: "100vw", 
          scrollTrigger: {
            trigger: ".sec1",
            scroller: "body",
            start: "top 30%",
            end: "top 0%",
            scrub: 2,
          },
        }
      );

      scrollXtl.fromTo(
        ".dragon-img",
        {
          x: 0,
          y: 300,
        },
        {
          x: "55vw",
          y: -150,
          scrollTrigger: {
            trigger: ".dragon-img",
            scroller: "body",
            start: "top 60%",
            end: "top -60%",
            scrub: 2,
          },
        },
        "aa"
      );

      scrollXtl.fromTo(
        ".end-img",
        {
          width: "30vw",
          height: "35vh",
        },
        {
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          borderRadius: "0px",
          scrollTrigger: {
            trigger: ".end-img",
            scroller: "body",
            start: "top 60%",
            end: "top -100%",
            scrub: 2,
          },
        },
        "aa"
      );
    };

    const page2Animation = () => {
      scrollXtl.fromTo(
        ".steve-img",
        {
          y: 500,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: ".steve-img",
            scroller: "body",
            start: "+=800",
            end: "+=1000",
            scrub: 2,
          },
        }
      );
    };

    const page3Animation = () => {
      scrollXtl.fromTo(
        ".mc1",
        {},
        {
          transform: "translateX(37vw)",
          scrollTrigger: {
            trigger: ".mc1",
            scroller: "body",
            start: "+=1800",
            end: "+=2400",
            scrub: 2,
          },
        },
        "mc"
      );

      scrollXtl.fromTo(
        ".mc2",
        {},
        {
          transform: "translateX(-37vw)",
          scrollTrigger: {
            trigger: ".mc2",
            scroller: "body",
            start: "+=1800",
            end: "+=2400",
            scrub: 2,
          },
        },
        "mc"
      );

      scrollXtl.fromTo(
        ".creeper",
        {},
        {
          transform: "translateY(-15vw) translateX(100px)",
          scrollTrigger: {
            trigger: ".creeper",
            scroller: "body",
            start: "+=1800",
            end: "+=2000",
            scrub: 2,
          },
        },
        "mc"
      );

      scrollXtl.fromTo(
        ".skeleten",
        {},
        {
          transform: "translateY(-15vw) translateX(-100px)",
          scrollTrigger: {
            trigger: ".skeleten",
            scroller: "body",
            start: "+=1800",
            end: "+=2000",
            scrub: 2,
          },
        },
        "mc"
      );
    };

    const mainAnimationContainer = () => {
      scrollXtl.fromTo(
        sections,
        {
          scale: 0.8,
          // width: "60vw", 
          // borderRadius: "20px",
          duration: 2,
        },
        {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            width: "100vw",
            // delay: 1,
            trigger: ".containerX",
            scroller: "body",
            pin: true,
            scrub: 1,
            end: "+=3000",
          },
        }
      );
    }; 
    const animateElements = () => {
      page1Animation();
      page2Animation();
      page3Animation();
      mainAnimationContainer();
    };
    animateElements();

    gsap.fromTo(
      sections, 
      {
        scale: 1,
           
      }, 
      {
          scale: 0.6,
          // width: "60vw",
          width: "100vw",
          borderRadius: "50px",
          scrollTrigger: {
            // delay: 1,
            trigger: "#editionsMc",
            scroller: "body",
            // pin: true,
            scrub: 2,
            // markers: true,
            start: "top 110%",
            end: "top 30%",
          },
      }
    )
  }, []);

  return (
    <div className="ScrollWrapper max-[900px]:hidden relative z-[33]">
      <div className="page1 w-full"></div>
      <div className="containerX scrollx">
        <section className="scrollSection sec1 pin relative">
          <h1 className="background-text">MINECRAFT</h1>
          <img
            className="end-img rounded-[20px] w-[30vw] mx-auto"
            src={endImg}
            alt=""
          />
          <img
            className="dragon-img w-[500px]"
            src={dragon}
            alt=""
          />
        </section>

        <section className="scrollSection sec2 pin relative items-center flex">
          <h1>WORLD</h1>  
          <img
            className="steve-img"
            src={steve}
            alt=""
          />
        </section>

        <section className="scrollSection sec3 pin relative">
          <h1 className="sec3Text">TOGETHER</h1>
          <img
            className="mc mc1"
            src={mcImg}
            alt=""
          />
          <img
            className="minecraftGroup"
            src={mcAll}
            alt=""
          />
          <img
            className="mc mc2"
            src={mcImg}
            alt=""
          />
          <img
            className="creeper"
            src={creeper}
            alt=""
          />
          <img
            className="skeleten"
            src={skeleten}
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default ScrollWrapper;
