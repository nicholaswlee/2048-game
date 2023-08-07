import { ReactNode, createContext, useEffect, useState } from "react";
import { MOVE_TYPE } from "../constants";
import useBoard from "../hooks/useBoard";

const GlobalContext = createContext<any>({} as any);

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<number[][]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(Number(localStorage.getItem("bestScore") ?? 0));
  const {
    generateSpaces,
    generateNum,
    copyBoard,
    getEmptySpaces,
    toValues,
    checkWin,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    checkGameOver,
  } = useBoard(board);
  const [emptySpaces, setEmptySpaces] = useState(generateSpaces());

  useEffect(() => {
    createEmptyBoard();
    setHighScore(Number(localStorage.getItem("bestScore") ?? 0));
  }, []);

  useEffect(() => {
    setHighScore(Math.max(highScore, score));
    localStorage.setItem("bestScore", String(Math.max(highScore, score)));
  }, [score]);

  const getEmptyCords = (spaces?: Set<string>) => {
    let emptyCords = spaces ?? emptySpaces;
    if (emptyCords.size === 0) {
      return [-1, -1, emptyCords];
    }
    let items = Array.from(emptyCords);
    let coords = items[Math.floor(Math.random() * items.length)];
    let newEmptySpaces = new Set(emptyCords);
    newEmptySpaces.delete(coords);
    if (!spaces) {
      setEmptySpaces(newEmptySpaces);
    }
    return [...toValues(coords), newEmptySpaces];
  };

  const createEmptyBoard = () => {
    let emptyBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    // Create two random tiles
    let newEmptySpaces = generateSpaces();
    let items = Array.from(newEmptySpaces);
    let coords = items[Math.floor(Math.random() * items.length)];
    newEmptySpaces.delete(coords);
    items = Array.from(newEmptySpaces);
    let secondCoords = items[Math.floor(Math.random() * items.length)];
    newEmptySpaces.delete(secondCoords);
    setEmptySpaces(newEmptySpaces);
    // Set up board
    const [first_i, first_j] = toValues(coords);
    emptyBoard[first_i][first_j] = generateNum();
    const [second_i, second_j] = toValues(secondCoords);
    emptyBoard[second_i][second_j] = generateNum();
    setBoard(emptyBoard);
    setScore(0);
  };

  const findAndSetEmptyTiles = (b: number[][]) => {
    setEmptySpaces(getEmptySpaces(b));
  };

  const proceedNextTurn = (b: number[][], additionalScore: number) => {
    let copy = copyBoard(b);
    let spaces = getEmptySpaces(copy);
    const [i, j, newSpaces] = getEmptyCords(spaces);
    if (i !== -1 && j !== -1) {
      copy[i as number][j as number] = generateNum();
    }
    setEmptySpaces(newSpaces as Set<string>);
    setBoard(copy);
    setScore(additionalScore + score);
  };
  // Move based on moveType
  const move = (moveType: MOVE_TYPE) => {
    let res;
    switch (moveType) {
      case MOVE_TYPE.LEFT:
        res = moveLeft();
        break;
      case MOVE_TYPE.UP:
        res = moveUp();
        break;
      case MOVE_TYPE.DOWN:
        res = moveDown();
        break;
      default:
        res = moveRight();
    }
    let boardRes = res[0] as number[][];
    let additionalScore = res[1] as number;
    let isShifted = res[2] as boolean;
    if (isShifted) {
      findAndSetEmptyTiles(boardRes);
      proceedNextTurn(boardRes, additionalScore);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        emptySpaces,
        board,
        setBoard,
        createEmptyBoard,
        move,
        score,
        highScore,
        checkGameOver,
        checkWin,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };
