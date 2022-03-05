import { gameStatus } from "../constants/game";
import { checkPossibleWin } from "./result";

export const handleResultChange = (id, players, setPlayers, setCells) => {
  setCells((prev) => {
    const prevCells = [...prev];

    if (players.playerOne.current) {
      prevCells[id].symbol = players.playerOne.symbol;
    } else {
      prevCells[id].symbol = players.playerTwo.symbol;
    }

    const [resultStatus, winCells] = checkPossibleWin(prevCells);
    if (resultStatus === gameStatus.WIN) {
      prevCells.forEach((cell) => {
        winCells.forEach((winCell) => {
          if (cell.id === winCell.id) {
            cell.win = true;
          }
        });
      });
    }

    return prevCells;
  });

  setPlayers((prev) => {
    const prevPlayers = { ...prev };
    const playerOne = { ...prevPlayers.playerOne };
    const playerTwo = { ...prevPlayers.playerTwo };

    playerOne.current = !playerOne.current;
    playerTwo.current = !playerTwo.current;

    prevPlayers.playerOne = playerOne;
    prevPlayers.playerTwo = playerTwo;

    return prevPlayers;
  });
};
