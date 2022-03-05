import React from "react";

const Cell = ({ handleClick, cell: { symbol, win } }) => {
  return (
    <div className={`cell ${win && "winCell"}`} onClick={handleClick}>
      {symbol || "?"}
    </div>
  );
};

export default Cell;
