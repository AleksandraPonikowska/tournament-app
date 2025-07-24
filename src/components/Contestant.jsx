import React from "react";

function Contestant({ name, image, id, onClick, height }) {
  return (
    <button onClick={() => onClick(id)}>
      {image ? (
        <img
          className="contestant"
          src={image}
          alt={name}
          style={{ height: `${height}px` }}
        />
      ) : (
        <div style={{ height: `${height}px` }}>{name}</div>
      )}
    </button>
  );
}

export default Contestant;
