import React, { useContext, useEffect, useState } from "react";
import { MOVE_TYPE } from "../../../constants";
import GlobalContext from "../../../contexts/GlobalContext";

function useMainPage() {
  const { createEmptyBoard, move, score, highScore, emptySpaces, checkGameOver, checkWin, board } =
    useContext(GlobalContext);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [congratsOpen, setCongratsOpen] = useState(false);
  // Toggle movement based on what keys have been selected
  const handleMove = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowUp":
        move(MOVE_TYPE.UP);
        break;
      case "ArrowDown":
        move(MOVE_TYPE.DOWN);
        break;
      case "ArrowLeft":
        move(MOVE_TYPE.LEFT);
        break;
      case "ArrowRight":
        move(MOVE_TYPE.RIGHT);
        break;
    }
  };
  // Reset board and score
  const createNewGame = () => {
    setWin(false);
    setGameOver(false);
    setCongratsOpen(false);
    createEmptyBoard();
  };

  useEffect(() => {
    window.addEventListener(
      "keydown",
      function (e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    if (emptySpaces.size == 0) {
      if (checkGameOver()) {
        setGameOver(true);
      }
    }
  }, [emptySpaces]);

  useEffect(() => {
    if (board.length === 4 && checkWin(board)) {
      console.log(checkWin(board), win);
      if (!win) {
        setCongratsOpen(true);
        setWin(true);
      }
    }
  }, [board]);

  return {
    handleMove,
    score,
    highScore,
    createNewGame,
    gameOver,
    setGameOver,
    congratsOpen,
    setCongratsOpen,
  };
}

export default useMainPage;
