import React from "react";

function Contest({contestants}) {

  return (
    <div>
      <ol>
        {contestants.slice(1).map(el => (
          <li>{el}</li>
        ))}
      </ol>
    </div>
  );
}

export default Contest;
