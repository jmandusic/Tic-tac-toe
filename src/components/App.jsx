import React, { useState } from "react";

import Form from "./Form";
import Game from "./Game";

import { initialPlayersState } from "../constants/players";
import { component } from "../constants/game";

const getComponent = (players, setPlayers) => ({
  [component.FORM]: <Form players={players} setPlayers={setPlayers} />,
  [component.GAME]: <Game players={players} setPlayers={setPlayers} />,
});

const App = () => {
  const [players, setPlayers] = useState(initialPlayersState);
  return getComponent(players, setPlayers)[
    players.set ? component.GAME : component.FORM
  ];
};

export default App;
