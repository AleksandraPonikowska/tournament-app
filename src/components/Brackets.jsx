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
    if (secondHalf.length >= 1) {
      secondHalves.push(secondHalf);
    }
  }

  rounds = firstHalves.concat(secondHalves.reverse());

  const totalRounds = rounds.length;

  // Wyliczanie wysokości rund
  const getHeightForRound = (index) => {
    if (totalRounds === 13) {
      if (index === 0 || index === totalRounds - 1) return 25;
      if (index === 1 || index === totalRounds - 2) return 50;
    } else if (totalRounds === 11) {
      if (index === 0 || index === totalRounds - 1) return 50;
    }
    return 100;
  };

  return (
    <div className="brackets">
      {rounds.map((round, roundIndex) => {
        const height = getHeightForRound(roundIndex);
        return (
          <div key={roundIndex} className="round">
            {round.map((el) => (
              <Contestant
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                height={height}
                onClick={onDuelStart}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Brackets;
