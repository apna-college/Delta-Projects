import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const squareContainerRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const squaresRef = useRef([]);

  // Set default state on mount
  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      menu.style.pointerEvents = "auto"; // Set default state to 'auto'
    }
  }, []);

  // Handle menu and overlay changes
  useEffect(() => {
    const squareContainer = squareContainerRef.current;
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    const squareSize = 100;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / squareSize);
    const numRows = Math.ceil(screenHeight / squareSize);
    const numSquare = numCols * numRows;

    const createSquare = () => {
      if (squareContainer) {
        squareContainer.style.width = `${numCols * squareSize}px`;
        squareContainer.style.height = `${numRows * squareSize}px`;

        for (let i = 0; i < numSquare; i++) {
          const square = document.createElement("div");
          square.classList.add("square");
          squareContainer.appendChild(square);
          squaresRef.current.push(square);
        }
      }
    };

    const animateSquare = () => {
      gsap.fromTo(
        squaresRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.1,
          duration: 0.0005,
          stagger: { each: 0.002, from: "random" },
        }
      );
      gsap.to(squaresRef.current, {
        opacity: 0,
        delay: 0.5,
        duration: 0.0005,
        stagger: { each: 0.002, from: "random" },
      });
    };

    if (toggleMenu) {
      // menu.style.pointerEvents = "auto";
      createSquare();
      animateSquare();
      gsap.to(overlay, {
        opacity: overlayVisible ? 1 : 0,
        visibility: overlayVisible ? "visible" : "hidden",
        delay: 0.5,
      });
    } else {
      // menu.style.pointerEvents = "none";
      createSquare();
      animateSquare();
      gsap.to(overlay, {
        opacity: 0,
        visibility: "hidden",
        delay: 0.5,
      });
    }

    // Cleanup squares on unmount or when dependencies change
    return () => {
      if (squareContainer) {
        squareContainer.innerHTML = "";
      }
      squaresRef.current = [];
    };
  }, [toggleMenu, overlayVisible]);

  // Toggle menu function
  const handleMenuClick = () => {
    setToggleMenu((prev) => !prev);
    setOverlayVisible((prev) => !prev);
  };

  const animateElements = (targetId) => {
    const elements = ["#a1", "#a2", "#a3", "#a4", "#a5"];
    elements.forEach((el, index) => {
      gsap.to(el, {
        left: index === targetId ? 0 : -80,
        bottom: index === targetId ? 0 : -80,
        duration: index === targetId ? 0.3 : 0,
      });
    });
  };

  useEffect(() => {
    const menuItems = {
      home: 0,
      about: 1,
      games: 2,
      community: 3,
      support: 4,
    };

    const handleMouseEnter = (event) => {
      const targetId = event.target.id;
      if (menuItems.hasOwnProperty(targetId)) {
        animateElements(menuItems[targetId]);
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
    };
  }, []);

  return (
    <>
      <div id="square-container" ref={squareContainerRef}></div>

      <header
        id="header"
        className="flex pointer-events-none flex-row items-center justify-between py-3 md:px-10 px-3 fixed top-0 w-full z-[999]"
      >
        <img
          src="https://ik.imagekit.io/talib/minecraft%20assets%20/logo.svg?updatedAt=1719744461932"
          id="logo"
          width="40"
          height="40"
          className="md:w-[40px] w-[30px] pointer-events-auto drop-shadow-[0px_0px_3px_#51ff95] hover:drop-shadow-[0px_0px_5px_#51ff95] cursor-pointer ease-in-out duration-200 hover:scale-110 active:scale-95"
          alt=""
        />

        <button
          id="menu"
          ref={menuRef}
          className="font-[minecraftSeven] border border-neutral-400 text-neutral-500 pointer-events-auto md:text-xl bg-[#e3e3e3] shadow-[inset_0px_8px_0px_0px_#ffffff,_inset_0px_-8px_0px_0px_#C1C1C1] py-3 md:px-8 px-5 ease-in-out duration-300 hover:scale-110 active:scale-95"
          onClick={handleMenuClick}
        >
          <span className="drop-shadow-[0px_1px_#51ff95]">
            {toggleMenu ? "CLOSE" : "MENU"}
          </span>
        </button>
      </header>

      <div
        className="content-overlay fixed min-h-screen flex text-white items-center justify-center w-full bg-zinc-900 z-[998]"
        ref={overlayRef}
        style={{ opacity: 0 }} // Default opacity
      >
        <div className="grid grid-cols-2 w-full h-full max-[768px]:flex max-[768px]:flex-col">
          <div className="flex md:col-span-1 max-[500px]:mt-[50px] col-span-2 items-center justify-center">
            <nav className="flex items-start justify-center flex-col md:p-10 p-5 relative md:left-0 left-10 max-[500px]:gap-5">
              <div className="relative flex flex-row items-center justify-center gap-5">
                <a
                  href="#"
                  id="home"
                  className="lg:text-[12vh] md:text-[7vh] max-[500px]:text-[12vw] sm:text-[10vh] text-[7vh] font-[minecraftTen] leading-tight hover:drop-shadow-[3px_3px_0px_#51ff95]"
                >
                  Home
                </a>
                <div className="relative flex overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/talib/minecraft%20assets%20/arrow.svg?updatedAt=1719744535046"
                    id="a1"
                    width={50}
                    height={50}
                    className="-rotate-45 -left-20 -bottom-20 relative"
                    alt="Arrow"
                    // style={{ bottom: "-80px", left: "-80px" }}
                  />
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-5 overflow-hidden">
                <a
                  href="#"
                  id="about"
                  className="lg:text-[12vh] md:text-[7vh] max-[500px]:text-[12vw] sm:text-[10vh] text-[7vh] font-[minecraftTen] leading-tight hover:drop-shadow-[3px_3px_0px_#51ff95]"
                >
                  About
                </a>
                <div className="relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/talib/minecraft%20assets%20/arrow.svg?updatedAt=1719744535046"
                    id="a2"
                    width={50}
                    height={50}
                    className="-rotate-45 -left-20 -bottom-20 relative"
                    alt="Arrow"
                    // style={{ bottom: "-80px", left: "-80px" }}
                  />
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-5 overflow-hidden">
                <a
                  href="#"
                  id="games"
                  className="lg:text-[12vh] md:text-[7vh] max-[500px]:text-[12vw] sm:text-[10vh] text-[7vh] font-[minecraftTen] leading-tight hover:drop-shadow-[3px_3px_0px_#51ff95]"
                >
                  Games
                </a>
                <div className="relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/talib/minecraft%20assets%20/arrow.svg?updatedAt=1719744535046"
                    id="a3"
                    width={50}
                    height={50}
                    className="-rotate-45 -left-20 -bottom-20 relative"
                    alt="Arrow"
                    // style={{ bottom: "-80px", left: "-80px" }}
                  />
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-5">
                <a
                  href="#"
                  id="community"
                  className="lg:text-[12vh] md:text-[7vh] max-[500px]:text-[12vw] sm:text-[10vh] text-[7vh] font-[minecraftTen] leading-tight hover:drop-shadow-[3px_3px_0px_#51ff95]"
                >
                  Community
                </a>
                <div className="relative w-[80px] h-[80px] overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/talib/minecraft%20assets%20/arrow.svg?updatedAt=1719744535046"
                    id="a4"
                    width={50}
                    height={50}
                    className="-rotate-45 -left-20 -bottom-20 relative"
                    alt="Arrow"
                    // style={{ bottom: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center gap-5 overflow-hidden">
                <a
                  href="#"
                  id="support"
                  className="lg:text-[12vh] md:text-[7vh] max-[500px]:text-[12vw] sm:text-[10vh] text-[7vh] font-[minecraftTen] leading-tight hover:drop-shadow-[3px_3px_0px_#51ff95]"
                >
                  Support
                </a>
                <div className="relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/talib/minecraft%20assets%20/arrow.svg?updatedAt=1719744535046"
                    id="a5"
                    width={50}
                    height={50}
                    className="-rotate-45 -left-20 -bottom-20 relative"
                    alt="Arrow"
                    // style={{ bottom: "-80px", left: "-80px" }}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-5">
                <a
                  target="_blank"
                  href="https://www.instagram.com/im_sayan22?igsh=cHNlZzkxMHN5dTZp"
                >
                  <img
                    src="https://ik.imagekit.io/talib/minecraft%20assets%20/insta.svg?updatedAt=1719744604062"
                    className="invert hover:drop-shadow-[2px_2px_0px_#51ff95] cursor-pointer"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
                <a href="https://github.com/sayandas24" target="_blank">
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='none'%3e%3crect%20width='512'%20height='512'%20rx='75'%20fill='%23404040'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M256%2032C132.288%2032%2032%20132.288%2032%20256c0%2099.252%2064.344%20183.332%20153.672%20212.992%2011.24%202.064%2015.36-4.876%2015.36-10.84%200-5.368-.204-19.588-.308-38.444-62.532%2013.584-75.732-30.096-75.732-30.096-10.224-25.936-24.952-32.852-24.952-32.852-20.372-13.944%201.544-13.664%201.544-13.664%2022.524%201.588%2034.356%2023.156%2034.356%2023.156%2020.024%2034.304%2052.504%2024.384%2065.336%2018.664%202.04-14.492%207.828-24.392%2014.236-29.996-49.892-5.664-102.296-24.944-102.296-111.028%200-24.528%208.76-44.588%2023.148-60.32-2.32-5.668-10.032-28.516%202.196-59.44%200%200%2018.88-6.04%2061.8%2022.98%2017.928-4.984%2037.172-7.484%2056.296-7.576%2019.112.092%2038.36%202.592%2056.296%207.576%2042.908-29.02%2061.776-22.98%2061.776-22.98%2012.244%2030.924%204.536%2053.772%202.224%2059.44%2014.392%2015.732%2023.128%2035.792%2023.128%2060.32%200%2086.256-52.476%20105.344-102.476%20110.896%208.048%206.936%2015.228%2020.608%2015.228%2041.536%200%2029.988-.276%2054.176-.276%2061.56%200%205.988%204.084%2013.024%2015.44%2010.804C415.668%20439.292%20480%20355.228%20480%20256c0-123.712-100.288-224-224-224Z'%20clip-rule='evenodd'/%3e%3c/svg%3e"
                    className="invert hover:drop-shadow-[2px_2px_0px_#51ff95] cursor-pointer"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
                <img
                  src="https://ik.imagekit.io/talib/minecraft%20assets%20/youtube.svg?updatedAt=1719744598134"
                  className="invert hover:drop-shadow-[2px_2px_0px_#51ff95] cursor-pointer"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>
            </nav>
          </div>


          <div className="w-full min-h-screen relative md:flex max-[768px]:hidden items-start justify-start hide-scrollbar">
            <h1 className="text-[8vh] max-[500px]:text-[4vh] max-[500px]:m-2 font-[minecraftSeven] absolute m-10 text-white z-20 leading-[1] font-bold">
              Everything <br /> Possible
            </h1>
            <div
              id="header-content"
              className="flex items-center justify-center h-full w-full relative"
            >
              <div className="flex items-center justify-center gradient-green-bg w-full h-full relative">
                <canvas id="cherry" className="relative z-10"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
