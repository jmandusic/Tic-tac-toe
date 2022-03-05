import React, { useEffect, useState } from "react";

import { gameStatus } from "../../../constants/game";

const GameStatus = ({ result, players: { playerOne, playerTwo } }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (playerOne.current) {
      setPlayer(playerTwo);
    } else {
      setPlayer(playerOne);
    }
  }, [playerOne, playerTwo]);

  if (result === gameStatus.PLAYING) {
    return null;
  }

  return (
    <React.Fragment>
      {result === gameStatus.WIN && <p>{player.name} won the game !!!</p>}
      {result === gameStatus.DRAW && <p>Draw !!!</p>}
    </React.Fragment>
  );
};

export default GameStatus;
