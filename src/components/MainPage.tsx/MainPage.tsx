import React, { useContext, useEffect, useState } from "react";
import { MOVE_TYPE } from "../../constants";
import GlobalContext from "../../contexts/GlobalContext";
import Board from "../Board/Board";
import CongratsModal from "../CongratsModal/CongratsModal";
import GameOverModal from "../GamoverModal/GameOverModal";
import useMainPage from "./hooks/useMainPage";
import * as S from "./styled";

function MainPage() {
  const {
    handleMove,
    score,
    highScore,
    createNewGame,
    gameOver,
    setGameOver,
    congratsOpen,
    setCongratsOpen,
  } = useMainPage();
  return (
    <>
      <S.Body tabIndex={0} onKeyDown={handleMove}>
        <S.Header>
          <S.Title>2048 Deluxe</S.Title>
        </S.Header>
        <S.SubHeader>
          <S.ScoresContainer>
            <S.ScoreBox>
              <S.ScoreLabel>Score</S.ScoreLabel>
              <S.Score>{score}</S.Score>
            </S.ScoreBox>
            <S.ScoreBox>
              <S.ScoreLabel>Best</S.ScoreLabel>
              <S.Score>{highScore}</S.Score>
            </S.ScoreBox>
          </S.ScoresContainer>
          <S.ResetButton onClick={() => createNewGame()}>New game</S.ResetButton>
        </S.SubHeader>
        <Board />
      </S.Body>
      <GameOverModal
        open={gameOver}
        onClose={() => setGameOver(false)}
        newGame={() => {
          createNewGame();
        }}
        score={score}
      />
      <CongratsModal
        open={congratsOpen}
        score={score}
        onClose={() => setCongratsOpen(false)}
        newGame={() => {
          createNewGame();
        }}
      />
    </>
  );
}

export default MainPage;
