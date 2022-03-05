import React from "react";

import { initialBoardState } from "../../../constants/board";
import { gameStatus } from "../../../constants/game";

const ScoreBoard = ({
  players: { playerOne, playerTwo },
  setPlayers,
  setCells,
  setResultStatus,
}) => {
  const handleResetScore = () => {
    setPlayers((prev) => {
      const prevPlayers = { ...prev };
      prevPlayers.playerOne.score = 0;
      prevPlayers.playerTwo.score = 0;
      prevPlayers.playerOne.current = false;
      prevPlayers.playerTwo.current = true;
      return prevPlayers;
    });
    setCells(initialBoardState());
    setResultStatus(gameStatus.PLAYING);
  };

  return (
    <section className="scoreboard">
      <p>
        {playerOne.name} ({playerOne.symbol}):
        {playerOne.score}
      </p>
      <p>
        {playerTwo.name} ({playerTwo.symbol}):
        {playerTwo.score}
      </p>
      <button onClick={handleResetScore}>Reset score</button>
    </section>
  );
};

export default ScoreBoard;
