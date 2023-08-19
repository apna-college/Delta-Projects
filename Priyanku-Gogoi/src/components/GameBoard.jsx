/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Hit from "./Hit";
import Points from "./Points";
import Timer from "./Timer";
import Bubble from "./Bubble";

const GameBoard = () => {
  const initialTime = 10;
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [bubbles, setBubbles] = useState([]);
  const [points, setPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [target, setTarget] = useState(generateRandomNumber());

  useEffect(() => {
    const newBubbles = [];
    for (let i = 1; i <= 119; i++) {
      const random = Math.floor(Math.random() * 10) + 1;
      newBubbles.push({ id: i, number: random });
    }
    setBubbles(newBubbles);
  }, []);

  const handleBubbleClick = (bubbleNumber) => {
    if (bubbleNumber === target) {
      setPoints((prev) => prev + 1);
      setTarget(generateRandomNumber());
      setRemainingTime(initialTime);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prev) => prev - 1);
      }
    }, 1000);

    if (remainingTime === 0) {
      setGameOver(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  return (
    <div className="w-[80%] mx-auto h-[600px] overflow-hidden bg-white rounded-xl">
      <div className="w-full flex items-center justify-center h-[80px] gap-20 bg-[#418741]">
        <Hit target={target} />
        <Timer remainingTime={remainingTime} />
        <Points points={points} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 p-6">
        {gameOver ? (
          <div className="font-semibold text-center mt-[10%]">
            <h1 className="text-5xl my-3">Game Over</h1>
            <p className="text-4xl my-7 flex items-center gap-3">
              Your Score :
              <span className="font-bold text-green-500 text-5xl">
                {points}
                <span className="text-lg font-normal">points</span>
              </span>
            </p>
          </div>
        ) : (
          bubbles.map((bubble) => (
            <Bubble
              onClick={handleBubbleClick}
              key={bubble.id}
              number={bubble.number}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameBoard;
