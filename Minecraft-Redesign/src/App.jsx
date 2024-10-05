import "./App.css";
import React from "react";
import { ReactLenis } from "lenis/react";
import {
  Dirt,
  PufferFish,
  Enchant,
  Modes,
  Header,
  Loader,
  BGVideo,
  BlocksComponent,
  PlatformSupport,
  Footer,
  Edition,
  Earth,
  Biome,
  ScrollAnimation,
} from "./components/index";
import './lazyLoadImages.css'
import "./spline";

function App() {
  


  return (
    <ReactLenis root>
      <Loader />
      <div className="cont overflow-x-hidden bg-zinc-900">
        <Header />
        <BlocksComponent />
        <BGVideo />
        <Dirt />
        <Earth />
        <Biome />
        <PlatformSupport />
        <Modes />
        <Enchant />
        <ScrollAnimation />
        <Edition />
        <PufferFish />
        <div className="gap w-full bg-zinc-900 h-[30vh] max-[768px]:hidden relative z-10"></div>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
