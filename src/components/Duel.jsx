import React from "react";

function Duel({rivals, onDuelEnd}) {

  return (
    <div>
        <button onClick={() => onDuelEnd(rivals[0])}>{rivals[0]}</button>
        <button onClick={() => onDuelEnd(rivals[1])}>{rivals[1]}</button>
    </div>
  );
}

export default Duel;
