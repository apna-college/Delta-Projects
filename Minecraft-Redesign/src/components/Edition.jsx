import React from "react";
import './Edition/edition.css' 

function Edition() {
  return (
    <section
      id="editionsMc"
      className="min-h-screen max-[630px]:pb-[10rem] bg-zinc-900 relative md:gap-10 gap-5 z-30 flex flex-col items-center justify-center md:pt-0 pt-10"
    >
      <h1 className="font-[minecraftTen] capitalize text-white md:text-[16vh] text-[6vh] leading-[1] px-5 text-center">
        Discover our games
      </h1>
      <div className="edition-wrapper z-[99999] relative max-[1300px]:w-full">
        <div className="edition-container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card"></label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card"></label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card"></label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card"></label>
        </div>
      </div>
    </section>
  );
}

export default Edition;
