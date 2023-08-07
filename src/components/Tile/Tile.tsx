import React from "react";
import * as S from "./styled";

function Tile({ value }: { value: number }) {
  //@ts-ignore
  return <S.Container value={value}>{value === 0 ? "" : value}</S.Container>;
}

export default Tile;
