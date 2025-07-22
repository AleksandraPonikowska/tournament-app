import React from "react";
import Contestant from "./Contestant";


function Brackets({ contestants, onDuelStart }) {

  let indexedContestants = [...contestants]; 

  let rounds = [];

  while (indexedContestants.length > 1) {
    const half = Math.ceil(indexedContestants.length / 2);
    const firstHalf = indexedContestants.slice(0, half);
    const secondHalf = indexedContestants.slice(half);

    rounds.push(secondHalf);
    indexedContestants = firstHalf;
  }

  let firstHalves = [];
  let secondHalves = [];

  for (let round of rounds) {
    const half = Math.ceil(round.length / 2);
    const firstHalf = round.slice(0, half);
    const secondHalf = round.slice(half);

    firstHalves.push(firstHalf);

    if (secondHalf.length >= 1){
      secondHalves.push(secondHalf);
    }
      
  }

  rounds = firstHalves.concat(secondHalves.reverse());



  return (
    <div className="brackets">
      {rounds.map((round, roundIndex) => (
        <div key={roundIndex} className="round">
          {round.map((el) => (
            

            <Contestant
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image}
              onClick={onDuelStart}
            />
          ))}
        </div>
      ))}
    </div>
  );

}

export default Brackets;
