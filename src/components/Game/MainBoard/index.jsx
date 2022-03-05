import React from "react";

import Cell from "./Cell";
import GameStatus from "./GameStatus";

import { handleResultChange } from "../../../utils/play";

import { initialBoardState } from "../../../constants/board";
import { error } from "../../../constants/error";
import { gameStatus } from "../../../constants/game";

const MainBoard = ({
  players,
  setPlayers,
  cells,
  setCells,
  resultStatus,
  setResultStatus,
}) => {
  const handlePlayerMove = (id) => () => {
    if (resultStatus !== gameStatus.PLAYING) {
      return;
    }

    if (cells[id].symbol) {
      alert(error.alreadySelected);
      return;
    }
    handleResultChange(id, players, setPlayers, setCells);
  };

  const handleNewGame = () => {
    setResultStatus(gameStatus.PLAYING);
    setCells(initialBoardState());
  };

  return (
    <React.Fragment>
      <section className="mainboard">
        {cells.map((cell) => (
          <Cell
            key={cell.id}
            cell={cell}
            handleClick={handlePlayerMove(cell.id)}
          />
        ))}
      </section>
      <button className="button-game" onClick={handleNewGame}>
        New game
      </button>
      <GameStatus result={resultStatus} players={players} />
    </React.Fragment>
  );
};

export default MainBoard;
