import styled from "@emotion/styled";
import { Button, withStyles } from "@mui/material";

export const Body = styled.div`
  width: 100%;
  text-align: center;
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Header = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const Title = styled.div`
  font-size: 72px;
  font-weight: 900;
`;

export const ResetButton = styled(Button)({
  backgroundColor: "#00ccde",
  fontWeight: 900,
  fontSize: "24px",
  color: "white",
  padding: "12px 16px",
  ":hover": {
    opacity: "50%",
    backgroundColor: "#00ccde",
  },
});

export const ScoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ScoreBox = styled.div`
  padding: 12px 0px;
  width: 100px;
  background-color: #001166;
  margin-right: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScoreLabel = styled.div`
  font-weight: 900;
  font-size: 16px;
  color: #8899aa;
`;

export const Score = styled.div`
  font-weight: 900;
  font-size: 20px;
  color: white;
`;
