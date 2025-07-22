import React from "react";

function Contestant({name, image, id, onClick}) {
  return (
    <button onClick={() => {
      onClick(id);
    }}>
        {image ? (
        <img className="contestant" src={image} alt={name} />
        ) : (
            <div>{name}</div>
        )}
        
        
    </button>
  );
}

export default Contestant;
