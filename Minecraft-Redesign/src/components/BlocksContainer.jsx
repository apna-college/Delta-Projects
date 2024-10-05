import React, { useEffect } from 'react';

const BlocksComponent = () => {
  useEffect(() => {
    const blocksContainer = document.getElementById('blocks');
    const blockSize = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    const numBlocks = numCols * numRows;

    function createBlocks() {
      for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.dataset.index = i;
        block.addEventListener('mousemove', highLightRandomNeighbors);
        blocksContainer.appendChild(block);
      }
    }

    function highLightRandomNeighbors() {
      const index = parseInt(this.dataset.index);
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < numBlocks &&
          Math.abs((i % numCols) - (index % numCols)) <= 1
      );
      this.classList.add('highlight');
      setTimeout(() => {
        this.classList.remove('highlight');
      }, 500);
      shuffleArray(neighbors)
        .slice(0, 1)
        .forEach((nIndex) => {
          const neighbor = blocksContainer.children[nIndex];
          if (neighbor) {
            neighbor.classList.add('highlight');
            setTimeout(() => {
              neighbor.classList.remove('highlight');
            }, 500);
          }
        });
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    createBlocks();
  }, []);

  return (
    <div className="block-container md:flex hidden">
      <div id="blocks"></div>
    </div>
  );
};

export default BlocksComponent;
