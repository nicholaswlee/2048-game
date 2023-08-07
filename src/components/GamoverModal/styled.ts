import styled from "@emotion/styled";
import { Button as MuiButton, withStyles } from "@mui/material";

export const ModalWrapper = styled("div")({
  backgroundColor: "#fff",
  padding: "24px 28px",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  borderRadius: "9px",
  border: "1px solid #d9d9d9",
  width: "200px",
});

export const Body = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
`;
const buttonStyles = {
  padding: "8px 12px",
  fontWeight: 900,
  border: 0,
  borderRadius: "10px",
};

export const ScoreContainer = styled.div`
  border-radius: 10px;
  width: 80px;
  height: 80px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #001166;
  margin-bottom: 16px;
`;

export const ScoreTitle = styled.div`
  color: grey;
  font-weight: 900;
  font-size: 16px;
`;

export const Score = styled.div`
  font-weight: 900;
  color: white;
  font-size: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const NewGameButton = styled(MuiButton)({
  ...buttonStyles,
  backgroundColor: "#00ccde",
  color: "white",
  "&:hover": {
    opacity: "50%",
    backgroundColor: "#00ccde",
  },
});

export const CloseButton = styled(MuiButton)({
  ...buttonStyles,
  backgroundColor: "white",
  color: "grey",
  "&:hover": {
    opacity: "50%",
    backgroundColor: "#cdcdcd",
  },
});
