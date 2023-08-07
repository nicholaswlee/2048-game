import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import Tile from "../Tile/Tile";
import * as S from "./styled";

function Board() {
  const { board } = useContext(GlobalContext);
  const [tiles, setTiles] = useState<JSX.Element[]>([]);
  console.log(board);
  const mapTiles = () => {
    let tiles = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        tiles.push(
          <Grid item xs={3}>
            <Tile value={board[i][j]} />
          </Grid>
        );
      }
    }

    return tiles;
  };
  useEffect(() => {
    if (board.length !== 0) {
      setTiles(mapTiles());
    }
  }, [board]);

  return (
    <S.BoardContainer>
      <Grid container rowSpacing={2} columnSpacing={1}>
        {tiles}
      </Grid>
    </S.BoardContainer>
  );
}

export default Board;
