import React, { useRef, useEffect, useState } from "react";
import { introVideo, minecraftName } from "../assets/index";

import bgVideoSmallPic from '../assets/imagesSmall/bgVideoSmall.png';

function BGVideo() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // Track if the video has loaded

  useEffect(() => {
    const applyBlurLoadEffect = (video) => {
      const blurDiv = video.parentElement;

      function loaded() {
        blurDiv.classList.add("loaded");
        setIsLoaded(true); // Mark the video as loaded
      }

      // Add fallback for the event in case it doesn't trigger
      const timeoutId = setTimeout(() => {
        if (!isLoaded) {
          loaded();  
        }
      }, 5000);  

      if (video.readyState >= 3) { 
        loaded();
      } else {
        video.addEventListener("loadeddata", loaded);
      }

      // Cleanup event listener and timeout on unmount
      return () => {
        video.removeEventListener("loadeddata", loaded);
        clearTimeout(timeoutId); // Clear the fallback timeout
      };
    };

    if (videoRef.current) {
      applyBlurLoadEffect(videoRef.current);
    }
  }, [isLoaded]);

  return (
    <section className="md:h-screen h-[100vh] w-full relative bg-zinc-900">
      <div className={`blur-load ${isLoaded ? "loaded" : ""}`} style={{ backgroundImage: `url(${bgVideoSmallPic})` }}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover fixed top-0 left-0"
          loop
          autoPlay
          muted
          src={introVideo}
        ></video>
      </div>

      <img
        loading="lazy"
        className="minecraft-text w-full block absolute bottom-0 z-10 pointer-events-none"
        src={minecraftName}
        alt=""
      />
    </section>
  );
}

export default BGVideo;
