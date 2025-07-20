import React from "react";

function Brackets({contestants, onDuelStart}) {


  return (
    <div>
      <ol>
        {contestants.slice(1).map((el, index) => (
          <li>
          <button onClick={() => onDuelStart(index+1)}>
              {el}
            </button>
          
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Brackets;
