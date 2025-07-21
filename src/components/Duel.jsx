import React from "react";

function Duel({rivals, onDuelEnd}) {

  return (
    <divv class = "duel">
        <button onClick={() => onDuelEnd(rivals[0])}>{rivals[0]}</button>
        <button onClick={() => onDuelEnd(rivals[1])}>{rivals[1]}</button>
    </divv>
  );
}

export default Duel;
