import { Modal } from "@mui/material";
import React from "react";
import * as S from "./styled";

interface GameOverModalProps {
  open: boolean;
  onClose: () => void;
  newGame: () => void;
  score: number;
}
function GameOverModal({ open, onClose, newGame, score }: GameOverModalProps) {
  return (
    <Modal
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", zIndex: 1 }}
      open={open}
      onClose={onClose}>
      <S.ModalWrapper>
        <S.Body>
          <S.Title>Game Over!</S.Title>
          <S.ScoreContainer>
            <S.ScoreTitle>Score</S.ScoreTitle>
            <S.Score>{score}</S.Score>
          </S.ScoreContainer>
          <S.ButtonContainer>
            <S.CloseButton onClick={onClose}>Close</S.CloseButton>
            <S.NewGameButton onClick={newGame}>New game</S.NewGameButton>
          </S.ButtonContainer>
        </S.Body>
      </S.ModalWrapper>
    </Modal>
  );
}

export default GameOverModal;
