import React from "react";

const PlayerBoard = ({ players }) => {
  return (
    <section>
      {players.playerOne.current && (
        <p>Current player: {players.playerOne.name}</p>
      )}
      {players.playerTwo.current && (
        <p>Current player: {players.playerTwo.name}</p>
      )}
    </section>
  );
};

export default PlayerBoard;
