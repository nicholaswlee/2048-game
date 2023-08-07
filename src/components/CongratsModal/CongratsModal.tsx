import { Modal } from "@mui/material";
import React from "react";
import * as S from "./styled";
import Confetti from "react-confetti";

interface CongratsModalProps {
  open: boolean;
  onClose: () => void;
  newGame: () => void;
  score: number;
}

function CongratsModal({ open, onClose, newGame, score }: CongratsModalProps) {
  return (
    <>
      {open && <Confetti />}
      <Modal
        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", zIndex: 1 }}
        open={open}
        onClose={onClose}>
        <S.ModalWrapper>
          <S.Body>
            <S.Title>Congrats, you won!</S.Title>
            <S.ScoreContainer>
              <S.ScoreTitle>Score</S.ScoreTitle>
              <S.Score>{score}</S.Score>
            </S.ScoreContainer>
            <S.ButtonContainer>
              <S.CloseButton onClick={newGame}>New Game</S.CloseButton>
              <S.NewGameButton onClick={onClose}>Continue</S.NewGameButton>
            </S.ButtonContainer>
          </S.Body>
        </S.ModalWrapper>
      </Modal>
    </>
  );
}

export default CongratsModal;
