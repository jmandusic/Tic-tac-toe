import React, { useState, useEffect } from "react";

import MainBoard from "./MainBoard";
import PlayerBoard from "./PlayerBoard";
import ScoreBoard from "./ScoreBoard";

import { initialBoardState } from "../../constants/board";
import { gameStatus } from "../../constants/game";

const Game = ({ players, setPlayers }) => {
  const [cells, setCells] = useState(initialBoardState());
  const [resultStatus, setResultStatus] = useState(gameStatus.PLAYING);

  useEffect(() => {
    const winCells = cells.filter((cell) => cell.win).length;
    if (winCells) {
      setPlayers((prev) => {
        const prevPlayers = { ...prev };
        const playerOne = { ...prevPlayers.playerOne };
        const playerTwo = { ...prevPlayers.playerTwo };

        if (playerOne.current) {
          playerTwo.score += 1;
        } else {
          playerOne.score += 1;
        }

        prevPlayers.playerOne = playerOne;
        prevPlayers.playerTwo = playerTwo;

        return prevPlayers;
      });
      setResultStatus(gameStatus.WIN);
    } else if (cells.filter((cell) => !cell.symbol).length === 0 && !winCells) {
      setResultStatus(gameStatus.DRAW);
    }
  }, [cells, setPlayers]);

  return (
    <section className="game">
      <PlayerBoard players={players} setPlayers={setPlayers} />
      <ScoreBoard
        players={players}
        setPlayers={setPlayers}
        setCells={setCells}
        setResultStatus={setResultStatus}
      />
      <MainBoard
        players={players}
        setPlayers={setPlayers}
        cells={cells}
        setCells={setCells}
        resultStatus={resultStatus}
        setResultStatus={setResultStatus}
      />
    </section>
  );
};

export default Game;
