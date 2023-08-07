import React from "react";

function useBoard(board: number[][]) {
  const generateNum = () => {
    let chance = Math.random();
    if (chance <= 0.75) {
      return 2;
    }
    return 4;
  };

  const toValues = (str: string) => {
    let values = str.split(" ");
    return [Number(values[0]), Number(values[1])];
  };

  const generateSpaces = () => {
    let spaces = new Set<string>();
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        spaces.add(`${i} ${j}`);
      }
    }
    return spaces;
  };
  const checkWin = (b: number[][]) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (b[i][j] === 2048) {
          return true;
        }
      }
    }
    return false;
  };
  const compress = (b: number[][]) => {
    let isShifted = false;
    let boardRes = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    for (let i = 0; i < 4; i++) {
      let pos = 0;
      for (let j = 0; j < 4; j++) {
        if (b[i][j] !== 0) {
          boardRes[i][pos] = b[i][j];
          if (j !== pos) {
            isShifted = true;
          }
          pos += 1;
        }
      }
    }
    return [boardRes, isShifted];
  };

  const getEmptySpaces = (b: number[][]) => {
    let emptySpaces = new Set<string>();
    for (let i = 0; i < 4; i++) {
      let pos = 0;
      for (let j = 0; j < 4; j++) {
        if (b[i][j] === 0) {
          emptySpaces.add(`${i} ${j}`);
        }
      }
    }
    return emptySpaces;
  };

  const copyBoard = (b: number[][]) => {
    let copy = [];
    for (let i = 0; i < 4; i++) {
      copy.push([...b[i]]);
    }
    return copy;
  };

  const reverse = (b: number[][]) => {
    let replace = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        replace[i][j] = b[i][4 - j - 1];
      }
    }
    return replace;
  };

  const transpose = (b: number[][]) => {
    let transposition = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        transposition[j][i] = b[i][j];
      }
    }
    return transposition;
  };

  const moveLeft = (b?: number[][]) => {
    let boardToMove = b ?? copyBoard(board);
    let res = compress(boardToMove);
    let boardRes = res[0] as number[][];
    let isShifted = res[1] as boolean;
    let additionalPoints = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (boardRes[i][j] === boardRes[i][j + 1] && boardRes[i][j] !== 0) {
          boardRes[i][j] += boardRes[i][j + 1];
          additionalPoints += boardRes[i][j];
          boardRes[i][j + 1] = 0;
          isShifted = true;
        }
      }
    }
    res = compress(boardRes);
    return [res[0], additionalPoints, res[1] || isShifted];
  };

  const moveRight = (b?: number[][]) => {
    let boardToMove = reverse(copyBoard(b ?? board));
    let [boardRes, additionalPoints, isShifted] = moveLeft(boardToMove);
    return [reverse(boardRes as number[][]), additionalPoints, isShifted];
  };

  const moveUp = () => {
    let boardToMove = transpose(copyBoard(board));
    let [boardRes, additionalPoints, isShifted] = moveLeft(boardToMove);
    return [transpose(boardRes as number[][]), additionalPoints, isShifted];
  };

  const moveDown = () => {
    let boardToMove = transpose(copyBoard(board));
    let [boardRes, additionalPoints, isShifted] = moveRight(boardToMove);
    return [transpose(boardRes as number[][]), additionalPoints, isShifted];
  };

  const checkGameOver = () => {
    let resLeft = moveLeft();
    let resRight = moveRight();
    let resUp = moveUp();
    let resDown = moveDown();
    return !resLeft[2] && !resRight[2] && !resUp[2] && !resDown[2];
  };

  return {
    generateSpaces,
    generateNum,
    compress,
    copyBoard,
    getEmptySpaces,
    reverse,
    transpose,
    checkWin,
    toValues,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    checkGameOver,
  };
}

export default useBoard;
