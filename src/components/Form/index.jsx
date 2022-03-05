import React from "react";

import { error } from "../../constants/error";

const Form = ({ players, setPlayers }) => {
  const playerHandler = (event) => {
    setPlayers((prev) => {
      const prevPlayers = { ...prev };
      prevPlayers[event.target.name].name = event.target.value;
      return prevPlayers;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!players.playerOne.name || !players.playerTwo.name) {
      alert(error.emptyField);
      return;
    }

    if (players.playerOne.name === players.playerTwo.name) {
      alert(error.sameName);
      return;
    }
    setPlayers((prev) => ({ ...prev, set: true }));
  };

  return (
    <section className="section">
      <h1 className="title">Tic-tac-toe</h1>

      <form onSubmit={handleSubmit} className="form">
        <label className="label">Enter Player One name:</label>
        <input
          className="input"
          placeholder="Player One..."
          name="playerOne"
          value={players.playerOne.name}
          onChange={playerHandler}
        />

        <label className="label">Enter Player Two name:</label>
        <input
          className="input"
          placeholder="Player Two..."
          name="playerTwo"
          value={players.playerTwo.name}
          onChange={playerHandler}
        />

        <button className="button" type="submit">
          Start
        </button>
      </form>
    </section>
  );
};

export default Form;
