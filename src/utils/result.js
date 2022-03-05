import { wins } from "../constants/board";
import { gameStatus } from "../constants/game";

export const checkPossibleWin = (cells) => {
  for (let index = 0; index < wins.length; index++) {
    const [cell1Index, cell2Index, cell3Index] = wins[index];
    if (
      cells[cell1Index].symbol &&
      cells[cell1Index].symbol === cells[cell2Index].symbol &&
      cells[cell1Index].symbol === cells[cell3Index].symbol
    ) {
      return [
        gameStatus.WIN,
        [cells[cell1Index], cells[cell2Index], cells[cell3Index]],
      ];
    }
  }

  return [gameStatus.PLAYING, []];
};

export const updateScore = (setPlayers) => {
  setPlayers((prev) => {
    const players = { ...prev };
    const playerOne = { ...players.playerOne };
    const playerTwo = { ...players.playerTwo };

    if (playerOne.current) {
      playerOne.score += 1;
    } else {
      playerTwo.score += 1;
    }
  });
};
