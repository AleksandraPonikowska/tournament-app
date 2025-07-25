import React from "react";

function Duel({ rivals, onDuelEnd }) {
  return (
    <div className="duel">
      {rivals.map((rival) => (
        <div key={rival.id} className="rival">
          <img src={rival.image} alt={rival.name} className="rival-image" />
          <button className="rival-button" onClick={() => onDuelEnd(rival)}>
            {rival.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Duel;
