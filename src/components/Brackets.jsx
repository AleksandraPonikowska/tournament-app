import React from "react";

function Brackets({contestants, onDuelStart}) {


  return (
    <divvv>
        {contestants.slice(1).map((el, index) => (
          <button onClick={() => onDuelStart(index+1)}>
              {el}
            </button>
          
        ))}
    </divvv>
  );
}

export default Brackets;
